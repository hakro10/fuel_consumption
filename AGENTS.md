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

### 14. Vehicle Service & Maintenance Tracker Feature
- **Feature Request**: Add a dedicated Service & Repair section so users can log repairs, maintenance, parts replaced/repaired, workshop info, and costs per vehicle.
- **Solution**: 
  1. Added `STORAGE_KEYS.SERVICES = 'fuel_counter_services'` and Service CRUD methods (`getServices`, `saveService`, `deleteService`) in `src/js/storage.js`.
  2. Added **Service Log** navigation tab, `#tab-service` view (KPI cards for Total Spend, Records Count, Last Mileage, Avg Cost, search bar, and filter dropdown), and `#modalService` modal form in `index.html`.
  3. Implemented `renderServicesTable()`, `openServiceModal()`, and search/filter listeners in `src/js/ui.js`.
  4. Updated `renderAnalytics()` to factor service costs into total vehicle ownership expenditure.

### 15. Backup Export/Import, Service Reminders, Price Trend Chart, Global Units, and Partial Fill-up Fix
- **Features & Solved Bugs**:
  1. **Partial Fill-up Volume Accumulation**: Updated `saveLog()`, `deleteLog()`, and `recalculateVehicleLogs()` in `src/js/storage.js` so partial fill-up volumes (`isFullTank: false`) accumulate across intermediate refuels until the next full tank, correctly computing multi-refuel fuel consumption (`calculatedL100km`).
  2. **Data Backup & Restore**: Added full JSON backup export (`fuelpulse_backup.json`), CSV refuel log export (`fuel_logs.csv`), and JSON backup import reader/restorer in `src/js/storage.js` and `src/js/ui.js`.
  3. **Service & Maintenance Reminders**: Added default 10,000 km service interval per vehicle (customizable in `#modalVehicle`). Created dynamic status banner (`#serviceReminderBanner`) showing remaining mileage until next maintenance (*OK*, *Due Soon*, or *Overdue*).
  4. **Fuel Price Trend Chart**: Added `renderFuelPriceTrendChart` in `src/js/charts.js` and canvas `#priceTrendChart` card in `index.html` to plot fuel price per unit over time.
  5. **Global Unit & Currency Preferences**: Added Fuel Economy Display Unit selector in Settings tab (`#tab-settings`) and dynamic unit propagation across all DOM labels and reports (`.currency-label`, `.unit-dist-label`, `.unit-vol-label`, `.unit-eff-label`).

### 16. Flexible Analytics Timeframe & Specific Date Picker Feature
- **Feature Request**: Allow users in Analytics tab to filter metrics and charts by All Time (Total), This Month, This Year, Specific Month (e.g. July 2026), Specific Year (e.g. 2026), or Custom Date Range.
- **Solution**:
  1. Added timeframe filter dropdown (`#analyticsTimeframeSelect`) and dynamic sub-filter pickers (`#analyticsMonthSelect`, `#analyticsYearSelect`, `#analyticsDateFrom`, `#analyticsDateTo`) in `index.html`.
  2. Implemented `populateAnalyticsFilterDropdowns`, `getFilteredAnalyticsData`, and `bindAnalyticsFilterEvents` in `src/js/ui.js`.
  3. Updated `renderAnalytics()` to compute KPIs and re-render all 5 Chart.js visualizers using the filtered dataset for the selected timeframe.

### 17. Clean Fresh App State (Removal of Mock/Sample Data)
- **Feature Request**: Remove all pre-seeded sample/mock vehicles, refuel logs, and service records so new users start with a clean, fresh app state.
- **Solution**:
  1. Set `INITIAL_VEHICLES = []`, `SAMPLE_LOGS = []`, and `SAMPLE_SERVICES = []` in `src/js/storage.js`.
  2. Updated `getVehicles()`, `getLogs()`, `getServices()`, and `resetToDefault()` to return empty state arrays (`[]`) without seeding mock data.
  3. Added empty state fallback card in `renderVehiclesGarage()` and vehicle check prompts in `openRefuelModal()` and `openServiceModal()` in `src/js/ui.js`.

### 18. Last Vehicle Deletion Bug Fix
- **Issue**: Users could not delete the last remaining vehicle in the garage because the Delete button was conditionally hidden (`vehicles.length > 1`).
- **Solution**: Removed the `vehicles.length > 1` constraint in `renderVehiclesGarage()` in `src/js/ui.js` so the Delete button is always available. Deleting the last vehicle cleanly transitions the app to the empty garage state and resets all views.

### 19. Vehicle Cascade Deletion & Null Active Vehicle Query Fix
- **Issue**: 
  1. Deleting a vehicle profile left orphan refuel logs and service records in `localStorage`.
  2. Querying `getLogs(activeVehicleId)` and `getServices(activeVehicleId)` when `activeVehicleId` was `null` (empty garage) fell back to returning all logs across all vehicles.
- **Solution**:
  1. Updated `deleteVehicle(id)` in `src/js/storage.js` to cascade delete all associated refuel logs and service records matching `vehicleId === id`.
  2. Updated `getLogs(vehicleId)` and `getServices(vehicleId)` in `src/js/storage.js` so that passing a falsy `vehicleId` (when no vehicle exists) safely returns an empty array `[]`.

