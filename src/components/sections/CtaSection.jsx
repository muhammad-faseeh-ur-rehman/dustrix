import Button from '@/components/common/Button';
import { siteConfig } from '@/data/site';
import { Icon } from '@/utils/icons.jsx';
import { ctaBg } from '@/data/images';

/**
 * Call-to-action band encouraging visitors to request a quote.
 */
export default function CtaSection() {
  return (
    <section
      className="relative bg-cover bg-center py-16"
      style={{
        backgroundImage: `url(${ctaBg})`,
      }}
    >
      <div className="absolute inset-0 bg-primary/95" />
      <div className="container relative z-10 flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div>
          <h2 className="text-3xl font-bold text-secondary">
            Get An Easy Quotation For Your Industry
          </h2>
          <p className="mt-2 text-secondary/80">
            Let&apos;s discuss your next project — our experts are ready to help.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <a
            href={siteConfig.contact.phoneHref}
            className="flex items-center gap-3 text-secondary"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-secondary">
              <Icon name="FaPhoneAlt" />
            </span>
            <span>
              <span className="block text-sm text-secondary/70">Call Us Now</span>
              <span className="font-semibold">{siteConfig.contact.phone}</span>
            </span>
          </a>
          <Button to="/contact" variant="dark">
            Make Appointment
          </Button>
        </div>
      </div>
    </section>
  );
}
