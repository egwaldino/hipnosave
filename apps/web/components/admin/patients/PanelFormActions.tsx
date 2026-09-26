import { Check, Download, Printer } from "lucide-react";

interface PanelFormActionsProps {
  isSaving: boolean;
  saveLabel?: string;
}

export function PanelFormActions({ isSaving, saveLabel = "Guardar" }: PanelFormActionsProps) {
  return (
    <>
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="flex h-11 items-center gap-2 rounded-xl border border-white/10 px-4 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          <Printer className="size-4" />
          Imprimir
        </button>
        <button
          type="button"
          aria-label="Descarregar"
          className="flex h-11 items-center justify-center rounded-xl border border-white/10 px-4 text-white transition hover:bg-white/10"
        >
          <Download className="size-4" />
        </button>
      </div>

      <button
        type="submit"
        disabled={isSaving}
        className="flex h-11 items-center gap-2 rounded-xl bg-brand-500 px-6 text-sm font-bold text-white transition hover:bg-brand-600 disabled:opacity-60"
      >
        {isSaving ? "A guardar..." : saveLabel}
        <Check className="size-4" />
      </button>
    </>
  );
}
