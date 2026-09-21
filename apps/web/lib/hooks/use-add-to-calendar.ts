"use client";

import type { SchedulingService } from "@/components/scheduling/service-selection/services-data";

interface UseAddToCalendarInput {
  service?: SchedulingService;
  selectedDate: Date;
  selectedTime: string;
  isOnline: boolean;
}

const CLINIC_ADDRESS = "Rua 28 de Maio, Bairro da Maianga, Luanda, Angola";

function parseDurationMinutes(duration?: string) {
  const match = duration?.match(/\d+/);
  return match ? Number(match[0]) : 50;
}

function buildEventDates({ selectedDate, selectedTime, service }: UseAddToCalendarInput) {
  const [hours, minutes] = selectedTime.split(":").map(Number);
  const start = new Date(selectedDate);
  start.setHours(hours, minutes, 0, 0);

  const end = new Date(start);
  end.setMinutes(end.getMinutes() + parseDurationMinutes(service?.duration));

  return { start, end };
}

function toIcsDate(date: Date) {
  return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

export function useAddToCalendar(input: UseAddToCalendarInput) {
  const { service, isOnline } = input;
  const { start, end } = buildEventDates(input);

  const title = service?.isUrgent
    ? `${service.name} — HipnoSave`
    : `Consulta de ${service?.name ?? "Hipnoterapia"} — HipnoSave`;
  const description = service?.isUrgent
    ? `Sessão prioritária de psicologia e hipnoterapia com Bernardo Cassuende (Psicólogo e Hipnoterapeuta).`
    : `Sessão de ${service?.name ?? "hipnoterapia"} com Bernardo Cassuende (Psicólogo e Hipnoterapeuta).`;
  const location = isOnline ? "Consulta online" : CLINIC_ADDRESS;

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?${new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates: `${toIcsDate(start)}/${toIcsDate(end)}`,
    details: description,
    location,
  }).toString()}`;

  function downloadIcs() {
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//HipnoSave//Agendamento//PT",
      "BEGIN:VEVENT",
      `UID:${Date.now()}@hipnosave.co.ao`,
      `DTSTAMP:${toIcsDate(new Date())}`,
      `DTSTART:${toIcsDate(start)}`,
      `DTEND:${toIcsDate(end)}`,
      `SUMMARY:${title}`,
      `DESCRIPTION:${description}`,
      `LOCATION:${location}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "consulta-hipnosave.ics";
    link.click();
    URL.revokeObjectURL(url);
  }

  function isMobileDevice() {
    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  }

  function addToCalendar() {
    if (isMobileDevice()) {
      downloadIcs();
    } else {
      window.open(googleCalendarUrl, "_blank", "noopener,noreferrer");
    }
  }

  return { addToCalendar };
}
