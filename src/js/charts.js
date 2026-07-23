import Chart from 'chart.js/auto';

let trendChartInstance = null;
let expenseChartInstance = null;
let stationChartInstance = null;

export function renderEfficiencyTrendChart(canvasId, logs, targetConsumption = 5.5) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;

  if (trendChartInstance) {
    trendChartInstance.destroy();
  }

  // Sort logs by date ascending
  const sortedLogs = [...logs]
    .filter(l => l.calculatedL100km || l.isFullTank)
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  const labels = sortedLogs.map(l => {
    const d = new Date(l.date);
    return `${d.getMonth() + 1}/${d.getDate()}`;
  });

  const dataPoints = sortedLogs.map(l => l.calculatedL100km || null);

  trendChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: 'Consumption (L/100km)',
          data: dataPoints,
          borderColor: '#222222',
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          fill: true,
          tension: 0,
          pointBackgroundColor: '#222222',
          pointRadius: 4,
          pointHoverRadius: 6
        },
        {
          label: `Target (${targetConsumption} L/100km)`,
          data: labels.map(() => targetConsumption),
          borderColor: '#222222',
          borderDash: [5, 5],
          pointRadius: 0,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: '#94a3b8', font: { family: 'Outfit, sans-serif' } }
        },
        tooltip: {
          backgroundColor: '#1e293b',
          titleColor: '#f8fafc',
          bodyColor: '#cbd5e1',
          padding: 12,
          borderColor: 'rgba(255,255,255,0.1)',
          borderWidth: 1
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(255, 255, 255, 0.05)' },
          ticks: { color: '#94a3b8' }
        },
        y: {
          grid: { color: 'rgba(255, 255, 255, 0.05)' },
          ticks: { color: '#94a3b8' },
          title: { display: true, text: 'L/100km', color: '#94a3b8' }
        }
      }
    }
  });
}

export function renderExpenseChart(canvasId, logs, currencySymbol = '$') {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;

  if (expenseChartInstance) {
    expenseChartInstance.destroy();
  }

  // Aggregate total cost per month
  const monthlyTotals = {};
  logs.forEach(l => {
    if (!l.date || !l.totalCost) return;
    const dateObj = new Date(l.date);
    const monthKey = dateObj.toLocaleString('default', { month: 'short', year: '2-digit' });
    monthlyTotals[monthKey] = (monthlyTotals[monthKey] || 0) + Number(l.totalCost);
  });

  const labels = Object.keys(monthlyTotals);
  const data = Object.values(monthlyTotals);

  expenseChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [
        {
          label: `Monthly Fuel Spend (${currencySymbol})`,
          data,
          backgroundColor: '#222222',
          hoverBackgroundColor: '#333333',
          borderRadius: 0,
          borderSkipped: false
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: '#94a3b8', font: { family: 'Outfit, sans-serif' } }
        },
        tooltip: {
          backgroundColor: '#1e293b',
          callbacks: {
            label: (ctx) => ` Total Spent: ${currencySymbol}${ctx.parsed.y.toFixed(2)}`
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: '#94a3b8' }
        },
        y: {
          grid: { color: 'rgba(255, 255, 255, 0.05)' },
          ticks: { color: '#94a3b8' },
          title: { display: true, text: `Amount (${currencySymbol})`, color: '#94a3b8' }
        }
      }
    }
  });
}

export function renderStationChart(canvasId, logs) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;

  if (stationChartInstance) {
    stationChartInstance.destroy();
  }

  const stationCounts = {};
  logs.forEach(l => {
    const name = l.station?.trim() || 'Other / Unknown';
    stationCounts[name] = (stationCounts[name] || 0) + 1;
  });

  const labels = Object.keys(stationCounts);
  const data = Object.values(stationCounts);

  const colors = [
    '#222222', '#222222', '#444444', '#666666', '#888888',
    '#aaaaaa', '#cccccc', '#eeeeee', '#ffffff'
  ];

  stationChartInstance = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels,
      datasets: [
        {
          data,
          backgroundColor: colors.slice(0, labels.length),
          borderWidth: 2,
          borderColor: '#222222'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right',
          labels: { color: '#94a3b8', font: { family: 'Outfit, sans-serif' } }
        }
      },
    }
  });
}

