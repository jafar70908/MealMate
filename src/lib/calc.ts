/**
 * MealMate Environmental & Nutritional Impact Formulas
 * Standardized on WRAP and UNEP planning assumptions.
 */

export const MEALS_PER_KG = 2.4; // approx 416-420g per balanced meal portion
export const CO2E_PER_KG = 2.5;  // approx 2.5 kg CO2 equivalent avoided per kg food rescued

/**
 * Calculates estimated number of meals provided by a given weight in kg.
 */
export function calculateMeals(kg: number): number {
  if (kg <= 0 || isNaN(kg)) return 0;
  return Math.round(kg * MEALS_PER_KG);
}

/**
 * Calculates estimated kg of CO2e avoided by diverting food from landfills.
 */
export function calculateCO2e(kg: number): number {
  if (kg <= 0 || isNaN(kg)) return 0;
  return Math.round(kg * CO2E_PER_KG * 10) / 10;
}

/**
 * Converts a meal count estimate back into required kilograms.
 */
export function estimateKgFromMeals(meals: number): number {
  if (meals <= 0 || isNaN(meals)) return 0;
  return Math.round((meals / MEALS_PER_KG) * 10) / 10;
}

/**
 * Formats numbers according to Indian locale numbering standard (en-IN).
 */
export function formatNumberIN(val: number, options?: Intl.NumberFormatOptions): string {
  return new Intl.NumberFormat('en-IN', options).format(val);
}
