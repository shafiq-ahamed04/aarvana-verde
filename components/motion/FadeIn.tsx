'use client';

/**
 * FadeIn motion primitive.
 * Reveals children with a fade and optional translate on scroll entry.
 *
 * TODO: Implement with Framer Motion's useInView or Intersection Observer.
 */

import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FadeInProps {
  children: ReactNode;
  className?: string;
  /** Direction to fade from */
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  /** Delay in seconds */
  delay?: number;
  /** Duration in seconds */
  duration?: number;
  /** Only animate once */
  once?: boolean;
}

export default function FadeIn({
  children,
  className,
}: FadeInProps) {
  // Motion implementation will be added with Framer Motion.
  return <div className={cn(className)}>{children}</div>;
}
