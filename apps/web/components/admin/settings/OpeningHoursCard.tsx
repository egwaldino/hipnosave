import type { OpeningHoursDay } from "./settings-data";

interface OpeningHoursCardProps {
  days: OpeningHoursDay[];
  onToggleDay: (id: string) => void;
  onTimeChange: (id: string, field: "startTime" | "endTime", value: string) => void;
}

export function OpeningHoursCard({ days, onToggleDay, onTimeChange }: OpeningHoursCardProps) {
  return (
    <div className="w-96 shrink-0 rounded-2xl bg-white/5 p-6 shadow-soft">
      <h2 className="text-lg font-bold text-white">Horário de Funcionamento</h2>

      <div className="mt-5 flex flex-col gap-4 border-t border-white/10 pt-5">
        {days.map((day) => (
          <div key={day.id} className="flex items-center gap-3">
            <button
              type="button"
              role="switch"
              aria-checked={day.isOpen}
              onClick={() => onToggleDay(day.id)}
              className={`relative h-6 w-11 shrink-0 rounded-full transition ${
                day.isOpen ? "bg-brand-500" : "bg-white/15"
              }`}
            >
              <span
                className={`absolute top-0.5 left-0.5 size-5 rounded-full bg-white transition-transform ${
                  day.isOpen ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>

            <span className="w-16 shrink-0 text-sm font-semibold text-white">{day.label}</span>

            {day.isOpen ? (
              <div className="flex flex-1 items-center gap-2">
                <input
                  type="time"
                  value={day.startTime}
                  onChange={(event) => onTimeChange(day.id, "startTime", event.target.value)}
                  className="h-9 flex-1 rounded-lg border border-white/10 bg-white/5 px-2.5 text-sm text-white outline-none transition focus:border-brand-500 scheme-dark"
                />
                <span className="text-sand-100/50">-</span>
                <input
                  type="time"
                  value={day.endTime}
                  onChange={(event) => onTimeChange(day.id, "endTime", event.target.value)}
                  className="h-9 flex-1 rounded-lg border border-white/10 bg-white/5 px-2.5 text-sm text-white outline-none transition focus:border-brand-500 scheme-dark"
                />
              </div>
            ) : (
              <div className="flex h-9 flex-1 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-sm text-sand-100/40">
                Fechado
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
