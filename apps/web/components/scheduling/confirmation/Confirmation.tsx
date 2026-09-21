import Link from "next/link";
import { Calendar, Check, Home, MapPin, User } from "lucide-react";
import type { SchedulingService } from "../service-selection/services-data";
import { AddToCalendarButton } from "./AddToCalendarButton";

interface ConfirmationProps {
  service?: SchedulingService;
  dateTimeLabel: string;
  selectedDate: Date;
  selectedTime: string;
  isOnline: boolean;
  isUrgent: boolean;
}

export function Confirmation({
  service,
  dateTimeLabel,
  selectedDate,
  selectedTime,
  isOnline,
  isUrgent,
}: ConfirmationProps) {
  const iconWrapperClassName = isUrgent
    ? "flex size-9 shrink-0 items-center justify-center rounded-lg bg-sos-500/10 text-sos-500"
    : "flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500 dark:bg-brand-500/20";

  return (
    <div className="mt-8 flex min-h-[65vh] items-center sm:mt-0">
      <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2">
      <div className="text-center">
        <span
          className={`mx-auto flex size-16 items-center justify-center rounded-full ${
            isUrgent
              ? "bg-sos-500/10 text-sos-500"
              : "bg-brand-500/10 text-brand-500 dark:bg-brand-500/15"
          }`}
        >
          <Check className="size-8" />
        </span>

        <h1 className="mt-6 text-3xl font-extrabold text-ink-900 dark:text-white">
          Marcação Confirmada!
        </h1>
        <p className="mt-3 text-ink-500 dark:text-sand-100/70">
          A sua consulta foi agendada com sucesso para{" "}
          <strong>{dateTimeLabel}</strong>. Enviamos um email de confirmação.
        </p>

        <div className="mt-8 flex flex-col-reverse gap-2 sm:flex-row sm:items-center sm:justify-center">
          <Link
            href="/"
            className="flex h-12 items-center justify-center gap-1.5 rounded-xl border border-ink-900 px-6 text-sm font-bold whitespace-nowrap text-ink-900 transition hover:bg-ink-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-ink-900"
          >
            <Home className="size-4 shrink-0" />
            Voltar ao Início
          </Link>
          <AddToCalendarButton
            service={service}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            isOnline={isOnline}
            isUrgent={isUrgent}
          />
        </div>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-soft dark:bg-white/5">
        <h2 className="font-bold text-ink-900 dark:text-white">
          Informações da sua marcação
        </h2>

        <div className="mt-4 flex flex-col gap-4 border-t border-ink-200/60 pt-4 dark:border-white/10">
          <div className="flex items-start gap-3">
            <span className={iconWrapperClassName}>
              <User className="size-4" />
            </span>
            <div>
              <p className="text-xs text-ink-400 dark:text-sand-100/60">
                Psicólogo e Hipnoterapeuta
              </p>
              <p className="font-bold text-ink-900 dark:text-white">
                Bernardo Cassuende
              </p>
            </div>
          </div>

          {service && (
            <div className="flex items-start gap-3">
              <span className={iconWrapperClassName}>
                <Check className="size-4" />
              </span>
              <div>
                <p className="text-xs text-ink-400 dark:text-sand-100/60">
                  Serviço
                </p>
                <p className="font-bold text-ink-900 dark:text-white">
                  {service.name}
                </p>
              </div>
            </div>
          )}

          <div className="flex items-start gap-3">
            <span className={iconWrapperClassName}>
              <Calendar className="size-4" />
            </span>
            <div>
              <p className="text-xs text-ink-400 dark:text-sand-100/60">
                Data &amp; Hora
              </p>
              <p className="font-bold text-ink-900 dark:text-white">
                {dateTimeLabel}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className={iconWrapperClassName}>
              <MapPin className="size-4" />
            </span>
            <div>
              <p className="text-xs text-ink-400 dark:text-sand-100/60">
                Local da Consulta
              </p>
              <p className="font-bold text-ink-900 dark:text-white">
                {isOnline ? "Consulta online" : "Rua 28 de Maio, Bairro da Maianga, Luanda, Angola"}
              </p>
            </div>
          </div>

          {service && (
            <div className="flex items-start gap-3">
              <span className={iconWrapperClassName}>
                <Check className="size-4" />
              </span>
              <div>
                <p className="text-xs text-ink-400 dark:text-sand-100/60">
                  Investimento
                </p>
                <p className="font-bold text-ink-900 dark:text-white">
                  {service.price} (Pago na clínica ou via transferência)
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      </div>
    </div>
  );
}
