import SectionTitle from '@/components/common/SectionTitle';
import BlogCard from '@/components/cards/BlogCard';
import { posts } from '@/data/blog';

/**
 * Home latest-news preview grid.
 */
export default function BlogSection({ limit = 3 }) {
  return (
    <section className="section bg-muted">
      <div className="container">
        <SectionTitle
          subtitle="News & Blog"
          title="Latest News & Insights"
          description="Stay up to date with the latest from the world of construction and industrial engineering."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, limit).map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
