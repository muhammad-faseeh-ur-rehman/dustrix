import { avatarImages } from '@/data/images';
import { Icon } from '@/utils/icons.jsx';

const years = ['2015', '2016', '2017', '2018', '2019', '2020'];

/**
 * "Providing solutions of every kind." — analytics copy on the left and a
 * hand-built SVG "Annual cash flows" line chart on the right.
 */
export default function BusinessAnalytics() {
  return (
    <section className="section">
      <div className="container grid items-center gap-14 lg:grid-cols-2">
        {/* Copy */}
        <div>
          <span className="subtitle">
            <span className="h-px w-8 bg-primary" />
            Business Analytics
          </span>
          <h2 className="text-4xl font-bold leading-tight text-heading md:text-5xl">
            Providing solutions of every kind.
          </h2>
          <blockquote className="mt-6 border-l-4 border-primary pl-5 text-lg font-semibold text-heading">
            Capitalise on low hanging fruit to identify a ballpark value added
            activity to beta test.
          </blockquote>
          <p className="mt-5 max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <hr className="my-7 border-gray-200" />
          <div className="flex items-center gap-4">
            <img
              src={avatarImages[0]}
              alt="Miranda H."
              className="h-12 w-12 rounded-full object-cover"
            />
            <div className="flex flex-wrap items-center gap-x-10 gap-y-1">
              <span>
                <span className="block font-bold text-heading">Miranda H.</span>
                <span className="block text-sm text-body">Founder</span>
              </span>
              <span>
                <span className="block font-bold tracking-wider text-heading">
                  963. 369. 265. 56
                </span>
                <span className="block text-sm text-body">Make An Call</span>
              </span>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div>
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-lg font-bold text-heading">Annual cash flows</h3>
            <span className="flex items-center gap-1 text-sm text-body">
              Years <Icon name="FaChevronDown" className="text-[10px]" />
            </span>
          </div>

          <div className="relative">
            <svg viewBox="0 0 600 280" className="w-full" role="img" aria-label="Annual cash flows chart">
              {/* horizontal grid */}
              {[0, 1, 2, 3, 4].map((row) => (
                <line
                  key={row}
                  x1="0"
                  x2="600"
                  y1={40 + row * 48}
                  y2={40 + row * 48}
                  stroke="#eef0f3"
                  strokeWidth="1"
                />
              ))}

              {/* gray series */}
              <path
                d="M0,210 C90,210 110,150 200,150 C300,150 300,120 360,120 C440,120 470,170 600,150"
                fill="none"
                stroke="#c9ced6"
                strokeWidth="3"
                strokeLinecap="round"
              />
              {/* amber series */}
              <path
                d="M0,170 C90,170 110,150 200,150 C290,150 300,80 360,80 C440,80 470,140 600,120"
                fill="none"
                stroke="#febc35"
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* peak marker */}
              <line x1="360" y1="80" x2="360" y2="232" stroke="#febc35" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="360" cy="80" r="7" fill="#fff" stroke="#febc35" strokeWidth="4" />
            </svg>

            {/* tooltip */}
            <span className="absolute left-[57%] top-[14%] -translate-x-1/2 rounded bg-primary px-2 py-1 text-xs font-bold text-secondary">
              10,000
            </span>
          </div>

          <div className="mt-3 flex justify-between text-xs text-body">
            {years.map((year) => (
              <span key={year}>{year}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
