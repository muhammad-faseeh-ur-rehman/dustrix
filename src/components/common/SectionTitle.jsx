/**
 * Consistent section heading with an eyebrow subtitle, title and optional
 * description. `align` controls text alignment; `light` inverts colours for
 * use over dark backgrounds.
 */
export default function SectionTitle({
  subtitle,
  title,
  description,
  align = 'center',
  light = false,
  className = '',
}) {
  const alignment =
    align === 'center'
      ? 'text-center mx-auto'
      : align === 'right'
        ? 'text-right ml-auto'
        : 'text-left';

  return (
    <div className={`max-w-2xl ${alignment} ${className}`}>
      {subtitle && (
        <span className="subtitle">
          <span className="h-px w-8 bg-accent" />
          {subtitle}
        </span>
      )}
      <h2
        className={`text-3xl font-bold leading-tight md:text-4xl ${
          light ? 'text-white' : 'text-heading'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 ${light ? 'text-white/70' : 'text-body'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
