import Link from "next/link";
import { ArrowDown, ArrowRight, ChevronRight, Info, X } from "lucide-react";
import { DialogClose, DialogContent } from "@/components/ui/dialog";
import { SOS_SERVICE } from "@/components/scheduling/service-selection/services-data";

const ALERT_SIGNS = [
  "Crises de ansiedade",
  "Ideação suicida",
  "Sintomas físicos intensos",
  "Quebra funcional repentina",
];

export function SosDialogContent() {
  return (
    <DialogContent
      showCloseButton={false}
      className="fixed inset-0 z-50 flex h-full max-h-full w-full max-w-full translate-x-0 translate-y-0 flex-col gap-6 overflow-y-auto rounded-none border-0 bg-sand-50 p-6 text-ink-900 ring-0 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:h-auto sm:max-h-[90vh] sm:w-full sm:max-w-3xl sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-3xl dark:bg-ink-900 dark:text-sand-50"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="h-3 w-3 shrink-0 rounded-full bg-sos-500" />
          <span className="text-lg font-extrabold tracking-tight">CONSULTA SOS</span>
          <span className="rounded-full bg-sos-500 px-2.5 py-1 text-[10px] font-bold tracking-wide text-white uppercase">
            Prioridade máxima
          </span>
        </div>
        <DialogClose className="shrink-0 cursor-pointer rounded-full border border-sos-500 p-1.5 text-sos-500">
          <X className="size-4" />
          <span className="sr-only">Fechar</span>
        </DialogClose>
      </div>

      <p className="-mt-4 text-sm text-ink-500 dark:text-ink-300">Atendimento mediante disponibilidade</p>

      <h2 className="text-3xl leading-tight font-extrabold sm:text-4xl">
        Precisas de uma <span className="text-sos-500">consulta</span> ainda hoje?
      </h2>

      <div className="flex flex-col gap-6 sm:flex-row sm:items-stretch">
        <div className="rounded-2xl bg-ink-900/5 p-5 sm:flex-1 dark:bg-white/5">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-ink-500 uppercase dark:text-ink-300">
            <ArrowDown className="size-3.5 text-sos-500" />
            Sinais de alerta
          </div>
          <ul className="mt-4 space-y-3">
            {ALERT_SIGNS.map((sign) => (
              <li key={sign} className="flex items-center gap-2 text-sm">
                <ChevronRight className="size-4 shrink-0 text-sos-500" />
                {sign}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex gap-2 border-t border-ink-900/10 pt-4 text-xs text-ink-500 dark:border-white/10 dark:text-ink-300">
            <Info className="size-4 shrink-0 text-sos-500" />
            A consulta SOS poderá não substituir a intervenção de urgência hospitalar.
          </div>
        </div>

        <div className="flex flex-col rounded-2xl bg-ink-900/5 p-5 sm:flex-1 dark:bg-white/5">
          <p className="text-xs font-semibold tracking-wide text-ink-500 uppercase dark:text-ink-300">
            Valor da consulta SOS
          </p>
          <div className="mt-4">
            <p className="text-sm font-medium">Psicologia e Hipnoterapia</p>
            <p className="mt-1 text-xl font-extrabold">{SOS_SERVICE.price}</p>
            <p className="text-sm text-ink-500 dark:text-ink-300">{SOS_SERVICE.duration}</p>
          </div>
          <Link
            href="/scheduling-page?servico=sos"
            className="mt-5 flex h-14 items-center justify-center gap-2 rounded-2xl bg-sos-500 text-base font-bold text-white shadow-[0_0_30px_rgba(232,87,58,0.35)] sm:mt-auto"
          >
            Marcar Agora
            <ArrowRight className="size-5" />
          </Link>
        </div>
      </div>
    </DialogContent>
  );
}