let stationEfficiencyChartInstance = null;
let priceTrendChartInstance = null;

export function renderStationEfficiencyChart(canvasId, logs) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;

  if (stationEfficiencyChartInstance) {
    stationEfficiencyChartInstance.destroy();
  }

  // Sort logs by odometer ascending to evaluate station intervals correctly
  const sortedLogs = [...logs].sort((a, b) => a.odometer - b.odometer);

  // Aggregate consumption per station (attributing consumption to the PREVIOUS refuel's station)
  const stationStats = {};
  sortedLogs.forEach((l, idx) => {
    if (l.calculatedL100km && l.calculatedL100km > 0) {
      // The fuel burned during this interval was filled at the PREVIOUS station
      const prevLog = idx > 0 ? sortedLogs[idx - 1] : null;
      const station = (prevLog && prevLog.station?.trim()) ? prevLog.station.trim() : (l.station?.trim() || 'Other / Unknown');

      if (!stationStats[station]) {
        stationStats[station] = { totalConsumption: 0, count: 0 };
      }
      stationStats[station].totalConsumption += Number(l.calculatedL100km);
      stationStats[station].count += 1;
    }
  });

  const labels = [];
  const dataPoints = [];

  Object.keys(stationStats).forEach(st => {
    if (stationStats[st].count > 0) {
      labels.push(st);
      const avg = Number((stationStats[st].totalConsumption / stationStats[st].count).toFixed(2));
      dataPoints.push(avg);
    }
  });

  stationEfficiencyChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [
        {
          label: 'Avg Consumption (L/100km)',
          data: dataPoints,
          backgroundColor: '#222222',
          hoverBackgroundColor: '#333333',
          borderRadius: 0,
          borderSkipped: false
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y',
      plugins: {
        legend: {
          display: true,
          labels: { color: '#222222', font: { family: 'Space Mono, monospace' } }
        },
        tooltip: {
          callbacks: {
            label: (ctx) => ` Avg Consumption: ${ctx.parsed.x} L/100km`
          }
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(0, 0, 0, 0.1)' },
          ticks: { color: '#222222' },
          title: { display: true, text: 'L/100km (Lower is better)', color: '#222222' }
        },
        y: {
          grid: { display: false },
          ticks: { color: '#222222' }
        }
      }
    }
  });
}

export function renderFuelPriceTrendChart(canvasId, logs, currencySymbol = '$', volumeUnit = 'L') {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;

  if (priceTrendChartInstance) {
    priceTrendChartInstance.destroy();
  }

  // Sort logs by date ascending
  const sortedLogs = [...logs]
    .filter(l => l.pricePerUnit && l.date)
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  const labels = sortedLogs.map(l => {
    const d = new Date(l.date);
    return `${d.getMonth() + 1}/${d.getDate()}`;
  });

  const dataPoints = sortedLogs.map(l => Number(l.pricePerUnit));

  priceTrendChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: `Fuel Price (${currencySymbol}/${volumeUnit})`,
          data: dataPoints,
          borderColor: '#222222',
          backgroundColor: 'rgba(0, 0, 0, 0.05)',
          fill: true,
          tension: 0.2,
          pointBackgroundColor: '#222222',
          pointRadius: 4,
          pointHoverRadius: 6
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: '#222222', font: { family: 'Space Mono, monospace' } }
        },
        tooltip: {
          callbacks: {
            label: (ctx) => ` Price: ${currencySymbol}${ctx.parsed.y.toFixed(3)} / ${volumeUnit}`
          }
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(0, 0, 0, 0.1)' },
          ticks: { color: '#222222' }
        },
        y: {
          grid: { color: 'rgba(0, 0, 0, 0.1)' },
          ticks: { color: '#222222' },
          title: { display: true, text: `Price (${currencySymbol}/${volumeUnit})`, color: '#222222' }
        }
      }
    }
  });
}

