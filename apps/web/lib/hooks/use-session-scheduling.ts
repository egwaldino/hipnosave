"use client";

import { useState } from "react";
import type { SchedulingModality } from "./use-scheduling-flow";
import { firstAvailableWeekday } from "@/components/scheduling/shared/format-date-time";

export interface QueuedSession {
  id: string;
  serviceSlug: string;
  date: Date;
  time: string;
  modality: SchedulingModality;
}

export function useSessionScheduling() {
  const [serviceSlug, setServiceSlug] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState(() => firstAvailableWeekday(new Date()));
  const [selectedTime, setSelectedTime] = useState("14:00");
  const [selectedModality, setSelectedModality] = useState<SchedulingModality>("presencial");
  const [queuedSessions, setQueuedSessions] = useState<QueuedSession[]>([]);
  const [isSaving, setIsSaving] = useState(false);

  function addQueuedSession() {
    if (!serviceSlug) return;

    setQueuedSessions((current) => [
      ...current,
      {
        id: `${serviceSlug}-${selectedDate.toISOString()}-${selectedTime}`,
        serviceSlug,
        date: selectedDate,
        time: selectedTime,
        modality: selectedModality,
      },
    ]);
  }

  function removeQueuedSession(id: string) {
    setQueuedSessions((current) => current.filter((session) => session.id !== id));
  }

  async function handleSave(event: React.FormEvent) {
    event.preventDefault();
    setIsSaving(true);
    // TODO: chamar lib/api quando existir um endpoint para guardar o agendamento
    setIsSaving(false);
  }

  return {
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
  };
}
