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
  renderStationChart,
  renderStationEfficiencyChart,
  renderFuelPriceTrendChart
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
    this.bindServiceFilterEvents();
    this.bindServiceModalEvents();
    this.bindSettingsEvents();
    this.bindAnalyticsFilterEvents();
    this.bindThemeToggle();

    // Initial renders
    this.renderCalculator();
    this.renderLogsTable();
    this.renderServicesTable();
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
    if (this.activeTab === 'service') this.renderServicesTable();
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
    const activeVehicleId = StorageManager.getActiveVehicleId();
    if (!activeVehicleId) {
      this.showToast('Please add a vehicle profile first!', 'error');
      this.openVehicleModal();
      return;
    }

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

  // Service Log Tracker Logic
  bindServiceFilterEvents() {
    const search = document.getElementById('serviceSearchInput');
    const filter = document.getElementById('serviceFilterType');

    const updateTable = () => this.renderServicesTable();

    search?.addEventListener('input', updateTable);
    filter?.addEventListener('change', updateTable);
  }

  renderServicesTable() {
    const tbody = document.getElementById('serviceTableBody');
    const emptyState = document.getElementById('serviceEmptyState');
    if (!tbody) return;

    const activeVehicleId = StorageManager.getActiveVehicleId();
    const services = StorageManager.getServices(activeVehicleId);

    // Compute Service KPIs
    const totalSpend = services.reduce((sum, s) => sum + (Number(s.cost) || 0), 0);
    const serviceCount = services.length;
    const sortedDesc = [...services].sort((a, b) => b.odometer - a.odometer);
    const lastServiceOdo = sortedDesc.length > 0 ? `${sortedDesc[0].odometer.toLocaleString()} ${this.settings.distanceUnit}` : '-';
    const avgCost = serviceCount > 0 ? totalSpend / serviceCount : 0;

    const elSpend = document.getElementById('kpiTotalServiceSpend');
    const elCount = document.getElementById('kpiTotalServiceCount');
    const elLastOdo = document.getElementById('kpiLastServiceOdo');
    const elAvgCost = document.getElementById('kpiAvgServiceCost');

    if (elSpend) elSpend.textContent = formatCurrency(totalSpend, this.settings.currency);
    if (elCount) elCount.textContent = serviceCount;
    if (elLastOdo) elLastOdo.textContent = lastServiceOdo;
    if (elAvgCost) elAvgCost.textContent = formatCurrency(avgCost, this.settings.currency);

    // Filters
    const searchQuery = document.getElementById('serviceSearchInput')?.value.toLowerCase().trim() || '';
    const selectedType = document.getElementById('serviceFilterType')?.value || 'all';

    const filtered = sortedDesc.filter(s => {
      const matchSearch = !searchQuery || 
        (s.title && s.title.toLowerCase().includes(searchQuery)) ||
        (s.partsReplaced && s.partsReplaced.toLowerCase().includes(searchQuery)) ||
        (s.workshop && s.workshop.toLowerCase().includes(searchQuery)) ||
        (s.notes && s.notes.toLowerCase().includes(searchQuery));

      const matchType = selectedType === 'all' || s.type === selectedType;

      return matchSearch && matchType;
    });

    if (filtered.length === 0) {
      tbody.innerHTML = '';
      if (emptyState) emptyState.classList.remove('hidden');
    } else {
      if (emptyState) emptyState.classList.add('hidden');
      tbody.innerHTML = filtered.map(s => {
        const categoryClass = s.type === 'Repair' ? 'badge-danger' : (s.type === 'Maintenance' ? 'badge-primary' : 'badge-tag');
        return `
          <tr>
            <td><strong>${s.date}</strong></td>
            <td>${s.odometer ? s.odometer.toLocaleString() : '-'} ${this.settings.distanceUnit}</td>
            <td><span class="badge-tag ${categoryClass}">${s.type || 'Maintenance'}</span></td>
            <td><strong>${s.title || '-'}</strong></td>
            <td style="font-size: 0.82rem;">${s.partsReplaced || '-'}</td>
            <td><strong>${formatCurrency(s.cost || 0, this.settings.currency)}</strong></td>
            <td>${s.workshop || '-'}</td>
            <td>
              <button class="btn btn-secondary small btn-edit-service" data-id="${s.id}" title="Edit">
                <i data-lucide="edit-2"></i>
              </button>
              <button class="btn btn-danger small btn-delete-service" data-id="${s.id}" title="Delete">
                <i data-lucide="trash-2"></i>
              </button>
            </td>
          </tr>
        `;
      }).join('');
    }

    if (window.lucide) window.lucide.createIcons();
    this.renderServiceReminder();

    // Bind Edit/Delete buttons
    tbody.querySelectorAll('.btn-edit-service').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        const srv = services.find(s => String(s.id) === String(id));
        if (srv) this.openServiceModal(srv);
      });
    });

    tbody.querySelectorAll('.btn-delete-service').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        if (confirm('Are you sure you want to delete this service record?')) {
          StorageManager.deleteService(id);
          this.renderServicesTable();
          this.showToast('Service record deleted');
        }
      });
    });
  }

  // Service Modal Handling
  openServiceModal(service = null) {
    const activeVehicleId = StorageManager.getActiveVehicleId();
    if (!activeVehicleId) {
      this.showToast('Please add a vehicle profile first!', 'error');
      this.openVehicleModal();
      return;
    }

    const modal = document.getElementById('modalService');
    const title = document.getElementById('modalServiceTitle');
    const form = document.getElementById('formService');
    if (!modal || !form) return;

    form.reset();

    const services = StorageManager.getServices(activeVehicleId);
    const logs = StorageManager.getLogs(activeVehicleId);

    if (service) {
      title.textContent = 'Edit Service Record';
      document.getElementById('serviceId').value = service.id;
      document.getElementById('serviceDate').value = service.date;
      document.getElementById('serviceOdometer').value = service.odometer;
      document.getElementById('serviceType').value = service.type || 'Maintenance';
      document.getElementById('serviceTitle').value = service.title || '';
      document.getElementById('serviceParts').value = service.partsReplaced || '';
      document.getElementById('serviceCost').value = service.cost || 0;
      document.getElementById('serviceWorkshop').value = service.workshop || '';
      document.getElementById('serviceNotes').value = service.notes || '';
    } else {
      title.textContent = 'Add Service Record';
      document.getElementById('serviceId').value = '';
      document.getElementById('serviceDate').value = new Date().toISOString().split('T')[0];

      // Pre-fill odometer with highest odometer between logs and services
      let highestOdo = 0;
      if (logs.length > 0) highestOdo = Math.max(...logs.map(l => l.odometer));
      if (services.length > 0) highestOdo = Math.max(highestOdo, ...services.map(s => s.odometer));
      if (highestOdo === 0) {
        const vehicles = StorageManager.getVehicles();
        const vehicle = vehicles.find(v => v.id === activeVehicleId);
        if (vehicle) highestOdo = vehicle.initialOdometer;
      }
      document.getElementById('serviceOdometer').value = highestOdo;
    }

    modal.classList.remove('hidden');
  }

  closeServiceModal() {
    const modal = document.getElementById('modalService');
    if (modal) modal.classList.add('hidden');
  }

  bindServiceModalEvents() {
    const btnTab = document.getElementById('btnAddServiceTab');
    const btnEmpty = document.getElementById('btnEmptyAddService');
    const btnClose = document.getElementById('btnCloseServiceModal');
    const btnCancel = document.getElementById('btnCancelServiceModal');
    const form = document.getElementById('formService');

    btnTab?.addEventListener('click', () => this.openServiceModal());
    btnEmpty?.addEventListener('click', () => this.openServiceModal());
    btnClose?.addEventListener('click', () => this.closeServiceModal());
    btnCancel?.addEventListener('click', () => this.closeServiceModal());

    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const activeVehicleId = StorageManager.getActiveVehicleId();
      if (!activeVehicleId) {
        this.showToast('Please add or select a vehicle first', 'error');
        return;
      }

      const id = document.getElementById('serviceId').value;
      const serviceData = {
        vehicleId: activeVehicleId,
        date: document.getElementById('serviceDate').value,
        odometer: parseInt(document.getElementById('serviceOdometer').value, 10),
        type: document.getElementById('serviceType').value,
        title: document.getElementById('serviceTitle').value,
        partsReplaced: document.getElementById('serviceParts').value,
        cost: parseFloat(document.getElementById('serviceCost').value) || 0,
        workshop: document.getElementById('serviceWorkshop').value,
        notes: document.getElementById('serviceNotes').value
      };
      if (id) serviceData.id = id;

      StorageManager.saveService(serviceData);
      this.closeServiceModal();
      this.renderServicesTable();
      this.showToast(id ? 'Service record updated' : 'New service record added!');
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
  bindAnalyticsFilterEvents() {
    const timeframeSelect = document.getElementById('analyticsTimeframeSelect');
    const monthSelect = document.getElementById('analyticsMonthSelect');
    const yearSelect = document.getElementById('analyticsYearSelect');
    const dateFrom = document.getElementById('analyticsDateFrom');
    const dateTo = document.getElementById('analyticsDateTo');

    if (!timeframeSelect) return;

    timeframeSelect.addEventListener('change', () => {
      const mode = timeframeSelect.value;
      if (monthSelect) monthSelect.classList.toggle('hidden', mode !== 'specific_month');
      if (yearSelect) yearSelect.classList.toggle('hidden', mode !== 'specific_year');
      if (dateFrom) dateFrom.classList.toggle('hidden', mode !== 'custom');
      if (dateTo) dateTo.classList.toggle('hidden', mode !== 'custom');

      this.renderAnalytics();
    });

    [monthSelect, yearSelect, dateFrom, dateTo].forEach(el => {
      if (el) el.addEventListener('change', () => this.renderAnalytics());
    });
  }

  populateAnalyticsFilterDropdowns(logs, services) {
    const monthSelect = document.getElementById('analyticsMonthSelect');
    const yearSelect = document.getElementById('analyticsYearSelect');
    if (!monthSelect || !yearSelect) return;

    // Only populate if not already populated or if list changed
    if (monthSelect.children.length > 0 && monthSelect.dataset.populated === 'true') return;

    const allDates = [...logs, ...services].map(x => x.date).filter(Boolean);
    const monthsSet = new Set();
    const yearsSet = new Set();

    allDates.forEach(dStr => {
      const parts = dStr.split('-');
      if (parts.length >= 2) {
        monthsSet.add(`${parts[0]}-${parts[1]}`);
        yearsSet.add(parts[0]);
      }
    });

    const sortedMonths = Array.from(monthsSet).sort().reverse();
    const sortedYears = Array.from(yearsSet).sort().reverse();

    monthSelect.innerHTML = sortedMonths.map(m => {
      const [y, mNum] = m.split('-');
      const d = new Date(parseInt(y, 10), parseInt(mNum, 10) - 1, 1);
      const label = d.toLocaleString('default', { month: 'long', year: 'numeric' });
      return `<option value="${m}">${label}</option>`;
    }).join('');

    yearSelect.innerHTML = sortedYears.map(y => `<option value="${y}">${y}</option>`).join('');
    monthSelect.dataset.populated = 'true';
  }

  getFilteredAnalyticsData(logs, services) {
    const mode = document.getElementById('analyticsTimeframeSelect')?.value || 'all';
    const monthVal = document.getElementById('analyticsMonthSelect')?.value;
    const yearVal = document.getElementById('analyticsYearSelect')?.value;
    const fromVal = document.getElementById('analyticsDateFrom')?.value;
    const toVal = document.getElementById('analyticsDateTo')?.value;

    const filterItem = (item) => {
      if (!item.date) return false;
      const dStr = item.date;

      if (mode === 'all') return true;

      if (mode === 'this_month') {
        const now = new Date();
        const curMonthStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
        return dStr.startsWith(curMonthStr);
      }

      if (mode === 'this_year') {
        const curYearStr = String(new Date().getFullYear());
        return dStr.startsWith(curYearStr);
      }

      if (mode === 'specific_month') {
        return monthVal ? dStr.startsWith(monthVal) : true;
      }

      if (mode === 'specific_year') {
        return yearVal ? dStr.startsWith(yearVal) : true;
      }

      if (mode === 'custom') {
        if (fromVal && dStr < fromVal) return false;
        if (toVal && dStr > toVal) return false;
        return true;
      }

      return true;
    };

    return {
      filteredLogs: logs.filter(filterItem),
      filteredServices: services.filter(filterItem)
    };
  }

  renderAnalytics() {
    const activeVehicleId = StorageManager.getActiveVehicleId();
    const rawLogs = StorageManager.getLogs(activeVehicleId);
    const rawServices = StorageManager.getServices(activeVehicleId);
    const vehicles = StorageManager.getVehicles();
    const currentVehicle = vehicles.find(v => v.id === activeVehicleId) || vehicles[0];

    this.populateAnalyticsFilterDropdowns(rawLogs, rawServices);
    const { filteredLogs: logs, filteredServices: services } = this.getFilteredAnalyticsData(rawLogs, rawServices);

    // Compute KPIs
    let totalDist = 0;
    let totalFuel = 0;
    let totalSpend = 0;

    if (logs.length > 0) {
      const sorted = [...logs].sort((a, b) => a.odometer - b.odometer);
      const mode = document.getElementById('analyticsTimeframeSelect')?.value || 'all';
      const startOdo = (mode === 'all' && currentVehicle) ? currentVehicle.initialOdometer : sorted[0].odometer;
      totalDist = sorted[sorted.length - 1].odometer - startOdo;
      if (totalDist < 0 || sorted.length === 1) totalDist = 0;
      totalFuel = logs.reduce((sum, l) => sum + (Number(l.fuelVolume) || 0), 0);
      totalSpend = logs.reduce((sum, l) => sum + (Number(l.totalCost) || 0), 0);
    }

    const totalServiceSpend = services.reduce((sum, s) => sum + (Number(s.cost) || 0), 0);
    const totalOwnershipSpend = totalSpend + totalServiceSpend;

    const validCalculated = logs.filter(l => l.calculatedL100km && l.calculatedL100km > 0);
    const avgL100km = totalDist > 0 
      ? ((totalFuel / totalDist) * 100).toFixed(2) 
      : (validCalculated.length > 0
          ? (validCalculated.reduce((s, l) => s + l.calculatedL100km, 0) / validCalculated.length).toFixed(2)
          : '0.00');

    const elDist = document.getElementById('kpiTotalDist');
    const elFuel = document.getElementById('kpiTotalFuel');
    const elSpend = document.getElementById('kpiTotalSpend');
    const elAvg = document.getElementById('kpiAvgConsumption');

    if (elDist) elDist.textContent = `${totalDist.toLocaleString()} ${this.settings.distanceUnit}`;
    if (elFuel) elFuel.textContent = `${totalFuel.toFixed(1)} ${this.settings.volumeUnit}`;
    if (elSpend) elSpend.textContent = formatCurrency(totalOwnershipSpend, this.settings.currency);
    if (elAvg) elAvg.textContent = `${avgL100km} L/100km`;

    // Render Chart.js visualizers
    renderEfficiencyTrendChart('efficiencyTrendChart', logs, currentVehicle?.targetConsumption || 5.5);
    renderExpenseChart('monthlyExpenseChart', logs, this.settings.currency);
    renderStationChart('stationShareChart', logs);
    renderStationEfficiencyChart('stationEfficiencyChart', logs);
    renderFuelPriceTrendChart('priceTrendChart', logs, this.settings.currency, this.settings.volumeUnit);
    this.renderServiceReminder();

    // Render Station Efficiency Breakdown
    const elBreakdown = document.getElementById('stationEfficiencyBreakdown');
    if (elBreakdown) {
      const stationStats = {};
      const sortedLogs = [...logs].sort((a, b) => a.odometer - b.odometer);

      sortedLogs.forEach((l, idx) => {
        const purchaseStation = l.station?.trim() || 'Other / Unknown';
        if (!stationStats[purchaseStation]) {
          stationStats[purchaseStation] = { totalConsumption: 0, count: 0, totalFuel: 0, totalCost: 0 };
        }
        stationStats[purchaseStation].totalFuel += Number(l.fuelVolume || 0);
        stationStats[purchaseStation].totalCost += Number(l.totalCost || 0);

        if (l.calculatedL100km && l.calculatedL100km > 0) {
          const prevLog = idx > 0 ? sortedLogs[idx - 1] : null;
          const fuelSourceStation = (prevLog && prevLog.station?.trim()) ? prevLog.station.trim() : purchaseStation;

          if (!stationStats[fuelSourceStation]) {
            stationStats[fuelSourceStation] = { totalConsumption: 0, count: 0, totalFuel: 0, totalCost: 0 };
          }
          stationStats[fuelSourceStation].totalConsumption += Number(l.calculatedL100km);
          stationStats[fuelSourceStation].count += 1;
        }
      });

      const stations = Object.keys(stationStats).map(st => {
        const s = stationStats[st];
        const avgCons = s.count > 0 ? (s.totalConsumption / s.count) : null;
        return { name: st, avgCons, totalFuel: s.totalFuel, totalCost: s.totalCost, count: s.count };
      }).sort((a, b) => {
        if (a.avgCons === null) return 1;
        if (b.avgCons === null) return -1;
        return a.avgCons - b.avgCons;
      });

      if (stations.length === 0) {
        elBreakdown.innerHTML = '<p style="font-size: 0.88rem; color: var(--text-muted);">No refuel station data available.</p>';
      } else {
        const mostEfficient = stations.find(s => s.avgCons !== null);
        let html = '';

        if (mostEfficient) {
          html += `
            <div class="info-banner" style="margin-bottom: 16px;">
              <i data-lucide="award"></i>
              <span><strong>Most Efficient Station:</strong> ${mostEfficient.name} (${mostEfficient.avgCons.toFixed(2)} L/100km average)</span>
            </div>
          `;
        }

        html += stations.map(s => `
          <div class="cost-item">
            <div>
              <strong>${s.name}</strong>
              <span style="font-size: 0.78rem; display: block; color: var(--text-muted);">
                ${s.totalFuel.toFixed(1)} ${this.settings.volumeUnit} filled (${s.count} log${s.count !== 1 ? 's' : ''})
              </span>
            </div>
            <div style="text-align: right;">
              <span class="${mostEfficient && s.name === mostEfficient.name ? 'highlight-cost' : ''}">
                ${s.avgCons !== null ? `${s.avgCons.toFixed(2)} L/100km` : 'N/A (Needs 2 fill-ups)'}
              </span>
            </div>
          </div>
        `).join('');

        elBreakdown.innerHTML = html;
        if (window.lucide) window.lucide.createIcons();
      }
    }
  }

  // Service Reminders
  renderServiceReminder() {
    const banner = document.getElementById('serviceReminderBanner');
    const textEl = document.getElementById('serviceReminderText');
    if (!banner || !textEl) return;

    const activeVehicleId = StorageManager.getActiveVehicleId();
    if (!activeVehicleId) {
      banner.classList.add('hidden');
      return;
    }

    const vehicles = StorageManager.getVehicles();
    const vehicle = vehicles.find(v => v.id === activeVehicleId);
    if (!vehicle) return;

    const interval = Number(vehicle.serviceInterval || 10000);
    const services = StorageManager.getServices(activeVehicleId);
    const logs = StorageManager.getLogs(activeVehicleId);

    let currentOdo = Number(vehicle.initialOdometer || 0);
    if (logs.length > 0) currentOdo = Math.max(currentOdo, ...logs.map(l => Number(l.odometer || 0)));
    if (services.length > 0) currentOdo = Math.max(currentOdo, ...services.map(s => Number(s.odometer || 0)));

    const maintenanceServices = services
      .filter(s => s.type === 'Maintenance')
      .sort((a, b) => Number(b.odometer || 0) - Number(a.odometer || 0));

    const lastServiceOdo = maintenanceServices.length > 0 ? Number(maintenanceServices[0].odometer) : Number(vehicle.initialOdometer || 0);
    const distSinceLast = Math.max(0, currentOdo - lastServiceOdo);
    const remainingKm = interval - distSinceLast;

    banner.classList.remove('hidden');
    if (remainingKm <= 0) {
      banner.className = 'info-banner warning-banner';
      textEl.innerHTML = `<strong>⚠️ SERVICE OVERDUE!</strong> Last service was ${distSinceLast.toLocaleString()} ${this.settings.distanceUnit} ago (Overdue by ${Math.abs(remainingKm).toLocaleString()} ${this.settings.distanceUnit}). Target interval: Every ${interval.toLocaleString()} ${this.settings.distanceUnit}.`;
    } else if (remainingKm <= 1000) {
      banner.className = 'info-banner alert-banner';
      textEl.innerHTML = `<strong>⚡ SERVICE DUE SOON!</strong> Next oil change/service due in <strong>${remainingKm.toLocaleString()} ${this.settings.distanceUnit}</strong> (Target interval: ${interval.toLocaleString()} ${this.settings.distanceUnit}).`;
    } else {
      banner.className = 'info-banner';
      textEl.innerHTML = `<strong>✓ Service Status OK:</strong> Next maintenance service in <strong>${remainingKm.toLocaleString()} ${this.settings.distanceUnit}</strong> (Target interval: every ${interval.toLocaleString()} ${this.settings.distanceUnit}).`;
    }
  }

  // Vehicles Garage
  renderVehiclesGarage() {
    const grid = document.getElementById('vehiclesGrid');
    if (!grid) return;

    const vehicles = StorageManager.getVehicles();
    const activeId = StorageManager.getActiveVehicleId();

    if (vehicles.length === 0) {
      grid.innerHTML = `
        <div class="glass-card empty-state" style="grid-column: 1 / -1; padding: 40px; text-align: center;">
          <i data-lucide="car" class="empty-icon" style="width: 48px; height: 48px; margin-bottom: 12px; display: inline-block;"></i>
          <h3 style="margin-bottom: 8px;">No Vehicles in Garage</h3>
          <p style="color: var(--text-muted); margin-bottom: 16px;">Add your first vehicle profile to start tracking fuel logs and service records.</p>
          <button id="btnEmptyAddVehicle" class="btn btn-primary">
            <i data-lucide="plus-circle"></i> Add Your First Vehicle
          </button>
        </div>
      `;
      if (window.lucide) window.lucide.createIcons();
      document.getElementById('btnEmptyAddVehicle')?.addEventListener('click', () => this.openVehicleModal());
      return;
    }

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
        document.getElementById('vehServiceInterval').value = v.serviceInterval || 10000;
      }
    } else {
      title.textContent = 'Add New Vehicle';
      document.getElementById('vehServiceInterval').value = 10000;
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
        initialOdometer: parseInt(document.getElementById('vehOdometer').value, 10),
        serviceInterval: parseInt(document.getElementById('vehServiceInterval').value, 10) || 10000
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
    const consSelect = document.getElementById('setConsumptionUnit');

    if (curSelect) curSelect.value = this.settings.currency;
    if (distSelect) distSelect.value = this.settings.distanceUnit;
    if (volSelect) volSelect.value = this.settings.volumeUnit;
    if (consSelect) consSelect.value = this.settings.consumptionUnit || 'l_100km';

    document.getElementById('btnSaveSettings')?.addEventListener('click', () => {
      this.settings.currency = curSelect.value;
      this.settings.distanceUnit = distSelect.value;
      this.settings.volumeUnit = volSelect.value;
      if (consSelect) this.settings.consumptionUnit = consSelect.value;
      StorageManager.saveSettings(this.settings);
      this.updateUnitLabels();
      this.renderCalculator();
      this.renderLogsTable();
      this.renderServicesTable();
      this.renderPlanner();
      this.showToast('Settings saved successfully!');
    });

    // CSV Export
    document.getElementById('btnExportCSV')?.addEventListener('click', () => {
      const activeVehicleId = StorageManager.getActiveVehicleId();
      const csvStr = StorageManager.exportCSV(activeVehicleId);
      const blob = new Blob([csvStr], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `fuel_logs_${Date.now()}.csv`;
      a.click();
      URL.revokeObjectURL(url);
      this.showToast('Refuel logs exported to CSV');
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
