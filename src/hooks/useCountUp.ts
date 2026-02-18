import { useEffect, useRef, useState } from "react";

export function useCountUp(end: number, duration = 1800, start = 0, triggered = false) {
  const [value, setValue] = useState(start);
  const rafRef = useRef<number | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!triggered || startedRef.current) return;
    startedRef.current = true;

    const startTime = performance.now();
    const range = end - start;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(start + range * eased));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [triggered, end, start, duration]);

  return value;
}
