import Button from '@/components/common/Button';
import { homeHeroBg } from '@/data/images';

/**
 * Home (variant one) hero — a single full-width industrial backdrop with the
 * oversized "Global Automotive" headline and two CTAs, matching the original
 * Dustrix hero.
 */
export default function HomeHero() {
  return (
    <section
      className="relative flex min-h-[560px] items-center bg-cover bg-center md:min-h-[680px]"
      style={{ backgroundImage: `url(${homeHeroBg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
      <div className="container relative z-10">
        <h1 className="max-w-3xl font-heading text-6xl font-extrabold leading-[0.95] text-white text-shadow md:text-8xl">
          Global
          <br />
          Automotive
        </h1>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button to="/services">Our Services</Button>
          <Button to="/about" variant="dark" icon={null}>
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
