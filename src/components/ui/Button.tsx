import React, { forwardRef } from 'react';
import { cn } from '../../lib/cn';
import { useMagnetic } from '../../hooks/useMagnetic';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'dark' | 'outline-light';
  size?: 'sm' | 'md' | 'lg';
  magnetic?: boolean;
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      magnetic = false,
      isLoading = false,
      className,
      disabled,
      ...props
    },
    forwardedRef
  ) => {
    const { ref: magneticRef, position, handleMouseMove, handleMouseLeave } = useMagnetic(0.2, 6);

    const baseClasses =
      'inline-flex items-center justify-center font-sans font-semibold rounded-pill transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none select-none relative overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-500 focus-visible:ring-offset-2';

    const sizeClasses = {
      sm: 'px-4 py-2 text-sm min-h-[40px]',
      md: 'px-6 py-3 text-base min-h-[48px]',
      lg: 'px-8 py-4 text-lg min-h-[56px]',
    };

    const variantClasses = {
      primary:
        'bg-saffron-500 text-forest-900 shadow-md hover:bg-saffron-400 hover:shadow-glow-saffron focus-visible:ring-offset-cream-50',
      secondary:
        'border-2 border-forest-900 text-forest-900 bg-transparent hover:bg-forest-900/5 focus-visible:ring-offset-cream-50',
      ghost:
        'text-forest-900 bg-transparent hover:bg-forest-900/10 focus-visible:ring-offset-cream-50',
      dark:
        'bg-saffron-500 text-forest-900 hover:bg-saffron-400 shadow-glow-saffron focus-visible:ring-offset-forest-900',
      'outline-light':
        'border-2 border-cream-50/40 text-cream-50 bg-transparent hover:bg-cream-50/10 focus-visible:ring-offset-forest-900',
    };

    const style = magnetic && !disabled
      ? { transform: `translate3d(${position.x}px, ${position.y}px, 0)` }
      : undefined;

    return (
      <button
        ref={(node) => {
          // assign to magnetic ref
          magneticRef.current = node;
          // assign to forwarded ref
          if (typeof forwardedRef === 'function') {
            forwardedRef(node);
          } else if (forwardedRef) {
            forwardedRef.current = node;
          }
        }}
        disabled={disabled || isLoading}
        onMouseMove={magnetic ? handleMouseMove : undefined}
        onMouseLeave={magnetic ? handleMouseLeave : undefined}
        style={style}
        className={cn(baseClasses, sizeClasses[size], variantClasses[variant], className)}
        {...props}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <svg
              className="animate-spin h-5 w-5 text-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>Please wait...</span>
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
