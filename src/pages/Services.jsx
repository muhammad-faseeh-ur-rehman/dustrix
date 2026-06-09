import PageBanner from '@/components/common/PageBanner';
import SectionTitle from '@/components/common/SectionTitle';
import ServiceCard from '@/components/cards/ServiceCard';
import CtaSection from '@/components/sections/CtaSection';
import { services, serviceDetailContent } from '@/data/services';

const processImages = [
  'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=500&q=80',
];

/**
 * Services listing page — the "What We Do" grid followed by the company
 * work-process steps, then a closing call to action.
 */
export default function Services() {
  return (
    <>
      <PageBanner title="What We Do" crumbs={[{ label: 'Services' }]} />

      <section className="section">
        <div className="container grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      {/* Our Company Work Process */}
      <section className="section bg-muted">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <img
              src={processImages[0]}
              alt="Work process"
              loading="lazy"
              className="w-3/4 rounded-lg object-cover"
            />
            <img
              src={processImages[1]}
              alt="Work process detail"
              loading="lazy"
              className="absolute bottom-0 right-0 w-1/2 rounded-lg border-8 border-muted object-cover"
            />
          </div>

          <div>
            <SectionTitle
              align="left"
              subtitle="Process"
              title="Our Company Work Process."
              className="mb-8"
            />
            <ul className="space-y-7">
              {serviceDetailContent.process.map((item) => (
                <li key={item.step} className="flex gap-5">
                  <span className="font-heading text-5xl font-bold text-primary/40">
                    {item.step}
                  </span>
                  <span>
                    <h3 className="text-lg font-bold text-heading">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm">{item.text}</p>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