### 20. Single Refuel Log Analytics Distance Calculation Bug Fix
- **Issue**: Adding a single refuel log (e.g. 200 km driven, 20 L filled) resulted in `TOTAL DISTANCE LOGGED` showing `0 km` in the Analytics Dashboard.
- **Root Cause**: `renderAnalytics()` in `src/js/ui.js` contained an explicit condition `if (totalDist < 0 || sorted.length === 1) totalDist = 0;` which forced total distance to zero whenever only one log existed.
- **Solution**: Removed the `sorted.length === 1` constraint and updated baseline odometer calculation so distance for single or filtered logs is computed correctly relative to `vehicle.initialOdometer` or the previous log.

### 21. High-Contrast Dark Mode & Chart Contrast Fix
- **Issue**: Chart labels, legends, tick numbers, and grid lines were dark grey/black on black in Dark Mode, rendering them nearly unreadable.
- **Root Cause**: 
  1. `[data-theme="dark"] .app-container canvas` in `src/style.css` had an additional `filter: invert(1) hue-rotate(180deg)` rule, causing canvas elements to be double-inverted back to dark text on a dark background.
  2. Chart.js instances in `src/js/charts.js` contained hardcoded `#94a3b8` slate colors that inverted to dark muddy tones.
- **Solution**:
  1. Removed double-inversion on `canvas` in `src/style.css` so canvas elements invert once cohesively with `.app-container`.
  2. Updated all Chart.js colors, ticks, legends, and axis titles in `src/js/charts.js` to `#222222` and `Space Mono, monospace`, ensuring crisp bright off-white rendering in dark mode and solid dark charcoal rendering in light mode.

### 22. Branch Visual Indicator Sync & Differentiation
- **Issue**: Merging `testing` branch into `main` carried over the hardcoded `<div class="branch-badge">TESTING BRANCH</div>` element, causing `main` branch builds to visually display a `TESTING BRANCH` badge and creating confusion that `main` was outdated or un-merged.
- **Solution**: Updated `index.html` on `main` branch to display `<div class="branch-badge main-branch"><i data-lucide="shield-check"></i> MAIN BRANCH</div>` with solid border styling, accurately identifying `main` branch builds while keeping `testing` branch designated as `TESTING BRANCH`.

### 23. Neon Postgres DB, Netlify Serverless Functions & Multi-Device Auth Architecture
- **Feature Request**: Enable multi-device support with cloud database, serverless backend, and user sign-in/login authentication so users can access their vehicles and logs across all devices.
- **Solution**:
  1. Created `db/schema.sql` defining Postgres tables (`users`, `user_settings`, `vehicles`, `refuel_logs`, `services`) with UUID primary keys, cascade foreign keys, and indexes.
  2. Created Netlify serverless functions (`netlify/functions/auth.js` for signup/login/me using `bcryptjs` and `jsonwebtoken`; `netlify/functions/sync.js` for cloud data fetch and batch upserts using `@neondatabase/serverless`).
  3. Created `src/js/api.js` client handling JWT authentication and Netlify function communication.
  4. Upgraded `StorageManager` in `src/js/storage.js` to automatically sync data with Neon Postgres when authenticated, while preserving offline/guest `localStorage` fallback.
  5. Added thermal receipt styled Auth Modal (`#modalAuth`), user header button, and cloud sync status controls in `index.html`, `src/style.css`, and `src/js/ui.js`.

### 24. Internationalization (i18n) & 100% Multi-Language Support (EN / LT)
- **Feature Request**: Add Lithuanian (`LT`) language option alongside English (`EN`) so users can switch application language dynamically with 100% complete text coverage across all views.
- **Solution**:
  1. Created `src/js/i18n.js` providing 100% complete translation dictionaries for English (`en`) and Lithuanian (`lt`) covering all navigation tabs, view headers, subheaders, card titles, form labels, table headers (TH), status banners, rating badges, search placeholders, garage cards, and modal dialogs.
  2. Tagged every single static text element, title, paragraph, TH header, button, and option in `index.html` with `data-i18n` attributes.
  3. Updated `StorageManager` settings to save `language` preference (`en` | `lt`).
  4. Added header language toggle button `#btnLangToggle` (`EN | LT`) and language selector dropdown `#setLanguage` in `#tab-settings`.
  5. Implemented `applyLanguage(lang)` in `src/js/ui.js` dynamically translating static DOM nodes, input placeholders, modal headers, rating badges, vehicle garage cards, service reminder banners, and re-rendering active views in real-time.

### 25. One-Click Refuel Receipt & Notes Inspection Modal
- **Feature Request**: Allow users in the Refuel Log section to click directly on any refill log row to view the full receipt breakdown (station, fuel type, odometer, distance delta, volume, price, total cost, efficiency, and notes) in an authentic receipt popup, eliminating the need to side-scroll and open the edit form just to check previously added notes.
- **Solution**:
  1. Added `#modalRefuelReceipt` and `#receiptPaperView` in `index.html` styled with petrol station thermal paper aesthetics (Space Mono typography, dashed dividers, barcode styling, and prominent notes panel).
  2. Added table hint bar and clickable row styles (`.log-row-clickable`, `.note-badge-inline`) in `src/style.css` so entries with notes display a clear visual badge and rows have pointer cursors and active feedback.
  3. Implemented `openRefuelReceiptModal(logId)` and `closeRefuelReceiptModal()` in `src/js/ui.js`, with event isolation on Edit/Delete buttons (`e.stopPropagation()`) and direct shortcut button (*Edit Entry*) to quickly transition into the edit modal.
  4. Added 100% complete multi-language translations (`en` and `lt`) in `src/js/i18n.js` with live dynamic translation support.

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
