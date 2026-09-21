import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { useCalendarMonth } from "@/lib/hooks/use-calendar-month";
import type { SchedulingModality } from "@/lib/hooks/use-scheduling-flow";
import type { SchedulingService } from "../service-selection/services-data";
import { isSameDay, tomorrow } from "../shared/format-date-time";
import { ServiceSummary } from "../shared/ServiceSummary";

const WEEKDAYS = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];

const TIME_SLOTS = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"];

interface DateTimeSelectionProps {
  service?: SchedulingService;
  selectedDate: Date;
  selectedTime: string;
  selectedModality: SchedulingModality;
  dateTimeLabel: string;
  isUrgent: boolean;
  onSelectDate: (date: Date) => void;
  onSelectTime: (time: string) => void;
  onSelectModality: (modality: SchedulingModality) => void;
  onBack: () => void;
  onNext: () => void;
}

export function DateTimeSelection({
  service,
  selectedDate,
  selectedTime,
  selectedModality,
  dateTimeLabel,
  isUrgent,
  onSelectDate,
  onSelectTime,
  onSelectModality,
  onBack,
  onNext,
}: DateTimeSelectionProps) {
  const { monthLabel, days, goToPreviousMonth, goToNextMonth, canGoToPreviousMonth } =
    useCalendarMonth(isUrgent ? { maxDate: tomorrow() } : {});

  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-ink-900 dark:text-white">
            Escolha a data e hora
          </h1>
          <p className="mt-2 text-ink-500 dark:text-sand-100/70">
            {isUrgent
              ? "Consulta SOS: escolha um horário ainda hoje ou amanhã."
              : "Selecione o dia e horário que melhor se adaptam à sua agenda para a consulta presencial ou online."}
          </p>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={onBack}
            className="flex h-12 items-center justify-center gap-2 rounded-xl border border-ink-900 px-6 text-sm font-bold text-ink-900 transition hover:bg-ink-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-ink-900"
          >
            ← Anterior
          </button>
          <button
            type="button"
            onClick={onNext}
            className={`flex h-12 items-center justify-center gap-2 rounded-xl px-6 text-sm font-bold text-white transition ${
              isUrgent ? "bg-sos-500 hover:bg-sos-500/90" : "bg-brand-500 hover:bg-brand-600"
            }`}
          >
            Inserir Meus Dados →
          </button>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-[420px_1fr_1fr]">
        <div className="flex h-full flex-col rounded-2xl bg-white p-5 shadow-soft dark:bg-white/5">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-ink-900 dark:text-white">{monthLabel}</h2>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={goToPreviousMonth}
                disabled={!canGoToPreviousMonth}
                className="flex size-8 items-center justify-center rounded-full border border-ink-200/60 text-ink-500 transition hover:bg-ink-900/5 disabled:cursor-not-allowed disabled:opacity-40 dark:border-white/10 dark:text-sand-100/70 dark:hover:bg-white/10"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={goToNextMonth}
                disabled={isUrgent}
                className="flex size-8 items-center justify-center rounded-full border border-ink-200/60 text-ink-500 transition hover:bg-ink-900/5 disabled:cursor-not-allowed disabled:opacity-40 dark:border-white/10 dark:text-sand-100/70 dark:hover:bg-white/10"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-7 gap-y-1 text-center">
            {WEEKDAYS.map((weekday) => (
              <span
                key={weekday}
                className="text-xs font-semibold text-ink-400 dark:text-sand-100/50"
              >
                {weekday}
              </span>
            ))}

            {days.map((cell, index) => {
              const isSelected = cell.available && isSameDay(cell.date, selectedDate);

              return (
                <div key={index} className="flex justify-center py-0.5">
                  <button
                    type="button"
                    disabled={cell.muted || !cell.available}
                    onClick={() => onSelectDate(cell.date)}
                    className={`flex size-8 items-center justify-center rounded-full text-sm font-medium transition disabled:cursor-not-allowed ${
                      isSelected
                        ? isUrgent
                          ? "bg-sos-500 text-white"
                          : "bg-brand-500 text-white"
                        : cell.available
                          ? isUrgent
                            ? "bg-sos-500/10 text-ink-900 hover:bg-sos-500/20 dark:text-white"
                            : "bg-brand-500/10 text-ink-900 hover:bg-brand-500/20 dark:text-white"
                          : cell.muted
                            ? "text-ink-300 dark:text-sand-100/20"
                            : "text-ink-400 dark:text-sand-100/40"
                    }`}
                  >
                    {cell.day}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-soft dark:bg-white/5">
          <h2 className="font-bold text-ink-900 dark:text-white">Horários Disponíveis</h2>

          <div className="mt-3 grid grid-cols-3 gap-2">
            {TIME_SLOTS.map((time) => {
              const isSelected = time === selectedTime;

              return (
                <button
                  key={time}
                  type="button"
                  onClick={() => onSelectTime(time)}
                  className={`flex h-10 items-center justify-center rounded-lg border text-sm font-semibold transition ${
                    isSelected
                      ? isUrgent
                        ? "border-sos-500 bg-sos-500 text-white"
                        : "border-brand-500 bg-brand-500 text-white"
                      : `border-ink-200/60 bg-white text-ink-700 dark:border-white/10 dark:bg-white/5 dark:text-sand-100/80 ${
                          isUrgent ? "hover:border-sos-500" : "hover:border-brand-500"
                        }`
                  }`}
                >
                  {time}
                </button>
              );
            })}
          </div>

          <div
            className={`mt-4 flex items-center gap-2.5 rounded-xl p-3 text-sm font-semibold ${
              isUrgent
                ? "bg-sos-500/10 text-sos-500"
                : "bg-brand-500/10 text-brand-600 dark:bg-brand-500/15 dark:text-brand-400"
            }`}
          >
            <Calendar className="size-4 shrink-0" />
            {dateTimeLabel}
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => onSelectModality("presencial")}
              className={`flex h-10 items-center justify-center rounded-lg border text-sm font-semibold transition ${
                selectedModality === "presencial"
                  ? isUrgent
                    ? "border-sos-500 bg-sos-500 text-white"
                    : "border-brand-500 bg-brand-500 text-white"
                  : `border-ink-200/60 bg-white text-ink-700 dark:border-white/10 dark:bg-white/5 dark:text-sand-100/80 ${
                      isUrgent ? "hover:border-sos-500" : "hover:border-brand-500"
                    }`
              }`}
            >
              Presencial
            </button>
            <button
              type="button"
              onClick={() => onSelectModality("online")}
              className={`flex h-10 items-center justify-center rounded-lg border text-sm font-semibold transition ${
                selectedModality === "online"
                  ? isUrgent
                    ? "border-sos-500 bg-sos-500 text-white"
                    : "border-brand-500 bg-brand-500 text-white"
                  : `border-ink-200/60 bg-white text-ink-700 dark:border-white/10 dark:bg-white/5 dark:text-sand-100/80 ${
                      isUrgent ? "hover:border-sos-500" : "hover:border-brand-500"
                    }`
              }`}
            >
              Online
            </button>
          </div>
        </div>

        {service && <ServiceSummary service={service} />}
      </div>

      <div className="mt-6 flex items-center justify-between gap-3 md:hidden">
        <button
          type="button"
          onClick={onBack}
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-ink-900 px-4 text-sm font-bold text-ink-900 transition hover:bg-ink-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-ink-900"
        >
          ← Anterior
        </button>
        <button
          type="button"
          onClick={onNext}
          className={`flex h-12 flex-1 items-center justify-center gap-2 rounded-xl px-4 text-sm font-bold text-white transition ${
            isUrgent ? "bg-sos-500 hover:bg-sos-500/90" : "bg-brand-500 hover:bg-brand-600"
          }`}
        >
          Inserir Meus Dados →
        </button>
      </div>
    </div>
  );
}
