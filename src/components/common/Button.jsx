import { Link } from 'react-router-dom';
import { Icon } from '@/utils/icons.jsx';

const variants = {
  primary: 'btn-primary',
  dark: 'btn-dark',
  outline: 'btn-outline',
  light: 'btn-light',
};

/**
 * Polymorphic button — renders a router <Link> when `to` is provided,
 * an <a> when `href` is provided, otherwise a native <button>.
 */
export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  icon = 'FaArrowRight',
  className = '',
  ...props
}) {
  const classes = `${variants[variant] ?? variants.primary} ${className}`.trim();
  const content = (
    <>
      {children}
      {icon && <Icon name={icon} className="text-xs" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
