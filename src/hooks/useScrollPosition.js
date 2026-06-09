import { useEffect, useState } from 'react';

/**
 * Tracks vertical scroll position and returns whether the page has scrolled
 * past the given threshold — used to toggle the sticky header style.
 *
 * @param {number} threshold - pixels scrolled before returning true
 * @returns {boolean}
 */
export function useScrollPosition(threshold = 80) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > threshold);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
}
