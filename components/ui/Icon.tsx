/**
 * Icon component for consistent SVG icon rendering.
 * Uses inline SVG for performance and accessibility.
 *
 * TODO: Expand with a proper icon set during UI implementation.
 */

import { cn } from '@/lib/utils';

type IconName = 'phone' | 'email' | 'whatsapp' | 'location' | 'arrow-right' | 'menu' | 'close' | 'chevron-down';

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
  /** Accessible label. If provided, icon is treated as img. If omitted, treated as decorative. */
  label?: string;
}

export default function Icon({ name, size = 24, className, label }: IconProps) {
  const ariaProps = label
    ? { role: 'img' as const, 'aria-label': label }
    : { 'aria-hidden': true as const };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('inline-block shrink-0', className)}
      {...ariaProps}
    >
      {/* SVG paths will be added during UI implementation */}
      <title>{label || name}</title>
    </svg>
  );
}
