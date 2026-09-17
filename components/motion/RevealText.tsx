'use client';

/**
 * RevealText motion primitive.
 * Animates text revealing character-by-character or line-by-line.
 *
 * TODO: Implement with Framer Motion or GSAP SplitText.
 */

import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface RevealTextProps {
  children: ReactNode;
  className?: string;
  /** Animation mode */
  mode?: 'chars' | 'words' | 'lines';
  /** Stagger delay between elements (seconds) */
  stagger?: number;
}

export default function RevealText({
  children,
  className,
}: RevealTextProps) {
  return <span className={cn(className)}>{children}</span>;
}
