"use client";

import { Calendar } from "lucide-react";
import { useAddToCalendar } from "@/lib/hooks/use-add-to-calendar";
import type { SchedulingService } from "../service-selection/services-data";

interface AddToCalendarButtonProps {
  service?: SchedulingService;
  selectedDate: Date;
  selectedTime: string;
  isOnline: boolean;
  isUrgent: boolean;
}

export function AddToCalendarButton({
  service,
  selectedDate,
  selectedTime,
  isOnline,
  isUrgent,
}: AddToCalendarButtonProps) {
  const { addToCalendar } = useAddToCalendar({
    service,
    selectedDate,
    selectedTime,
    isOnline,
  });

  return (
    <button
      type="button"
      onClick={addToCalendar}
      className={`flex h-12 items-center justify-center gap-1.5 rounded-xl px-6 text-sm font-bold whitespace-nowrap text-white transition ${
        isUrgent ? "bg-sos-500 hover:bg-sos-500/90" : "bg-brand-500 hover:bg-brand-600"
      }`}
    >
      <Calendar className="size-4 shrink-0" />
      Adicionar ao Calendário
    </button>
  );
}
