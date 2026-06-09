import { Link } from 'react-router-dom';
import Logo from './Logo';
import { siteConfig } from '@/data/site';
import { posts } from '@/data/blog';
import { Icon } from '@/utils/icons.jsx';

const newsFeed = posts.slice(0, 3).map((post) => ({
  ...post,
  feedTitle: 'The Most Successful Engineering Contractor',
  feedDate: '24th November 2020',
}));

/** A single "Get In Touch" phone block with a gold rounded icon. */
function TouchItem() {
  return (
    <li className="flex items-center gap-4">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-secondary">
        <Icon name="FaPhoneAlt" />
      </span>
      <span>
        <span className="block text-sm text-white/60">Phone Number</span>
        <span className="block font-bold text-white">
          {siteConfig.contact.footerPhone}
        </span>
      </span>
    </li>
  );
}

/**
 * Global footer — four columns (brand summary, news feed, newsletter and
 * contact) on black, followed by the gold copyright bar with a centred logo
 * tab and a back-to-top control. Mirrors the original Dustrix footer.
 */
export default function Footer() {
  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#0b0b0b] text-white/70">
      <div className="container grid gap-10 py-20 sm:grid-cols-2 lg:grid-cols-4">
        {/* About Us */}
        <div>
          <h4 className="mb-6 text-lg font-bold text-white">About Us</h4>
          <p className="text-sm leading-relaxed">{siteConfig.description}</p>
          <div className="mt-6 flex gap-3">
            {siteConfig.social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-md bg-white/5 text-white transition-colors hover:bg-primary hover:text-secondary"
              >
                <Icon name={item.icon} className="text-sm" />
              </a>
            ))}
          </div>
        </div>

        {/* News Feeds */}
        <div>
          <h4 className="mb-6 text-lg font-bold text-white">News Feeds</h4>
          <ul className="space-y-5">
            {newsFeed.map((post) => (
              <li key={post.slug} className="flex items-center gap-4">
                <img
                  src={post.image}
                  alt=""
                  className="h-14 w-16 shrink-0 rounded object-cover"
                />
                <span>
                  <span className="flex items-center gap-2 text-xs text-white/50">
                    <Icon name="FaRegCalendarAlt" />
                    {post.feedDate}
                  </span>
                  <Link
                    to={`/news/${post.slug}`}
                    className="mt-1 block text-sm font-semibold leading-snug text-white hover:text-primary"
                  >
                    {post.feedTitle}
                  </Link>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="mb-6 text-lg font-bold text-white">Newsletter</h4>
          <p className="text-sm">
            Subscribe our newsletter to get our latest updates &amp; news.
          </p>
          <form
            className="mt-5 flex overflow-hidden rounded-md"
            onSubmit={(e) => e.preventDefault()}
            aria-label="Newsletter signup"
          >
            <input
              type="email"
              required
              placeholder="Enter email address"
              className="w-full bg-white px-4 py-3 text-sm text-secondary placeholder-body outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="flex w-14 shrink-0 items-center justify-center bg-primary text-secondary transition-colors hover:bg-primary-dark"
            >
              <Icon name="FaPaperPlane" />
            </button>
          </form>
        </div>

        {/* Get In Touch */}
        <div>
          <h4 className="mb-6 text-lg font-bold text-white">Get In Touch</h4>
          <ul className="space-y-5">
            <TouchItem />
            <TouchItem />
            <TouchItem />
          </ul>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="relative bg-primary text-secondary">
        <div className="container flex h-16 items-center justify-between text-sm font-medium">
          <p>
            &copy; Copyright By {siteConfig.name} -{' '}
            {new Date().getFullYear()}
          </p>
          <button
            type="button"
            onClick={scrollTop}
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-md bg-white/30 text-secondary transition-colors hover:bg-white/50"
          >
            <Icon name="FaArrowUp" />
          </button>
        </div>

        {/* Centred logo tab */}
        <div className="absolute left-1/2 top-0 hidden -translate-x-1/2 -translate-y-1/2 rounded-md bg-white px-8 py-4 shadow-card lg:block">
          <Logo />
        </div>
      </div>
    </footer>
  );
}
