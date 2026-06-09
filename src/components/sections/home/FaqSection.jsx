import FaqAccordion from '@/components/sections/FaqAccordion';
import { avatarImages, worldMap } from '@/data/images';

/* Avatar pins positioned over the dotted map. */
const pins = [
  { src: avatarImages[0], top: '32%', left: '16%' },
  { src: avatarImages[1], top: '58%', left: '38%' },
  { src: avatarImages[2], top: '40%', left: '64%' },
];

/**
 * "Get every single answers from here." — heading and a dotted world map with
 * avatar pins on the left, the FAQ accordion on the right.
 */
export default function FaqSection() {
  return (
    <section className="section">
      <div className="container grid items-center gap-12 lg:grid-cols-2">
        {/* Heading + dotted map */}
        <div>
          <span className="subtitle">
            <span className="h-px w-8 bg-primary" />
            Get Answers
          </span>
          <h2 className="text-4xl font-bold leading-tight text-heading md:text-5xl">
            Get every single answers from here.
          </h2>

          <div className="relative mt-10 h-64">
            {/* Dotted continents: a dot pattern masked by the world-map shape */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1.3px,transparent_1.3px)] [background-size:9px_9px]"
              style={{
                WebkitMaskImage: `url(${worldMap})`,
                maskImage: `url(${worldMap})`,
                WebkitMaskSize: 'contain',
                maskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                maskPosition: 'center',
              }}
            />
            {pins.map((pin, index) => (
              <img
                key={index}
                src={pin.src}
                alt=""
                className="absolute h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow-md"
                style={{ top: pin.top, left: pin.left }}
              />
            ))}
          </div>
        </div>

        {/* Accordion */}
        <FaqAccordion />
      </div>
    </section>
  );
}
