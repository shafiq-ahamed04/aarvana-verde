import { createMetadata } from '@/lib/metadata';
import ContactView from '@/components/contact/ContactView';

export const metadata = createMetadata({
  title: 'Contact Us — Private Client Advisory & Experience Gallery',
  description:
    'Schedule a private site visit walk across Aarvana Verde in Chennai or arrange an architectural consultation with our senior advisory team.',
  path: '/contact',
});

export default function ContactPage() {
  return <ContactView />;
}
