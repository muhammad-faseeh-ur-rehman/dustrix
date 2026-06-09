import { useMemo, useState } from 'react';
import PageBanner from '@/components/common/PageBanner';
import ProjectCard from '@/components/cards/ProjectCard';
import CtaSection from '@/components/sections/CtaSection';
import { projects, projectCategories } from '@/data/projects';

/**
 * Projects page with a client-side category filter.
 */
export default function Projects() {
  const [active, setActive] = useState('All');

  const filtered = useMemo(
    () =>
      active === 'All'
        ? projects
        : projects.filter((project) => project.category === active),
    [active],
  );

  return (
    <>
      <PageBanner title="Our Projects" crumbs={[{ label: 'Projects' }]} />

      <section className="section">
        <div className="container">
          {/* Filter */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {projectCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                className={`rounded-md px-5 py-2 text-sm font-semibold transition-colors ${
                  active === category
                    ? 'bg-accent text-secondary'
                    : 'bg-muted text-secondary hover:bg-accent hover:text-secondary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
