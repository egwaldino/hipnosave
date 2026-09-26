"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Check, X } from "lucide-react";
import {
  SELECTED_DAY_INDEX,
  TIME_SLOTS,
  WEEK_DAYS,
  getEventPlacement,
  getUpcomingEvents,
} from "./agenda-data";

const VIEW_OPTIONS = ["Semana", "Dia", "Mês"] as const;

const ROW_COUNT = TIME_SLOTS.length - 1;
const GRID_COLUMNS = "64px repeat(6, 1fr)";

const EVENT_STYLES = {
  confirmada: "border-brand-500/60 bg-brand-500/10 text-brand-500",
  cancelada: "border-danger-500/60 bg-danger-500/10 text-danger-500",
  bloqueado: "border-white/15 bg-white/10 text-sand-100/80",
} as const;

export function AgendaCalendar() {
  const [view, setView] = useState<(typeof VIEW_OPTIONS)[number]>("Semana");

  return (
    <div className="flex min-h-0 flex-1 flex-col rounded-2xl bg-white/5 p-6 shadow-soft">
      <div className="flex shrink-0 flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Semana anterior"
            className="flex size-8 items-center justify-center rounded-full border border-white/10 text-sand-100/70 transition hover:bg-white/10"
          >
            <ChevronLeft className="size-4" />
          </button>
          <h3 className="text-lg font-bold text-white">Agosto 2026</h3>
          <button
            type="button"
            aria-label="Próxima semana"
            className="flex size-8 items-center justify-center rounded-full border border-white/10 text-sand-100/70 transition hover:bg-white/10"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>

        <div className="flex items-center gap-1 rounded-xl border border-white/10 p-1">
          {VIEW_OPTIONS.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setView(option)}
              className={`rounded-lg px-3 py-1.5 text-sm font-semibold transition ${
                view === option
                  ? "bg-brand-500/20 text-brand-500"
                  : "text-sand-100/60 hover:text-white"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 shrink-0 grid" style={{ gridTemplateColumns: GRID_COLUMNS }}>
        <div />
        {WEEK_DAYS.map((day, index) => (
          <div key={day.label} className="flex flex-col items-center gap-1.5 pb-3">
            <span className="text-xs font-semibold text-sand-100/50">{day.label}</span>
            <span
              className={`flex size-8 items-center justify-center rounded-full text-sm font-bold ${
                index === SELECTED_DAY_INDEX ? "bg-brand-500 text-white" : "text-white"
              }`}
            >
              {day.date}
            </span>
          </div>
        ))}
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto pt-2">
        <div
          className="relative grid"
          style={{
            gridTemplateColumns: GRID_COLUMNS,
            gridTemplateRows: `repeat(${ROW_COUNT}, 4.5rem)`,
          }}
        >
          {TIME_SLOTS.slice(0, ROW_COUNT).map((time, rowIndex) => (
            <span
              key={time}
              className="relative -top-2 pr-2 text-right text-xs text-sand-100/50"
              style={{ gridColumn: 1, gridRow: rowIndex + 1 }}
            >
              {time}
            </span>
          ))}

          {WEEK_DAYS.map((_, dayIndex) =>
            Array.from({ length: ROW_COUNT }).map((_, rowIndex) => (
              <div
                key={`${dayIndex}-${rowIndex}`}
                className="border-t border-l border-white/10"
                style={{ gridColumn: dayIndex + 2, gridRow: rowIndex + 1 }}
              />
            )),
          )}

          {getUpcomingEvents().map((event) => {
            const placement = getEventPlacement(event);

            return (
              <div
                key={`${event.dayIndex}-${event.startTime}-${event.title}`}
                className={`m-1 flex flex-col gap-0.5 rounded-lg border p-2 text-xs ${EVENT_STYLES[event.status]}`}
                style={{
                  gridColumn: placement.gridColumn,
                  gridRow: `${placement.gridRowStart} / ${placement.gridRowEnd}`,
                }}
              >
                <span className="flex items-center gap-1 font-bold">
                  {event.title}
                  {event.status === "confirmada" && <Check className="size-3 shrink-0" />}
                  {event.status === "cancelada" && <X className="size-3 shrink-0" />}
                </span>
                <span className="opacity-80">{event.subtitle}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
