import { Link, useParams } from 'react-router-dom';
import PageBanner from '@/components/common/PageBanner';
import Button from '@/components/common/Button';
import NotFound from './NotFound';
import { posts } from '@/data/blog';
import { Icon } from '@/utils/icons.jsx';

/**
 * Dynamic news/blog article page with a sidebar of recent posts and a
 * (mock) comment form.
 */
export default function NewsDetails() {
  const { slug } = useParams();
  const post = posts.find((item) => item.slug === slug);

  if (!post) return <NotFound />;

  const recent = posts.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <>
      <PageBanner
        title="News Details"
        crumbs={[{ label: 'News', path: '/news' }, { label: post.title }]}
      />

      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-3">
          {/* Article */}
          <article className="lg:col-span-2">
            <img
              src={post.image}
              alt={post.title}
              className="mb-6 w-full rounded-lg"
            />
            <div className="flex flex-wrap items-center gap-4 text-sm text-body">
              <span className="rounded bg-accent px-3 py-1 text-xs font-semibold uppercase text-secondary">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Icon name="FaClock" className="text-accent" />
                {post.date}
              </span>
              <span>By {post.author}</span>
            </div>

            <h1 className="mt-4 text-3xl font-bold">{post.title}</h1>
            <p className="mt-4">{post.excerpt}</p>
            <p className="mt-4">
              Our engineering teams combine field experience with rigorous
              planning to solve complex challenges. This article explores the
              practical steps, the technology involved, and the lasting impact
              of the work on the communities we serve.
            </p>
            <blockquote className="my-8 border-l-4 border-primary bg-muted p-6 italic text-heading">
              “Great engineering is invisible — it simply works, safely and
              reliably, for decades.”
            </blockquote>
            <p>
              From initial survey to final handover, every decision is guided by
              safety, sustainability and quality. We believe that the best
              results come from a partnership-driven approach with our clients.
            </p>

            {/* Comment form */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold">Leave A Comment</h3>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-6 space-y-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    placeholder="Your Name"
                    required
                    className="rounded-md border border-gray-200 bg-muted px-4 py-3 text-sm outline-none focus:border-primary"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    className="rounded-md border border-gray-200 bg-muted px-4 py-3 text-sm outline-none focus:border-primary"
                  />
                </div>
                <textarea
                  rows={4}
                  placeholder="Write your comment..."
                  required
                  className="w-full rounded-md border border-gray-200 bg-muted px-4 py-3 text-sm outline-none focus:border-primary"
                />
                <Button type="submit">Post Comment</Button>
              </form>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="rounded-lg bg-muted p-6">
              <h4 className="mb-4 text-lg font-semibold">Recent Posts</h4>
              <ul className="space-y-4">
                {recent.map((item) => (
                  <li key={item.slug} className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-16 w-16 shrink-0 rounded-md object-cover"
                    />
                    <div>
                      <span className="text-xs text-body">{item.date}</span>
                      <Link
                        to={`/news/${item.slug}`}
                        className="block text-sm font-semibold leading-snug hover:text-accent"
                      >
                        {item.title}
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
