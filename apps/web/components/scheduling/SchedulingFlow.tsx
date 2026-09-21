"use client";

import { useSchedulingFlow } from "@/lib/hooks/use-scheduling-flow";
import { Confirmation } from "./confirmation/Confirmation";
import { DateTimeSelection } from "./date-time/DateTimeSelection";
import { PersonalDetails } from "./personal-details/PersonalDetails";
import { ServiceSelection } from "./service-selection/ServiceSelection";
import { SchedulingHeader } from "./shared/SchedulingHeader";

export function SchedulingFlow() {
  const {
    step,
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
  } = useSchedulingFlow();

  return (
    <div className="min-h-screen bg-sand-50 dark:bg-ink-900">
      <SchedulingHeader currentStepIndex={stepIndex} isUrgent={isUrgent} />

      <div
        className={`mx-auto max-w-7xl px-4 pt-4 md:px-8 md:pt-5 ${
          step.id === "data-hora" || step.id === "dados" ? "pb-6 md:pb-8" : "pb-10 md:pb-14"
        }`}
      >
        {step.id === "servico" && (
          <ServiceSelection selectedSlug={selectedServiceSlug} onSelect={selectService} />
        )}

        {step.id === "data-hora" && (
          <DateTimeSelection
            service={selectedService}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            selectedModality={selectedModality}
            dateTimeLabel={dateTimeLabel}
            isUrgent={isUrgent}
            onSelectDate={setSelectedDate}
            onSelectTime={setSelectedTime}
            onSelectModality={setSelectedModality}
            onBack={goToPreviousStep}
            onNext={goToNextStep}
          />
        )}

        {step.id === "dados" && (
          <PersonalDetails
            service={selectedService}
            dateTimeLabel={dateTimeLabel}
            modalityLabel={modalityLabel}
            isUrgent={isUrgent}
            onBack={goToPreviousStep}
            onNext={goToNextStep}
          />
        )}

        {step.id === "confirmacao" && (
          <Confirmation
            service={selectedService}
            dateTimeLabel={dateTimeLabel}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            isOnline={selectedModality === "online"}
            isUrgent={isUrgent}
          />
        )}
      </div>
    </div>
  );
}
