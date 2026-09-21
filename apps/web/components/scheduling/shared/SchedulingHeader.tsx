import Image from "next/image";
import { Stepper } from "./Stepper";

interface SchedulingHeaderProps {
  currentStepIndex: number;
  isUrgent?: boolean;
}

export function SchedulingHeader({ currentStepIndex, isUrgent }: SchedulingHeaderProps) {
  return (
    <header className="bg-ink-900">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between gap-4 px-4 md:px-8">
        <div className="flex items-center gap-3">
          <Image
            src="/logo-hipnosave-on-dark.webp"
            alt="HipnoSave"
            width={130}
            height={86}
            className={`h-24 w-auto ${isUrgent ? "hidden sm:block" : ""}`}
          />

          {isUrgent && (
            <span className="flex items-center gap-2 rounded-full bg-sos-500 px-4 py-2 text-sm font-bold tracking-wide text-white uppercase sm:gap-1.5 sm:px-2.5 sm:py-1 sm:text-[10px]">
              <span className="relative flex h-2.5 w-2.5 sm:h-2 sm:w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                <span className="relative inline-flex h-full w-full rounded-full bg-white" />
              </span>
              SOS
            </span>
          )}
        </div>

        <Stepper currentStepIndex={currentStepIndex} isUrgent={isUrgent} />
      </div>
    </header>
  );
}
