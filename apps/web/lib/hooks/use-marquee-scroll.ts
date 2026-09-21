"use client";

import { useEffect, useRef } from "react";

interface UseMarqueeScrollOptions {
  speed?: number;
  direction?: "left" | "right";
  resumeDelay?: number;
}

export function useMarqueeScroll({
  speed = 40,
  direction = "left",
  resumeDelay = 1500,
}: UseMarqueeScrollOptions = {}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const half = el.scrollWidth / 2;
    if (direction === "right") {
      el.scrollLeft = half;
    }

    let frameId: number;
    let lastTimestamp: number | null = null;
    let paused = false;
    let resumeTimeout: ReturnType<typeof setTimeout>;
    const sign = direction === "left" ? 1 : -1;

    let isDragging = false;
    let dragStartX = 0;
    let dragStartScrollLeft = 0;

    const step = (timestamp: number) => {
      if (lastTimestamp === null) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (!paused) {
        el.scrollLeft += sign * speed * (delta / 1000);

        if (el.scrollLeft >= half) {
          el.scrollLeft -= half;
        } else if (el.scrollLeft <= 0) {
          el.scrollLeft += half;
        }
      }

      frameId = requestAnimationFrame(step);
    };

    frameId = requestAnimationFrame(step);

    const pause = () => {
      paused = true;
      clearTimeout(resumeTimeout);
    };

    const scheduleResume = () => {
      clearTimeout(resumeTimeout);
      resumeTimeout = setTimeout(() => {
        lastTimestamp = null;
        paused = false;
      }, resumeDelay);
    };

    const onPointerDown = (e: PointerEvent) => {
      pause();

      if (e.pointerType === "mouse") {
        isDragging = true;
        dragStartX = e.clientX;
        dragStartScrollLeft = el.scrollLeft;
        el.setPointerCapture(e.pointerId);
        el.style.cursor = "grabbing";
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      el.scrollLeft = dragStartScrollLeft - (e.clientX - dragStartX);
    };

    const endDrag = () => {
      isDragging = false;
      el.style.cursor = "grab";
      scheduleResume();
    };

    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", endDrag);
    el.addEventListener("pointercancel", endDrag);
    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", scheduleResume);
    el.style.cursor = "grab";

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(resumeTimeout);
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", endDrag);
      el.removeEventListener("pointercancel", endDrag);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", scheduleResume);
    };
  }, [speed, direction, resumeDelay]);

  return containerRef;
}
