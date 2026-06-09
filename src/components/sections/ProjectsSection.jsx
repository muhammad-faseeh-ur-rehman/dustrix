import SectionTitle from '@/components/common/SectionTitle';
import ProjectCard from '@/components/cards/ProjectCard';
import Button from '@/components/common/Button';
import { projects } from '@/data/projects';

/**
 * Home projects/portfolio preview grid.
 */
export default function ProjectsSection({ limit = 6 }) {
  return (
    <section className="section">
      <div className="container">
        <div className="flex flex-col items-end justify-between gap-6 md:flex-row">
          <SectionTitle
            align="left"
            subtitle="Our Portfolio"
            title="Recently Completed Projects"
          />
          <Button to="/projects" variant="outline" className="shrink-0">
            View All Projects
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, limit).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
