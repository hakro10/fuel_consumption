/**
 * Storage & Data Persistence Manager
 */

const STORAGE_KEYS = {
  VEHICLES: 'fuel_counter_vehicles',
  LOGS: 'fuel_counter_logs',
  SERVICES: 'fuel_counter_services',
  SETTINGS: 'fuel_counter_settings',
  ACTIVE_VEHICLE_ID: 'fuel_counter_active_vehicle_id'
};

const DEFAULT_SETTINGS = {
  currency: '$',
  distanceUnit: 'km',
  volumeUnit: 'L',
  consumptionUnit: 'l_100km',
  theme: 'dark'
};

const INITIAL_VEHICLES = [
  {
    id: 'v-1',
    name: 'Passat B8 2.0 TDI',
    make: 'Volkswagen',
    model: 'Passat',
    year: 2019,
    fuelType: 'Diesel',
    tankCapacity: 66,
    targetConsumption: 5.5,
    initialOdometer: 142000
  },
  {
    id: 'v-2',
    name: 'Civic 1.5 Turbo',
    make: 'Honda',
    model: 'Civic',
    year: 2021,
    fuelType: 'Gasoline 95',
    tankCapacity: 47,
    targetConsumption: 6.8,
    initialOdometer: 38500
  }
];

const SAMPLE_LOGS = [
  {
    id: 'log-1',
    vehicleId: 'v-1',
    date: '2026-06-01',
    odometer: 142000,
    fuelVolume: 55.0,
    pricePerUnit: 1.65,
    totalCost: 90.75,
    fuelType: 'Diesel',
    isFullTank: true,
    station: 'Shell Premium',
    notes: 'Initial full tank refuel'
  },
  {
    id: 'log-2',
    vehicleId: 'v-1',
    date: '2026-06-12',
    odometer: 142850,
    fuelVolume: 49.3,
    pricePerUnit: 1.68,
    totalCost: 82.82,
    fuelType: 'Diesel',
    isFullTank: true,
    station: 'BP Express',
    notes: 'Highway trip to Munich',
    calculatedL100km: 5.80
  },
  {
    id: 'log-3',
    vehicleId: 'v-1',
    date: '2026-06-25',
    odometer: 143770,
    fuelVolume: 51.6,
    pricePerUnit: 1.64,
    totalCost: 84.62,
    fuelType: 'Diesel',
    isFullTank: true,
    station: 'Shell Premium',
    notes: 'Mixed city & highway',
    calculatedL100km: 5.61
  },
  {
    id: 'log-4',
    vehicleId: 'v-1',
    date: '2026-07-08',
    odometer: 144710,
    fuelVolume: 50.8,
    pricePerUnit: 1.62,
    totalCost: 82.30,
    fuelType: 'Diesel',
    isFullTank: true,
    station: 'Circle K',
    notes: 'Commute and weekend trip',
    calculatedL100km: 5.40
  },
  {
    id: 'log-5',
    vehicleId: 'v-1',
    date: '2026-07-20',
    odometer: 145630,
    fuelVolume: 52.4,
    pricePerUnit: 1.67,
    totalCost: 87.51,
    fuelType: 'Diesel',
    isFullTank: true,
    station: 'Shell Premium',
    notes: 'Full tank refuel before vacation',
    calculatedL100km: 5.70
  }
];

