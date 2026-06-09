import HomeHero from '@/components/sections/home/HomeHero';
import AboutExperience from '@/components/sections/home/AboutExperience';
import WhatWeDo from '@/components/sections/home/WhatWeDo';
import QuoteBanner from '@/components/sections/home/QuoteBanner';
import FaqSection from '@/components/sections/home/FaqSection';
import CaseStudy from '@/components/sections/home/CaseStudy';
import PricingPlans from '@/components/sections/home/PricingPlans';
import BusinessAnalytics from '@/components/sections/home/BusinessAnalytics';
import NewsletterBand from '@/components/sections/home/NewsletterBand';
import BlogInsights from '@/components/sections/home/BlogInsights';

/**
 * Home (variant one) — section-for-section recreation of the original Dustrix
 * "Global Automotive" landing page.
 */
export default function Home() {
  return (
    <>
      <HomeHero />
      <AboutExperience />
      <WhatWeDo />
      <QuoteBanner />
      <FaqSection />
      <CaseStudy />
      <PricingPlans />
      <BusinessAnalytics />
      <NewsletterBand />
      <BlogInsights />
    </>
  );
}
