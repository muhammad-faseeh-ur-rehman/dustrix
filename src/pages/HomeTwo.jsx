import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import FeatureSection from '@/components/sections/FeatureSection';
import CounterSection from '@/components/sections/CounterSection';
import PricingSection from '@/components/sections/PricingSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import CtaSection from '@/components/sections/CtaSection';
import BrandSection from '@/components/sections/BrandSection';
import PageBanner from '@/components/common/PageBanner';
import { heroSlides } from '@/data/images';

/**
 * Home (variant two) — a pricing-led layout sharing the same section library.
 */
export default function HomeTwo() {
  return (
    <>
      <PageBanner
        title="Welcome To Dustrix"
        crumbs={[{ label: 'Home Two' }]}
        image={heroSlides[0]}
      />
      <AboutSection />
      <FeatureSection />
      <ServicesSection limit={3} />
      <CounterSection />
      <PricingSection />
      <ProjectsSection limit={3} />
      <TestimonialSection />
      <CtaSection />
      <BrandSection />
    </>
  );
}
