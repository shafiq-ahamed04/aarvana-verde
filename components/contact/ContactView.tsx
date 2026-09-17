'use client';

import { useState } from 'react';
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  Shield,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  project: string;
  inquiryType: string;
  preferredDate: string;
  notes: string;
}

export default function ContactView() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    project: 'Aarvana Verde (Chennai) — 3 & 4 BHK',
    inquiryType: 'Private Site Visit Walk',
    preferredDate: '',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Basic validation
    if (!formData.name.trim()) {
      setErrorMsg('Please provide your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please provide a valid email address.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMsg('Please provide a valid 10-digit telephone number.');
      return;
    }

    setReferenceId(`ARV-${Math.floor(100000 + Math.random() * 900000)}`);
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  return (
    <div className="w-full bg-[#0c0c0b] text-stone-100 min-h-screen">
      {/* 1. Hero Header */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 border-b border-stone-800/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[10px] tracking-[0.35em] uppercase font-mono font-medium text-[#cda45e]">
              AARVANA DEVELOPERS
            </span>
            <span className="text-stone-600 font-mono text-xs">/</span>
            <span className="text-[10px] tracking-[0.35em] uppercase font-mono font-medium text-stone-400">
              PRIVATE CLIENT ADVISORY
            </span>
            <div className="h-[1px] w-12 bg-[#cda45e]/40 hidden sm:block" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[5.5rem] font-normal uppercase leading-[0.9] tracking-tight text-stone-100">
                Begin The
                <span className="block font-light italic text-stone-400 mt-2">
                  Conversation.
                </span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-stone-400 text-sm sm:text-base font-light leading-relaxed">
                Whether arranging an on-site walk across our flagship 24-acre canopy in Chennai
                or reviewing architectural blueprints across our regional portfolio, our private
                advisory team provides discreet, comprehensive stewardship.
              </p>
              <div className="mt-6 pt-6 border-t border-stone-800/80 flex items-center justify-between text-xs font-mono text-stone-500">
                <span>BY APPOINTMENT ONLY</span>
                <span>MON – SUN • 10:00 – 19:00</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Direct Concierge Channels & Interactive Inquiry Form */}
      <section className="py-24 md:py-36 max-w-7xl mx-auto px-6 md:px-10" aria-label="Inquiry and Channels">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Channels & Studio Location */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#cda45e] uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Direct Access</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal uppercase text-white">
                Private Advisory Channels
              </h2>
              <p className="text-stone-400 text-sm font-light leading-relaxed">
                Direct lines to our senior relationship directors and architectural consultants.
              </p>
            </div>

            {/* Channels Cards */}
            <div className="space-y-4">
              <a
                href="tel:+914428309000"
                className="group border border-stone-800 bg-[#121211] p-6 rounded-sm flex items-center justify-between hover:border-stone-600 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-[#cda45e]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider block">
                      Direct Advisory Phone
                    </span>
                    <span className="text-stone-100 font-medium text-sm sm:text-base group-hover:text-[#cda45e] transition-colors">
                      +91 44 2830 9000
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-stone-500 group-hover:text-white transition-colors" />
              </a>

              <a
                href="https://wa.me/919840012345"
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-stone-800 bg-[#121211] p-6 rounded-sm flex items-center justify-between hover:border-stone-600 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-[#cda45e]">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider block">
                      WhatsApp Concierge
                    </span>
                    <span className="text-stone-100 font-medium text-sm sm:text-base group-hover:text-[#cda45e] transition-colors">
                      +91 98400 12345
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-stone-500 group-hover:text-white transition-colors" />
              </a>

              <a
                href="mailto:privateclients@aarvanadevelopers.com"
                className="group border border-stone-800 bg-[#121211] p-6 rounded-sm flex items-center justify-between hover:border-stone-600 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-[#cda45e]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider block">
                      Confidential Email
                    </span>
                    <span className="text-stone-100 font-medium text-xs sm:text-sm group-hover:text-[#cda45e] transition-colors">
                      privateclients@aarvanadevelopers.com
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-stone-500 group-hover:text-white transition-colors" />
              </a>
            </div>

            {/* Experience Studio Address */}
            <div className="border border-stone-800 bg-[#10100f] p-6 sm:p-8 rounded-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#cda45e] uppercase">
                <MapPin className="w-4 h-4" />
                <span>The Experience Pavilion</span>
              </div>
              <div>
                <h4 className="font-serif text-lg text-white font-normal">Aarvana Verde Experience Gallery</h4>
                <p className="text-xs text-stone-400 mt-1 leading-relaxed font-light">
                  Off Old Mahabalipuram Road, Sholinganallur<br />
                  Chennai, Tamil Nadu 600119
                </p>
              </div>
              <div className="pt-4 border-t border-stone-800 text-[11px] font-mono text-stone-500 space-y-1">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-stone-400" />
                  <span>Monday – Sunday: 10:00 AM – 7:00 PM</span>
                </div>
                <p className="text-stone-500 pl-5.5">Private valet parking available on site.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Site Visit Booking Form */}
          <div className="lg:col-span-7 border border-stone-800 bg-[#121211] p-6 sm:p-10 lg:p-12 rounded-sm shadow-2xl">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#cda45e]/10 border border-[#cda45e] flex items-center justify-center mx-auto text-[#cda45e]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-[#cda45e] uppercase tracking-widest block">
                    CONSULTATION CONFIRMED
                  </span>
                  <h3 className="font-serif text-3xl text-white font-normal uppercase">
                    Thank You, {formData.name}.
                  </h3>
                  <p className="text-sm text-stone-300 font-light max-w-md mx-auto leading-relaxed">
                    Your inquiry for <span className="text-[#cda45e] font-medium">{formData.project}</span> has been received.
                    Our senior private client director will reach out to you within 4 business hours via phone or WhatsApp.
                  </p>
                </div>

                <div className="pt-6 border-t border-stone-800 text-xs font-mono text-stone-500">
                  Reference: {referenceId}
                </div>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-6 py-3 border border-stone-700 hover:border-stone-400 text-xs uppercase tracking-widest text-stone-300 font-mono transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-[10px] font-mono text-[#cda45e] uppercase tracking-widest block mb-1">
                    BESPOKE CONSULTATION
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal uppercase">
                    Schedule An Architectural Walk
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-400 font-light mt-1">
                    Experience our canopy in person or request architectural blueprints.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3 border border-red-500/40 bg-red-950/30 text-red-200 text-xs font-mono">
                    {errorMsg}
                  </div>
                )}

                {/* Form Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-stone-400">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Vikramaditya Sundaram"
                      className="w-full px-4 py-3 bg-[#0d0d0c] border border-stone-800 text-white placeholder-stone-600 text-sm focus:border-[#cda45e] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-stone-400">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="vikram@example.com"
                      className="w-full px-4 py-3 bg-[#0d0d0c] border border-stone-800 text-white placeholder-stone-600 text-sm focus:border-[#cda45e] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-stone-400">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98400 00000"
                      className="w-full px-4 py-3 bg-[#0d0d0c] border border-stone-800 text-white placeholder-stone-600 text-sm focus:border-[#cda45e] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-stone-400">
                      Sanctuary Selection
                    </label>
                    <select
                      value={formData.project}
                      onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0d0d0c] border border-stone-800 text-white text-sm focus:border-[#cda45e] focus:outline-none transition-colors"
                    >
                      <option value="Aarvana Verde (Chennai) — 3 & 4 BHK">Aarvana Verde (Chennai) — Flagship</option>
                      <option value="Aarvana Altura (Coimbatore) — 3 & 4 BHK">Aarvana Altura (Coimbatore) — Sky Suites</option>
                      <option value="Aarvana Aurelia (Bengaluru) — 3 & 4 BHK">Aarvana Aurelia (Bengaluru) — Garden Villas</option>
                      <option value="General Architectural Advisory">General Architectural Advisory</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-stone-400">
                      Inquiry Format
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0d0d0c] border border-stone-800 text-white text-sm focus:border-[#cda45e] focus:outline-none transition-colors"
                    >
                      <option value="Private Site Visit Walk">Private On-Site Walk</option>
                      <option value="Architectural Blueprint Folio">Architectural Blueprint Folio</option>
                      <option value="Senior Advisory Call">Senior Advisory Call</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-stone-400">
                      Preferred Date (Optional)
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0d0d0c] border border-stone-800 text-white placeholder-stone-600 text-sm focus:border-[#cda45e] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-stone-400">
                    Spatial Requirements or Notes
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Tell us about specific orientation preferences, bedroom requirements, or timeline..."
                    className="w-full px-4 py-3 bg-[#0d0d0c] border border-stone-800 text-white placeholder-stone-600 text-sm focus:border-[#cda45e] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-stone-100 hover:bg-[#cda45e] text-stone-950 font-medium text-xs uppercase tracking-[0.2em] transition-all duration-300 disabled:opacity-50 cursor-pointer shadow-lg"
                >
                  {isSubmitting ? 'Transmitting Request...' : 'Confirm Advisory Request →'}
                </button>

                <p className="text-[11px] font-mono text-stone-500 text-center">
                  Discreet & Confidential. Your information is never shared.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 3. Portfolio Concept Notice */}
      <section className="py-12 border-t border-stone-800 bg-[#090908]" aria-label="Portfolio Notice">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center gap-3 text-xs font-mono text-stone-500">
          <Shield className="w-4 h-4 text-stone-600 shrink-0" />
          <span>
            Aarvana Developers is a fictional portfolio concept. Inquiries submitted via this form are processed locally for demonstration purposes.
          </span>
        </div>
      </section>
    </div>
  );
}
