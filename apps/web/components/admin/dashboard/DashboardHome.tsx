import Link from "next/link";
import {
  BarChart3,
  Calendar,
  CalendarDays,
  CheckCircle2,
  Users,
} from "lucide-react";
import { DASHBOARD_STATS, RECENT_ACTIVITY, UPCOMING_APPOINTMENTS } from "./dashboard-data";

const STAT_ICONS = {
  "consultas-hoje": Calendar,
  "esta-semana": BarChart3,
  "pacientes-ativos": Users,
  "taxa-presenca": CheckCircle2,
} as const;

const TODAY_LABEL = "Quarta-feira, 28 de Agosto 2026";

export function DashboardHome() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex shrink-0 flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white">Bem-vindo, Bernardo Cassuende</h2>
          <p className="mt-1 text-sm text-sand-100/70">
            Aqui está o resumo geral das suas consultas e pacientes para hoje.
          </p>
        </div>
        <span className="flex items-center gap-2 rounded-xl border border-brand-500/20 bg-brand-500/10 px-4 py-2 text-sm font-semibold text-brand-500">
          <CalendarDays className="size-4" />
          {TODAY_LABEL}
        </span>
      </div>

      <div className="mt-6 grid shrink-0 grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {DASHBOARD_STATS.map((stat) => {
          const Icon = STAT_ICONS[stat.id];

          return (
            <div key={stat.id} className="rounded-2xl bg-white/5 p-5 shadow-soft">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-sand-100/70">{stat.label}</span>
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-500/20 text-brand-500">
                  <Icon className="size-4.5" />
                </span>
              </div>
              {stat.helper && (
                <p
                  className={`-mt-2 text-xs font-semibold ${
                    stat.helperTone === "positive" ? "text-success-500" : "text-danger-500"
                  }`}
                >
                  {stat.helper}
                </p>
              )}
              <p className="mt-2 text-3xl font-extrabold text-white">{stat.value}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-4 grid min-h-0 flex-1 grid-cols-1 gap-2 lg:grid-cols-[1fr_360px]">
        <div className="flex min-h-0 flex-col rounded-2xl bg-white/5 p-6 shadow-soft">
          <div className="flex shrink-0 items-center justify-between">
            <h3 className="text-lg font-bold text-white">Próximas Consultas</h3>
            <Link
              href="/admin/painel/agenda"
              className="text-sm font-semibold text-brand-500 transition hover:text-brand-600"
            >
              Ver Agenda Completa
            </Link>
          </div>

          <div className="mt-4 min-h-0 flex-1 overflow-y-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-xs font-semibold text-sand-100/50">
                  <th className="pb-3 font-semibold">Horário</th>
                  <th className="pb-3 font-semibold">Paciente</th>
                  <th className="pb-3 font-semibold">Serviço</th>
                  <th className="pb-3 font-semibold">Estado</th>
                </tr>
              </thead>
              <tbody>
                {UPCOMING_APPOINTMENTS.map((appointment) => (
                  <tr
                    key={`${appointment.time}-${appointment.patient}`}
                    className="border-t border-white/10"
                  >
                    <td className="py-3 font-bold text-white">{appointment.time}</td>
                    <td className="py-3 text-sand-100/90">{appointment.patient}</td>
                    <td className="py-3 text-sand-100/70">{appointment.service}</td>
                    <td className="py-3">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-bold ${
                          appointment.status === "confirmada"
                            ? "bg-success-500/15 text-success-500"
                            : "bg-danger-500/15 text-danger-500"
                        }`}
                      >
                        {appointment.status === "confirmada" ? "Confirmada" : "Cancelada"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex min-h-0 flex-col rounded-2xl bg-white/5 p-6 shadow-soft">
          <h3 className="shrink-0 text-lg font-bold text-white">Atividade Recente</h3>

          <ul className="mt-4 flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto">
            {RECENT_ACTIVITY.map((activity, index) => (
              <li key={index} className="flex gap-2.5">
                <span
                  className={`mt-1.5 size-2 shrink-0 rounded-full ${
                    activity.tone === "positive" ? "bg-success-500" : "bg-danger-500"
                  }`}
                />
                <div>
                  <p className="text-sm text-sand-100/90">{activity.message}</p>
                  <p className="text-xs text-sand-100/50">{activity.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
