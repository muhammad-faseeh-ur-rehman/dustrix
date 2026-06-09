import { siteConfig } from '@/data/site';
import { Icon } from '@/utils/icons.jsx';

/**
 * Amber call-to-quote band sitting between the services and FAQ sections.
 */
export default function QuoteBanner() {
  return (
    <section className="container -mt-10">
      <div className="flex flex-col items-center justify-between gap-6 rounded-lg bg-primary px-8 py-8 sm:flex-row md:px-12">
        <h3 className="text-center font-heading text-2xl font-bold text-secondary sm:text-left md:text-3xl">
          Get an easy quotation for your industry
        </h3>
        <a
          href={siteConfig.contact.phoneHref}
          className="flex items-center gap-4"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-secondary">
            <Icon name="FaPhoneAlt" />
          </span>
          <span>
            <span className="block font-bold text-secondary">
              {siteConfig.contact.phone}
            </span>
            <span className="block text-sm text-secondary/70">
              {siteConfig.contact.phoneLabel}
            </span>
          </span>
        </a>
      </div>
    </section>
  );
}
