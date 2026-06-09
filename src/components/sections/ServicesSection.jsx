import SectionTitle from '@/components/common/SectionTitle';
import ServiceCard from '@/components/cards/ServiceCard';
import { services } from '@/data/services';

/**
 * Home services grid. `limit` caps how many cards are shown.
 */
export default function ServicesSection({ limit = 6 }) {
  return (
    <section className="section bg-muted">
      <div className="container">
        <SectionTitle
          subtitle="What We Do"
          title="The Services We Offer For You"
          description="Comprehensive industrial and construction services tailored to your project, from concept to completion."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, limit).map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
