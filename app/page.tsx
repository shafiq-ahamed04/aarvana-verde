import Hero from '@/components/home/Hero';
import ProjectIntro from '@/components/home/ProjectIntro';
import ArchitecturalStory from '@/components/home/ArchitecturalStory';
import LifestyleSection from '@/components/home/LifestyleSection';
import ResidenceExplorer from '@/components/home/ResidenceExplorer';
import Amenities from '@/components/home/Amenities';
import LocationSection from '@/components/home/LocationSection';
import DeveloperStory from '@/components/home/DeveloperStory';
import ProjectCollection from '@/components/home/ProjectCollection';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';
import FinalCTA from '@/components/home/FinalCTA';

/**
 * Aarvana Verde Flagship Homepage.
 * Composes the 12-stage continuous architectural narrative.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <ProjectIntro />
      <ArchitecturalStory />
      <LifestyleSection />
      <ResidenceExplorer />
      <Amenities />
      <LocationSection />
      <DeveloperStory />
      <ProjectCollection />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
