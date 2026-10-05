"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { GENERAL_SERVICE, SOS_SERVICE } from "@/components/scheduling/service-selection/services-data";
import {
  firstAvailableWeekday,
  formatDateTimeLabel,
} from "@/components/scheduling/shared/format-date-time";

export const SCHEDULING_STEPS = [
  { id: "data-hora", label: "Data e Hora" },
  { id: "dados", label: "Dados e Pagamento" },
  { id: "confirmacao", label: "Confirmação" },
] as const;

export type SchedulingStepId = (typeof SCHEDULING_STEPS)[number]["id"];

export type SchedulingModality = "presencial" | "online";

export function useSchedulingFlow() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isUrgent = searchParams.get("servico") === SOS_SERVICE.slug;
  const selectedService = isUrgent ? SOS_SERVICE : GENERAL_SERVICE;

  const [stepIndex, setStepIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState(() => firstAvailableWeekday(new Date()));
  const [selectedTime, setSelectedTime] = useState("14:00");
  const [selectedModality, setSelectedModality] = useState<SchedulingModality>("presencial");

  function goToPreviousStep() {
    if (stepIndex === 0) {
      router.push("/");
      return;
    }
    setStepIndex((current) => Math.max(0, current - 1));
  }

  function goToNextStep() {
    setStepIndex((current) => Math.min(SCHEDULING_STEPS.length - 1, current + 1));
  }

  const dateTimeLabel = formatDateTimeLabel(selectedDate, selectedTime);
  const modalityLabel = selectedModality === "presencial" ? "Presencial" : "Online";

  return {
    step: SCHEDULING_STEPS[stepIndex],
    stepIndex,
    selectedService,
    isUrgent,
    goToPreviousStep,
    goToNextStep,
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
    selectedModality,
    setSelectedModality,
    dateTimeLabel,
    modalityLabel,
  };
}
