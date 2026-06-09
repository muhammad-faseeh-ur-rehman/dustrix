import { Link } from 'react-router-dom';
import { Icon } from '@/utils/icons.jsx';

/**
 * News/blog post card with meta info and a link to the post details page.
 */
export default function BlogCard({ post }) {
  return (
    <article className="group overflow-hidden rounded-lg bg-white shadow-card">
      <div className="relative h-56 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute left-4 top-4 rounded bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-secondary">
          {post.category}
        </span>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-4 text-xs text-body">
          <span className="flex items-center gap-1">
            <Icon name="FaClock" className="text-accent" />
            {post.date}
          </span>
          <span>By {post.author}</span>
        </div>
        <h3 className="mt-3 text-lg font-semibold leading-snug">
          <Link to={`/news/${post.slug}`} className="hover:text-accent">
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm">{post.excerpt}</p>
        <Link
          to={`/news/${post.slug}`}
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-accent hover:gap-3"
        >
          Read More
          <Icon name="FaArrowRight" className="text-xs" />
        </Link>
      </div>
    </article>
  );
}
