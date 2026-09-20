"use client";

import { useEffect, useState } from "react";

interface UsePaginatedGridOptions {
  mobilePageSize: number;
  desktopPageSize: number;
  desktopQuery?: string;
}

export function usePaginatedGrid<T>(
  items: T[],
  { mobilePageSize, desktopPageSize, desktopQuery = "(min-width: 640px)" }: UsePaginatedGridOptions,
) {
  const [pageSize, setPageSize] = useState(mobilePageSize);
  const [visibleCount, setVisibleCount] = useState(mobilePageSize);

  useEffect(() => {
    const mediaQuery = window.matchMedia(desktopQuery);

    const applyPageSize = (isDesktop: boolean) => {
      const size = isDesktop ? desktopPageSize : mobilePageSize;
      setPageSize(size);
      setVisibleCount(size);
    };

    applyPageSize(mediaQuery.matches);
    const handleChange = (event: MediaQueryListEvent) => applyPageSize(event.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [mobilePageSize, desktopPageSize, desktopQuery]);

  const visibleItems = items.slice(0, visibleCount);
  const hasMore = visibleCount < items.length;
  const showMore = () => setVisibleCount((count) => count + pageSize);

  return { visibleItems, hasMore, showMore };
}
