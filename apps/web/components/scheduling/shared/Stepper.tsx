import { Check } from "lucide-react";
import { SCHEDULING_STEPS } from "@/lib/hooks/use-scheduling-flow";

interface StepperProps {
  currentStepIndex: number;
  isUrgent?: boolean;
}

export function Stepper({ currentStepIndex, isUrgent }: StepperProps) {
  const accentBg = isUrgent ? "bg-sos-500" : "bg-brand-500";

  return (
    <ol className="flex items-center gap-2 sm:gap-3">
      {SCHEDULING_STEPS.map((step, index) => {
        const isCompleted = index < currentStepIndex;
        const isActive = index === currentStepIndex;

        return (
          <li key={step.id} className="flex items-center gap-2 sm:gap-3">
            {index > 0 && (
              <span
                className={`h-px w-4 sm:w-8 ${isCompleted || isActive ? accentBg : "bg-white/20"}`}
              />
            )}

            <div className="flex items-center gap-2">
              <span
                className={`flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                  isCompleted || isActive ? `${accentBg} text-white` : "bg-white/10 text-white/50"
                }`}
              >
                {isCompleted ? <Check className="size-3.5" /> : index + 1}
              </span>
              <span
                className={`hidden text-sm font-medium sm:inline ${
                  isActive ? "text-white" : isCompleted ? "text-white/80" : "text-white/40"
                }`}
              >
                {step.label}
              </span>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
