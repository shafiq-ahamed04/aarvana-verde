import { createMetadata } from '@/lib/metadata';
import AboutView from '@/components/about/AboutView';

export const metadata = createMetadata({
  title: 'About Us — Architectural Integrity Over Scale',
  description:
    'Learn about Aarvana Developers — our architectural philosophy, enduring materiality, native landscape preservation, and commitment to low-density residential sanctuaries.',
  path: '/about',
});

export default function AboutPage() {
  return <AboutView />;
}
