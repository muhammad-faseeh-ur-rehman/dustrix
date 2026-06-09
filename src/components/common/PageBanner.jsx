import { Link } from 'react-router-dom';
import { Icon } from '@/utils/icons.jsx';
import { pageBanner } from '@/data/images';

/**
 * Reusable inner-page hero/banner with a breadcrumb trail above a large,
 * left-aligned title — mirrors the original Dustrix page banner.
 *
 * @param {string} title - page heading
 * @param {Array<{label:string, path?:string}>} crumbs - breadcrumb items
 * @param {string} image - background image url
 */
export default function PageBanner({
  title,
  crumbs = [],
  image = pageBanner,
}) {
  return (
    <section
      className="relative flex h-[300px] items-end bg-cover bg-center md:h-[360px]"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-[#0b1f33]/70" />
      <div className="container relative z-10 pb-14">
        <nav className="mb-3 flex items-center gap-2 text-sm font-medium text-white/80">
          <Link to="/" className="hover:text-primary">
            Home
          </Link>
          {crumbs.map((crumb, index) => (
            <span key={crumb.label} className="flex items-center gap-2">
              <Icon name="FaAngleRight" className="text-xs text-primary" />
              {crumb.path && index < crumbs.length - 1 ? (
                <Link to={crumb.path} className="hover:text-primary">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-primary">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
        <h1 className="text-4xl font-extrabold text-white md:text-6xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
