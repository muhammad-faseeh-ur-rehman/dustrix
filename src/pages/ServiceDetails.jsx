import { Link, useParams } from 'react-router-dom';
import PageBanner from '@/components/common/PageBanner';
import Button from '@/components/common/Button';
import CtaSection from '@/components/sections/CtaSection';
import NotFound from './NotFound';
import { services, serviceDetailContent } from '@/data/services';
import { projectImages } from '@/data/images';
import { Icon } from '@/utils/icons.jsx';

/**
 * Dynamic service-details page. Resolves the service from the URL slug and
 * shows an overview, benefits, process and a sidebar of related services.
 */
export default function ServiceDetails() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) return <NotFound />;

  const { overview, benefits, process } = serviceDetailContent;

  return (
    <>
      <PageBanner
        title={service.title}
        crumbs={[
          { label: 'Services', path: '/services' },
          { label: service.title },
        ]}
      />

      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-3">
          {/* Main content */}
          <div className="lg:col-span-2">
            <img
              src={service.image}
              alt={service.title}
              className="mb-8 w-full rounded-lg"
            />
            <h2 className="text-2xl font-bold md:text-3xl">{service.title}</h2>
            <p className="mt-4">{overview}</p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <img
                src={projectImages[4]}
                alt=""
                className="rounded-lg"
              />
              <ul className="space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-sm">
                    <Icon
                      name="FaCheck"
                      className="mt-1 shrink-0 text-accent"
                    />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <h3 className="mt-12 text-2xl font-bold">Our Working Process</h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {process.map((item) => (
                <div
                  key={item.step}
                  className="rounded-lg border border-gray-100 p-6"
                >
                  <span className="text-3xl font-bold text-accent/30">
                    {item.step}
                  </span>
                  <h4 className="mt-2 text-lg font-semibold">{item.title}</h4>
                  <p className="mt-2 text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="rounded-lg bg-muted p-6">
              <h4 className="mb-4 text-lg font-semibold">All Services</h4>
              <ul className="space-y-2">
                {services.map((item) => (
                  <li key={item.slug}>
                    <Link
                      to={`/services/${item.slug}`}
                      className={`flex items-center justify-between rounded-md px-4 py-3 text-sm transition-colors ${
                        item.slug === slug
                          ? 'bg-accent text-secondary'
                          : 'bg-white hover:bg-accent hover:text-secondary'
                      }`}
                    >
                      {item.title}
                      <Icon name="FaAngleRight" className="text-xs" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg bg-secondary p-8 text-center text-white">
              <h4 className="text-xl font-semibold">Need Help?</h4>
              <p className="mt-2 text-sm text-white/70">
                Talk to our experts about your project today.
              </p>
              <Button to="/contact" className="mt-5 w-full">
                Get A Quote
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
