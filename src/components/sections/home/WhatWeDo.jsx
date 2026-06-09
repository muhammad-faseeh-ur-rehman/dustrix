import { Link } from 'react-router-dom';
import { Icon } from '@/utils/icons.jsx';

const cards = [
  { icon: 'FaTools', title: 'Quick Coordinate E-business' },
  { icon: 'FaCogs', title: 'Quick Coordinate E-business' },
  { icon: 'FaBrain', title: 'Quick Coordinate E-business' },
  { icon: 'FaLightbulb', title: 'Quick Coordinate E-business' },
];

/**
 * "What We Do" — a light section with a faded "Services" watermark behind the
 * heading and four icon cards, mirroring the original Dustrix layout.
 */
export default function WhatWeDo() {
  return (
    <section className="section bg-muted">
      <div className="container">
        {/* Heading with watermark */}
        <div className="relative mb-14 text-center">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-heading text-7xl font-extrabold text-black/[0.03] md:text-8xl"
          >
            Services
          </span>
          <span className="subtitle relative justify-center">
            <span className="h-px w-8 bg-primary" />
            Our Services
          </span>
          <h2 className="relative text-4xl font-bold text-heading md:text-5xl">
            What We Do
          </h2>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => (
            <article
              key={index}
              className="group rounded-lg bg-white px-6 py-10 text-center shadow-card transition-transform duration-300 hover:-translate-y-2"
            >
              <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary text-3xl text-secondary">
                <Icon name={card.icon} />
              </span>
              <h3 className="mt-6 text-lg font-bold leading-snug text-heading">
                {card.title}
              </h3>
              <Link
                to="/services"
                aria-label="Read more"
                className="mx-auto mt-6 flex h-10 w-10 items-center justify-center rounded-md bg-muted text-body transition-colors group-hover:bg-primary group-hover:text-secondary"
              >
                <Icon name="FaArrowRight" className="text-xs" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
