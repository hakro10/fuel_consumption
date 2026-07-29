/**
 * FuelPulse Pro Multi-Language i18n Module (English & Lithuanian)
 */

export const TRANSLATIONS = {
  en: {
    // Nav Tabs
    tab_calculator: 'Quick Calculator',
    tab_logs: 'Refuel Log',
    tab_service: 'Service Log',
    tab_planner: 'Trip Planner',
    tab_analytics: 'Analytics',
    tab_vehicles: 'Vehicles',

    // App Header
    header_subtitle: 'FUEL ECONOMY & EXPENSE TRACKER',
    input_parameters: 'INPUT PARAMETERS',
    distance_traveled: 'DISTANCE TRAVELED',
    fuel_consumed: 'FUEL CONSUMED / REFUELED',
    price_per_unit: 'PRICE PER UNIT',
    fuel_economy_metrics: 'FUEL ECONOMY METRICS',
    financial_breakdown: 'FINANCIAL BREAKDOWN',
    total_fuel_cost: 'TOTAL FUEL COST',
    cost_per_dist: 'COST PER DISTANCE',
    cost_for_100: 'COST FOR 100',
    add_refuel: 'Add Refuel',
    sign_in: 'Sign In',

    // Ratings / Economy
    good_economy: 'GOOD ECONOMY',
    average_economy: 'AVERAGE ECONOMY',
    high_consumption: 'HIGH CONSUMPTION',

    // Views / Headers
    refuel_logs_title: 'Refuel Logs & Fuel History',
    service_logs_title: 'Service & Repair Tracker',
    trip_planner_title: 'Trip Cost & Fuel Estimator',
    analytics_dashboard: 'Analytics Dashboard',
    garage_title: 'Vehicle Garage',
    settings_title: 'Application Settings & Data',

    // Settings
    language_label: 'Display Language',
    currency_label: 'Preferred Currency Symbol',
    distance_unit_label: 'Distance Unit',
    volume_unit_label: 'Volume Unit',
    consumption_unit_label: 'Fuel Economy Display Unit',
    theme_label: 'Color Theme',
    save_settings: 'Save Preferences',

    // Buttons & Actions
    add_first_log: 'Add First Log',
    add_vehicle: 'Add Vehicle',
    add_service: 'Add Service Record',
    export_csv: 'Export CSV',
    export_json: 'Export Full Backup (JSON)',
    import_json: 'Import Backup (JSON)',

    // Common
    date: 'Date',
    odometer: 'Odometer',
    volume: 'Volume',
    price: 'Price',
    total_spent: 'Total Spent',
    station: 'Station',
    actions: 'Actions',
    notes: 'Notes',
    full_tank: 'Full Tank Only',
    partial_tank: 'Partial Tank'
  },
  lt: {
    // Nav Tabs
    tab_calculator: 'Greita Skaičiuoklė',
    tab_logs: 'Degalų Žurnalas',
    tab_service: 'Serviso Žurnalas',
    tab_planner: 'Kelionės Planuoklis',
    tab_analytics: 'Analitika',
    tab_vehicles: 'Automobiliai',

    // App Header
    header_subtitle: 'DEGALŲ SĄNAUDŲ IR IŠLAIDŲ SEKLIS',
    input_parameters: 'ĮVESTIES PARAMETRAI',
    distance_traveled: 'NUVAŽIUOTAS ATSTUMAS',
    fuel_consumed: 'SUNAUDOTI / ĮPILTI DEGALAI',
    price_per_unit: 'KAINA UŽ VIENETĄ',
    fuel_economy_metrics: 'DEGALŲ SĄNAUDŲ RODIKLIAI',
    financial_breakdown: 'FINANSINĖ SUVESTINĖ',
    total_fuel_cost: 'BENDRA DEGALŲ KAINA',
    cost_per_dist: 'KAINA VIENAM ATSTUMUI',
    cost_for_100: 'KAINA 100 KM',
    add_refuel: 'Įpilti Degalų',
    sign_in: 'Prisijungti',

    // Ratings / Economy
    good_economy: 'EKONOMIŠKA',
    average_economy: 'VIDUTINĖS SĄNAUDOS',
    high_consumption: 'DIDELĖS SĄNAUDOS',

    // Views / Headers
    refuel_logs_title: 'Degalų Pylimo Žurnalas',
    service_logs_title: 'Serviso ir Remonto Registras',
    trip_planner_title: 'Kelionės Išlaidų Skaičiuoklė',
    analytics_dashboard: 'Analitikos Skydelis',
    garage_title: 'Automobilių Garažas',
    settings_title: 'Programos Nustatymai ir Duomenys',

    // Settings
    language_label: 'Rodyti Kalbą',
    currency_label: 'Valiutos Simbolis',
    distance_unit_label: 'Atstumo Vienetas',
    volume_unit_label: 'Tūrio Vienetas',
    consumption_unit_label: 'Degalų Sąnaudų Rodytojas',
    theme_label: 'Spalvų Tema',
    save_settings: 'Išsaugoti Nustatymus',

    // Buttons & Actions
    add_first_log: 'Pridėti Pirmą Įrašą',
    add_vehicle: 'Pridėti Automobilį',
    add_service: 'Pridėti Serviso Įrašą',
    export_csv: 'Eksportuoti CSV',
    export_json: 'Eksportuoti Atsarginę Kopiją (JSON)',
    import_json: 'Importuoti Atsarginę Kopiją (JSON)',

    // Common
    date: 'Data',
    odometer: 'Spidometro Rida',
    volume: 'Tūris',
    price: 'Kaina',
    total_spent: 'Išleista Iš Viso',
    station: 'Degalinė',
    actions: 'Veiksmai',
    notes: 'Pastabos',
    full_tank: 'Pilnas Bakas',
    partial_tank: 'Dalinai Įpilta'
  }
};

export function getTranslation(key, lang = 'en') {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
  return dict[key] || TRANSLATIONS.en[key] || key;
}
