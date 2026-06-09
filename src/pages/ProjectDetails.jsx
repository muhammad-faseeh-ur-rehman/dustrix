import { useParams } from 'react-router-dom';
import PageBanner from '@/components/common/PageBanner';
import Button from '@/components/common/Button';
import CtaSection from '@/components/sections/CtaSection';
import NotFound from './NotFound';
import { projects } from '@/data/projects';
import { serviceDetailContent } from '@/data/services';
import { projectImages } from '@/data/images';
import { Icon } from '@/utils/icons.jsx';

// Reuse the shared "what we delivered" copy for the project body.
const { benefits } = serviceDetailContent;

/**
 * Dynamic project/case-study details page resolved from the URL slug.
 */
export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) return <NotFound />;

  const info = [
    { label: 'Client', value: project.client, icon: 'FaPeopleGroup' },
    { label: 'Category', value: project.category, icon: 'FaGears' },
    { label: 'Location', value: project.location, icon: 'FaMapMarkerAlt' },
    { label: 'Date', value: project.date, icon: 'FaClock' },
  ];

  return (
    <>
      <PageBanner
        title={project.title}
        crumbs={[
          { label: 'Projects', path: '/projects' },
          { label: project.title },
        ]}
      />

      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <img
              src={project.image}
              alt={project.title}
              className="mb-8 w-full rounded-lg"
            />
            <h2 className="text-2xl font-bold md:text-3xl">
              Project Overview
            </h2>
            <p className="mt-4">{project.excerpt}</p>
            <p className="mt-4">
              This case study highlights how our team approached the challenge
              with precision engineering, modern equipment and a relentless
              focus on safety — delivering measurable results for our client.
            </p>

            <h3 className="mt-10 text-xl font-bold">What We Delivered</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {benefits.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <Icon name="FaCheck" className="mt-1 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <img src={projectImages[2]} alt="" className="rounded-lg" />
              <img src={projectImages[3]} alt="" className="rounded-lg" />
            </div>
          </div>

          <aside className="space-y-8">
            <div className="rounded-lg bg-muted p-6">
              <h4 className="mb-4 text-lg font-semibold">Project Information</h4>
              <ul className="space-y-4">
                {info.map((item) => (
                  <li key={item.label} className="flex items-center gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-md bg-accent text-secondary">
                      <Icon name={item.icon} />
                    </span>
                    <span>
                      <span className="block text-xs uppercase text-body">
                        {item.label}
                      </span>
                      <span className="font-semibold text-heading">
                        {item.value}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg bg-secondary p-8 text-center text-white">
              <h4 className="text-xl font-semibold">Start Your Project</h4>
              <p className="mt-2 text-sm text-white/70">
                Ready to build something great? Let&apos;s talk.
              </p>
              <Button to="/contact" className="mt-5 w-full">
                Contact Us
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
