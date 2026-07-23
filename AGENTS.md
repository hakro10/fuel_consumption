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

### 9. Petrol Station Fuel Efficiency Analytics
- **Feature Request**: Compare average fuel consumption (`L/100km`) across different refuel stations (e.g. Shell, BP, Circle K) to determine which station provides the most fuel-efficient petrol/diesel.
- **Solution**: 
  1. Added a horizontal bar chart `renderStationEfficiencyChart` in `src/js/charts.js`.
  2. Added station comparison card `.chart-card.large` and breakdown container `#stationEfficiencyBreakdown` to `index.html`.
  3. Updated `renderAnalytics()` in `src/js/ui.js` to compute station-by-station consumption averages, display total fill-up counts, highlight the most efficient station badge, and render the chart.

### 10. Testing Branch Visual Indicator
- **Feature Request**: Distinguish testing builds from production by adding a visual badge.
- **Solution**: Added fixed position `.branch-badge` (`TESTING BRANCH`) in bottom-right corner of `index.html` and `src/style.css`.

### 11. Mobile Header Overflow & Top Receipt Line Alignment
- **Issue**: 
  1. On mobile viewports (`< 768px`), `.header-actions` (vehicle dropdown + Add Refuel button) overflowed past the right edge of `.app-container`.
  2. Subpixel hairline misalignment and top offset clipping on `.app-container::before` jagged teeth.
- **Solution**:
  1. Added `@media (max-width: 768px)` rules forcing `.header-actions` to `flex-wrap: wrap; width: 100%;` and `.vehicle-selector-wrapper` to `flex: 1 1 100%;`, keeping all controls neatly inside the receipt card.
  2. Fixed background-size on `.app-container::before` & `::after` (`20px 10px`) and normalized top padding (`35px 30px`) and body margins for crisp alignment.

### 12. Testing Branch Badge Position Consistency Across Themes
- **Issue**: In light mode, `.branch-badge` was using `position: fixed`, pinning it to the browser viewport window while scrolling. In dark mode, `.app-container`'s CSS `filter: invert(1)` created a containing block, causing `position: fixed` to act as `position: absolute` attached to the receipt card.
- **Solution**: Updated `.branch-badge` in `src/style.css` to `position: absolute; bottom: 16px; right: 16px;` so that it consistently attaches to the bottom-right of the receipt card and scrolls naturally with the receipt in BOTH light and dark mode.

### 13. Station Efficiency Fuel Attribution Mechanics
- **Issue**: Fuel efficiency (`calculatedL100km`) achieved during interval $i$ (between Refuel $i-1$ and Refuel $i$) was previously credited to Refuel $i$'s station. However, physically, the fuel consumed during interval $i$ was purchased at Refuel $i-1$'s station!
- **Solution**: Updated `renderStationEfficiencyChart` in `src/js/charts.js` and `renderAnalytics()` in `src/js/ui.js` so that interval $i$'s fuel efficiency is credited to `logs[i - 1].station` (the station that provided the fuel actually burned during that distance interval).

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
