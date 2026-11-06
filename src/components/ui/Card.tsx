import React from 'react';
import { cn } from '../../lib/cn';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'light' | 'dark' | 'sage' | 'outline';
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'light',
  hoverEffect = true,
  className,
  ...props
}) => {
  const variantStyles = {
    light: 'bg-white text-ink-900 border border-forest-900/10 shadow-card',
    dark: 'bg-forest-900 text-cream-50 border border-forest-700/50 shadow-card',
    sage: 'bg-sage-100/70 text-ink-900 border border-forest-900/10 shadow-card',
    outline: 'bg-transparent text-ink-900 border-2 border-forest-900/15',
  };

  return (
    <div
      className={cn(
        'rounded-card p-6 transition-all duration-300 relative',
        variantStyles[variant],
        hoverEffect && 'hover:-translate-y-1.5 hover:shadow-card-hover',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
