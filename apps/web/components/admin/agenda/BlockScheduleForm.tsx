"use client";

import { useState } from "react";
import { CalendarDays, Clock } from "lucide-react";
import { BLOCK_REASONS } from "./agenda-data";

const fieldClassName =
  "h-10 w-full rounded-lg border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition focus:border-brand-500 scheme-dark";

const nativePickerClassName =
  "pr-10 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-0 [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:w-11 [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0";

export function BlockScheduleForm() {
  const [date, setDate] = useState("2026-08-28");
  const [startTime, setStartTime] = useState("13:00");
  const [endTime, setEndTime] = useState("14:00");
  const [reason, setReason] = useState(BLOCK_REASONS[0]);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    // TODO: chamar lib/api/createSlot (bloqueio) quando a API estiver ligada
  }

  return (
    <div className="w-69 shrink-0 rounded-2xl bg-white/5 p-6 shadow-soft">
      <h3 className="text-lg font-bold text-white">Bloquear Horário</h3>

      <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-4">
        <div>
          <label htmlFor="block-date" className="mb-1 block text-sm font-bold text-white">
            Data
          </label>
          <div className="relative">
            <input
              id="block-date"
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              className={`${fieldClassName} ${nativePickerClassName}`}
            />
            <CalendarDays className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-sand-100/50" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="start-time" className="mb-1 block text-sm font-bold text-white">
              Hora de Início
            </label>
            <div className="relative">
              <input
                id="start-time"
                type="time"
                value={startTime}
                onChange={(event) => setStartTime(event.target.value)}
                className={`${fieldClassName} ${nativePickerClassName}`}
              />
              <Clock className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-sand-100/50" />
            </div>
          </div>

          <div>
            <label htmlFor="end-time" className="mb-1 block text-sm font-bold text-white">
              Hora de Fim
            </label>
            <div className="relative">
              <input
                id="end-time"
                type="time"
                value={endTime}
                onChange={(event) => setEndTime(event.target.value)}
                className={`${fieldClassName} ${nativePickerClassName}`}
              />
              <Clock className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-sand-100/50" />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="reason" className="mb-1 block text-sm font-bold text-white">
            Motivo
          </label>
          <input
            id="reason"
            list="reason-options"
            value={reason}
            onChange={(event) => setReason(event.target.value)}
            placeholder="Escreva ou escolha um motivo"
            className={fieldClassName}
          />
          <datalist id="reason-options">
            {BLOCK_REASONS.map((option) => (
              <option key={option} value={option} />
            ))}
          </datalist>
        </div>

        <button
          type="submit"
          className="mt-2 flex h-10 items-center justify-center rounded-lg bg-brand-500 text-sm font-bold text-white transition hover:bg-brand-600"
        >
          Bloquear Agenda
        </button>
      </form>
    </div>
  );
}
