import { newsletterImage } from '@/data/images';
import { Icon } from '@/utils/icons.jsx';

/**
 * "Get Weekly Newsletter" — a split band with a workers photo on the left and
 * a dark sign-up panel on the right.
 */
export default function NewsletterBand() {
  return (
    <section className="container">
      <div className="grid overflow-hidden rounded-lg lg:grid-cols-2">
        {/* Image */}
        <img
          src={newsletterImage}
          alt="Our engineers"
          loading="lazy"
          className="h-64 w-full object-cover lg:h-full"
        />

        {/* Dark panel */}
        <div className="relative flex flex-col justify-center bg-[#161310] bg-cover bg-center px-8 py-14 md:px-12">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Get Weekly Newsletter
          </h2>
          <p className="mt-3 text-white/70">
            Get your answer directly or get weekly updates.
          </p>

          <form
            className="mt-7 flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-1 items-center gap-3 rounded-md bg-white/10 px-4 py-3">
              <input
                type="email"
                required
                placeholder="Enter email address"
                className="w-full bg-transparent text-sm text-white placeholder-white/50 outline-none"
              />
              <Icon name="FaEnvelope" className="text-primary" />
            </div>
            <button
              type="submit"
              className="rounded-md bg-primary px-7 py-3 text-sm font-bold text-secondary transition-colors hover:bg-primary-dark"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
