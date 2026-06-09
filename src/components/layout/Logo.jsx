import { Link } from 'react-router-dom';
import { siteConfig } from '@/data/site';

/**
 * Brand logo — a golden gear/cog mark followed by the two-tone "Dustrix."
 * wordmark ("Dust" in the heading colour, "rix." in brand gold).
 * `light` renders the leading text white for dark backgrounds.
 */
export default function Logo({ light = false }) {
  return (
    <Link
      to="/"
      className="flex items-center gap-2"
      aria-label={siteConfig.name}
    >
      <svg viewBox="0 0 512 512" className="h-9 w-9" aria-hidden="true">
        <path
          fill="#febc35"
          d="M256 96c-14 0-26 4-26 4l-8 38a96 96 0 0 0-28 16l-36-14s-18 18-26 32l24 30a96 96 0 0 0-10 32l-38 8s-4 14-4 26 4 26 4 26l38 8a96 96 0 0 0 10 32l-24 30c8 14 16 24 26 32l36-14a96 96 0 0 0 28 16l8 38s12 4 26 4 26-4 26-4l8-38a96 96 0 0 0 28-16l36 14c10-8 18-18 26-32l-24-30a96 96 0 0 0 10-32l38-8s4-14 4-26-4-26-4-26l-38-8a96 96 0 0 0-10-32l24-30c-8-14-16-24-26-32l-36 14a96 96 0 0 0-28-16l-8-38s-12-4-26-4Zm0 96a64 64 0 1 1 0 128 64 64 0 0 1 0-128Z"
        />
        <circle cx="256" cy="256" r="40" fill="#001659" />
      </svg>
      <span className="text-2xl font-extrabold tracking-tight">
        <span className={light ? 'text-white' : 'text-heading'}>Dust</span>
        <span className="text-primary">rix.</span>
      </span>
    </Link>
  );
}
