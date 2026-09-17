'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = testimonials[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      className="relative w-full py-28 md:py-36 border-t border-stone-800 bg-[#111110] text-stone-100 overflow-hidden"
      aria-label="Patron Voices and Testimonials"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
        {/* Section Header */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="h-[1px] w-12 bg-[#cda45e]/50" />
          <span className="text-[10px] tracking-[0.35em] uppercase font-mono font-medium text-[#cda45e]">
            10 / RESIDENT PATRONS
          </span>
          <div className="h-[1px] w-12 bg-[#cda45e]/50" />
        </div>

        {/* Big Quote Icon */}
        <div className="w-12 h-12 mx-auto mb-8 flex items-center justify-center rounded-full border border-stone-800 bg-stone-900 text-[#cda45e] shadow-sm">
          <Quote className="w-5 h-5" />
        </div>

        {/* Editorial Testimonial Carousel */}
        <div className="min-h-[220px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.author}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <blockquote className="font-serif text-2xl sm:text-4xl md:text-5xl font-light leading-[1.25] tracking-tight max-w-4xl mx-auto text-stone-100">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              <div className="space-y-1">
                <cite className="font-sans text-xs uppercase tracking-[0.25em] font-medium not-italic block text-[#cda45e]">
                  — {current.author}
                </cite>
                <p className="text-xs font-light text-stone-400">
                  {current.role} • {current.residence}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Pagination Controls */}
        <div className="mt-12 flex items-center justify-center gap-6">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-stone-800 text-stone-400 hover:text-white hover:border-[#cda45e] flex items-center justify-center transition-colors shadow-sm cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                  currentIndex === idx
                    ? 'w-8 bg-[#cda45e]'
                    : 'w-2 bg-stone-700 hover:bg-stone-500'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-stone-800 text-stone-400 hover:text-white hover:border-[#cda45e] flex items-center justify-center transition-colors shadow-sm cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
