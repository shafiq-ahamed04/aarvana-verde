'use client';

import { useState, useEffect } from 'react';

/**
 * Hook to detect responsive breakpoints.
 * Uses matchMedia for performance — no resize listener polling.
 *
 * @example
 * const isMobile = useMediaQuery('(max-width: 767px)');
 * const isDesktop = useMediaQuery('(min-width: 1024px)');
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    const handler = (event: MediaQueryListEvent) => setMatches(event.matches);

    // Subscribe first, then sync initial state via the handler pattern
    mediaQuery.addEventListener('change', handler);

    // Use a microtask to avoid synchronous setState in effect body
    if (mediaQuery.matches !== matches) {
      queueMicrotask(() => setMatches(mediaQuery.matches));
    }

    return () => mediaQuery.removeEventListener('change', handler);
  }, [query, matches]);

  return matches;
}
