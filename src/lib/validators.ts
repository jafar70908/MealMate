export interface DonateFormValues {
  donorType: string;
  foodTypes: string[];
  quantity: number;
  quantityUnit: 'kg' | 'meals';
  pickupWindow: string;
  customPickupDate?: string;
  cityArea: string;
  name: string;
  contact: string;
  notes?: string;
  honeypot?: string;
}

export interface ValidationErrors {
  [key: string]: string | undefined;
}

export function validateStep1(values: Partial<DonateFormValues>): ValidationErrors {
  const errors: ValidationErrors = {};

  if (!values.donorType || values.donorType.trim() === '') {
    errors.donorType = 'Please choose who you are donating as.';
  }

  if (!values.foodTypes || values.foodTypes.length === 0) {
    errors.foodTypes = 'Tell us what kind of food it is.';
  }

  if (values.quantity === undefined || values.quantity === null || isNaN(values.quantity) || values.quantity < 1 || values.quantity > 5000) {
    errors.quantity = 'Enter a quantity between 1 and 5000.';
  }

  return errors;
}

export function validateStep2(values: Partial<DonateFormValues>): ValidationErrors {
  const errors: ValidationErrors = {};

  if (!values.pickupWindow || values.pickupWindow.trim() === '') {
    errors.pickupWindow = 'Choose a pickup time that is still ahead.';
  }

  if (!values.cityArea || values.cityArea.trim().length < 2 || values.cityArea.trim().length > 60) {
    errors.cityArea = 'Add your city or area (2–60 characters).';
  }

  return errors;
}

export function validateStep3(values: Partial<DonateFormValues>): ValidationErrors {
  const errors: ValidationErrors = {};

  if (!values.name || values.name.trim().length < 2 || values.name.trim().length > 60) {
    errors.name = 'Please add your name (2–60 characters).';
  }

  const contact = (values.contact || '').trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneDigits = contact.replace(/\D/g, '');

  const isValidEmail = emailRegex.test(contact);
  const isValidPhone = phoneDigits.length >= 10 && phoneDigits.length <= 13;

  if (!contact || (!isValidEmail && !isValidPhone)) {
    errors.contact = 'Add a valid email or 10-digit phone number.';
  }

  return errors;
}

export function validateAll(values: Partial<DonateFormValues>): ValidationErrors {
  return {
    ...validateStep1(values),
    ...validateStep2(values),
    ...validateStep3(values),
  };
}
