interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}

export function SectionHeading({ eyebrow, title, description, light }: SectionHeadingProps) {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-3 text-xs font-bold tracking-[0.2em] text-brand-500 uppercase">
        <span className="h-px w-8 bg-brand-500/50" />
        {eyebrow}
        <span className="h-px w-8 bg-brand-500/50" />
      </div>
      <h2
        className={`mx-auto mt-4 max-w-2xl text-3xl font-extrabold sm:text-4xl md:max-w-4xl md:whitespace-nowrap ${light ? "text-white" : "text-ink-900 dark:text-white"}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mx-auto mt-4 max-w-2xl text-base ${light ? "text-sand-100/80" : "text-ink-500 dark:text-sand-100/70"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