const SAMPLE_SERVICES = [
  {
    id: 'srv-1',
    vehicleId: 'v-1',
    date: '2026-05-15',
    odometer: 140000,
    type: 'Maintenance',
    title: 'Full Synthetic Oil & Filter Change',
    partsReplaced: 'Castrol Edge 5W-30 (5L), Mann Oil Filter, Air Filter',
    cost: 135.00,
    workshop: 'VW Authorized Dealer',
    notes: 'Replaced cabin air filter as well.'
  },
  {
    id: 'srv-2',
    vehicleId: 'v-1',
    date: '2026-06-20',
    odometer: 143200,
    type: 'Repair',
    title: 'Front Brake Pads & Rotors Replacement',
    partsReplaced: 'Brembo Front Brake Discs & Ceramic Pads',
    cost: 280.00,
    workshop: 'Bosch Auto Service',
    notes: 'Brake fluid flushed and bled.'
  },
  {
    id: 'srv-3',
    vehicleId: 'v-2',
    date: '2026-04-10',
    odometer: 35000,
    type: 'Maintenance',
    title: 'Engine Oil & Inspection Service',
    partsReplaced: 'Honda 0W-20 Full Synthetic, OEM Filter',
    cost: 95.00,
    workshop: 'Honda Main Dealer',
    notes: 'Multi-point safety inspection passed.'
  }
];

