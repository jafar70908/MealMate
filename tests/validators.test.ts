import { describe, it, expect } from 'vitest';
import { validateStep1, validateStep2, validateStep3, validateAll } from '../src/lib/validators';

describe('MealMate Donate Form Validators', () => {
  it('validates step 1 required fields correctly', () => {
    const emptyErrors = validateStep1({});
    expect(emptyErrors.donorType).toBeDefined();
    expect(emptyErrors.foodTypes).toBeDefined();
    expect(emptyErrors.quantity).toBeDefined();

    const validErrors = validateStep1({
      donorType: 'Restaurant',
      foodTypes: ['Cooked meals'],
      quantity: 25,
    });
    expect(Object.keys(validErrors).length).toBe(0);
  });

  it('validates step 2 pickup window and city area', () => {
    const invalidErrors = validateStep2({
      pickupWindow: '',
      cityArea: 'A',
    });
    expect(invalidErrors.pickupWindow).toBeDefined();
    expect(invalidErrors.cityArea).toBeDefined();

    const validErrors = validateStep2({
      pickupWindow: 'Tonight (8:00 PM – 10:00 PM)',
      cityArea: 'Koramangala, Bengaluru',
    });
    expect(Object.keys(validErrors).length).toBe(0);
  });

  it('validates step 3 contact info with valid email or 10-digit phone', () => {
    const invalidErrors = validateStep3({
      name: 'M',
      contact: 'invalid-contact',
    });
    expect(invalidErrors.name).toBeDefined();
    expect(invalidErrors.contact).toBeDefined();

    const validEmail = validateStep3({
      name: 'Meera Nair',
      contact: 'meera@restaurant.com',
    });
    expect(Object.keys(validEmail).length).toBe(0);

    const validPhone = validateStep3({
      name: 'Meera Nair',
      contact: '9876543210',
    });
    expect(Object.keys(validPhone).length).toBe(0);

    const allErrors = validateAll({});
    expect(Object.keys(allErrors).length).toBeGreaterThan(0);
  });
});
