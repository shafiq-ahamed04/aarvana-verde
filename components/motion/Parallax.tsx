'use client';

/**
 * Parallax motion primitive.
 * Translates children on scroll for depth effect.
 *
 * TODO: Implement with Framer Motion useScroll + useTransform.
 */

import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  /** Parallax speed multiplier (-1 to 1). Negative = opposite direction. */
  speed?: number;
}

export default function Parallax({
  children,
  className,
}: ParallaxProps) {
  return <div className={cn(className)}>{children}</div>;
}
