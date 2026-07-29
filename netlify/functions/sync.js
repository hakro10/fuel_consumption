import { neon } from '@neondatabase/serverless';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'fuelpulse_pro_secret_key_change_in_prod';

function getDb() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error('DATABASE_URL environment variable is not configured.');
  }
  return neon(connectionString);
}

function jsonResponse(statusCode, body) {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
    },
    body: JSON.stringify(body)
  };
}

function verifyUser(event) {
  const authHeader = event.headers.authorization || event.headers.Authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }
  try {
    const token = authHeader.split(' ')[1];
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}

export async function handler(event, context) {
  if (event.httpMethod === 'OPTIONS') {
    return jsonResponse(200, { ok: true });
  }

  const decoded = verifyUser(event);
  if (!decoded) {
    return jsonResponse(401, { error: 'Unauthorized user session.' });
  }

  const userId = decoded.userId;

  try {
    const sql = getDb();

    // GET /api/sync - Fetch all cloud data for authenticated user
    if (event.httpMethod === 'GET') {
      const [settings] = await sql`SELECT * FROM user_settings WHERE user_id = ${userId}`;
      const vehicles = await sql`SELECT * FROM vehicles WHERE user_id = ${userId} ORDER BY created_at ASC`;
      const logs = await sql`SELECT * FROM refuel_logs WHERE user_id = ${userId} ORDER BY odometer DESC`;
      const services = await sql`SELECT * FROM services WHERE user_id = ${userId} ORDER BY odometer DESC`;

      return jsonResponse(200, {
        settings: settings ? {
          currency: settings.currency,
          distanceUnit: settings.distance_unit,
          volumeUnit: settings.volume_unit,
          consumptionUnit: settings.consumption_unit,
          theme: settings.theme
        } : null,
        vehicles: vehicles.map(v => ({
          id: v.id,
          name: v.name,
          make: v.make,
          model: v.model,
          year: v.year,
          fuelType: v.fuel_type,
          tankCapacity: Number(v.tank_capacity),
          initialOdometer: Number(v.initial_odometer),
          serviceInterval: Number(v.service_interval)
        })),
        logs: logs.map(l => ({
          id: l.id,
          vehicleId: l.vehicle_id,
          date: l.date,
          odometer: Number(l.odometer),
          fuelVolume: Number(l.fuel_volume),
          pricePerUnit: Number(l.price_per_unit),
          totalCost: Number(l.total_cost),
          station: l.station,
          fuelType: l.fuel_type,
          isFullTank: l.is_full_tank,
          notes: l.notes,
          calculatedL100km: l.calculated_l100km ? Number(l.calculated_l100km) : undefined
        })),
        services: services.map(s => ({
          id: s.id,
          vehicleId: s.vehicle_id,
          date: s.date,
          odometer: Number(s.odometer),
          cost: Number(s.cost),
          serviceType: s.service_type,
          description: s.description,
          workshop: s.workshop
        }))
      });
    }

    // POST /api/sync - Batch upsert or push local data to cloud
    if (event.httpMethod === 'POST') {
      const payload = JSON.parse(event.body || '{}');

      // 1. Sync Settings
      if (payload.settings) {
        const { currency, distanceUnit, volumeUnit, consumptionUnit, theme } = payload.settings;
        await sql`
          INSERT INTO user_settings (user_id, currency, distance_unit, volume_unit, consumption_unit, theme)
          VALUES (${userId}, ${currency}, ${distanceUnit}, ${volumeUnit}, ${consumptionUnit}, ${theme})
          ON CONFLICT (user_id) DO UPDATE SET
            currency = EXCLUDED.currency,
            distance_unit = EXCLUDED.distance_unit,
            volume_unit = EXCLUDED.volume_unit,
            consumption_unit = EXCLUDED.consumption_unit,
            theme = EXCLUDED.theme,
            updated_at = CURRENT_TIMESTAMP
        `;
      }

      // 2. Sync Vehicles
      if (Array.isArray(payload.vehicles)) {
        for (const v of payload.vehicles) {
          await sql`
            INSERT INTO vehicles (id, user_id, name, make, model, year, fuel_type, tank_capacity, initial_odometer, service_interval)
            VALUES (${v.id}, ${userId}, ${v.name}, ${v.make || ''}, ${v.model || ''}, ${v.year || null}, ${v.fuelType || 'Petrol'}, ${v.tankCapacity || 50}, ${v.initialOdometer || 0}, ${v.serviceInterval || 10000})
            ON CONFLICT (id) DO UPDATE SET
              name = EXCLUDED.name,
              make = EXCLUDED.make,
              model = EXCLUDED.model,
              year = EXCLUDED.year,
              fuel_type = EXCLUDED.fuel_type,
              tank_capacity = EXCLUDED.tank_capacity,
              initial_odometer = EXCLUDED.initial_odometer,
              service_interval = EXCLUDED.service_interval
          `;
        }
      }

      // Handle Deleted Vehicle ID
      if (payload.deletedVehicleId) {
        await sql`DELETE FROM vehicles WHERE id = ${payload.deletedVehicleId} AND user_id = ${userId}`;
      }

      // 3. Sync Refuel Logs
      if (Array.isArray(payload.logs)) {
        for (const l of payload.logs) {
          await sql`
            INSERT INTO refuel_logs (id, user_id, vehicle_id, date, odometer, fuel_volume, price_per_unit, total_cost, station, fuel_type, is_full_tank, notes, calculated_l100km)
            VALUES (${l.id}, ${userId}, ${l.vehicleId}, ${l.date}, ${l.odometer}, ${l.fuelVolume}, ${l.pricePerUnit}, ${l.totalCost}, ${l.station || ''}, ${l.fuelType || ''}, ${l.isFullTank !== false}, ${l.notes || ''}, ${l.calculatedL100km || null})
            ON CONFLICT (id) DO UPDATE SET
              vehicle_id = EXCLUDED.vehicle_id,
              date = EXCLUDED.date,
              odometer = EXCLUDED.odometer,
              fuel_volume = EXCLUDED.fuel_volume,
              price_per_unit = EXCLUDED.price_per_unit,
              total_cost = EXCLUDED.total_cost,
              station = EXCLUDED.station,
              fuel_type = EXCLUDED.fuel_type,
              is_full_tank = EXCLUDED.is_full_tank,
              notes = EXCLUDED.notes,
              calculated_l100km = EXCLUDED.calculated_l100km
          `;
        }
      }

      // Handle Deleted Log ID
      if (payload.deletedLogId) {
        await sql`DELETE FROM refuel_logs WHERE id = ${payload.deletedLogId} AND user_id = ${userId}`;
      }

      // 4. Sync Services
      if (Array.isArray(payload.services)) {
        for (const s of payload.services) {
          await sql`
            INSERT INTO services (id, user_id, vehicle_id, date, odometer, cost, service_type, description, workshop)
            VALUES (${s.id}, ${userId}, ${s.vehicleId}, ${s.date}, ${s.odometer}, ${s.cost}, ${s.serviceType}, ${s.description || ''}, ${s.workshop || ''})
            ON CONFLICT (id) DO UPDATE SET
              vehicle_id = EXCLUDED.vehicle_id,
              date = EXCLUDED.date,
              odometer = EXCLUDED.odometer,
              cost = EXCLUDED.cost,
              service_type = EXCLUDED.service_type,
              description = EXCLUDED.description,
              workshop = EXCLUDED.workshop
          `;
        }
      }

      // Handle Deleted Service ID
      if (payload.deletedServiceId) {
        await sql`DELETE FROM services WHERE id = ${payload.deletedServiceId} AND user_id = ${userId}`;
      }

      return jsonResponse(200, { success: true, message: 'Data synced successfully.' });
    }

    return jsonResponse(405, { error: 'Method not allowed.' });
  } catch (error) {
    console.error('Sync Error:', error);
    return jsonResponse(500, { error: error.message || 'Internal server error' });
  }
}
