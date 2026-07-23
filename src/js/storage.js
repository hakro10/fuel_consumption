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

const INITIAL_VEHICLES = [];
const SAMPLE_LOGS = [];
const SAMPLE_SERVICES = [];

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
        return [];
      }
      const vehicles = JSON.parse(data);
      let modified = false;
      vehicles.forEach(v => {
        if (!v.serviceInterval) {
          v.serviceInterval = 10000;
          modified = true;
        }
      });
      if (modified) this.saveVehicles(vehicles);
      return vehicles;
    } catch {
      return [];
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
      let logs = data ? JSON.parse(data) : [];
      
      // Sanitize corrupt logs with undefined IDs
      logs = logs.filter(l => l.id && String(l.id) !== 'undefined');

      if (vehicleId) {
        return logs.filter(l => l.vehicleId === vehicleId).sort((a, b) => new Date(b.date) - new Date(a.date));
      }
      return logs.sort((a, b) => new Date(b.date) - new Date(a.date));
    } catch {
      return [];
    }
  }

  static seedSampleLogs() {
    localStorage.setItem(STORAGE_KEYS.LOGS, JSON.stringify([]));
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
    this.recalculateVehicleLogs(logData.vehicleId);
  }

  static recalculateVehicleLogs(vehicleId) {
    const logs = this.getLogs();
    const vehicleLogs = logs
      .filter(l => l.vehicleId === vehicleId)
      .sort((a, b) => a.odometer - b.odometer);

    const vehicles = this.getVehicles();
    const vehicle = vehicles.find(v => v.id === vehicleId);
    let startOdo = vehicle ? Number(vehicle.initialOdometer || 0) : 0;
    let accumulatedVolume = 0;

    for (let i = 0; i < vehicleLogs.length; i++) {
      const curr = vehicleLogs[i];
      accumulatedVolume += Number(curr.fuelVolume || 0);

      if (curr.isFullTank) {
        const distDelta = curr.odometer - startOdo;
        if (distDelta > 0 && accumulatedVolume > 0) {
          curr.calculatedL100km = Number(((accumulatedVolume / distDelta) * 100).toFixed(2));
        } else {
          delete curr.calculatedL100km;
        }
        accumulatedVolume = 0;
        startOdo = curr.odometer;
      } else {
        delete curr.calculatedL100km;
      }
    }

    localStorage.setItem(STORAGE_KEYS.LOGS, JSON.stringify(logs));
  }

  static deleteLog(id) {
    const logs = this.getLogs();
    const targetLog = logs.find(l => l.id === id);
    const updatedLogs = logs.filter(l => l.id !== id);
    localStorage.setItem(STORAGE_KEYS.LOGS, JSON.stringify(updatedLogs));
    if (targetLog && targetLog.vehicleId) {
      this.recalculateVehicleLogs(targetLog.vehicleId);
    }
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
      let services = data ? JSON.parse(data) : [];
      services = services.filter(s => s && s.id !== undefined && s.id !== 'undefined');
      if (vehicleId) {
        return services.filter(s => String(s.vehicleId) === String(vehicleId));
      }
      return services;
    } catch {
      return [];
    }
  }

  static seedSampleServices() {
    localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify([]));
    return [];
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

  static exportCSV(vehicleId = null) {
    const logs = this.getLogs(vehicleId);
    const headers = ['Date', 'Odometer', 'Volume', 'PricePerUnit', 'TotalCost', 'FuelType', 'IsFullTank', 'CalculatedL100km', 'Station', 'Notes'];
    const rows = logs.map(l => [
      l.date || '',
      l.odometer || '',
      l.fuelVolume || '',
      l.pricePerUnit || '',
      l.totalCost || '',
      `"${(l.fuelType || '').replace(/"/g, '""')}"`,
      l.isFullTank ? 'Yes' : 'No',
      l.calculatedL100km || '',
      `"${(l.station || '').replace(/"/g, '""')}"`,
      `"${(l.notes || '').replace(/"/g, '""')}"`
    ]);
    return [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  }

  static resetToDefault() {
    localStorage.removeItem(STORAGE_KEYS.LOGS);
    localStorage.removeItem(STORAGE_KEYS.SERVICES);
    localStorage.removeItem(STORAGE_KEYS.VEHICLES);
    localStorage.removeItem(STORAGE_KEYS.SETTINGS);
    localStorage.removeItem(STORAGE_KEYS.ACTIVE_VEHICLE_ID);
    this.saveVehicles([]);
    this.seedSampleLogs();
    this.seedSampleServices();
  }
}
