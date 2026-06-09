import { Link } from 'react-router-dom';
import { posts } from '@/data/blog';
import { blogInsights } from '@/data/images';

const cards = posts.slice(0, 3).map((post, index) => ({
  slug: post.slug,
  image: blogInsights[index],
  day: '20',
  month: 'Jun',
  category: 'Industrial',
  author: 'Miranda H.',
  title: 'The dramatically visualize on customer directed',
}));

/**
 * "Blog Insights" — three news cards each with an amber date badge over the
 * image, a category/author line and a title.
 */
export default function BlogInsights() {
  return (
    <section className="section">
      <div className="container">
        <div className="mb-14 text-center">
          <span className="subtitle justify-center">
            <span className="h-px w-8 bg-primary" />
            News Feed
          </span>
          <h2 className="text-4xl font-bold text-heading md:text-5xl">
            Blog Insights
          </h2>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.slug}
              className="group overflow-hidden rounded-lg bg-white shadow-card"
            >
              <div className="relative">
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  className="h-56 w-full object-cover"
                />
                <span className="absolute bottom-0 right-5 translate-y-1/2 rounded-md bg-primary px-4 py-2 text-center text-secondary shadow-md">
                  <span className="block text-xl font-extrabold leading-none">
                    {card.day}
                  </span>
                  <span className="block text-xs font-semibold">
                    {card.month}
                  </span>
                </span>
              </div>

              <div className="px-6 pb-7 pt-9">
                <p className="text-sm text-body">
                  {card.category} /{' '}
                  <span className="font-semibold text-heading">
                    {card.author}
                  </span>
                </p>
                <h3 className="mt-2 text-xl font-bold leading-snug">
                  <Link
                    to={`/news/${card.slug}`}
                    className="text-heading hover:text-primary-dark"
                  >
                    {card.title}
                  </Link>
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
