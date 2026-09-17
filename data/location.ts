import type { LocationPoint } from '@/types/project';

export interface LocationHighlight extends LocationPoint {
  minutes: string;
  tag: string;
  description: string;
}

/**
 * Key Location Highlights — "CONNECTED TO EVERYTHING. AWAY FROM THE NOISE."
 */
export const locationHighlights: LocationHighlight[] = [
  {
    name: 'International School',
    category: 'education',
    distance: '3.2 km',
    duration: '08 MIN',
    minutes: '08',
    tag: 'Education',
    description: 'Premier IB & Cambridge curriculum campuses accessible through serene tree-lined interior avenues.',
  },
  {
    name: 'IT Corridor',
    category: 'commercial',
    distance: '5.8 km',
    duration: '12 MIN',
    minutes: '12',
    tag: 'Business',
    description: 'Direct signal-free arterial connectivity to Tidel Park, World Trade Center, and major tech clusters.',
  },
  {
    name: 'Airport',
    category: 'transport',
    distance: '14.5 km',
    duration: '15 MIN',
    minutes: '15',
    tag: 'Transit',
    description: 'Swift radial access to Chennai International Airport via the upcoming express elevated corridor.',
  },
  {
    name: 'Metro Station',
    category: 'transport',
    distance: '2.1 km',
    duration: '06 MIN',
    minutes: '06',
    tag: 'Connectivity',
    description: 'Phase 2 Metro line terminal offering rapid, effortless transit into Chennai’s central heritage quarter.',
  },
  {
    name: 'Hospital',
    category: 'healthcare',
    distance: '4.6 km',
    duration: '10 MIN',
    minutes: '10',
    tag: 'Healthcare',
    description: 'State-of-the-art multi-specialty quaternary care institutes and emergency wellness facilities.',
  },
];
