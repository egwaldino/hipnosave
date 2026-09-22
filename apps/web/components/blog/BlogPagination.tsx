import { ChevronLeft, ChevronRight } from "lucide-react";

interface BlogPaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function BlogPagination({ page, totalPages, onPageChange }: BlogPaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  function goToPage(nextPage: number) {
    onPageChange(nextPage);
    requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  return (
    <div className="mt-14 flex items-center justify-center gap-2">
      <button
        type="button"
        disabled={page === 1}
        onClick={() => goToPage(page - 1)}
        className="flex h-10 items-center gap-1.5 rounded-full border border-ink-200/60 bg-white px-4 text-sm font-semibold text-ink-600 transition hover:bg-ink-900/5 disabled:pointer-events-none disabled:opacity-40 dark:border-white/10 dark:bg-white/5 dark:text-sand-100/80 dark:hover:bg-white/10"
      >
        <ChevronLeft className="size-4" />
        Anterior
      </button>

      <div className="flex items-center gap-1.5">
        {pages.map((pageNumber) => {
          const isActive = pageNumber === page;

          return (
            <button
              key={pageNumber}
              type="button"
              onClick={() => goToPage(pageNumber)}
              className={`flex size-10 items-center justify-center rounded-full text-sm font-bold transition ${
                isActive
                  ? "bg-ink-900 text-white dark:bg-white dark:text-ink-900"
                  : "border border-ink-200/60 bg-white text-ink-600 hover:bg-ink-900/5 dark:border-white/10 dark:bg-white/5 dark:text-sand-100/80 dark:hover:bg-white/10"
              }`}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        disabled={page === totalPages}
        onClick={() => goToPage(page + 1)}
        className="flex h-10 items-center gap-1.5 rounded-full border border-ink-200/60 bg-white px-4 text-sm font-semibold text-ink-600 transition hover:bg-ink-900/5 disabled:pointer-events-none disabled:opacity-40 dark:border-white/10 dark:bg-white/5 dark:text-sand-100/80 dark:hover:bg-white/10"
      >
        Seguinte
        <ChevronRight className="size-4" />
      </button>
    </div>
  );
}
