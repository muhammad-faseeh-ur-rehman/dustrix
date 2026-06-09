import PageBanner from '@/components/common/PageBanner';
import SectionTitle from '@/components/common/SectionTitle';
import ContactForm from '@/components/forms/ContactForm';
import { Icon } from '@/utils/icons.jsx';

const contactCards = [
  {
    icon: 'FaEnvelope',
    title: 'Email Address',
    subtitle: 'Sent mail asap anytime',
    lines: ['info@example.com', 'jobs@example.com'],
  },
  {
    icon: 'FaPhoneAlt',
    title: 'Phone Number',
    subtitle: 'call us asap anytime',
    lines: ['098-098-098-09', '+(098) 098-098-765'],
  },
  {
    icon: 'FaMapMarkerAlt',
    title: 'Office Address',
    subtitle: 'Sent mail asap anytime',
    lines: ['B2, Miranda City Tower', 'New York, US'],
  },
];

/**
 * Contact page — three info cards, a full-width map and the "Get In Touch"
 * message form. Mirrors the original Dustrix contact layout.
 */
export default function Contact() {
  return (
    <>
      <PageBanner title="Contact Us" crumbs={[{ label: 'Contact' }]} />

      {/* Info cards */}
      <section className="section">
        <div className="container">
          <div className="grid gap-7 lg:grid-cols-3">
            {contactCards.map((card) => (
              <div
                key={card.title}
                className="group rounded-lg bg-muted p-8 transition-shadow hover:shadow-card"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-xl text-primary-dark transition-colors group-hover:bg-primary group-hover:text-secondary">
                    <Icon name={card.icon} />
                  </span>
                  <span>
                    <h3 className="text-lg font-bold text-heading">
                      {card.title}
                    </h3>
                    <p className="text-sm text-body">{card.subtitle}</p>
                  </span>
                </div>
                <div className="mt-6 flex items-end justify-between">
                  <div className="space-y-1 text-sm text-body">
                    {card.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                  <span className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 text-body transition-colors group-hover:border-primary group-hover:text-primary-dark">
                    <Icon name="FaArrowRight" className="text-xs" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="container">
        <div className="overflow-hidden rounded-lg">
          <iframe
            title="Office location"
            src="https://www.google.com/maps?q=Melbourne%20VIC%20Australia&output=embed"
            className="h-[420px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* Get In Touch form */}
      <section className="section">
        <div className="container max-w-4xl">
          <SectionTitle
            subtitle="Write Message"
            title="Get In Touch"
            className="mb-12"
          />
          <ContactForm />
        </div>
      </section>
    </>
  );
}
