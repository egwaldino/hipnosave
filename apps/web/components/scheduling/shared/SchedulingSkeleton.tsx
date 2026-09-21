export function SchedulingSkeleton() {
  return (
    <div className="min-h-screen animate-pulse bg-sand-50 dark:bg-ink-900">
      <div className="h-24 bg-ink-900" />

      <div className="mx-auto max-w-7xl px-4 pt-10 md:px-8 md:pt-14">
        <div className="h-9 w-64 rounded-lg bg-ink-900/10 dark:bg-white/10" />
        <div className="mt-3 h-4 w-96 max-w-full rounded-lg bg-ink-900/5 dark:bg-white/5" />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="h-72 rounded-2xl bg-ink-900/5 dark:bg-white/5" />
          ))}
        </div>
      </div>
    </div>
  );
}
