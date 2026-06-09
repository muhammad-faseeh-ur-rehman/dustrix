import Button from '@/components/common/Button';
import { numberFill } from '@/data/images';

/**
 * Home "about" block — an oversized "30+" with an industrial photo clipped
 * inside the digits on the left, and the "Amwerk is always interested."
 * copy with a highlighted quote on the right.
 */
export default function AboutExperience() {
  return (
    <section className="section">
      <div className="container grid items-center gap-12 lg:grid-cols-2">
        {/* Image-filled "30+" */}
        <div className="text-center">
          <span
            className="bg-clip-text font-heading text-[12rem] font-extrabold leading-none text-transparent drop-shadow-sm md:text-[15rem]"
            style={{
              backgroundImage: `url(${numberFill})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              WebkitBackgroundClip: 'text',
            }}
          >
            30+
          </span>
          <p className="mt-2 text-lg text-heading">
            Years Of Experience With <strong>Creative Team</strong>
          </p>
        </div>

        {/* Copy */}
        <div>
          <span className="subtitle">
            <span className="h-px w-8 bg-primary" />
            Easily import the whole Industry
          </span>
          <h2 className="text-4xl font-bold leading-tight text-heading md:text-5xl">
            Amwerk is always interested.
          </h2>
          <blockquote className="mt-6 border-l-4 border-primary pl-5 text-lg font-semibold text-heading">
            Capitalise on low hanging fruit to identify a ballpark value added
            activity to beta test.
          </blockquote>
          <p className="mt-5 max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <Button to="/contact" className="mt-8" icon={null}>
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
