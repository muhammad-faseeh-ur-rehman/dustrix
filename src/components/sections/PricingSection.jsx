import SectionTitle from '@/components/common/SectionTitle';
import PricingCard from '@/components/cards/PricingCard';
import { pricingPlans } from '@/data/pricing';

/**
 * Pricing plans section.
 */
export default function PricingSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          subtitle="Pricing Plans"
          title="Choose The Right Plan"
          description="Transparent, flexible pricing built around the scale and scope of your project."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
