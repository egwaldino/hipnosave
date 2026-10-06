"use client";

import { Suspense, useState } from "react";
import { CalendarDays, Plus, X } from "lucide-react";
import { SchedulingFlow } from "@/components/scheduling/SchedulingFlow";
import { SchedulingSkeleton } from "@/components/scheduling/shared/SchedulingSkeleton";
import { AgendaCalendar } from "./AgendaCalendar";
import { BlockScheduleForm } from "./BlockScheduleForm";

const TODAY_LABEL = "Quarta-feira, 28 de Agosto 2026";

export function AgendaView() {
  const [isSchedulingOpen, setIsSchedulingOpen] = useState(false);

  return (
    <div className="flex h-full flex-col">
      <div className="flex shrink-0 flex-wrap items-center justify-between gap-4">
        <h1 className="text-3xl font-extrabold text-white">Agenda Médica</h1>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsSchedulingOpen(true)}
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

      {isSchedulingOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-sand-50 dark:bg-ink-900">
          <button
            type="button"
            aria-label="Fechar"
            onClick={() => setIsSchedulingOpen(false)}
            className="absolute top-6 right-4 z-10 flex size-9 items-center justify-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white md:right-8"
          >
            <X className="size-5" />
          </button>
          <Suspense fallback={<SchedulingSkeleton />}>
            <SchedulingFlow
              onExitFirstStep={() => setIsSchedulingOpen(false)}
              onBackToStart={() => setIsSchedulingOpen(false)}
              showAddToCalendar={false}
            />
          </Suspense>
        </div>
      )}
    </div>
  );
}
