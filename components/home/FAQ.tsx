'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { faqs, type FAQItem } from '@/data/faq';
import { useBookingModal } from '@/components/forms/BookingModalContext';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqs[0].id);
  const { openBookingModal } = useBookingModal();

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="relative w-full py-28 md:py-36 border-t border-stone-800 bg-[#0e0e0d] text-stone-100 overflow-hidden"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="text-[10px] tracking-[0.35em] uppercase font-mono font-medium text-[#cda45e]">
            11 / ARCHITECTURAL INQUIRIES
          </span>
          <div className="h-[1px] w-12 bg-[#cda45e]/50" />
        </div>

        {/* Headline */}
        <div className="mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal uppercase leading-[0.95] tracking-tight text-stone-100">
            Frequently
            <span className="block font-light italic text-stone-400">
              Addressed Questions.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base font-light text-stone-400">
            Essential clarity on spatial design, tenure, approvals, and the private acquisition process.
          </p>
        </div>

        {/* Accessible Accordion List */}
        <div className="divide-y divide-stone-800/90 border-y border-stone-800/90">
          {faqs.map((faq: FAQItem, index) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="py-5 sm:py-6">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full flex items-start justify-between gap-6 text-left group focus:outline-none cursor-pointer"
                >
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span className="text-xs font-mono font-medium text-[#cda45e] opacity-80">
                      0{index + 1}
                    </span>
                    <span className="font-serif text-lg sm:text-xl transition-colors leading-snug text-stone-200 group-hover:text-[#cda45e]">
                      {faq.question}
                    </span>
                  </div>

                  <div className="w-8 h-8 rounded-full border border-stone-800 text-stone-400 group-hover:border-[#cda45e] group-hover:text-white flex items-center justify-center transition-colors shrink-0">
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      role="region"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pl-8 sm:pl-12 pt-3 pb-2 pr-6">
                        <p className="text-xs sm:text-sm font-light leading-relaxed text-stone-300">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Additional Inquiry CTA Prompt */}
        <div className="mt-12 p-6 border border-stone-800 bg-stone-900/60 text-stone-300 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <p className="text-xs font-light text-center sm:text-left">
            Have a custom requirement regarding structural layouts or title documentation?
          </p>
          <button
            onClick={() => openBookingModal()}
            className="px-5 py-2.5 text-xs uppercase tracking-[0.2em] font-medium transition-colors shrink-0 cursor-pointer bg-stone-100 hover:bg-[#cda45e] text-stone-950"
          >
            Speak With Atelier
          </button>
        </div>
      </div>
    </section>
  );
}
