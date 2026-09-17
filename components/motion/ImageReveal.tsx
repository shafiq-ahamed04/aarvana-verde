'use client';

/**
 * ImageReveal motion primitive.
 * Reveals images with a clip-path or overlay wipe animation.
 *
 * TODO: Implement with Framer Motion or CSS clip-path animations.
 */

import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ImageRevealProps {
  children: ReactNode;
  className?: string;
  /** Reveal direction */
  direction?: 'left' | 'right' | 'up' | 'down';
}

export default function ImageReveal({
  children,
  className,
}: ImageRevealProps) {
  return <div className={cn('overflow-hidden', className)}>{children}</div>;
}
