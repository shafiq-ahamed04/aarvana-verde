'use client';

import { useEffect, useState, useSyncExternalStore } from 'react';
import { motion, useSpring } from 'motion/react';

function subscribePointer(callback: () => void) {
  const m1 = window.matchMedia('(pointer: fine)');
  const m2 = window.matchMedia('(prefers-reduced-motion: no-preference)');
  m1.addEventListener('change', callback);
  m2.addEventListener('change', callback);
  return () => {
    m1.removeEventListener('change', callback);
    m2.removeEventListener('change', callback);
  };
}

function getPointerSnapshot() {
  if (typeof window === 'undefined') return false;
  const isFinePointer = window.matchMedia('(pointer: fine)').matches;
  const noReducedMotion = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
  return isFinePointer && noReducedMotion;
}

function getServerSnapshot() {
  return false;
}

export default function CustomCursor() {
  const isEnabled = useSyncExternalStore(subscribePointer, getPointerSnapshot, getServerSnapshot);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Smooth springs for cursor positioning
  const mouseX = useSpring(0, { stiffness: 450, damping: 35, mass: 0.5 });
  const mouseY = useSpring(0, { stiffness: 450, damping: 35, mass: 0.5 });
  const dotX = useSpring(0, { stiffness: 1000, damping: 45, mass: 0.1 });
  const dotY = useSpring(0, { stiffness: 1000, damping: 45, mass: 0.1 });

  useEffect(() => {
    if (!isEnabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);

      if (!isVisible) {
        setIsVisible(true);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        'a, button, [role="button"], input, textarea, select, [data-cursor-interactive]'
      );
      setIsHovered(!!interactive);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.body.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isEnabled, isVisible, mouseX, mouseY, dotX, dotY]);

  if (!isEnabled) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
      style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.2s ease' }}
      aria-hidden="true"
    >
      {/* Outer subtle ring */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 1.6 : 1,
          borderColor: isHovered ? 'rgba(205, 164, 94, 0.7)' : 'rgba(200, 195, 185, 0.35)',
          backgroundColor: isHovered ? 'rgba(205, 164, 94, 0.08)' : 'rgba(200, 195, 185, 0)',
        }}
        transition={{ duration: 0.2 }}
        className="fixed w-8 h-8 rounded-full border border-stone-400"
      />

      {/* Precise center dot */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
        className="fixed w-1.5 h-1.5 rounded-full bg-stone-300"
      />
    </div>
  );
}
