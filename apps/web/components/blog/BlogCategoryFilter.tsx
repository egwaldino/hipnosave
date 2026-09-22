"use client";

import { useEdgeFadeScroll } from "@/lib/hooks/use-edge-fade-scroll";

interface BlogCategoryFilterProps {
  categories: readonly string[];
  active: string;
  onSelect: (category: string) => void;
}

export function BlogCategoryFilter({ categories, active, onSelect }: BlogCategoryFilterProps) {
  const { ref, maskImage } = useEdgeFadeScroll();

  return (
    <div
      ref={ref}
      style={{ maskImage, WebkitMaskImage: maskImage }}
      className="mt-6 scrollbar-none flex snap-x snap-proximity gap-2.5 overflow-x-auto pb-1 sm:flex-wrap sm:justify-center sm:overflow-visible sm:pb-0"
    >
      {categories.map((category) => {
        const isActive = category === active;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onSelect(category)}
            className={`h-10 shrink-0 snap-start rounded-full px-5 text-sm font-semibold transition ${
              isActive
                ? "bg-ink-900 text-white dark:bg-white dark:text-ink-900"
                : "border border-ink-200/60 bg-white text-ink-600 hover:bg-ink-900/5 dark:border-white/10 dark:bg-white/5 dark:text-sand-100/80 dark:hover:bg-white/10"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
