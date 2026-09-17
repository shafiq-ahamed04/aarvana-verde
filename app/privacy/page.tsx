import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Privacy Policy — Confidential Client Information',
  description:
    'Privacy Policy and data stewardship principles for Aarvana Developers and Aarvana Verde.',
  path: '/privacy',
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <article className="w-full bg-[#0c0c0b] text-stone-100 min-h-screen">
      {/* Header */}
      <section className="relative pt-36 pb-16 md:pt-44 md:pb-20 border-b border-stone-800/80">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#cda45e] hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Flagship Experience</span>
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] tracking-[0.35em] uppercase font-mono font-medium text-[#cda45e]">
              AARVANA DEVELOPERS • CLIENT STEWARDSHIP
            </span>
            <div className="h-[1px] w-12 bg-[#cda45e]/40" />
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-normal uppercase tracking-tight text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-xs font-mono text-stone-400">
            Last Revised: September 2026 • Confidential Client Protocols
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 max-w-4xl mx-auto px-6 md:px-10 space-y-12 text-sm leading-relaxed text-stone-300 font-light">
        {/* Concept Notice */}
        <div className="border border-stone-800 bg-[#121211] p-6 rounded-sm flex items-start gap-4">
          <Shield className="w-5 h-5 text-[#cda45e] shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs font-mono text-stone-400">
            <span className="text-stone-200 font-medium uppercase tracking-wider block">
              PORTFOLIO CONCEPT DISCLOSURE
            </span>
            <p className="text-stone-400 font-light leading-relaxed">
              Aarvana Developers and Aarvana Verde are fictional portfolio concepts crafted to demonstrate
              world-class digital design, engineering, and architectural art direction. No private personal
              information is collected or commercialized.
            </p>
          </div>
        </div>

        {/* Section 1 */}
        <div className="space-y-3">
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#cda45e] block">
            01 / COMMITMENT TO CONFIDENTIALITY
          </span>
          <h2 className="font-serif text-2xl text-white font-normal uppercase">
            Discreet Client Relationship
          </h2>
          <p>
            At Aarvana Developers, we maintain the highest standards of discretion for our private
            patrons and residence owners. When you submit inquiries regarding private site walks,
            architectural blueprints, or floor plan folios, your contact coordinates are treated with
            absolute confidentiality.
          </p>
        </div>

        {/* Section 2 */}
        <div className="space-y-3">
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#cda45e] block">
            02 / INFORMATION WE COLLECT
          </span>
          <h2 className="font-serif text-2xl text-white font-normal uppercase">
            Inquiry & Consultation Data
          </h2>
          <p>
            When utilizing our bespoke consultation scheduling forms, we request minimal details
            necessary to coordinate your private advisory session:
          </p>
          <ul className="space-y-2 list-disc list-inside text-stone-400 font-mono text-xs pl-2">
            <li>Full Name and preferred honorific</li>
            <li>Direct telephone and WhatsApp communication number</li>
            <li>Confidential electronic mail address</li>
            <li>Residence configuration interest (3 BHK Sanctuary or 4 BHK Grand Estate)</li>
            <li>Preferred timeline and spatial requirements</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="space-y-3">
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#cda45e] block">
            03 / DATA USE & ZERO COMMERCIALIZATION
          </span>
          <h2 className="font-serif text-2xl text-white font-normal uppercase">
            Strict Non-Disclosure
          </h2>
          <p>
            Aarvana Developers strictly enforces a zero-sale and zero-brokerage sharing policy.
            Your information is used solely by our direct in-house relationship directors to
            facilitate your requested private walks or architectural consultations. We do not
            participate in automated advertising networks or third-party marketing brokers.
          </p>
        </div>

        {/* Section 4 */}
        <div className="space-y-3">
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#cda45e] block">
            04 / SECURE DIGITAL PROTOCOLS
          </span>
          <h2 className="font-serif text-2xl text-white font-normal uppercase">
            Digital Stewardship
          </h2>
          <p>
            Our web platform operates with standard modern TLS 1.3 encryption protocols.
            Session preferences (such as reduced motion settings) are preserved locally in your
            browser without cross-site tracking.
          </p>
        </div>

        {/* Section 5 */}
        <div className="space-y-3 pt-6 border-t border-stone-800">
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#cda45e] block">
            05 / CONTACT THE ADVISORY
          </span>
          <h2 className="font-serif text-2xl text-white font-normal uppercase">
            Privacy Inquiries
          </h2>
          <p>
            For questions regarding our client privacy standards or to request complete deletion of
            your advisory correspondence, contact our executive office:
          </p>
          <div className="text-xs font-mono text-stone-400 pt-2 space-y-1">
            <p>Private Advisory Office • Aarvana Developers</p>
            <p>The Pavilion, Old Mahabalipuram Road, Sholinganallur, Chennai 600119</p>
            <p>privateclients@aarvanadevelopers.com • +91 44 2830 9000</p>
          </div>
        </div>
      </section>
    </article>
  );
}
