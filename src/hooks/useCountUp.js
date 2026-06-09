import { useEffect, useRef, useState } from 'react';

/**
 * Animates a number from 0 to `end` once the element scrolls into view.
 *
 * @param {number} end - target value
 * @param {number} duration - animation length in ms
 * @returns {[number, React.RefObject]} current value and the ref to attach
 */
export function useCountUp(end, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;

        const startTime = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - startTime) / duration, 1);
          // easeOutQuad for a natural deceleration
          const eased = 1 - (1 - progress) * (1 - progress);
          setCount(Math.floor(eased * end));
          if (progress < 1) requestAnimationFrame(tick);
          else setCount(end);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [end, duration]);

  return [count, ref];
}
