'use client';

import { useState, useEffect, useRef } from 'react';
import { clamp } from '@/lib/utils';

/**
 * Hook to track scroll progress within a container or the entire page.
 * Returns a value between 0 and 1 representing scroll completion.
 *
 * @param containerRef - Optional ref to a scrollable container. If omitted, tracks window scroll.
 *
 * @example
 * // Page scroll progress
 * const progress = useScrollProgress();
 *
 * // Container scroll progress
 * const ref = useRef<HTMLDivElement>(null);
 * const progress = useScrollProgress(ref);
 */
export function useScrollProgress(
  containerRef?: React.RefObject<HTMLElement | null>
): number {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const updateProgress = () => {
      if (containerRef?.current) {
        const el = containerRef.current;
        const scrollable = el.scrollHeight - el.clientHeight;
        setProgress(scrollable > 0 ? clamp(el.scrollTop / scrollable, 0, 1) : 0);
      } else {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(scrollable > 0 ? clamp(window.scrollY / scrollable, 0, 1) : 0);
      }
    };

    const handleScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateProgress);
    };

    const target = containerRef?.current || window;
    target.addEventListener('scroll', handleScroll, { passive: true });
    updateProgress();

    return () => {
      target.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [containerRef]);

  return progress;
}
