# AGENTS.md - Developer & AI Agent Guidelines

> **IMPORTANT FOR ALL FUTURE AI AGENTS:**  
> Whenever you make changes, fix bugs, modify UI/UX, or introduce new features to this repository, you **MUST** update this `AGENTS.md` document before completing your task. Keep track of what was changed, issues identified, root causes, solutions applied, and any new architectural details.

---

## 📌 Project Overview
**FuelPulse Pro** is a lightweight, high-aesthetic web application for tracking fuel consumption, vehicle expenses, trip planning, and analytics.
- **Tech Stack**: Vanilla HTML5, JavaScript (ES Modules), CSS3 (Custom Properties), Vite, Chart.js, Lucide Icons.
- **Design Aesthetic**: Retro-modern thermal petrol station receipt theme with jagged paper edges, Space Mono typography, and monochrome visuals. Supports dark mode color inversion.
- **Persistence**: Browser `localStorage` via `StorageManager`.

---

## 📁 Key File Structure
- `index.html`: Main DOM structure, modals, navigation tabs, and font imports.
- `src/style.css`: Custom design tokens, receipt aesthetic, theme toggle invert filters, and mobile media queries.
- `src/js/storage.js`: `StorageManager` class handling `localStorage` CRUD for settings, vehicles, logs, and data sanitization.
- `src/js/ui.js`: `UIManager` class managing UI state, DOM binding, view rendering, tab switching, and modal forms.
- `src/js/charts.js`: Chart.js instances (monochrome trend charts, expense bars, doughnut distributions).
- `src/js/calculator.js`: Core math functions for trip cost estimation, fuel consumption conversions, and cost per distance.

---

## 🛠 History of Issues & Solved Bug Fixes

### 1. Theme Toggle & Dark Mode
- **Issue**: Dark mode toggle stopped working when enforcing the receipt theme.
- **Solution**: Applied a CSS filter `filter: invert(1) hue-rotate(180deg);` to `.app-container` when `data-theme="dark"`. Canvas charts are also inverted to maintain visibility.

### 2. High Contrast Reduction
- **Issue**: Pure black (`#000000`) text and borders were visually harsh.
- **Solution**: Softened theme colors across `style.css` and `charts.js` to dark charcoal (`#222222`), giving a realistic thermal paper look.

### 3. `undefined` ID Overwrite Bug
- **Issue**: Adding a new vehicle or refuel log overwrote existing entries instead of creating new ones.
- **Root Cause**: `logData` and `vehicleData` contained `id: id || undefined`. When `id` was empty string `""`, `id: undefined` was passed into object literals. `StorageManager.saveLog` ran `logs.findIndex(l => l.id === logData.id)`, which matched previous entries that had `id: undefined`, resulting in overwrites.
- **Solution**: Updated `ui.js` to conditionally set `id` only when editing (`if (id) logData.id = id;`). Updated `storage.js` to sanitize corrupt `undefined` records from `localStorage`.

### 4. Vehicle Deletion & Empty Garage State
- **Issue**: Deleting all vehicles caused the app to automatically re-seed mock vehicles (`v-1`, `v-2`).
- **Solution**: Allowed empty vehicle lists in `storage.js`, updated `getActiveVehicleId()` to handle null states safely, and added empty fallback UI in dropdowns and tables.

### 5. First Refuel Mileage & Odometer Calculation
- **Issue**: 
  1. Defaulting next refuel odometer to `+ 750` km prediction was unwanted.
  2. The first refuel log of a new vehicle did not calculate fuel consumption or distance delta.
  3. Analytics tab calculated distance from `firstLog.odometer` instead of `vehicle.initialOdometer`, causing inflated L/100km values.
- **Solution**: 
  1. Removed `+ 750` km prediction; defaults to last recorded odometer (or `vehicle.initialOdometer` if zero logs exist).
  2. Updated `storage.js` and `ui.js` so that the first refuel calculates distance delta and `calculatedL100km` using `vehicle.initialOdometer`.
  3. Updated `renderAnalytics()` to calculate `totalDist` using `currentVehicle.initialOdometer`.

### 6. Log Table Sorting & Odometer Input Validation
- **Issue**: Logs were not sorted newest-first, and users could accidentally enter an odometer reading lower than previous entries.
- **Solution**: Sorted `renderLogsTable` descending by odometer (`b.odometer - a.odometer`). Dynamically set `min` attribute on `logOdometer` form input in `openRefuelModal()` to block entering smaller values.

### 7. Trip Planner Auto-fill
- **Issue**: Users had to manually look up and enter their vehicle's average consumption in the Trip Planner tab.
- **Solution**: Implemented `prefillPlanner()` in `ui.js` to automatically calculate the active vehicle's historical average consumption (`L/100km`) and populate the input field when opening the tab or changing vehicles.

### 8. Mobile Responsiveness
- **Issue**: App layout needed responsive styling for mobile screen sizes (`< 600px`).
- **Solution**: Added CSS media queries in `src/style.css` to stack header elements, form rows, KPI cards, metrics grid, and adjust container padding for mobile viewports.

---

## 🌿 Git Branching Strategy

- **`main`**: Production-ready branch containing stable code.
- **`testing`**: Working development branch used for testing new features, UI experiments, and bug fixes before merging into `main`.

---

## 💡 Instructions for Future AI Agents
1. **Always Check This File**: Read `AGENTS.md` before starting work to understand established patterns and past bug solutions.
2. **Preserve Compatibility**: Keep the receipt theme aesthetic (`Space Mono`, `#222222` typography, thermal paper styling).
3. **Validate Storage Operations**: Always verify that `StorageManager` calls pass explicit object IDs when editing, or omit `id` when creating new entries.
4. **Document Changes**: Append all new features, bug fixes, or architectural updates to this `AGENTS.md` file before finishing your response.
