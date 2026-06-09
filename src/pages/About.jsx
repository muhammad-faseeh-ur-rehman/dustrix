import PageBanner from '@/components/common/PageBanner';
import AboutSection from '@/components/sections/AboutSection';
import FeatureSection from '@/components/sections/FeatureSection';
import CounterSection from '@/components/sections/CounterSection';
import TeamSection from '@/components/sections/TeamSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import CtaSection from '@/components/sections/CtaSection';
import BrandSection from '@/components/sections/BrandSection';

/**
 * About page — company story, stats, team and social proof.
 */
export default function About() {
  return (
    <>
      <PageBanner title="About Us" crumbs={[{ label: 'About Us' }]} />
      <AboutSection />
      <FeatureSection />
      <CounterSection />
      <TeamSection />
      <TestimonialSection />
      <CtaSection />
      <BrandSection />
    </>
  );
}
