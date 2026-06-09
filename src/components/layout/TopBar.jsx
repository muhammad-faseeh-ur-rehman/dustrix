import { siteConfig } from '@/data/site';
import { languages } from '@/data/navigation';

/**
 * Slim utility bar above the main header — working hours, a terms link and a
 * language selector on a black strip. Mirrors the original Dustrix top-bar.
 */
export default function TopBar() {
  return (
    <div className="hidden bg-[#0b0b0b] text-sm text-white/70 md:block">
      <div className="container flex h-12 items-center justify-between">
        <div className="flex items-center gap-7">
          <span className="flex items-center gap-2">
            <span className="h-px w-5 bg-primary" />
            <span className="font-semibold text-white">Working hours:</span>
            {siteConfig.contact.hours}
          </span>
          <a
            href="#"
            className="flex items-center gap-2 hover:text-primary"
          >
            <span className="h-px w-5 bg-primary" />
            Terms &amp; Conditions
          </a>
        </div>

        <select
          aria-label="Select language"
          className="cursor-pointer bg-transparent text-white/70 outline-none [&>option]:text-secondary"
        >
          {languages.map((lang) => (
            <option key={lang}>{lang}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