export class StorageManager {
  static getSettings() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      return data ? { ...DEFAULT_SETTINGS, ...JSON.parse(data) } : { ...DEFAULT_SETTINGS };
    } catch {
      return { ...DEFAULT_SETTINGS };
    }
  }

  static saveSettings(settings) {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
  }

  static getVehicles() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.VEHICLES);
      if (!data) {
        this.saveVehicles(INITIAL_VEHICLES);
        return INITIAL_VEHICLES;
      }
      return JSON.parse(data);
    } catch {
      return INITIAL_VEHICLES;
    }
  }

  static saveVehicles(vehicles) {
    localStorage.setItem(STORAGE_KEYS.VEHICLES, JSON.stringify(vehicles));
  }

  static getActiveVehicleId() {
    let id = localStorage.getItem(STORAGE_KEYS.ACTIVE_VEHICLE_ID);
    const vehicles = this.getVehicles();
    
    // Sanitize any corrupt undefined IDs
    if (id === 'undefined') id = null;

    if (vehicles.length === 0) return null;

    if (!id || !vehicles.some(v => v.id === id)) {
      id = vehicles[0].id;
      this.setActiveVehicleId(id);
    }
    return id;
  }

  static setActiveVehicleId(id) {
    localStorage.setItem(STORAGE_KEYS.ACTIVE_VEHICLE_ID, id);
  }

  static getLogs(vehicleId = null) {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.LOGS);
      let logs = data ? JSON.parse(data) : (this.seedSampleLogs(), SAMPLE_LOGS);
      
      // Sanitize corrupt logs with undefined IDs
      logs = logs.filter(l => l.id && String(l.id) !== 'undefined');

      if (vehicleId) {
        return logs.filter(l => l.vehicleId === vehicleId).sort((a, b) => new Date(b.date) - new Date(a.date));
      }
      return logs.sort((a, b) => new Date(b.date) - new Date(a.date));
    } catch {
      return SAMPLE_LOGS;
    }
  }

  static seedSampleLogs() {
    localStorage.setItem(STORAGE_KEYS.LOGS, JSON.stringify(SAMPLE_LOGS));
  }

  static saveLog(logData) {
    const logs = this.getLogs();
    const existingIndex = logData.id ? logs.findIndex(l => String(l.id) === String(logData.id)) : -1;

    if (existingIndex >= 0) {
      logs[existingIndex] = { ...logs[existingIndex], ...logData };
    } else {
      logs.push({
        id: 'log-' + Date.now(),
        ...logData
      });
    }

    // Recalculate fuel consumption sequence for this vehicle
    const vehicleLogs = logs
      .filter(l => l.vehicleId === logData.vehicleId)
      .sort((a, b) => a.odometer - b.odometer);

    const vehicles = this.getVehicles();
    const vehicle = vehicles.find(v => v.id === logData.vehicleId);
    const initialOdo = vehicle ? vehicle.initialOdometer : 0;

    for (let i = 0; i < vehicleLogs.length; i++) {
      const curr = vehicleLogs[i];
      const prevOdo = i === 0 ? initialOdo : vehicleLogs[i - 1].odometer;

      if (curr.isFullTank && prevOdo < curr.odometer) {
        const distDelta = curr.odometer - prevOdo;
        curr.calculatedL100km = Number(((curr.fuelVolume / distDelta) * 100).toFixed(2));
      } else {
        delete curr.calculatedL100km;
      }
    }

    localStorage.setItem(STORAGE_KEYS.LOGS, JSON.stringify(logs));
  }

  static deleteLog(id) {
    const logs = this.getLogs().filter(l => l.id !== id);
    localStorage.setItem(STORAGE_KEYS.LOGS, JSON.stringify(logs));
  }

  static saveVehicle(vehicleData) {
    const vehicles = this.getVehicles();
    const existingIndex = vehicles.findIndex(v => v.id === vehicleData.id);
    if (existingIndex >= 0) {
      vehicles[existingIndex] = { ...vehicles[existingIndex], ...vehicleData };
    } else {
      vehicles.push({
        id: 'v-' + Date.now(),
        ...vehicleData
      });
    }
    this.saveVehicles(vehicles);
  }

  static deleteVehicle(id) {
    let vehicles = this.getVehicles().filter(v => String(v.id) !== String(id));
    this.saveVehicles(vehicles);
    
    if (vehicles.length > 0) {
      const active = localStorage.getItem(STORAGE_KEYS.ACTIVE_VEHICLE_ID);
      if (active === String(id) || !vehicles.some(v => String(v.id) === active)) {
        this.setActiveVehicleId(vehicles[0].id);
      }
    } else {
      localStorage.removeItem(STORAGE_KEYS.ACTIVE_VEHICLE_ID);
    }
  }

  static getServices(vehicleId = null) {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SERVICES);
      let services = data ? JSON.parse(data) : (this.seedSampleServices(), SAMPLE_SERVICES);
      services = services.filter(s => s && s.id !== undefined && s.id !== 'undefined');
      if (vehicleId) {
        return services.filter(s => String(s.vehicleId) === String(vehicleId));
      }
      return services;
    } catch {
      return this.seedSampleServices();
    }
  }

  static seedSampleServices() {
    localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(SAMPLE_SERVICES));
    return SAMPLE_SERVICES;
  }

  static saveService(serviceData) {
    const services = this.getServices();
    const existingIndex = serviceData.id ? services.findIndex(s => String(s.id) === String(serviceData.id)) : -1;

    if (existingIndex >= 0) {
      services[existingIndex] = { ...services[existingIndex], ...serviceData };
    } else {
      services.push({
        id: 'srv-' + Date.now(),
        ...serviceData
      });
    }

    localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(services));
  }

  static deleteService(id) {
    const services = this.getServices().filter(s => String(s.id) !== String(id));
    localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(services));
  }

  static exportData() {
    return JSON.stringify({
      version: '1.0',
      timestamp: new Date().toISOString(),
      vehicles: this.getVehicles(),
      logs: this.getLogs(),
      services: this.getServices(),
      settings: this.getSettings()
    }, null, 2);
  }

  static importData(jsonString) {
    const data = JSON.parse(jsonString);
    if (data.vehicles && Array.isArray(data.vehicles)) {
      this.saveVehicles(data.vehicles);
    }
    if (data.logs && Array.isArray(data.logs)) {
      localStorage.setItem(STORAGE_KEYS.LOGS, JSON.stringify(data.logs));
    }
    if (data.services && Array.isArray(data.services)) {
      localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(data.services));
    }
    if (data.settings) {
      this.saveSettings(data.settings);
    }
  }

  static resetToDefault() {
    localStorage.removeItem(STORAGE_KEYS.LOGS);
    localStorage.removeItem(STORAGE_KEYS.SERVICES);
    localStorage.removeItem(STORAGE_KEYS.VEHICLES);
    localStorage.removeItem(STORAGE_KEYS.SETTINGS);
    localStorage.removeItem(STORAGE_KEYS.ACTIVE_VEHICLE_ID);
    this.getVehicles();
    this.seedSampleLogs();
    this.seedSampleServices();
  }
}
