import PageBanner from '@/components/common/PageBanner';
import ServicesSection from '@/components/sections/ServicesSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import CounterSection from '@/components/sections/CounterSection';
import TeamSection from '@/components/sections/TeamSection';
import FaqAccordion from '@/components/sections/FaqAccordion';
import SectionTitle from '@/components/common/SectionTitle';
import BlogSection from '@/components/sections/BlogSection';
import CtaSection from '@/components/sections/CtaSection';
import { heroSlides, faqImage } from '@/data/images';

/**
 * Home (variant three) — a services + FAQ focused layout.
 */
export default function HomeThree() {
  return (
    <>
      <PageBanner
        title="Welcome To Our Industry Website"
        crumbs={[{ label: 'Home Three' }]}
        image={heroSlides[1]}
      />
      <ServicesSection />
      <AboutSection />
      <CounterSection />
      <ProjectsSection limit={3} />

      <section className="section">
        <div className="container grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle
              align="left"
              subtitle="Get Answers"
              title="Frequently Asked Questions"
            />
            <p className="mt-4">
              Everything you need to know about working with Dustrix. Can&apos;t
              find your answer? Reach out to our team any time.
            </p>
            <img
              src={faqImage}
              alt="Our team at work"
              loading="lazy"
              className="mt-8 rounded-lg"
            />
          </div>
          <FaqAccordion />
        </div>
      </section>

      <TeamSection />
      <BlogSection />
      <CtaSection />
    </>
  );
}
