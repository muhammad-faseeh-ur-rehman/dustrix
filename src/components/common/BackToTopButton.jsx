import { useScrollPosition } from '@/hooks/useScrollPosition';
import { Icon } from '@/utils/icons.jsx';

/**
 * Floating button that scrolls smoothly back to the top once the user has
 * scrolled down the page.
 */
export default function BackToTopButton() {
  const visible = useScrollPosition(400);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-md bg-accent text-white shadow-lg transition-all duration-300 hover:bg-accent-dark ${
        visible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <Icon name="FaChevronDown" className="rotate-180" />
    </button>
  );
}
