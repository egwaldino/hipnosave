export interface DashboardStat {
  id: "consultas-hoje" | "esta-semana" | "pacientes-ativos" | "taxa-presenca";
  label: string;
  value: string;
  helper?: string;
  helperTone?: "positive" | "warning";
}

export const DASHBOARD_STATS: DashboardStat[] = [
  { id: "consultas-hoje", label: "Consultas Hoje", value: "4" },
  { id: "esta-semana", label: "Esta Semana", value: "18" },
  {
    id: "pacientes-ativos",
    label: "Pacientes Ativos",
    value: "142",
    helper: "4 novos este mês",
    helperTone: "positive",
  },
  {
    id: "taxa-presenca",
    label: "Taxa de Presença",
    value: "96%",
    helper: "6 consultas por confirmar",
    helperTone: "warning",
  },
];

export interface AppointmentRow {
  time: string;
  patient: string;
  service: string;
  status: "confirmada" | "cancelada";
}

export const UPCOMING_APPOINTMENTS: AppointmentRow[] = [
  { time: "09:00", patient: "Ana Rodrigues", service: "Hipnoterapia Clínica", status: "confirmada" },
  { time: "11:30", patient: "Carlos Manuel", service: "Gestão de Ansiedade", status: "confirmada" },
  { time: "14:00", patient: "Maria Antónia", service: "Tratamento de Fobias", status: "confirmada" },
  { time: "16:15", patient: "Mateus Pedro", service: "Cessação Tabágica", status: "cancelada" },
  { time: "17:30", patient: "Cláudia Santos", service: "Autoestima & Confiança", status: "confirmada" },
];

export interface ActivityItem {
  message: string;
  time: string;
  tone: "positive" | "negative";
}

export const RECENT_ACTIVITY: ActivityItem[] = [
  { message: "Ana Rodrigues marcou uma consulta para hoje às 09:00", time: "Há 10 min", tone: "positive" },
  { message: "Carlos Manuel marcou uma consulta para hoje às 11:30", time: "Há 42 min", tone: "positive" },
  { message: "Maria Antónia marcou uma consulta para hoje às 14:00", time: "Há 2 horas", tone: "positive" },
  { message: "Mateus Pedro cancelou a consulta de hoje às 16:15", time: "Ontem", tone: "negative" },
  { message: "Cláudia Santos marcou uma consulta para hoje às 17:30", time: "Ontem", tone: "positive" },
];
