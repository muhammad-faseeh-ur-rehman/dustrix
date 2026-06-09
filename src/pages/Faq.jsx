import PageBanner from '@/components/common/PageBanner';
import FaqAccordion from '@/components/sections/FaqAccordion';
import SectionTitle from '@/components/common/SectionTitle';
import CtaSection from '@/components/sections/CtaSection';

/**
 * FAQ page.
 */
export default function Faq() {
  return (
    <>
      <PageBanner title="FAQ" crumbs={[{ label: 'FAQ' }]} />

      <section className="section">
        <div className="container max-w-3xl">
          <SectionTitle
            subtitle="Get Answers"
            title="Frequently Asked Questions"
            description="Find quick answers to the questions we hear most often."
            className="mb-12"
          />
          <FaqAccordion />
        </div>
      </section>

      <CtaSection />
    </>
  );
}
