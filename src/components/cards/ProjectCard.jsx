import { Link } from 'react-router-dom';
import { Icon } from '@/utils/icons.jsx';

/**
 * Portfolio project card with hover overlay linking to project details.
 */
export default function ProjectCard({ project }) {
  return (
    <article className="group relative overflow-hidden rounded-lg">
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-secondary/90 via-secondary/30 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="text-xs font-semibold uppercase tracking-widest text-accent">
          {project.category}
        </span>
        <h3 className="mt-1 text-xl font-semibold text-white">
          <Link
            to={`/projects/${project.slug}`}
            className="hover:text-accent"
          >
            {project.title}
          </Link>
        </h3>
        <Link
          to={`/projects/${project.slug}`}
          aria-label={`View ${project.title}`}
          className="mt-4 flex h-10 w-10 items-center justify-center rounded-md bg-accent text-secondary hover:bg-accent-dark"
        >
          <Icon name="FaArrowRight" />
        </Link>
      </div>
    </article>
  );
}
