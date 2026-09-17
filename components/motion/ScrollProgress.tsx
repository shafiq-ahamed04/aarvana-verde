'use client';

/**
 * ScrollProgress motion primitive.
 * Renders a progress bar indicating page or section scroll position.
 *
 * TODO: Implement visual progress bar.
 */

import { useScrollProgress } from '@/hooks/useScrollProgress';
import { cn } from '@/lib/utils';

interface ScrollProgressProps {
  className?: string;
}

export default function ScrollProgress({ className }: ScrollProgressProps) {
  const progress = useScrollProgress();

  return (
    <div
      className={cn('fixed top-0 left-0 z-50 h-0.5 bg-current', className)}
      style={{ width: `${progress * 100}%` }}
      role="progressbar"
      aria-valuenow={Math.round(progress * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    />
  );
}
