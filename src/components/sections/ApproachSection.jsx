import { Link } from 'react-router-dom';
import SectionTitle from '@/components/common/SectionTitle';
import { approachCards } from '@/data/approach';
import { Icon } from '@/utils/icons.jsx';

/**
 * "Our Approach" — three image cards (Vision / Mission / Approach) with a
 * dark overlay and a hover reveal, mirroring the original Dustrix layout.
 */
export default function ApproachSection() {
  return (
    <section className="section bg-muted">
      <div className="container">
        <SectionTitle
          subtitle="Our Approach"
          title="Capitalise On How We Work"
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {approachCards.map((card) => (
            <article
              key={card.title}
              className="group relative h-[420px] overflow-hidden rounded-lg"
            >
              <img
                src={card.image}
                alt={card.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                <h3 className="text-2xl font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-2 max-h-0 overflow-hidden text-sm text-white/80 opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100">
                  {card.text}
                </p>
                <Link
                  to="/about"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-accent hover:gap-3"
                >
                  Read More
                  <Icon name="FaArrowRight" className="text-xs" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
