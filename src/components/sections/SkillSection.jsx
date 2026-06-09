import { useEffect, useRef, useState } from 'react';
import SectionTitle from '@/components/common/SectionTitle';
import { skills } from '@/data/approach';
import { skillBg, skillSide } from '@/data/images';

/**
 * A single animated skill bar that fills once scrolled into view.
 */
function SkillBar({ label, value }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(value);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="mb-7">
      <div className="mb-2 flex items-center justify-between text-sm font-semibold text-white">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/15">
        <div
          className="h-full rounded-full bg-primary transition-[width] duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

/**
 * "Our Skill Set" — animated progress bars over a fixed dark background,
 * matching the original Dustrix skill section.
 */
export default function SkillSection() {
  return (
    <section
      className="relative bg-cover bg-fixed bg-center py-24"
      style={{ backgroundImage: `url(${skillBg})` }}
    >
      <div className="absolute inset-0 bg-secondary/90" />
      <div className="container relative z-10 grid items-center gap-12 lg:grid-cols-2">
        <img
          src={skillSide}
          alt="Our team at work"
          loading="lazy"
          className="hidden rounded-lg lg:block"
        />
        <div>
          <SectionTitle
            light
            align="left"
            subtitle="Our Skill Set"
            title="Our Professional & Creative Team"
            description="Decades of hands-on experience across construction, factoring and heavy industry — delivered by a team that takes pride in every detail."
          />
          <div className="mt-10">
            {skills.map((skill) => (
              <SkillBar key={skill.label} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
