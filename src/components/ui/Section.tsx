import React from 'react';
import { cn } from '../../lib/cn';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  ariaLabelledBy?: string;
  variant?: 'cream' | 'forest' | 'sage';
  containerClassName?: string;
}

export const Section: React.FC<SectionProps> = ({
  id,
  ariaLabelledBy,
  variant = 'cream',
  containerClassName,
  className,
  children,
  ...props
}) => {
  const bgStyles = {
    cream: 'bg-cream-50 bg-grain text-ink-900',
    forest: 'bg-forest-900 bg-grain-dark text-cream-50 dark-surface',
    sage: 'bg-sage-50 text-ink-900',
  };

  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy || `${id}-heading`}
      className={cn(
        'w-full py-16 md:py-24 lg:py-28 relative overflow-hidden',
        bgStyles[variant],
        className
      )}
      {...props}
    >
      <div className={cn('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8', containerClassName)}>
        {children}
      </div>
    </section>
  );
};
