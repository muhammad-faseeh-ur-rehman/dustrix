import Button from '@/components/common/Button';
import { caseStudyImage } from '@/data/images';
import { Icon } from '@/utils/icons.jsx';

/**
 * "Leverage agile motive frameworks" case-study block — a light card with the
 * project copy on the left and a workers photo with slider arrows on the right.
 */
export default function CaseStudy() {
  return (
    <section className="section pt-0">
      <div className="container">
        <div className="grid items-center gap-10 rounded-lg bg-muted p-8 md:p-12 lg:grid-cols-2">
          {/* Copy */}
          <div>
            <p className="flex flex-wrap items-center gap-3 text-sm">
              <span className="font-semibold text-heading">Industrial</span>
              <span className="flex items-center gap-1 text-body">
                <Icon name="FaUser" className="text-xs" />
                <span className="font-semibold text-heading">Client:</span>
                Rosalina D.
              </span>
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-heading md:text-4xl">
              Leverage agile
              <br />
              motive frameworks
            </h2>
            <p className="mt-5 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliqui.
            </p>
            <Button to="/projects" className="mt-8" icon={null}>
              Case Details
            </Button>
          </div>

          {/* Image + arrows */}
          <div className="relative">
            <img
              src={caseStudyImage}
              alt="Project case study"
              loading="lazy"
              className="w-full rounded-lg object-cover"
            />
            <div className="absolute -bottom-4 right-4 flex gap-1 overflow-hidden rounded-md shadow-lg">
              <button
                type="button"
                aria-label="Previous"
                className="flex h-11 w-12 items-center justify-center bg-primary/40 text-secondary transition-colors hover:bg-primary"
              >
                <Icon name="FaArrowLeft" />
              </button>
              <button
                type="button"
                aria-label="Next"
                className="flex h-11 w-12 items-center justify-center bg-primary text-secondary transition-colors hover:bg-primary-dark"
              >
                <Icon name="FaArrowRight" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
