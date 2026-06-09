import { stats } from '@/data/stats';
import { useCountUp } from '@/hooks/useCountUp';
import { counterBg } from '@/data/images';

/**
 * Single animated statistic. Extracted so each counter owns its own
 * intersection observer.
 */
function Counter({ value, suffix, label }) {
  const [count, ref] = useCountUp(value);

  return (
    <div ref={ref} className="text-center">
      <span className="block text-4xl font-bold text-primary md:text-5xl">
        {count.toLocaleString()}
        {suffix}
      </span>
      <span className="mt-2 block text-sm uppercase tracking-wide text-white/70">
        {label}
      </span>
    </div>
  );
}

/**
 * Animated counter band with a parallax-style background image.
 */
export default function CounterSection() {
  return (
    <section
      className="relative bg-cover bg-fixed bg-center py-20"
      style={{
        backgroundImage: `url(${counterBg})`,
      }}
    >
      <div className="absolute inset-0 bg-secondary/85" />
      <div className="container relative z-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Counter key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
