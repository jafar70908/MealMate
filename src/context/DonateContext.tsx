import React, { createContext, useContext, useState, useCallback } from 'react';
import { type DonateFormValues } from '../lib/validators';

interface DonateContextType {
  isOpen: boolean;
  step: number; // 1: What, 2: When/Where, 3: Contact, 4: Success
  formValues: DonateFormValues;
  openModal: (prefillValues?: Partial<DonateFormValues>) => void;
  closeModal: () => void;
  setStep: (step: number) => void;
  updateFormValues: (values: Partial<DonateFormValues>) => void;
  resetForm: () => void;
}

const initialValues: DonateFormValues = {
  donorType: 'Restaurant',
  foodTypes: ['Cooked meals'],
  quantity: 25,
  quantityUnit: 'kg',
  pickupWindow: 'Tonight (8:00 PM – 10:00 PM)',
  cityArea: 'Koramangala, Bengaluru',
  name: '',
  contact: '',
  notes: '',
  honeypot: '',
};

const DonateContext = createContext<DonateContextType | undefined>(undefined);

export const DonateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState<DonateFormValues>(initialValues);

  const openModal = useCallback((prefillValues?: Partial<DonateFormValues>) => {
    if (prefillValues) {
      setFormValues((prev) => ({ ...prev, ...prefillValues }));
    }
    setStep(1);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    // Delay resetting step slightly until exit animation finishes
    setTimeout(() => {
      setStep(1);
    }, 300);
  }, []);

  const updateFormValues = useCallback((values: Partial<DonateFormValues>) => {
    setFormValues((prev) => ({ ...prev, ...values }));
  }, []);

  const resetForm = useCallback(() => {
    setFormValues(initialValues);
    setStep(1);
  }, []);

  return (
    <DonateContext.Provider
      value={{
        isOpen,
        step,
        formValues,
        openModal,
        closeModal,
        setStep,
        updateFormValues,
        resetForm,
      }}
    >
      {children}
    </DonateContext.Provider>
  );
};

export function useDonate(): DonateContextType {
  const context = useContext(DonateContext);
  if (!context) {
    throw new Error('useDonate must be used within a DonateProvider');
  }
  return context;
}
