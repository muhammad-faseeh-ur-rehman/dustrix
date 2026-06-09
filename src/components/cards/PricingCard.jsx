import Button from '@/components/common/Button';
import { Icon } from '@/utils/icons.jsx';

/**
 * Pricing plan card. The `featured` plan is visually emphasised.
 */
export default function PricingCard({ plan }) {
  return (
    <article
      className={`relative overflow-hidden rounded-lg border p-8 transition-transform duration-300 hover:-translate-y-2 ${
        plan.featured
          ? 'border-primary bg-secondary text-white'
          : 'border-gray-100 bg-white'
      }`}
    >
      {plan.featured && (
        <span className="absolute right-0 top-6 rounded-l-md bg-accent px-3 py-1 text-xs font-semibold uppercase text-secondary">
          Popular
        </span>
      )}

      <h3
        className={`text-lg font-semibold uppercase tracking-wide ${
          plan.featured ? 'text-white' : 'text-heading'
        }`}
      >
        {plan.name}
      </h3>

      <div className="mt-4 flex items-end gap-1">
        <span className="text-4xl font-bold text-accent">${plan.price}</span>
        <span className={plan.featured ? 'text-white/70' : 'text-body'}>
          / {plan.period}
        </span>
      </div>

      <ul className="mt-6 space-y-3 text-sm">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <Icon name="FaCheck" className="text-accent" />
            <span className={plan.featured ? 'text-white/80' : 'text-body'}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Button
        to="/contact"
        variant={plan.featured ? 'primary' : 'outline'}
        className="mt-8 w-full"
      >
        Get Started
      </Button>
    </article>
  );
}
