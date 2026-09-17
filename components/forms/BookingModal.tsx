'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, Calendar, Clock, Sparkles } from 'lucide-react';
import { useBookingModal } from './BookingModalContext';

const bookingSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid 10-digit phone number'),
  configuration: z.enum(['3 BHK Sanctuary', '4 BHK Grand Estate', 'Undecided']),
  preferredDate: z.string().min(1, 'Please select your preferred visit date'),
  timeSlot: z.enum(['morning', 'afternoon', 'sunset']),
  message: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export default function BookingModal() {
  const { isOpen, closeBookingModal, selectedConfig } = useBookingModal();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      configuration: (selectedConfig as '3 BHK Sanctuary' | '4 BHK Grand Estate' | 'Undecided') || '3 BHK Sanctuary',
      timeSlot: 'sunset',
    },
  });

  useEffect(() => {
    if (selectedConfig) {
      setValue('configuration', selectedConfig as '3 BHK Sanctuary' | '4 BHK Grand Estate' | 'Undecided');
    }
  }, [selectedConfig, setValue]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeBookingModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeBookingModal]);

  const onSubmit = async (data: BookingFormData) => {
    // Simulate API reservation call
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log('Private visit request booked:', data);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    closeBookingModal();
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-title"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-[#141413] border border-stone-800 text-stone-100 shadow-2xl p-6 sm:p-10 rounded-sm max-h-[90vh] overflow-y-auto z-10"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 p-2 text-stone-400 hover:text-white transition-colors duration-200"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-12 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-stone-900 border border-[#a16207]/40 text-[#cda45e]">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#cda45e] mb-2 font-medium">
                  Walkthrough Confirmed
                </p>
                <h3 className="font-serif text-3xl sm:text-4xl text-white mb-4">
                  We Look Forward to Welcoming You.
                </h3>
                <p className="text-stone-400 text-sm max-w-md mx-auto leading-relaxed mb-8">
                  Your private concierge has received your itinerary. We will connect with you
                  within 3 business hours to finalize personal chauffeured transport and architectural briefing notes.
                </p>
                <button
                  onClick={handleClose}
                  className="px-8 py-3 bg-stone-100 text-stone-950 text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#cda45e] hover:text-black transition-all duration-300"
                >
                  Return to Exploration
                </button>
              </motion.div>
            ) : (
              <div>
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#cda45e]" />
                    <span className="text-[11px] uppercase tracking-[0.25em] text-[#cda45e] font-medium">
                      Private Residence Walkthrough
                    </span>
                  </div>
                  <h2 id="booking-title" className="font-serif text-2xl sm:text-3xl text-white tracking-tight">
                    Schedule Your Experience
                  </h2>
                  <p className="text-stone-400 text-xs sm:text-sm mt-1.5 leading-relaxed">
                    Walk the grounds with our design atelier, experience the secluded tranquility of 24 acres,
                    and review tailored structural customizations.
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.15em] text-stone-300 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        {...register('fullName')}
                        placeholder="e.g. Arjun Sundaram"
                        className="w-full px-3.5 py-2.5 bg-stone-900/90 border border-stone-800 text-sm text-stone-100 placeholder-stone-600 focus:outline-none focus:border-[#a16207] transition-colors"
                      />
                      {errors.fullName && (
                        <p className="text-red-400 text-xs mt-1">{errors.fullName.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.15em] text-stone-300 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        {...register('phone')}
                        placeholder="+91 98400 00000"
                        className="w-full px-3.5 py-2.5 bg-stone-900/90 border border-stone-800 text-sm text-stone-100 placeholder-stone-600 focus:outline-none focus:border-[#a16207] transition-colors"
                      />
                      {errors.phone && (
                        <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.15em] text-stone-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      {...register('email')}
                      placeholder="arjun@domain.com"
                      className="w-full px-3.5 py-2.5 bg-stone-900/90 border border-stone-800 text-sm text-stone-100 placeholder-stone-600 focus:outline-none focus:border-[#a16207] transition-colors"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.15em] text-stone-300 mb-1.5">
                        Residence of Interest
                      </label>
                      <select
                        {...register('configuration')}
                        className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-800 text-sm text-stone-100 focus:outline-none focus:border-[#a16207] transition-colors"
                      >
                        <option value="3 BHK Sanctuary">3 BHK Sanctuary (2,450 sq.ft.)</option>
                        <option value="4 BHK Grand Estate">4 BHK Grand Estate (3,850 sq.ft.)</option>
                        <option value="Undecided">Undecided / Architectural Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.15em] text-stone-300 mb-1.5">
                        Preferred Date *
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          {...register('preferredDate')}
                          className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-800 text-sm text-stone-100 focus:outline-none focus:border-[#a16207] transition-colors"
                        />
                        <Calendar className="w-4 h-4 text-stone-500 absolute right-3 top-3 pointer-events-none" />
                      </div>
                      {errors.preferredDate && (
                        <p className="text-red-400 text-xs mt-1">{errors.preferredDate.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.15em] text-stone-300 mb-1.5">
                      Atmosphere Preference
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'morning', label: 'Morning Light', desc: '09:30 AM' },
                        { id: 'afternoon', label: 'Midday Breeze', desc: '02:00 PM' },
                        { id: 'sunset', label: 'Twilight Horizon', desc: '05:30 PM' },
                      ].map((slot) => (
                        <label
                          key={slot.id}
                          className="flex flex-col items-center justify-center p-2.5 border border-stone-800 bg-stone-900/60 hover:border-stone-700 cursor-pointer text-center text-xs has-[:checked]:border-[#cda45e] has-[:checked]:bg-stone-900"
                        >
                          <input
                            type="radio"
                            value={slot.id}
                            {...register('timeSlot')}
                            className="sr-only"
                          />
                          <Clock className="w-3.5 h-3.5 text-stone-400 mb-1" />
                          <span className="font-medium text-stone-200">{slot.label}</span>
                          <span className="text-[10px] text-stone-500">{slot.desc}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.15em] text-stone-300 mb-1.5">
                      Specific Architectural Inquiries (Optional)
                    </label>
                    <textarea
                      rows={2}
                      {...register('message')}
                      placeholder="e.g. Inquiries regarding structural customization, orientation, or landscape buffer..."
                      className="w-full px-3.5 py-2.5 bg-stone-900/90 border border-stone-800 text-sm text-stone-100 placeholder-stone-600 focus:outline-none focus:border-[#a16207] transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-stone-100 hover:bg-[#cda45e] text-stone-950 hover:text-stone-950 font-medium text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span className="inline-block animate-pulse">Confirming Itinerary...</span>
                      ) : (
                        <>
                          <span>Request Private Walkthrough</span>
                          <span className="text-base leading-none">→</span>
                        </>
                      )}
                    </button>
                    <p className="text-center text-[10px] text-stone-500 mt-2.5">
                      Direct consultation. Non-disclosure adhered. Strictly by appointment.
                    </p>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
