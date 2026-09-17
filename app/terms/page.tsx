import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Terms & Conditions — Client Advisory Guidelines',
  description:
    'Terms and Conditions for Aarvana Developers and the Aarvana Verde residential portfolio.',
  path: '/terms',
  noIndex: true,
});

export default function TermsPage() {
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
              AARVANA DEVELOPERS • LEGAL GUIDELINES
            </span>
            <div className="h-[1px] w-12 bg-[#cda45e]/40" />
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-normal uppercase tracking-tight text-white mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-xs font-mono text-stone-400">
            Last Revised: September 2026 • Architectural Advisory Protocols
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
              Aarvana Developers and Aarvana Verde are fictional portfolio concepts developed to showcase
              world-class digital design, engineering, and architectural art direction. All RERA numbers,
              pricing ranges, floor plans, and spatial representations are created for portfolio demonstration.
            </p>
          </div>
        </div>

        {/* Section 1 */}
        <div className="space-y-3">
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#cda45e] block">
            01 / ARCHITECTURAL REPRESENTATIONS
          </span>
          <h2 className="font-serif text-2xl text-white font-normal uppercase">
            Artistic & Conceptual Media
          </h2>
          <p>
            Renderings, photographs, vector blueprints, and simulated lighting perspectives
            featured on this digital platform are conceptual impressions intended to convey the
            architectural philosophy and spatial atmosphere of Aarvana enclaves. Exact specifications,
            finishes, and spatial layouts are governed by definitive client agreement contracts.
          </p>
        </div>

        {/* Section 2 */}
        <div className="space-y-3">
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#cda45e] block">
            02 / RERA REGISTRATION & COMPLIANCE
          </span>
          <h2 className="font-serif text-2xl text-white font-normal uppercase">
            Statutory Transparency
          </h2>
          <p>
            In actual practice, Aarvana developments comply with statutory provisions established
            under the Real Estate (Regulation and Development) Act (RERA). Aarvana Verde carries
            demonstration registration TN/RERA/2024/0942. Complete statutory filings, sanctions,
            and approvals are maintained at the on-site Experience Gallery.
          </p>
        </div>

        {/* Section 3 */}
        <div className="space-y-3">
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#cda45e] block">
            03 / PRIVATE CONSULTATION & ON-SITE VISITS
          </span>
          <h2 className="font-serif text-2xl text-white font-normal uppercase">
            On-Site Protocols
          </h2>
          <p>
            Private site walks across the 24-acre canopy terrain in Chennai are conducted strictly
            by appointment under the supervision of authorized client directors. Sturdy footwear
            is advised when traversing unpaved natural trails and bioswale observation decks.
          </p>
        </div>

        {/* Section 4 */}
        <div className="space-y-3">
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#cda45e] block">
            04 / INTELLECTUAL PROPERTY
          </span>
          <h2 className="font-serif text-2xl text-white font-normal uppercase">
            Design Copyright
          </h2>
          <p>
            All architectural drawings, SVG vector blueprints, visual layouts, editorial typography,
            and brand assets are the exclusive intellectual property of Aarvana Developers.
            Unauthorized reproduction, redistribution, or commercial use is strictly prohibited.
          </p>
        </div>

        {/* Section 5 */}
        <div className="space-y-3 pt-6 border-t border-stone-800">
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#cda45e] block">
            05 / GOVERNING JURISDICTION
          </span>
          <h2 className="font-serif text-2xl text-white font-normal uppercase">
            Legal Jurisdiction
          </h2>
          <p>
            Any advisory consultations or formal agreements are governed by the laws of Tamil Nadu,
            India, under the exclusive jurisdiction of the competent courts in Chennai.
          </p>
          <div className="text-xs font-mono text-stone-400 pt-2 space-y-1">
            <p>Aarvana Developers Legal Advisory</p>
            <p>The Pavilion, Old Mahabalipuram Road, Sholinganallur, Chennai 600119</p>
            <p>legal@aarvanadevelopers.com</p>
          </div>
        </div>
      </section>
    </article>
  );
}
