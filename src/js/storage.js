/**
 * Storage & Data Persistence Manager with Cloud Sync Integration
 */
import { Api } from './api.js';

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
    if (Api.isAuthenticated()) {
      Api.pushCloudData({ settings }).catch(err => console.warn('Cloud sync error (settings):', err));
    }
  }

  static getVehicles() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.VEHICLES);
      if (!data) return [];
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
    if (Api.isAuthenticated()) {
      Api.pushCloudData({ vehicles }).catch(err => console.warn('Cloud sync error (vehicles):', err));
    }
  }

  static getActiveVehicleId() {
    let id = localStorage.getItem(STORAGE_KEYS.ACTIVE_VEHICLE_ID);
    const vehicles = this.getVehicles();
    
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

  static getLogs(vehicleId = undefined) {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.LOGS);
      let logs = data ? JSON.parse(data) : [];
      logs = logs.filter(l => l.id && String(l.id) !== 'undefined');

      if (vehicleId !== undefined) {
        if (!vehicleId) return [];
        return logs.filter(l => String(l.vehicleId) === String(vehicleId)).sort((a, b) => new Date(b.date) - new Date(a.date));
      }
      return logs.sort((a, b) => new Date(b.date) - new Date(a.date));
    } catch {
      return [];
    }
  }

  static saveLog(logData) {
    const logs = this.getLogs();
    const existingIndex = logData.id ? logs.findIndex(l => String(l.id) === String(logData.id)) : -1;

    let targetLog;
    if (existingIndex >= 0) {
      logs[existingIndex] = { ...logs[existingIndex], ...logData };
      targetLog = logs[existingIndex];
    } else {
      targetLog = {
        id: 'log-' + Date.now(),
        ...logData
      };
      logs.push(targetLog);
    }

    localStorage.setItem(STORAGE_KEYS.LOGS, JSON.stringify(logs));
    this.recalculateVehicleLogs(logData.vehicleId);

    if (Api.isAuthenticated()) {
      Api.pushCloudData({ logs: [targetLog] }).catch(err => console.warn('Cloud sync error (log):', err));
    }
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

    if (Api.isAuthenticated()) {
      Api.pushCloudData({ deletedLogId: id }).catch(err => console.warn('Cloud sync error (delete log):', err));
    }
  }

  static saveVehicle(vehicleData) {
    const vehicles = this.getVehicles();
    const existingIndex = vehicles.findIndex(v => v.id === vehicleData.id);
    let targetVehicle;
    if (existingIndex >= 0) {
      vehicles[existingIndex] = { ...vehicles[existingIndex], ...vehicleData };
      targetVehicle = vehicles[existingIndex];
    } else {
      targetVehicle = {
        id: 'v-' + Date.now(),
        ...vehicleData
      };
      vehicles.push(targetVehicle);
    }
    this.saveVehicles(vehicles);

    if (Api.isAuthenticated()) {
      Api.pushCloudData({ vehicles: [targetVehicle] }).catch(err => console.warn('Cloud sync error (vehicle):', err));
    }
  }

  static deleteVehicle(id) {
    let vehicles = this.getVehicles().filter(v => String(v.id) !== String(id));
    localStorage.setItem(STORAGE_KEYS.VEHICLES, JSON.stringify(vehicles));
    
    const allLogs = this.getLogs();
    const updatedLogs = allLogs.filter(l => String(l.vehicleId) !== String(id));
    localStorage.setItem(STORAGE_KEYS.LOGS, JSON.stringify(updatedLogs));

    const allServices = this.getServices();
    const updatedServices = allServices.filter(s => String(s.vehicleId) !== String(id));
    localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(updatedServices));

    if (vehicles.length > 0) {
      const active = localStorage.getItem(STORAGE_KEYS.ACTIVE_VEHICLE_ID);
      if (active === String(id) || !vehicles.some(v => String(v.id) === active)) {
        this.setActiveVehicleId(vehicles[0].id);
      }
    } else {
      localStorage.removeItem(STORAGE_KEYS.ACTIVE_VEHICLE_ID);
    }

    if (Api.isAuthenticated()) {
      Api.pushCloudData({ deletedVehicleId: id }).catch(err => console.warn('Cloud sync error (delete vehicle):', err));
    }
  }

  static getServices(vehicleId = undefined) {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SERVICES);
      let services = data ? JSON.parse(data) : [];
      services = services.filter(s => s && s.id !== undefined && s.id !== 'undefined');

      if (vehicleId !== undefined) {
        if (!vehicleId) return [];
        return services.filter(s => String(s.vehicleId) === String(vehicleId));
      }
      return services;
    } catch {
      return [];
    }
  }

  static saveService(serviceData) {
    const services = this.getServices();
    const existingIndex = serviceData.id ? services.findIndex(s => String(s.id) === String(serviceData.id)) : -1;
    let targetService;

    if (existingIndex >= 0) {
      services[existingIndex] = { ...services[existingIndex], ...serviceData };
      targetService = services[existingIndex];
    } else {
      targetService = {
        id: 'srv-' + Date.now(),
        ...serviceData
      };
      services.push(targetService);
    }

    localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(services));

    if (Api.isAuthenticated()) {
      Api.pushCloudData({ services: [targetService] }).catch(err => console.warn('Cloud sync error (service):', err));
    }
  }

  static deleteService(id) {
    const services = this.getServices().filter(s => String(s.id) !== String(id));
    localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(services));

    if (Api.isAuthenticated()) {
      Api.pushCloudData({ deletedServiceId: id }).catch(err => console.warn('Cloud sync error (delete service):', err));
    }
  }

  // Cloud Synchronization Methods
  static async syncFromCloud() {
    if (!Api.isAuthenticated()) return false;
    try {
      const cloud = await Api.fetchCloudData();
      if (!cloud) return false;

      if (cloud.vehicles) localStorage.setItem(STORAGE_KEYS.VEHICLES, JSON.stringify(cloud.vehicles));
      if (cloud.logs) localStorage.setItem(STORAGE_KEYS.LOGS, JSON.stringify(cloud.logs));
      if (cloud.services) localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(cloud.services));
      if (cloud.settings) localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify({ ...DEFAULT_SETTINGS, ...cloud.settings }));

      return true;
    } catch (err) {
      console.warn('Sync from cloud failed:', err.message);
      return false;
    }
  }

  static async syncLocalDataToCloud() {
    if (!Api.isAuthenticated()) return false;
    try {
      const vehicles = this.getVehicles();
      const logs = this.getLogs();
      const services = this.getServices();
      const settings = this.getSettings();

      await Api.pushCloudData({ vehicles, logs, services, settings });
      return true;
    } catch (err) {
      console.warn('Sync local data to cloud failed:', err.message);
      return false;
    }
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
      localStorage.setItem(STORAGE_KEYS.VEHICLES, JSON.stringify(data.vehicles));
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
    if (Api.isAuthenticated()) {
      this.syncLocalDataToCloud();
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
  }
}
