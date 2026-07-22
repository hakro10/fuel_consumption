import { StorageManager } from './storage.js';
import { 
  calculateQuickStats, 
  estimateTripCost, 
  formatCurrency, 
  convertEfficiency,
  UNITS 
} from './calculator.js';
import { 
  renderEfficiencyTrendChart, 
  renderExpenseChart, 
  renderStationChart 
} from './charts.js';

export class UIManager {
  constructor() {
    this.activeTab = 'calculator';
    this.settings = StorageManager.getSettings();
  }

  init() {
    this.applyTheme(this.settings.theme);
    this.updateUnitLabels();
    this.populateVehicleDropdown();
    this.bindTabEvents();
    this.bindCalculatorEvents();
    this.bindRefuelModalEvents();
    this.bindVehicleModalEvents();
    this.bindPlannerEvents();
    this.bindSettingsEvents();
    this.bindThemeToggle();

    // Initial renders
    this.renderCalculator();
    this.renderLogsTable();
    this.renderPlanner();
    this.renderVehiclesGarage();
  }

  // Toast Notification
  showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  // Theme Management
  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    this.settings.theme = theme;
    StorageManager.saveSettings(this.settings);
  }

  bindThemeToggle() {
    const btn = document.getElementById('btnThemeToggle');
    if (btn) {
      btn.addEventListener('click', () => {
        const nextTheme = this.settings.theme === 'dark' ? 'light' : 'dark';
        this.applyTheme(nextTheme);
      });
    }
  }

  // Unit Labels update across the DOM
  updateUnitLabels() {
    document.querySelectorAll('.unit-dist-label').forEach(el => {
      el.textContent = this.settings.distanceUnit;
    });
    document.querySelectorAll('.unit-vol-label').forEach(el => {
      el.textContent = this.settings.volumeUnit;
    });
    document.querySelectorAll('.currency-label').forEach(el => {
      el.textContent = this.settings.currency;
    });
  }

  // Vehicle Selector
  populateVehicleDropdown() {
    const select = document.getElementById('activeVehicleSelect');
    if (!select) return;

    const vehicles = StorageManager.getVehicles();
    const activeId = StorageManager.getActiveVehicleId();

    if (vehicles.length === 0) {
      select.innerHTML = '<option value="" disabled selected>No Vehicles</option>';
      select.disabled = true;
    } else {
      select.disabled = false;
      select.innerHTML = vehicles.map(v => `
        <option value="${v.id}" ${v.id === activeId ? 'selected' : ''}>
          🚗 ${v.name} (${v.fuelType})
        </option>
      `).join('');
    }

    select.onchange = (e) => {
      StorageManager.setActiveVehicleId(e.target.value);
      this.refreshActiveView();
      this.showToast(`Switched active vehicle to ${select.options[select.selectedIndex].text}`);
    };
  }

  // Tabs Navigation
  bindTabEvents() {
    document.querySelectorAll('.nav-tab').forEach(tabBtn => {
      tabBtn.addEventListener('click', () => {
        const tabId = tabBtn.getAttribute('data-tab');
        this.switchTab(tabId);
      });
    });

    document.getElementById('btnQuickAddRefuel')?.addEventListener('click', () => {
      this.openRefuelModal();
    });

    document.getElementById('btnAddLogTab')?.addEventListener('click', () => {
      this.openRefuelModal();
    });

    document.getElementById('btnEmptyAddLog')?.addEventListener('click', () => {
      this.openRefuelModal();
    });

    document.getElementById('btnAddVehicleModal')?.addEventListener('click', () => {
      this.openVehicleModal();
    });
  }

  switchTab(tabId) {
    this.activeTab = tabId;
    document.querySelectorAll('.nav-tab').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId);
    });
    document.querySelectorAll('.tab-view').forEach(view => {
      view.classList.toggle('active', view.id === `tab-${tabId}`);
    });

    this.refreshActiveView();
  }

  refreshActiveView() {
    if (this.activeTab === 'calculator') this.renderCalculator();
    if (this.activeTab === 'logs') this.renderLogsTable();
    if (this.activeTab === 'planner') {
      this.prefillPlanner();
      this.renderPlanner();
    }
    if (this.activeTab === 'analytics') this.renderAnalytics();
    if (this.activeTab === 'vehicles') this.renderVehiclesGarage();
  }

  // Calculator View Logic
  bindCalculatorEvents() {
    const distInput = document.getElementById('calcDistance');
    const distRange = document.getElementById('calcDistanceRange');
    const volInput = document.getElementById('calcVolume');
    const volRange = document.getElementById('calcVolumeRange');
    const priceInput = document.getElementById('calcPrice');

    const updateCalc = () => {
      this.renderCalculator();
    };

    distInput?.addEventListener('input', () => {
      if (distRange) distRange.value = distInput.value;
      updateCalc();
    });
    distRange?.addEventListener('input', () => {
      if (distInput) distInput.value = distRange.value;
      updateCalc();
    });

    volInput?.addEventListener('input', () => {
      if (volRange) volRange.value = volInput.value;
      updateCalc();
    });
    volRange?.addEventListener('input', () => {
      if (volInput) volInput.value = volRange.value;
      updateCalc();
    });

    priceInput?.addEventListener('input', updateCalc);
  }

  renderCalculator() {
    const dist = parseFloat(document.getElementById('calcDistance')?.value) || 0;
    const vol = parseFloat(document.getElementById('calcVolume')?.value) || 0;
    const price = parseFloat(document.getElementById('calcPrice')?.value) || 0;

    const stats = calculateQuickStats({
      distance: dist,
      volume: vol,
      pricePerUnit: price,
      distanceUnit: this.settings.distanceUnit,
      volumeUnit: this.settings.volumeUnit
    });

    // Update DOM
    const elL100 = document.getElementById('resL100km');
    const elKmL = document.getElementById('resKmL');
    const elMpgUs = document.getElementById('resMpgUs');
    const elMpgUk = document.getElementById('resMpgUk');
    const elTotal = document.getElementById('resTotalCost');
    const elCostKm = document.getElementById('resCostPerKm');
    const elCost100 = document.getElementById('resCostFor100');
    const badge = document.getElementById('resEfficiencyRating');

    if (elL100) elL100.textContent = stats.l100km;
    if (elKmL) elKmL.textContent = stats.kmL;
    if (elMpgUs) elMpgUs.textContent = stats.mpgUs;
    if (elMpgUk) elMpgUk.textContent = stats.mpgUk;

    const sym = this.settings.currency;
    if (elTotal) elTotal.textContent = formatCurrency(stats.totalCost, sym);
    if (elCostKm) elCostKm.textContent = `${sym}${stats.costPerDist}`;
    if (elCost100) elCost100.textContent = formatCurrency(stats.costFor100, sym);

    if (badge) {
      if (stats.l100km <= 0) {
        badge.textContent = 'Enter values above';
        badge.style.borderColor = 'var(--border-card)';
        badge.style.color = 'var(--text-muted)';
      } else if (stats.l100km < 6.0) {
        badge.innerHTML = '✨ Excellent Efficiency';
        badge.style.borderColor = 'var(--accent-green-border)';
        badge.style.color = 'var(--accent-green)';
      } else if (stats.l100km <= 8.5) {
        badge.innerHTML = '👍 Good Economy';
        badge.style.borderColor = 'rgba(99, 102, 241, 0.4)';
        badge.style.color = 'var(--accent-primary)';
      } else {
        badge.innerHTML = '⚡ High Fuel Usage';
        badge.style.borderColor = 'rgba(245, 158, 11, 0.4)';
        badge.style.color = 'var(--accent-amber)';
      }
    }
  }

  // Refuel Log Table & Modal
  renderLogsTable() {
    const tbody = document.getElementById('logsTableBody');
    const emptyState = document.getElementById('logsEmptyState');
    if (!tbody) return;

    const activeVehicleId = StorageManager.getActiveVehicleId();
    const logs = StorageManager.getLogs(activeVehicleId);

    const search = document.getElementById('logSearchInput')?.value.toLowerCase() || '';
    const tankFilter = document.getElementById('logFilterTank')?.value || 'all';

    const filtered = logs.filter(l => {
      const matchSearch = (l.station || '').toLowerCase().includes(search) ||
                          (l.fuelType || '').toLowerCase().includes(search) ||
                          (l.notes || '').toLowerCase().includes(search);
      const matchTank = tankFilter === 'all' ? true :
                        tankFilter === 'full' ? l.isFullTank : !l.isFullTank;
      return matchSearch && matchTank;
    });

    if (filtered.length === 0) {
      tbody.innerHTML = '';
      emptyState?.classList.remove('hidden');
      return;
    }

    emptyState?.classList.add('hidden');

    const sym = this.settings.currency;
    const sortedAsc = [...filtered].sort((a, b) => a.odometer - b.odometer);

    const currentVehicle = StorageManager.getVehicles().find(v => v.id === activeVehicleId);
    const sortedDesc = [...filtered].sort((a, b) => b.odometer - a.odometer);

    tbody.innerHTML = sortedDesc.map(l => {
      const idx = sortedAsc.findIndex(item => item.id === l.id);
      const prevOdo = idx > 0 ? sortedAsc[idx - 1].odometer : (currentVehicle ? currentVehicle.initialOdometer : null);
      const deltaKm = (prevOdo !== null && l.odometer > prevOdo) ? (l.odometer - prevOdo) : '-';

      return `
        <tr>
          <td><strong>${l.date}</strong></td>
          <td>${l.odometer.toLocaleString()} ${this.settings.distanceUnit}</td>
          <td>${deltaKm !== '-' ? `+${deltaKm} ${this.settings.distanceUnit}` : '-'}</td>
          <td>${l.fuelVolume} ${this.settings.volumeUnit}</td>
          <td>${sym}${l.pricePerUnit}</td>
          <td><strong style="color: var(--accent-green);">${formatCurrency(l.totalCost, sym)}</strong></td>
          <td>
            ${l.calculatedL100km 
              ? `<span class="badge-tag">${l.calculatedL100km} L/100km</span>` 
              : `<span style="color: var(--text-dark);">-</span>`}
          </td>
          <td>${l.station || '-'}</td>
          <td>
            <div style="display: flex; gap: 6px;">
              <button class="btn-icon small edit-log-btn" data-id="${l.id}" title="Edit"><i data-lucide="pencil"></i></button>
              <button class="btn-icon small delete-log-btn" data-id="${l.id}" title="Delete" style="color: var(--accent-red);"><i data-lucide="trash-2"></i></button>
            </div>
          </td>
        </tr>
      `;
    }).join('');

    // Re-initialize Lucide icons for dynamically added table buttons
    if (window.lucide) window.lucide.createIcons();

    // Event handlers for dynamic table buttons
    tbody.querySelectorAll('.edit-log-btn').forEach(btn => {
      btn.addEventListener('click', () => this.openRefuelModal(btn.getAttribute('data-id')));
    });

    tbody.querySelectorAll('.delete-log-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        if (confirm('Are you sure you want to delete this refueling log entry?')) {
          StorageManager.deleteLog(id);
          this.renderLogsTable();
          this.showToast('Refuel log deleted', 'error');
        }
      });
    });

    // Search and filter listeners
    document.getElementById('logSearchInput')?.removeEventListener('input', this._logSearchHandler);
    this._logSearchHandler = () => this.renderLogsTable();
    document.getElementById('logSearchInput')?.addEventListener('input', this._logSearchHandler);

    document.getElementById('logFilterTank')?.removeEventListener('change', this._logFilterHandler);
    this._logFilterHandler = () => this.renderLogsTable();
    document.getElementById('logFilterTank')?.addEventListener('change', this._logFilterHandler);

    // Export CSV
    document.getElementById('btnExportCSV')?.addEventListener('click', () => this.exportLogsCSV(logs));
  }

  exportLogsCSV(logs) {
    if (!logs || logs.length === 0) {
      this.showToast('No logs to export', 'error');
      return;
    }
    const headers = ['Date', 'Odometer', 'FuelVolume', 'PricePerUnit', 'TotalCost', 'FuelType', 'IsFullTank', 'CalculatedL100km', 'Station', 'Notes'];
    const rows = logs.map(l => [
      l.date, l.odometer, l.fuelVolume, l.pricePerUnit, l.totalCost, l.fuelType, l.isFullTank, l.calculatedL100km || '', `"${l.station || ''}"`, `"${l.notes || ''}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `fuel_logs_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
    this.showToast('CSV export downloaded');
  }

  // Refuel Modal
  openRefuelModal(logId = null) {
    const modal = document.getElementById('modalRefuel');
    const title = document.getElementById('modalRefuelTitle');
    const form = document.getElementById('formRefuel');
    if (!modal || !form) return;

    form.reset();
    document.getElementById('logId').value = '';
    document.getElementById('logDate').value = new Date().toISOString().split('T')[0];

    if (logId) {
      const logs = StorageManager.getLogs();
      const log = logs.find(l => l.id === logId);
      if (log) {
        title.textContent = 'Edit Refuel Entry';
        document.getElementById('logId').value = log.id;
        document.getElementById('logDate').value = log.date;
        document.getElementById('logOdometer').value = log.odometer;
        document.getElementById('logVolume').value = log.fuelVolume;
        document.getElementById('logPrice').value = log.pricePerUnit;
        document.getElementById('logFuelType').value = log.fuelType || 'Gasoline 95';
        document.getElementById('logStation').value = log.station || '';
        document.getElementById('logIsFullTank').checked = log.isFullTank !== false;
        document.getElementById('logNotes').value = log.notes || '';
        document.getElementById('logOdometer').removeAttribute('min');
      }
    } else {
      title.textContent = 'Add Refuel Entry';
      // Pre-fill odometer with highest existing odometer or vehicle initial
      const activeVehicleId = StorageManager.getActiveVehicleId();
      const logs = StorageManager.getLogs(activeVehicleId);
      if (logs.length > 0) {
        const lastOdo = Math.max(...logs.map(l => l.odometer));
        document.getElementById('logOdometer').value = lastOdo;
        document.getElementById('logOdometer').min = lastOdo;
      } else {
        const vehicles = StorageManager.getVehicles();
        const vehicle = vehicles.find(v => v.id === activeVehicleId);
        if (vehicle) {
          document.getElementById('logOdometer').value = vehicle.initialOdometer;
          document.getElementById('logOdometer').min = vehicle.initialOdometer;
        }
      }
    }

    modal.classList.remove('hidden');
  }

  closeRefuelModal() {
    document.getElementById('modalRefuel')?.classList.add('hidden');
  }

  bindRefuelModalEvents() {
    document.getElementById('btnCloseRefuelModal')?.addEventListener('click', () => this.closeRefuelModal());
    document.getElementById('btnCancelRefuelModal')?.addEventListener('click', () => this.closeRefuelModal());

    document.getElementById('formRefuel')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = document.getElementById('logId').value;
      const vehicleId = StorageManager.getActiveVehicleId();
      const volume = parseFloat(document.getElementById('logVolume').value);
      const price = parseFloat(document.getElementById('logPrice').value);

      const logData = {
        vehicleId,
        date: document.getElementById('logDate').value,
        odometer: parseInt(document.getElementById('logOdometer').value, 10),
        fuelVolume: volume,
        pricePerUnit: price,
        totalCost: Number((volume * price).toFixed(2)),
        fuelType: document.getElementById('logFuelType').value,
        station: document.getElementById('logStation').value,
        isFullTank: document.getElementById('logIsFullTank').checked,
        notes: document.getElementById('logNotes').value
      };
      if (id) logData.id = id;

      StorageManager.saveLog(logData);
      this.closeRefuelModal();
      this.renderLogsTable();
      this.showToast(id ? 'Refuel log updated' : 'New refuel log added successfully!');
    });
  }

  prefillPlanner() {
    const consInput = document.getElementById('tripConsumption');
    if (!consInput) return;

    const activeVehicleId = StorageManager.getActiveVehicleId();
    const logs = StorageManager.getLogs(activeVehicleId);
    let autoAvg = 0;

    if (logs.length > 0) {
      const sorted = [...logs].sort((a, b) => a.odometer - b.odometer);
      const vehicles = StorageManager.getVehicles();
      const currentVehicle = vehicles.find(v => v.id === activeVehicleId);
      const startOdo = currentVehicle ? currentVehicle.initialOdometer : sorted[0].odometer;
      const totalDist = Math.max(0, sorted[sorted.length - 1].odometer - startOdo);
      const totalFuel = logs.reduce((sum, l) => sum + l.fuelVolume, 0);
      if (totalDist > 0) {
        autoAvg = Number(((totalFuel / totalDist) * 100).toFixed(2));
      }
    } else {
      const vehicles = StorageManager.getVehicles();
      const currentVehicle = vehicles.find(v => v.id === activeVehicleId);
      if (currentVehicle) autoAvg = currentVehicle.targetConsumption;
    }

    if (autoAvg > 0) {
      consInput.value = autoAvg;
    }
  }

  // Trip Planner Logic
  bindPlannerEvents() {
    const dist = document.getElementById('tripDistance');
    const cons = document.getElementById('tripConsumption');
    const price = document.getElementById('tripPrice');
    const cond = document.getElementById('tripConditions');

    const updatePlanner = () => this.renderPlanner();

    dist?.addEventListener('input', updatePlanner);
    cons?.addEventListener('input', updatePlanner);
    price?.addEventListener('input', updatePlanner);
    cond?.addEventListener('change', updatePlanner);
  }

  renderPlanner() {
    const distance = parseFloat(document.getElementById('tripDistance')?.value) || 0;
    const avgConsumption = parseFloat(document.getElementById('tripConsumption')?.value) || 0;
    const price = parseFloat(document.getElementById('tripPrice')?.value) || 0;
    const multiplier = parseFloat(document.getElementById('tripConditions')?.value) || 1.0;

    const res = estimateTripCost({
      tripDistance: distance,
      avgConsumption,
      fuelPrice: price,
      conditionMultiplier: multiplier,
      distanceUnit: this.settings.distanceUnit,
      volumeUnit: this.settings.volumeUnit
    });

    const elFuel = document.getElementById('tripFuelNeeded');
    const elCost = document.getElementById('tripTotalCost');
    const elRate = document.getElementById('tripEffectiveRate');

    if (elFuel) elFuel.textContent = `${res.fuelNeeded} ${this.settings.volumeUnit}`;
    if (elCost) elCost.textContent = formatCurrency(res.totalCost, this.settings.currency);
    if (elRate) elRate.textContent = `${res.effectiveConsumption} L/100km`;
  }

  // Analytics Dashboard Logic
  renderAnalytics() {
    const activeVehicleId = StorageManager.getActiveVehicleId();
    const logs = StorageManager.getLogs(activeVehicleId);
    const vehicles = StorageManager.getVehicles();
    const currentVehicle = vehicles.find(v => v.id === activeVehicleId) || vehicles[0];

    // Compute KPIs
    let totalDist = 0;
    let totalFuel = 0;
    let totalSpend = 0;

    if (logs.length > 0) {
      const sorted = [...logs].sort((a, b) => a.odometer - b.odometer);
      const startOdo = currentVehicle ? currentVehicle.initialOdometer : sorted[0].odometer;
      totalDist = sorted[sorted.length - 1].odometer - startOdo;
      if (totalDist < 0) totalDist = 0;
      totalFuel = logs.reduce((sum, l) => sum + l.fuelVolume, 0);
      totalSpend = logs.reduce((sum, l) => sum + l.totalCost, 0);
    }

    const avgL100km = totalDist > 0 ? ((totalFuel / totalDist) * 100).toFixed(2) : '0.00';

    const elDist = document.getElementById('kpiTotalDist');
    const elFuel = document.getElementById('kpiTotalFuel');
    const elSpend = document.getElementById('kpiTotalSpend');
    const elAvg = document.getElementById('kpiAvgConsumption');

    if (elDist) elDist.textContent = `${totalDist.toLocaleString()} ${this.settings.distanceUnit}`;
    if (elFuel) elFuel.textContent = `${totalFuel.toFixed(1)} ${this.settings.volumeUnit}`;
    if (elSpend) elSpend.textContent = formatCurrency(totalSpend, this.settings.currency);
    if (elAvg) elAvg.textContent = `${avgL100km} L/100km`;

    // Render Chart.js visualizers
    renderEfficiencyTrendChart('efficiencyTrendChart', logs, currentVehicle.targetConsumption || 5.5);
    renderExpenseChart('monthlyExpenseChart', logs, this.settings.currency);
    renderStationChart('stationShareChart', logs);
  }

  // Vehicles Garage
  renderVehiclesGarage() {
    const grid = document.getElementById('vehiclesGrid');
    if (!grid) return;

    const vehicles = StorageManager.getVehicles();
    const activeId = StorageManager.getActiveVehicleId();

    grid.innerHTML = vehicles.map(v => {
      const isActive = v.id === activeId;
      return `
        <div class="glass-card vehicle-card ${isActive ? 'active-card' : ''}">
          ${isActive ? '<div class="active-pill">Active Vehicle</div>' : ''}
          <div>
            <h3>🚗 ${v.name}</h3>
            <p style="color: var(--text-muted); font-size: 0.85rem;">${v.make} ${v.model} (${v.year})</p>
          </div>

          <div class="vehicle-card-specs">
            <div class="spec-item">
              <span>Fuel Type</span>
              <strong>${v.fuelType}</strong>
            </div>
            <div class="spec-item">
              <span>Tank Size</span>
              <strong>${v.tankCapacity} L</strong>
            </div>
            <div class="spec-item">
              <span>Target L/100km</span>
              <strong>${v.targetConsumption} L</strong>
            </div>
            <div class="spec-item">
              <span>Init Odometer</span>
              <strong>${v.initialOdometer.toLocaleString()} km</strong>
            </div>
          </div>

          <div class="vehicle-card-actions">
            ${!isActive ? `<button class="btn btn-secondary small select-vehicle-btn" data-id="${v.id}">Set Active</button>` : ''}
            <button class="btn btn-secondary small edit-vehicle-btn" data-id="${v.id}">Edit</button>
            ${vehicles.length > 1 ? `<button class="btn btn-danger small delete-vehicle-btn" data-id="${v.id}">Delete</button>` : ''}
          </div>
        </div>
      `;
    }).join('');

    grid.querySelectorAll('.select-vehicle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        StorageManager.setActiveVehicleId(id);
        this.populateVehicleDropdown();
        this.renderVehiclesGarage();
        this.showToast('Active vehicle updated');
      });
    });

    grid.querySelectorAll('.edit-vehicle-btn').forEach(btn => {
      btn.addEventListener('click', () => this.openVehicleModal(btn.getAttribute('data-id')));
    });

    grid.querySelectorAll('.delete-vehicle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        if (confirm('Delete this vehicle and switch active profile?')) {
          StorageManager.deleteVehicle(id);
          this.populateVehicleDropdown();
          this.renderVehiclesGarage();
          this.showToast('Vehicle deleted', 'error');
        }
      });
    });
  }

  // Vehicle Modal
  openVehicleModal(vehicleId = null) {
    const modal = document.getElementById('modalVehicle');
    const title = document.getElementById('modalVehicleTitle');
    const form = document.getElementById('formVehicle');
    if (!modal || !form) return;

    form.reset();
    document.getElementById('vehicleId').value = '';

    if (vehicleId) {
      const vehicles = StorageManager.getVehicles();
      const v = vehicles.find(item => item.id === vehicleId);
      if (v) {
        title.textContent = 'Edit Vehicle Profile';
        document.getElementById('vehicleId').value = v.id;
        document.getElementById('vehName').value = v.name;
        document.getElementById('vehMake').value = v.make;
        document.getElementById('vehModel').value = v.model;
        document.getElementById('vehYear').value = v.year;
        document.getElementById('vehFuelType').value = v.fuelType;
        document.getElementById('vehTank').value = v.tankCapacity;
        document.getElementById('vehTarget').value = v.targetConsumption;
        document.getElementById('vehOdometer').value = v.initialOdometer;
      }
    } else {
      title.textContent = 'Add New Vehicle';
    }

    modal.classList.remove('hidden');
  }

  closeVehicleModal() {
    document.getElementById('modalVehicle')?.classList.add('hidden');
  }

  bindVehicleModalEvents() {
    document.getElementById('btnCloseVehicleModal')?.addEventListener('click', () => this.closeVehicleModal());
    document.getElementById('btnCancelVehicleModal')?.addEventListener('click', () => this.closeVehicleModal());

    document.getElementById('formVehicle')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = document.getElementById('vehicleId').value;

      const vehicleData = {
        name: document.getElementById('vehName').value,
        make: document.getElementById('vehMake').value,
        model: document.getElementById('vehModel').value,
        year: parseInt(document.getElementById('vehYear').value, 10),
        fuelType: document.getElementById('vehFuelType').value,
        tankCapacity: parseFloat(document.getElementById('vehTank').value),
        targetConsumption: parseFloat(document.getElementById('vehTarget').value),
        initialOdometer: parseInt(document.getElementById('vehOdometer').value, 10)
      };
      if (id) vehicleData.id = id;

      StorageManager.saveVehicle(vehicleData);
      this.closeVehicleModal();
      this.populateVehicleDropdown();
      this.renderVehiclesGarage();
      this.showToast(id ? 'Vehicle profile updated' : 'New vehicle created!');
    });
  }

  // Settings & Data Management
  bindSettingsEvents() {
    const curSelect = document.getElementById('setCurrency');
    const distSelect = document.getElementById('setDistanceUnit');
    const volSelect = document.getElementById('setVolumeUnit');

    if (curSelect) curSelect.value = this.settings.currency;
    if (distSelect) distSelect.value = this.settings.distanceUnit;
    if (volSelect) volSelect.value = this.settings.volumeUnit;

    document.getElementById('btnSaveSettings')?.addEventListener('click', () => {
      this.settings.currency = curSelect.value;
      this.settings.distanceUnit = distSelect.value;
      this.settings.volumeUnit = volSelect.value;
      StorageManager.saveSettings(this.settings);
      this.updateUnitLabels();
      this.renderCalculator();
      this.renderLogsTable();
      this.renderPlanner();
      this.showToast('Settings saved successfully!');
    });

    // JSON Export
    document.getElementById('btnExportJSON')?.addEventListener('click', () => {
      const dataStr = StorageManager.exportData();
      const blob = new Blob([dataStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `fuel_pulse_backup_${Date.now()}.json`;
      a.click();
      URL.revokeObjectURL(url);
      this.showToast('Full backup JSON file downloaded');
    });

    // JSON Import
    const importBtn = document.getElementById('btnImportJSONTrigger');
    const importFile = document.getElementById('importJSONFile');

    importBtn?.addEventListener('click', () => importFile.click());
    importFile?.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (evt) => {
        try {
          StorageManager.importData(evt.target.result);
          this.settings = StorageManager.getSettings();
          this.updateUnitLabels();
          this.populateVehicleDropdown();
          this.refreshActiveView();
          this.showToast('Data imported successfully!');
        } catch {
          this.showToast('Failed to parse backup JSON file', 'error');
        }
      };
      reader.readAsText(file);
    });

    // Reset Sample Data
    document.getElementById('btnResetSampleData')?.addEventListener('click', () => {
      if (confirm('Are you sure you want to reset all vehicles and logs to default sample data?')) {
        StorageManager.resetToDefault();
        this.settings = StorageManager.getSettings();
        this.updateUnitLabels();
        this.populateVehicleDropdown();
        this.refreshActiveView();
        this.showToast('Reset to sample data completed', 'error');
      }
    });
  }
}
