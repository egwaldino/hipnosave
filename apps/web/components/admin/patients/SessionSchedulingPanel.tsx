"use client";

import { Check, ChevronLeft, ChevronRight, Trash2 } from "lucide-react";
import { useCalendarMonth } from "@/lib/hooks/use-calendar-month";
import { useSessionScheduling } from "@/lib/hooks/use-session-scheduling";
import { formatDateTimeLabel, isSameDay } from "@/components/scheduling/shared/format-date-time";
import { getServiceBySlug, SERVICES } from "@/components/scheduling/service-selection/services-data";
import type { Patient } from "./patients-data";
import { SlideOverPanel } from "./SlideOverPanel";

const WEEKDAYS = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];
const TIME_SLOTS = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"];

interface SessionSchedulingPanelProps {
  patient: Patient;
  onClose: () => void;
}

export function SessionSchedulingPanel({ patient, onClose }: SessionSchedulingPanelProps) {
  const {
    serviceSlug,
    setServiceSlug,
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
    selectedModality,
    setSelectedModality,
    queuedSessions,
    addQueuedSession,
    removeQueuedSession,
    isSaving,
    handleSave,
  } = useSessionScheduling();

  const { monthLabel, days, goToPreviousMonth, goToNextMonth, canGoToPreviousMonth } =
    useCalendarMonth();

  return (
    <SlideOverPanel
      title="Agendar Sessões"
      subtitle={patient.name}
      onClose={onClose}
      onSubmit={handleSave}
      footer={
        <>
          <span className="text-sm text-sand-100/60">
            {queuedSessions.length} sessão(ões) a agendar
          </span>
          <button
            type="submit"
            disabled={isSaving || queuedSessions.length === 0}
            className="flex h-11 items-center gap-2 rounded-xl bg-brand-500 px-6 text-sm font-bold text-white transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSaving ? "A guardar..." : "Guardar Agendamento"}
            <Check className="size-4" />
          </button>
        </>
      }
    >
      <div className="flex flex-col gap-6">
        <div>
          <h3 className="text-sm font-bold text-white">Serviço ou plano indicado</h3>
          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {SERVICES.map((service) => {
              const isSelected = service.slug === serviceSlug;

              return (
                <button
                  key={service.slug}
                  type="button"
                  onClick={() => setServiceSlug(service.slug)}
                  className={`rounded-xl border p-3 text-left text-sm transition ${
                    isSelected
                      ? "border-brand-500 bg-brand-500/10"
                      : "border-white/10 bg-white/5 hover:border-white/20"
                  }`}
                >
                  <p className="font-semibold text-white">{service.name}</p>
                  <p className="mt-0.5 text-xs text-sand-100/60">
                    {service.duration} — {service.price}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 border-t border-white/10 pt-6 sm:grid-cols-2">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white">{monthLabel}</h3>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={goToPreviousMonth}
                  disabled={!canGoToPreviousMonth}
                  className="flex size-7 items-center justify-center rounded-full border border-white/10 text-sand-100/70 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ChevronLeft className="size-3.5" />
                </button>
                <button
                  type="button"
                  onClick={goToNextMonth}
                  className="flex size-7 items-center justify-center rounded-full border border-white/10 text-sand-100/70 transition hover:bg-white/10"
                >
                  <ChevronRight className="size-3.5" />
                </button>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-7 gap-y-1 text-center">
              {WEEKDAYS.map((weekday) => (
                <span key={weekday} className="text-xs font-semibold text-sand-100/40">
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
                      onClick={() => setSelectedDate(cell.date)}
                      className={`flex size-7 items-center justify-center rounded-full text-xs font-medium transition disabled:cursor-not-allowed ${
                        isSelected
                          ? "bg-brand-500 text-white"
                          : cell.available
                            ? "text-white hover:bg-white/10"
                            : "text-sand-100/20"
                      }`}
                    >
                      {cell.day}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white">Horário</h3>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {TIME_SLOTS.map((time) => {
                const isSelected = time === selectedTime;

                return (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`flex h-9 items-center justify-center rounded-lg border text-xs font-semibold transition ${
                      isSelected
                        ? "border-brand-500 bg-brand-500 text-white"
                        : "border-white/10 bg-white/5 text-sand-100/80 hover:border-white/20"
                    }`}
                  >
                    {time}
                  </button>
                );
              })}
            </div>

            <h3 className="mt-4 text-sm font-bold text-white">Modalidade</h3>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setSelectedModality("presencial")}
                className={`flex h-9 items-center justify-center rounded-lg border text-xs font-semibold transition ${
                  selectedModality === "presencial"
                    ? "border-brand-500 bg-brand-500 text-white"
                    : "border-white/10 bg-white/5 text-sand-100/80 hover:border-white/20"
                }`}
              >
                Presencial
              </button>
              <button
                type="button"
                onClick={() => setSelectedModality("online")}
                className={`flex h-9 items-center justify-center rounded-lg border text-xs font-semibold transition ${
                  selectedModality === "online"
                    ? "border-brand-500 bg-brand-500 text-white"
                    : "border-white/10 bg-white/5 text-sand-100/80 hover:border-white/20"
                }`}
              >
                Online
              </button>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={addQueuedSession}
          disabled={!serviceSlug}
          className="flex h-11 items-center justify-center rounded-xl border border-dashed border-white/20 text-sm font-semibold text-sand-100/80 transition hover:border-brand-500 hover:text-brand-500 disabled:cursor-not-allowed disabled:opacity-40"
        >
          + Adicionar à lista de sessões
        </button>

        <div className="border-t border-white/10 pt-6">
          <h3 className="text-sm font-bold text-white">Sessões a agendar</h3>

          {queuedSessions.length === 0 ? (
            <p className="mt-3 text-xs text-sand-100/50">
              Ainda não adicionou nenhuma sessão à lista.
            </p>
          ) : (
            <ul className="mt-3 flex flex-col gap-2">
              {queuedSessions.map((session) => {
                const service = getServiceBySlug(session.serviceSlug);

                return (
                  <li
                    key={session.id}
                    className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <div>
                      <p className="text-sm font-semibold text-white">{service?.name}</p>
                      <p className="text-xs text-sand-100/60">
                        {formatDateTimeLabel(session.date, session.time)} —{" "}
                        {session.modality === "presencial" ? "Presencial" : "Online"}
                      </p>
                    </div>
                    <button
                      type="button"
                      aria-label="Remover sessão"
                      onClick={() => removeQueuedSession(session.id)}
                      className="flex size-8 shrink-0 items-center justify-center rounded-full text-sand-100/50 transition hover:bg-danger-500/15 hover:text-danger-500"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </SlideOverPanel>
  );
}
