"use client";

import { useEffect, useRef, useState } from "react";

const DESKTOP_QUERY = "(min-width: 640px)";
const EDGE_THRESHOLD = 4;

export function useEdgeFadeScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mediaQuery = window.matchMedia(DESKTOP_QUERY);

    const update = () => {
      if (mediaQuery.matches) {
        setCanScrollLeft(false);
        setCanScrollRight(false);
        return;
      }

      setCanScrollLeft(el.scrollLeft > EDGE_THRESHOLD);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - EDGE_THRESHOLD);
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    mediaQuery.addEventListener("change", update);
    window.addEventListener("resize", update);

    return () => {
      el.removeEventListener("scroll", update);
      mediaQuery.removeEventListener("change", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const maskImage =
    canScrollLeft && canScrollRight
      ? "linear-gradient(to right, transparent, black 5%, black 90%, transparent)"
      : canScrollLeft
        ? "linear-gradient(to right, transparent, black 5%)"
        : canScrollRight
          ? "linear-gradient(to right, black 90%, transparent)"
          : "none";

  return { ref, maskImage };
}
