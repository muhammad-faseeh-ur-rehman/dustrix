import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import TopBar from './TopBar';
import Logo from './Logo';
import MobileMenu from './MobileMenu';
import Button from '@/components/common/Button';
import { navigation } from '@/data/navigation';
import { siteConfig } from '@/data/site';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { Icon } from '@/utils/icons.jsx';

/** A single Call / Mail contact element used in the header info row. */
function ContactElement({ label, value, href }) {
  return (
    <a href={href} className="flex items-start gap-3">
      <span className="mt-1 h-0.5 w-5 bg-primary" />
      <span className="text-left">
        <span className="block font-bold text-heading">{value}</span>
        <span className="block text-sm text-body">{label}</span>
      </span>
    </a>
  );
}

/**
 * Site header — utility top bar, an upper info row (logo + contact details +
 * CTA) and a white navigation bar with dropdowns. Mirrors the original
 * Dustrix "header-1" two-tier layout.
 */
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrollPosition(180);

  return (
    <header className="relative z-50">
      <TopBar />

      {/* Upper info row */}
      <div className="bg-white">
        <div className="container flex h-24 items-center justify-between">
          <Logo />

          <div className="hidden items-center gap-10 lg:flex">
            <ContactElement
              label={siteConfig.contact.phoneLabel}
              value={siteConfig.contact.phone}
              href={siteConfig.contact.phoneHref}
            />
            <ContactElement
              label={siteConfig.contact.emailLabel}
              value={siteConfig.contact.email}
              href={siteConfig.contact.emailHref}
            />
            <Button to="/contact" icon={null}>
              Get A Quote
            </Button>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-md bg-secondary text-xl text-white lg:hidden"
          >
            <Icon name="FaBars" />
          </button>
        </div>
      </div>

      {/* Navigation bar — white rounded card that floats over the hero/banner.
          When not scrolled it pulls down with a negative margin so its lower
          half overlaps the section below; when scrolled it sticks to the top. */}
      <div
        className={`hidden lg:block ${
          scrolled
            ? 'fixed inset-x-0 top-0 z-50 animate-fade-up bg-white shadow-nav'
            : 'relative z-30 lg:-mb-10'
        }`}
      >
        <div className={scrolled ? 'container py-2' : 'container'}>
          <div className="flex items-stretch justify-between rounded-lg bg-white pl-8 shadow-nav">
            <nav className="flex items-center gap-8">
              {navigation.map((item) => (
                <div key={item.label} className="group relative">
                  <NavLink
                    to={item.path}
                    end={item.path === '/'}
                    className={({ isActive }) =>
                      `flex items-center gap-1 py-5 text-[15px] font-semibold text-heading transition-colors hover:text-primary ${
                        isActive ? 'text-primary' : ''
                      }`
                    }
                  >
                    {item.label}
                    {item.children && (
                      <Icon name="FaChevronDown" className="text-[10px]" />
                    )}
                  </NavLink>

                  {item.children && (
                    <ul className="invisible absolute left-0 top-full z-50 w-56 translate-y-2 rounded-b-md bg-white py-2 opacity-0 shadow-card transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <NavLink
                            to={child.path}
                            className={({ isActive }) =>
                              `block px-5 py-2 text-sm transition-colors hover:bg-muted hover:text-primary ${
                                isActive ? 'text-primary' : 'text-secondary'
                              }`
                            }
                          >
                            {child.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </nav>

            {/* Full-height golden block with search + a grid link to Contact */}
            <div className="flex items-center gap-6 rounded-r-lg bg-primary px-7 text-secondary">
              <button
                type="button"
                aria-label="Search"
                className="transition-opacity hover:opacity-70"
              >
                <Icon name="FaSearch" />
              </button>
              <Link
                to="/contact"
                aria-label="Contact us"
                className="transition-opacity hover:opacity-70"
              >
                <Icon name="FaThLarge" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
