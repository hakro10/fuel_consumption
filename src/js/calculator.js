/**
 * Fuel Consumption & Unit Conversion Utility Module
 */

// Unit Constants
export const UNITS = {
  DISTANCE: {
    KM: 'km',
    MILES: 'mi'
  },
  VOLUME: {
    LITERS: 'L',
    GALLONS_US: 'gal_us',
    GALLONS_UK: 'gal_uk'
  },
  EFFICIENCY: {
    L_PER_100KM: 'l_100km',
    KM_PER_L: 'km_l',
    MPG_US: 'mpg_us',
    MPG_UK: 'mpg_uk'
  }
};

/**
 * Convert distance between km and miles
 */
export function convertDistance(val, fromUnit, toUnit) {
  if (fromUnit === toUnit) return val;
  if (fromUnit === UNITS.DISTANCE.KM && toUnit === UNITS.DISTANCE.MILES) {
    return val * 0.621371;
  }
  if (fromUnit === UNITS.DISTANCE.MILES && toUnit === UNITS.DISTANCE.KM) {
    return val / 0.621371;
  }
  return val;
}

/**
 * Convert fuel volume between Liters, US Gallons, UK Gallons
 */
export function convertVolume(val, fromUnit, toUnit) {
  if (fromUnit === toUnit) return val;

  // Convert to liters first
  let liters = val;
  if (fromUnit === UNITS.VOLUME.GALLONS_US) liters = val * 3.78541;
  if (fromUnit === UNITS.VOLUME.GALLONS_UK) liters = val * 4.54609;

  // Convert liters to target
  if (toUnit === UNITS.VOLUME.LITERS) return liters;
  if (toUnit === UNITS.VOLUME.GALLONS_US) return liters / 3.78541;
  if (toUnit === UNITS.VOLUME.GALLONS_UK) return liters / 4.54609;

  return val;
}

/**
 * Convert fuel efficiency values between formats:
 * - l_100km: Liters per 100 kilometers
 * - km_l: Kilometers per Liter
 * - mpg_us: Miles per US Gallon
 * - mpg_uk: Miles per UK Gallon
 */
export function convertEfficiency(val, fromFormat, toFormat) {
  if (!val || val <= 0) return 0;
  if (fromFormat === toFormat) return val;

  // Standardize to L/100km first
  let l100km = val;
  if (fromFormat === UNITS.EFFICIENCY.KM_PER_L) {
    l100km = 100 / val;
  } else if (fromFormat === UNITS.EFFICIENCY.MPG_US) {
    l100km = 235.215 / val;
  } else if (fromFormat === UNITS.EFFICIENCY.MPG_UK) {
    l100km = 282.481 / val;
  }

  // Convert L/100km to desired format
  if (toFormat === UNITS.EFFICIENCY.L_PER_100KM) return l100km;
  if (toFormat === UNITS.EFFICIENCY.KM_PER_L) return 100 / l100km;
  if (toFormat === UNITS.EFFICIENCY.MPG_US) return 235.215 / l100km;
  if (toFormat === UNITS.EFFICIENCY.MPG_UK) return 282.481 / l100km;

  return l100km;
}

/**
 * Calculate Quick Fuel Economy from distance, fuel amount, and price
 */
export function calculateQuickStats({ distance, volume, pricePerUnit = 0, distanceUnit = 'km', volumeUnit = 'L' }) {
  if (!distance || distance <= 0 || !volume || volume <= 0) {
    return {
      l100km: 0,
      kmL: 0,
      mpgUs: 0,
      mpgUk: 0,
      totalCost: 0,
      costPerDist: 0,
      costFor100: 0
    };
  }

  // Convert distance to KM and volume to Liters for standard calculations
  const distKm = distanceUnit === UNITS.DISTANCE.MILES ? distance / 0.621371 : distance;
  const volLiters = volumeUnit === UNITS.VOLUME.GALLONS_US ? volume * 3.78541 : 
                     volumeUnit === UNITS.VOLUME.GALLONS_UK ? volume * 4.54609 : volume;

  const l100km = (volLiters / distKm) * 100;
  const kmL = distKm / volLiters;
  const mpgUs = 235.215 / l100km;
  const mpgUk = 282.481 / l100km;

  const totalCost = volume * pricePerUnit;
  const costPerDist = totalCost / distance;
  const costFor100 = (l100km / 100) * 100 * (pricePerUnit / (volumeUnit === UNITS.VOLUME.LITERS ? 1 : (volumeUnit === UNITS.VOLUME.GALLONS_US ? 3.78541 : 4.54609)));

  return {
    l100km: Number(l100km.toFixed(2)),
    kmL: Number(kmL.toFixed(2)),
    mpgUs: Number(mpgUs.toFixed(2)),
    mpgUk: Number(mpgUk.toFixed(2)),
    totalCost: Number(totalCost.toFixed(2)),
    costPerDist: Number(costPerDist.toFixed(3)),
    costFor100: Number(costFor100.toFixed(2))
  };
}

/**
 * Estimate Trip fuel required & cost
 */
export function estimateTripCost({ tripDistance, avgConsumption, fuelPrice, conditionMultiplier = 1.0, distanceUnit = 'km', volumeUnit = 'L' }) {
  if (!tripDistance || !avgConsumption || !fuelPrice) {
    return { fuelNeeded: 0, totalCost: 0, effectiveConsumption: 0 };
  }

  const effectiveConsumption = avgConsumption * conditionMultiplier;
  const fuelNeeded = (tripDistance / 100) * effectiveConsumption;
  const totalCost = fuelNeeded * fuelPrice;

  return {
    fuelNeeded: Number(fuelNeeded.toFixed(2)),
    totalCost: Number(totalCost.toFixed(2)),
    effectiveConsumption: Number(effectiveConsumption.toFixed(2))
  };
}

/**
 * Calculate actual fuel consumption between two consecutive full refuels
 */
export function calculateConsumptionBetweenLogs(previousLog, currentLog) {
  if (!previousLog || !currentLog || !currentLog.isFullTank) return null;

  const distanceDelta = currentLog.odometer - previousLog.odometer;
  if (distanceDelta <= 0) return null;

  const l100km = (currentLog.fuelVolume / distanceDelta) * 100;
  return Number(l100km.toFixed(2));
}

/**
 * Format currency string
 */
export function formatCurrency(amount, symbol = '$') {
  return `${symbol}${Number(amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}
