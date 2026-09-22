import { Search } from "lucide-react";

interface BlogSearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function BlogSearchBar({ value, onChange }: BlogSearchBarProps) {
  return (
    <div className="relative">
      <Search className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-ink-400 dark:text-sand-100/50" />
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Pesquise por artigos ou temas de saúde..."
        aria-label="Pesquisar artigos"
        className="h-13 w-full rounded-xl border border-ink-200/60 bg-white pr-4 pl-11 text-sm text-ink-900 outline-none transition placeholder:text-ink-400 focus:border-brand-500 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-sand-100/40"
      />
    </div>
  );
}
