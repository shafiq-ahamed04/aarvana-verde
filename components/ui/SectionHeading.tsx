/**
 * Section heading component with consistent styling.
 * Ensures proper heading hierarchy across the site.
 */

import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4';

interface SectionHeadingProps {
  level?: HeadingLevel;
  children: ReactNode;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export default function SectionHeading({
  level: Component = 'h2',
  children,
  subtitle,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === 'center' && 'text-center',
        align === 'right' && 'text-right',
        className,
      )}
    >
      <Component>{children}</Component>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
