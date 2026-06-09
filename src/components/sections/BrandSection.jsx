import { sponsors } from '@/data/stats';

/**
 * Sponsor / client wordmark strip — rendered as muted text that lifts to the
 * heading colour on hover, mirroring the original grayscale logo row.
 */
export default function BrandSection() {
  return (
    <section className="border-y border-gray-100 py-12">
      <div className="container">
        <div className="grid grid-cols-2 items-center gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {sponsors.map((name) => (
            <span
              key={name}
              className="text-center font-heading text-xl font-bold tracking-tight text-gray-300 transition-colors duration-300 hover:text-heading"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
