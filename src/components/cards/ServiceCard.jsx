import { Link } from 'react-router-dom';
import { Icon } from '@/utils/icons.jsx';

/**
 * Service card with image, icon badge and a "read more" link to the
 * service-details page.
 */
export default function ServiceCard({ service }) {
  return (
    <article className="group overflow-hidden rounded-lg bg-white shadow-card transition-transform duration-300 hover:-translate-y-2">
      <div className="relative h-56 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-md bg-primary text-xl text-secondary shadow-lg">
          <Icon name={service.icon} />
        </span>
      </div>

      <div className="border border-t-0 border-gray-100 px-6 pb-7 pt-6">
        <h3 className="text-xl font-bold">
          <Link
            to={`/services/${service.slug}`}
            className="hover:text-primary-dark"
          >
            {service.title}
          </Link>
        </h3>
        <p className="mt-3 text-sm">{service.excerpt}</p>
        <Link
          to={`/services/${service.slug}`}
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-heading hover:gap-3 hover:text-primary-dark"
        >
          Read More
          <Icon name="FaArrowRight" className="text-xs" />
        </Link>
      </div>
    </article>
  );
}
