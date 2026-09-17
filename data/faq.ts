export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'residence' | 'project' | 'process' | 'legal';
}

export const faqs: FAQItem[] = [
  {
    id: 'config',
    question: 'What residence configurations and floor areas are available at Aarvana Verde?',
    answer: 'Aarvana Verde offers an exclusive limited collection of thirty-six residences divided into 3 BHK Pavilion Residences (2,450 sq.ft.) and 4 BHK Courtyard Villas (3,850 sq.ft.). Every home features double-height volumes, deep covered verandas, and panoramic garden views.',
    category: 'residence',
  },
  {
    id: 'possession',
    question: 'What is the projected possession schedule?',
    answer: 'Handover and possession are scheduled for 2028. Construction is being executed in partnership with Tier-1 civil engineering contractors with pre-scheduled milestone audits.',
    category: 'process',
  },
  {
    id: 'location',
    question: 'Where is Aarvana Verde situated in Chennai?',
    answer: 'Verde is set on a secluded 24-acre forested ridge just off Old Mahabalipuram Road (OMR), shielded from urban traffic while maintaining an 8-minute commute to international schools and 12 minutes to primary IT business parks.',
    category: 'project',
  },
  {
    id: 'density',
    question: 'How does the density compare to standard urban developments?',
    answer: 'With only 36 residences spread across 24 acres, Verde boasts one of the lowest residential densities in South India—less than 1.5 homes per acre. Over 78% of the terrain remains preserved forest, water courts, and walking groves.',
    category: 'project',
  },
  {
    id: 'customization',
    question: 'Can internal layouts or finishes be customized?',
    answer: 'Yes. Our private client architectural atelier works with every patron prior to structural floor slab casting to fine-tune walk-in closets, kitchen worktriangles, home automation, and material palettes.',
    category: 'residence',
  },
  {
    id: 'amenities',
    question: 'What wellness and lifestyle spaces are provided for residents?',
    answer: 'Residents enjoy eighteen dedicated private spaces including the stone reflecting courtyard, private residents’ club with screening salon, 50-meter cantilevered infinity lap pool, Technogym fitness pavilion, stargazing rooftop observatory, and children’s nature park.',
    category: 'residence',
  },
  {
    id: 'site-visit',
    question: 'How do I schedule an experiential private walkthrough?',
    answer: 'Private walkthroughs of the experience gallery, landscape conservatory, and full-scale mock pavilion are hosted by appointment only to ensure discretion and dedicated architectural consultation.',
    category: 'process',
  },
  {
    id: 'rera',
    question: 'What is the regulatory and RERA registration status?',
    answer: 'Aarvana Verde is fully sanctioned under Tamil Nadu Real Estate Regulatory Authority (TNRERA) registration number TN/RERA/2024/0942. All approvals, environmental clearances, and title deeds are available for verification at our pavilion.',
    category: 'legal',
  },
];
