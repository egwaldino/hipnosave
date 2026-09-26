export type PatientStatus = "Ativo" | "Inativo" | "Pendente";

export interface SessionHistoryEntry {
  date: string;
  label: string;
  attended: boolean;
}

export interface Patient {
  id: string;
  name: string;
  phone: string;
  email: string;
  sessions: number;
  status: PatientStatus;
  avatarUrl?: string;
  currentSession?: string;
  sessionHistory: SessionHistoryEntry[];
}

export const STATUS_OPTIONS = ["Todos", "Ativo", "Inativo", "Pendente"] as const;

export const PATIENTS: Patient[] = [
  {
    id: "923411",
    name: "Ana Rodrigues",
    phone: "923 445 112",
    email: "ana.rod@gmail.com",
    sessions: 4,
    status: "Ativo",
    avatarUrl: "https://i.pravatar.cc/160?img=47",
    currentSession: "Hipnoterapia Clínica",
    sessionHistory: [
      { date: "24 Ago 2026", label: "Hipnoterapia Clínica", attended: true },
      { date: "17 Ago 2026", label: "Gestão de Ansiedade", attended: true },
      { date: "10 Ago 2026", label: "Primeira Consulta", attended: true },
    ],
  },
  {
    id: "914223",
    name: "Carlos Manuel",
    phone: "912 887 554",
    email: "carlos.m@hotmail.com",
    sessions: 2,
    status: "Ativo",
    currentSession: "Gestão de Ansiedade",
    sessionHistory: [
      { date: "20 Ago 2026", label: "Gestão de Ansiedade", attended: false },
      { date: "6 Ago 2026", label: "Primeira Consulta", attended: true },
    ],
  },
  {
    id: "905112",
    name: "Maria Antónia",
    phone: "924 556 123",
    email: "m.antonia@live.com",
    sessions: 6,
    status: "Ativo",
    currentSession: "Tratamento de Fobias",
    sessionHistory: [
      { date: "25 Ago 2026", label: "Tratamento de Fobias", attended: true },
      { date: "18 Ago 2026", label: "Tratamento de Fobias", attended: true },
    ],
  },
  {
    id: "889012",
    name: "Mateus Pedro",
    phone: "931 112 009",
    email: "mateus.p@outlook.com",
    sessions: 1,
    status: "Inativo",
    currentSession: "Cessação Tabágica",
    sessionHistory: [{ date: "3 Jul 2026", label: "Primeira Consulta", attended: false }],
  },
  {
    id: "876554",
    name: "Cláudia Santos",
    phone: "923 776 211",
    email: "claudia.s@gmail.com",
    sessions: 8,
    status: "Ativo",
    currentSession: "Autoestima & Confiança",
    sessionHistory: [
      { date: "26 Ago 2026", label: "Autoestima & Confiança", attended: true },
      { date: "19 Ago 2026", label: "Autoestima & Confiança", attended: true },
    ],
  },
  {
    id: "861003",
    name: "João de Almeida",
    phone: "915 223 445",
    email: "joao.al@gmail.com",
    sessions: 0,
    status: "Pendente",
    sessionHistory: [],
  },
  {
    id: "854221",
    name: "Helena Vaz",
    phone: "922 443 119",
    email: "helena.vaz@outlook.com",
    sessions: 5,
    status: "Ativo",
    currentSession: "Tratamento de Fobias",
    sessionHistory: [
      { date: "22 Ago 2026", label: "Tratamento de Fobias", attended: true },
      { date: "15 Ago 2026", label: "Tratamento de Fobias", attended: true },
    ],
  },
  {
    id: "847790",
    name: "Luís Miguel",
    phone: "926 778 001",
    email: "luis.mig@hotmail.com",
    sessions: 3,
    status: "Ativo",
    currentSession: "Cessação Tabágica",
    sessionHistory: [{ date: "12 Ago 2026", label: "Cessação Tabágica", attended: true }],
  },
];

export function getPatientById(id: string): Patient | undefined {
  return PATIENTS.find((patient) => patient.id === id);
}
