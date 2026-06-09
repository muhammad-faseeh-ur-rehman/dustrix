import PageBanner from '@/components/common/PageBanner';
import BlogCard from '@/components/cards/BlogCard';
import { posts } from '@/data/blog';

/**
 * News / blog listing page.
 */
export default function News() {
  return (
    <>
      <PageBanner title="News & Blog" crumbs={[{ label: 'News' }]} />

      <section className="section">
        <div className="container grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}
