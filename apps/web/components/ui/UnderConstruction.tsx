import { Construction } from "lucide-react";

export function UnderConstruction({
  title = "Página em construção",
  description = "Esta funcionalidade ainda está a ser desenvolvida. Volta em breve.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 py-16 text-center sm:min-h-[70vh]">
      <Construction className="size-12 text-brand-500 sm:size-16" />
      <h1 className="text-2xl font-extrabold text-ink-900 sm:text-3xl">{title}</h1>
      <p className="max-w-md text-sm text-ink-500 sm:text-base">{description}</p>
    </div>
  );
}
