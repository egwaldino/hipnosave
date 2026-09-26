import { CalendarDays, Plus } from "lucide-react";
import { AgendaCalendar } from "./AgendaCalendar";
import { BlockScheduleForm } from "./BlockScheduleForm";

const TODAY_LABEL = "Quarta-feira, 28 de Agosto 2026";

export function AgendaView() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex shrink-0 flex-wrap items-center justify-between gap-4">
        <h1 className="text-3xl font-extrabold text-white">Agenda Médica</h1>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex h-10 items-center gap-2 rounded-xl bg-brand-500 px-5 text-sm font-bold text-white transition hover:bg-brand-600"
          >
            <Plus className="size-4" />
            Marcar Consulta
          </button>
          <span className="flex items-center gap-2 rounded-xl border border-brand-500/20 bg-brand-500/10 px-4 py-2 text-sm font-semibold text-brand-500">
            <CalendarDays className="size-4" />
            {TODAY_LABEL}
          </span>
        </div>
      </div>

      <div className="mt-6 flex min-h-0 flex-1 gap-2">
        <AgendaCalendar />
        <BlockScheduleForm />
      </div>
    </div>
  );
}
