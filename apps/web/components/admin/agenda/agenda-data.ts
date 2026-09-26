export interface CalendarDay {
  label: string;
  date: number;
}

export const WEEK_DAYS: CalendarDay[] = [
  { label: "SEG", date: 24 },
  { label: "TER", date: 25 },
  { label: "QUA", date: 26 },
  { label: "QUI", date: 27 },
  { label: "SEX", date: 28 },
  { label: "SÁB", date: 29 },
];

export const SELECTED_DAY_INDEX = 2;

export const TIME_SLOTS = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
];

export type EventStatus = "confirmada" | "cancelada" | "bloqueado";

export interface CalendarEvent {
  dayIndex: number;
  startTime: string;
  endTime: string;
  title: string;
  subtitle: string;
  status: EventStatus;
}

export const CALENDAR_EVENTS: CalendarEvent[] = [
  {
    dayIndex: 1,
    startTime: "09:00",
    endTime: "10:00",
    title: "Ana Rodrigues",
    subtitle: "Hipnoterapia",
    status: "confirmada",
  },
  {
    dayIndex: 3,
    startTime: "10:00",
    endTime: "11:00",
    title: "Rita Santos",
    subtitle: "Autoestima",
    status: "confirmada",
  },
  {
    dayIndex: 0,
    startTime: "11:00",
    endTime: "12:00",
    title: "Helena Vaz",
    subtitle: "Fobias",
    status: "confirmada",
  },
  {
    dayIndex: 0,
    startTime: "12:00",
    endTime: "13:00",
    title: "Carlos Manuel",
    subtitle: "Ansiedade",
    status: "cancelada",
  },
  {
    dayIndex: 4,
    startTime: "13:00",
    endTime: "14:00",
    title: "Mateus Pedro",
    subtitle: "Cessação Tabág.",
    status: "cancelada",
  },
  {
    dayIndex: 0,
    startTime: "14:00",
    endTime: "16:00",
    title: "Horário Bloqueado",
    subtitle: "Formação",
    status: "bloqueado",
  },
];

export const BLOCK_REASONS = ["Almoço", "Formação", "Consulta Externa", "Indisponível"];

export function getUpcomingEvents() {
  return CALENDAR_EVENTS.filter((event) => event.dayIndex >= SELECTED_DAY_INDEX);
}

export function getEventPlacement(event: CalendarEvent) {
  const startIndex = TIME_SLOTS.indexOf(event.startTime);
  const endIndex = TIME_SLOTS.indexOf(event.endTime);
  const span = Math.max(1, endIndex - startIndex);

  return {
    gridColumn: event.dayIndex + 2,
    gridRowStart: startIndex + 1,
    gridRowEnd: startIndex + 1 + span,
  };
}
