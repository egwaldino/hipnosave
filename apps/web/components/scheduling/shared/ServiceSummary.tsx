import { Calendar, Clock, HeartPulse, MapPin, User } from "lucide-react";
import type { SchedulingService } from "../service-selection/services-data";

interface ServiceSummaryProps {
  service: SchedulingService;
  dateTimeLabel?: string;
  modalityLabel?: string;
}

export function ServiceSummary({ service, dateTimeLabel, modalityLabel }: ServiceSummaryProps) {
  const iconWrapperClassName = service.isUrgent
    ? "flex size-8 shrink-0 items-center justify-center rounded-lg bg-sos-500/10 text-sos-500"
    : "flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500 dark:bg-brand-500/20";

  return (
    <div className="rounded-2xl bg-white p-5 shadow-soft dark:bg-white/5">
      <h3 className="font-bold text-ink-900 dark:text-white">Resumo do Agendamento</h3>

      <div className="mt-3 flex items-start gap-3 border-t border-ink-200/60 pt-3 dark:border-white/10">
        <span className={iconWrapperClassName}>
          <User className="size-4" />
        </span>
        <div>
          <p className="text-xs text-ink-400 dark:text-sand-100/60">Psicólogo e Hipnoterapeuta</p>
          <p className="font-bold text-ink-900 dark:text-white">Bernardo Cassuende</p>
        </div>
      </div>

      <div className="mt-3 flex items-start gap-3">
        <span className={iconWrapperClassName}>
          <HeartPulse className="size-4" />
        </span>
        <div>
          <p className="text-xs text-ink-400 dark:text-sand-100/60">Serviço</p>
          <p className="font-bold text-ink-900 dark:text-white">{service.name}</p>
        </div>
      </div>

      <div className="mt-3 flex items-start gap-3">
        <span className={iconWrapperClassName}>
          <Clock className="size-4" />
        </span>
        <div>
          <p className="text-xs text-ink-400 dark:text-sand-100/60">Duração</p>
          <p className="font-bold text-ink-900 dark:text-white">{service.duration}</p>
        </div>
      </div>

      {dateTimeLabel && (
        <div className="mt-3 flex items-start gap-3">
          <span className={iconWrapperClassName}>
            <Calendar className="size-4" />
          </span>
          <div>
            <p className="text-xs text-ink-400 dark:text-sand-100/60">Data e Hora</p>
            <p className="font-bold text-ink-900 dark:text-white">{dateTimeLabel}</p>
          </div>
        </div>
      )}

      {modalityLabel && (
        <div className="mt-3 flex items-start gap-3">
          <span className={iconWrapperClassName}>
            <MapPin className="size-4" />
          </span>
          <div>
            <p className="text-xs text-ink-400 dark:text-sand-100/60">Modalidade</p>
            <p className="font-bold text-ink-900 dark:text-white">{modalityLabel}</p>
          </div>
        </div>
      )}

      <div className="mt-4 flex items-center justify-between border-t border-ink-200/60 pt-3 dark:border-white/10">
        <span className="text-sm text-ink-500 dark:text-sand-100/70">Total a Investir</span>
        <span
          className={`text-lg font-bold ${
            service.isUrgent ? "text-sos-500" : "text-brand-600 dark:text-brand-400"
          }`}
        >
          {service.price}
        </span>
      </div>
    </div>
  );
}
