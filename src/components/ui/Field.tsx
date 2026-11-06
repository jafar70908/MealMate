import React, { forwardRef, useId } from 'react';
import { AlertCircle } from 'lucide-react';
import { cn } from '../../lib/cn';

export interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
}

export const Field = forwardRef<HTMLInputElement, FieldProps>(
  ({ label, error, helperText, className, id: customId, required, ...props }, ref) => {
    const generatedId = useId();
    const fieldId = customId || generatedId;
    const errorId = `${fieldId}-error`;
    const helperId = `${fieldId}-helper`;

    return (
      <div className="w-full flex flex-col gap-1.5 text-left">
        <label
          htmlFor={fieldId}
          className="text-sm font-semibold text-forest-900 flex items-center justify-between"
        >
          <span>
            {label}
            {required && <span className="text-tomato-600 ml-1" aria-hidden="true">*</span>}
          </span>
        </label>
        <input
          ref={ref}
          id={fieldId}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : helperText ? helperId : undefined}
          className={cn(
            'w-full px-4 py-3 rounded-sm border bg-white text-ink-900 placeholder:text-ink-600/50 transition-all font-sans text-base',
            'focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:border-transparent',
            error
              ? 'border-tomato-500 bg-tomato-500/5 focus:ring-tomato-500'
              : 'border-forest-900/20 hover:border-forest-900/40',
            className
          )}
          {...props}
        />
        {helperText && !error && (
          <p id={helperId} className="text-xs text-ink-600">
            {helperText}
          </p>
        )}
        {error && (
          <p
            id={errorId}
            role="alert"
            className="text-xs text-tomato-600 flex items-center gap-1.5 font-medium mt-0.5"
          >
            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
            <span>{error}</span>
          </p>
        )}
      </div>
    );
  }
);

Field.displayName = 'Field';
