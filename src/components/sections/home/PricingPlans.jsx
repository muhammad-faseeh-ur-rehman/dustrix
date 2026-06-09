import { useState } from 'react';
import { pricingPlans } from '@/data/pricing';
import { Icon } from '@/utils/icons.jsx';

/* The middle (featured) plan is active by default. */
const defaultActive = pricingPlans.findIndex((plan) => plan.featured);

/** A single pricing card; `active` renders it dark, taller and lifted. */
function PlanCard({ plan, active, onMouseEnter }) {
  return (
    <article
      onMouseEnter={onMouseEnter}
      className={`rounded-lg px-8 py-10 shadow-card transition-all duration-300 ${
        active
          ? 'bg-[#0b0b0b] text-white lg:-my-6 lg:py-16'
          : 'bg-white text-heading'
      }`}
    >
      {/* Price */}
      <div className="flex items-start gap-1">
        <span className="mt-3 text-2xl font-bold text-primary">$</span>
        <span className="font-heading text-6xl font-extrabold text-primary">
          {plan.price}
        </span>
        <span className="mt-2 text-xl font-bold text-primary">
          {plan.cents}
        </span>
      </div>

      <h3 className={`mt-5 text-xl font-bold ${active ? 'text-white' : ''}`}>
        {plan.name}
      </h3>
      <p className={`text-sm ${active ? 'text-white/60' : 'text-body'}`}>
        {plan.subtitle}
      </p>

      <ul className="mt-7 space-y-3 text-sm">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <Icon name="FaCheck" className="text-primary" />
            <span className={active ? 'text-white/80' : 'text-body'}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className={`mt-9 w-full rounded-md px-6 py-4 text-sm font-bold transition-colors ${
          active
            ? 'bg-primary text-secondary hover:bg-primary-dark'
            : 'bg-[#0b0b0b] text-white hover:bg-primary hover:text-secondary'
        }`}
      >
        Get Your Plan Done
      </button>
    </article>
  );
}

/**
 * "Price & Plans" — three plans on a light surface with a faded "Planning"
 * watermark. The middle plan is active by default; hovering any card moves the
 * active (dark, lifted) treatment to that card and reverts the others.
 */
export default function PricingPlans() {
  const [active, setActive] = useState(defaultActive);

  return (
    <section className="section bg-muted">
      <div className="container">
        <div className="relative mb-16 text-center">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-heading text-7xl font-extrabold text-black/[0.03] md:text-8xl"
          >
            Planning
          </span>
          <span className="subtitle relative justify-center">
            <span className="h-px w-8 bg-primary" />
            Easy Planning
          </span>
          <h2 className="relative text-4xl font-bold text-heading md:text-5xl">
            Price &amp; Plans
          </h2>
        </div>

        <div
          className="grid items-center gap-7 lg:grid-cols-3"
          onMouseLeave={() => setActive(defaultActive)}
        >
          {pricingPlans.map((plan, index) => (
            <PlanCard
              key={index}
              plan={plan}
              active={index === active}
              onMouseEnter={() => setActive(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
