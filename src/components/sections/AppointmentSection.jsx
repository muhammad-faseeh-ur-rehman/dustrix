import SectionTitle from '@/components/common/SectionTitle';
import Button from '@/components/common/Button';
import { pricingPlans } from '@/data/pricing';
import { Icon } from '@/utils/icons.jsx';

/**
 * "Make Appointment" — a split section with a promo image and a short
 * appointment form, alongside a highlighted pricing/notice board. Mirrors
 * the original Dustrix make-appointment-wrapper.
 */
export default function AppointmentSection() {
  const featured = pricingPlans.find((p) => p.featured) ?? pricingPlans[0];

  return (
    <section className="section">
      <div className="container grid items-center gap-12 lg:grid-cols-2">
        {/* Form */}
        <div>
          <SectionTitle
            align="left"
            subtitle="Make Appointment"
            title="Get Your Plan Done"
            description="Book a free consultation with our engineers and get a tailored plan for your next project."
          />

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 grid gap-4 sm:grid-cols-2"
          >
            <input
              placeholder="Your Name"
              required
              className="rounded-md border border-gray-200 bg-muted px-4 py-3 text-sm outline-none focus:border-accent"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              className="rounded-md border border-gray-200 bg-muted px-4 py-3 text-sm outline-none focus:border-accent"
            />
            <input
              placeholder="Phone Number"
              className="rounded-md border border-gray-200 bg-muted px-4 py-3 text-sm outline-none focus:border-accent"
            />
            <input
              type="date"
              className="rounded-md border border-gray-200 bg-muted px-4 py-3 text-sm text-body outline-none focus:border-accent"
            />
            <textarea
              rows={3}
              placeholder="Tell us about your project..."
              className="rounded-md border border-gray-200 bg-muted px-4 py-3 text-sm outline-none focus:border-accent sm:col-span-2"
            />
            <Button type="submit" className="sm:col-span-2 sm:w-max">
              Make Appointment
            </Button>
          </form>
        </div>

        {/* Pricing / notice board */}
        <div className="relative overflow-hidden rounded-lg bg-secondary p-8 text-white lg:p-10">
          <span className="subtitle text-accent">
            <span className="h-px w-8 bg-primary" />
            {featured.name}
          </span>
          <div className="flex items-end gap-1">
            <span className="text-5xl font-bold text-accent">
              ${featured.price}
            </span>
            <span className="mb-1 text-white/70">/ {featured.period}</span>
          </div>

          <ul className="mt-8 space-y-4">
            {featured.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-secondary">
                  <Icon name="FaCheck" className="text-xs" />
                </span>
                <span className="text-white/85">{feature}</span>
              </li>
            ))}
          </ul>

          <Button to="/contact" className="mt-8 w-full">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}
