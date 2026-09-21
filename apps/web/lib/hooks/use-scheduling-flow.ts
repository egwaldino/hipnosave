"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { getServiceBySlug } from "@/components/scheduling/service-selection/services-data";
import {
  firstAvailableWeekday,
  formatDateTimeLabel,
} from "@/components/scheduling/shared/format-date-time";

export const SCHEDULING_STEPS = [
  { id: "servico", label: "Serviço" },
  { id: "data-hora", label: "Data e Hora" },
  { id: "dados", label: "Dados" },
  { id: "confirmacao", label: "Confirmação" },
] as const;

export type SchedulingStepId = (typeof SCHEDULING_STEPS)[number]["id"];

export type SchedulingModality = "presencial" | "online";

export function useSchedulingFlow() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const preselectedSlug = searchParams.get("servico");
  const hasValidPreselection = Boolean(getServiceBySlug(preselectedSlug));

  const [stepIndex, setStepIndex] = useState(hasValidPreselection ? 1 : 0);
  const [selectedServiceSlug, setSelectedServiceSlug] = useState<string | null>(
    hasValidPreselection ? preselectedSlug : null,
  );
  const [selectedDate, setSelectedDate] = useState(() => firstAvailableWeekday(new Date()));
  const [selectedTime, setSelectedTime] = useState("14:00");
  const [selectedModality, setSelectedModality] = useState<SchedulingModality>("presencial");

  function selectService(slug: string) {
    setSelectedServiceSlug(slug);
    setStepIndex(1);
    router.replace(`${pathname}?servico=${slug}`, { scroll: false });
  }

  function goToPreviousStep() {
    setStepIndex((current) => Math.max(0, current - 1));
  }

  function goToNextStep() {
    setStepIndex((current) => Math.min(SCHEDULING_STEPS.length - 1, current + 1));
  }

  const selectedService = getServiceBySlug(selectedServiceSlug);
  const isUrgent = selectedService?.isUrgent ?? false;
  const dateTimeLabel = formatDateTimeLabel(selectedDate, selectedTime);
  const modalityLabel = selectedModality === "presencial" ? "Presencial" : "Online";

  return {
    step: SCHEDULING_STEPS[stepIndex],
    stepIndex,
    selectedServiceSlug,
    selectedService,
    isUrgent,
    selectService,
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
