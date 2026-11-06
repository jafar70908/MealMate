import { describe, it, expect } from 'vitest';
import { calculateMeals, calculateCO2e, estimateKgFromMeals, MEALS_PER_KG, CO2E_PER_KG } from '../src/lib/calc';

describe('MealMate Calculator Formulas (calc.ts)', () => {
  it('has consistent conversion constants', () => {
    expect(MEALS_PER_KG).toBe(2.4);
    expect(CO2E_PER_KG).toBe(2.5);
  });
  it('correctly calculates meals per kg based on MEALS_PER_KG (2.4)', () => {
    expect(calculateMeals(10)).toBe(24);
    expect(calculateMeals(25)).toBe(60);
    expect(calculateMeals(100)).toBe(240);
  });

  it('correctly calculates CO2e avoided based on CO2E_PER_KG (2.5)', () => {
    expect(calculateCO2e(10)).toBe(25);
    expect(calculateCO2e(25)).toBe(62.5);
    expect(calculateCO2e(100)).toBe(250);
  });

  it('handles zero or negative inputs gracefully', () => {
    expect(calculateMeals(0)).toBe(0);
    expect(calculateMeals(-5)).toBe(0);
    expect(calculateCO2e(0)).toBe(0);
    expect(calculateCO2e(-10)).toBe(0);
  });

  it('estimates kg back from meals correctly', () => {
    expect(estimateKgFromMeals(60)).toBeCloseTo(25, 0);
  });
});
