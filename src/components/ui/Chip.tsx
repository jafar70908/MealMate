import React from 'react';
import { cn } from '../../lib/cn';

export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'saffron' | 'forest' | 'sage' | 'leaf' | 'outline' | 'tomato';
  size?: 'sm' | 'md';
}

export const Chip: React.FC<ChipProps> = ({
  children,
  variant = 'saffron',
  size = 'md',
  className,
  ...props
}) => {
  const variantStyles = {
    saffron: 'bg-saffron-500/15 text-forest-900 border border-saffron-500/30',
    forest: 'bg-forest-900 text-cream-50 border border-forest-700',
    sage: 'bg-sage-100 text-forest-900 border border-forest-900/15',
    leaf: 'bg-leaf-500/15 text-forest-900 border border-leaf-500/30 font-medium',
    tomato: 'bg-tomato-500/15 text-tomato-600 border border-tomato-500/30 font-medium',
    outline: 'border border-forest-900/20 text-forest-900 bg-white/40',
  };

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-1',
    md: 'text-sm px-3.5 py-1.5',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-pill font-sans font-medium transition-colors select-none',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
