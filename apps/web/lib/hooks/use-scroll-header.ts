"use client";

import { useEffect, useRef, useState } from "react";

const SCROLLED_THRESHOLD = 40;
const HIDE_THRESHOLD = 100;

export function useScrollHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      setIsScrolled(currentY > SCROLLED_THRESHOLD);

      if (document.body.dataset.programmaticScroll !== "true") {
        setIsHidden(currentY > lastScrollY.current && currentY > HIDE_THRESHOLD);
      }

      lastScrollY.current = currentY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { isScrolled, isHidden };
}
