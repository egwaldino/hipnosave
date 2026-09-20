"use client";

import { useEffect, useRef, useState } from "react";

export function useCountUp(target: number, duration = 2000) {
  const [value, setValue] = useState(0);
  const [node, setNode] = useState<HTMLElement | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!node) return;

    const runAnimation = () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);

      const start = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        setValue(Math.round(progress * target));
        frameRef.current = progress < 1 ? requestAnimationFrame(step) : null;
      };

      frameRef.current = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runAnimation();
        } else if (frameRef.current !== null) {
          cancelAnimationFrame(frameRef.current);
          frameRef.current = null;
          setValue(0);
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [node, target, duration]);

  return { value, ref: setNode };
}
