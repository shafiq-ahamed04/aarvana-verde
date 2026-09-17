'use client';

/**
 * Magnetic button component.
 * Follows cursor within the button bounds for a premium interactive feel.
 *
 * TODO: Implement magnetic cursor-following effect.
 * Current implementation is a passthrough wrapper.
 */

import type { ReactNode } from 'react';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  /** Magnetic pull strength (0–1). Default: 0.3 */
  strength?: number;
}

export default function MagneticButton({
  children,
  className,
}: MagneticButtonProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
