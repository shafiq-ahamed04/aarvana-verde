/**
 * Section wrapper providing consistent section spacing and semantics.
 */

import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import Container from '@/components/ui/Container';

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Remove default vertical padding */
  noPadding?: boolean;
  /** Container size constraint */
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  /** Background variant */
  background?: 'default' | 'muted' | 'dark' | 'accent';
}

export default function SectionWrapper({
  id,
  children,
  className,
  noPadding = false,
  containerSize = 'xl',
  background = 'default',
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        !noPadding && 'py-16 md:py-24 lg:py-32',
        background === 'muted' && 'bg-muted',
        background === 'dark' && 'bg-foreground text-background',
        className,
      )}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}
