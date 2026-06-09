import SectionTitle from '@/components/common/SectionTitle';
import Button from '@/components/common/Button';
import { Icon } from '@/utils/icons.jsx';
import { aboutImages } from '@/data/images';

const highlights = [
  'Certified and experienced engineering team',
  'Modern equipment and quality materials',
  'On-time delivery with transparent pricing',
  '24/7 dedicated project support',
];

/**
 * Home "about" section — image collage with an experience badge alongside a
 * summary and key highlights.
 */
export default function AboutSection() {
  return (
    <section className="section">
      <div className="container grid items-center gap-12 lg:grid-cols-2">
        {/* Images */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={aboutImages.primary}
              alt="Our work"
              loading="lazy"
              className="w-full"
            />
            {/* Video play button */}
            <a
              href="https://www.youtube.com/watch?v=EZ9DrY43wtw"
              target="_blank"
              rel="noreferrer"
              aria-label="Play video"
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-primary text-secondary">
                <span className="absolute inset-0 animate-ping rounded-full bg-primary/60" />
                <Icon name="FaPlay" className="relative ml-1 text-xl" />
              </span>
            </a>
          </div>
          <img
            src={aboutImages.secondary}
            alt="Engineering team"
            loading="lazy"
            className="absolute -bottom-10 right-4 hidden w-48 rounded-lg border-8 border-white shadow-card sm:block"
          />
          <div className="absolute -left-4 top-8 rounded-lg bg-accent px-6 py-5 text-center text-secondary shadow-lg">
            <span className="block text-4xl font-bold">25+</span>
            <span className="text-sm">Years Experience</span>
          </div>
        </div>

        {/* Content */}
        <div>
          <SectionTitle
            align="left"
            subtitle="About Us"
            title="The Most Successful Engineering Contractor"
          />
          <p className="mt-4">
            With over two decades of experience, Dustrix delivers world-class
            industrial and construction solutions. Our mission is to build safe,
            sustainable and durable structures that stand the test of time.
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <Icon
                  name="FaCheck"
                  className="mt-1 shrink-0 text-accent"
                />
                {item}
              </li>
            ))}
          </ul>

          <Button to="/about" className="mt-8">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
