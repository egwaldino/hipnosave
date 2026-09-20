"use client";

function easeInOutQuad(t: number) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

const MOBILE_OFFSET_PADDING = 4;
const DESKTOP_OFFSET_PADDING = 15;
const MOBILE_QUERY = "(max-width: 767px)";

function getHeaderOffset() {
  const isMobile = window.matchMedia(MOBILE_QUERY).matches;
  return isMobile ? MOBILE_OFFSET_PADDING : DESKTOP_OFFSET_PADDING;
}

export function useSmoothScrollTo() {
  return (id?: string, duration = 1200) => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    const rawTargetY = id
      ? (document.getElementById(id)?.getBoundingClientRect().top ?? 0) +
        window.scrollY -
        getHeaderOffset()
      : 0;

    const targetY = Math.max(0, Math.min(rawTargetY, maxScroll));

    const startY = window.scrollY;
    const distance = targetY - startY;
    const start = performance.now();

    document.body.dataset.programmaticScroll = "true";

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, startY + distance * easeInOutQuad(progress));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        delete document.body.dataset.programmaticScroll;
      }
    };

    requestAnimationFrame(step);
  };
}
