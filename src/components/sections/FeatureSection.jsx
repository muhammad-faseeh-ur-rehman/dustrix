import { features } from '@/data/stats';
import { Icon } from '@/utils/icons.jsx';

/**
 * Three-up feature highlight strip rendered over a dark band.
 */
export default function FeatureSection() {
  return (
    <section className="bg-secondary-light py-14">
      <div className="container grid gap-8 md:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex items-start gap-5 rounded-lg p-6 transition-colors hover:bg-white/5"
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-accent text-2xl text-secondary">
              <Icon name={feature.icon} />
            </span>
            <div>
              <h3 className="text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-white/60">{feature.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
