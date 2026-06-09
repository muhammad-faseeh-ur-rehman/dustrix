import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import { navigation } from '@/data/navigation';
import { Icon } from '@/utils/icons.jsx';

/**
 * Slide-in mobile navigation drawer with collapsible sub-menus.
 */
export default function MobileMenu({ open, onClose }) {
  const [expanded, setExpanded] = useState(null);

  const toggle = (label) =>
    setExpanded((current) => (current === label ? null : label));

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 lg:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed inset-y-0 right-0 z-50 w-80 max-w-[85%] transform bg-white shadow-xl transition-transform duration-300 lg:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
          <Logo />
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 text-lg"
          >
            <Icon name="FaTimes" />
          </button>
        </div>

        <nav className="overflow-y-auto px-2 py-4">
          {navigation.map((item) => (
            <div key={item.label} className="border-b border-gray-50">
              <div className="flex items-center justify-between">
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `block flex-1 px-3 py-3 font-medium ${
                      isActive ? 'text-accent' : 'text-secondary'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
                {item.children && (
                  <button
                    type="button"
                    aria-label={`Toggle ${item.label}`}
                    onClick={() => toggle(item.label)}
                    className="px-4 py-3 text-sm text-body"
                  >
                    <Icon
                      name="FaChevronDown"
                      className={`transition-transform ${
                        expanded === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                )}
              </div>

              {item.children && expanded === item.label && (
                <ul className="bg-muted pb-2">
                  {item.children.map((child) => (
                    <li key={child.label}>
                      <NavLink
                        to={child.path}
                        onClick={onClose}
                        className="block py-2 pl-7 pr-3 text-sm text-body hover:text-accent"
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
      </aside>
    </>
  );
}
