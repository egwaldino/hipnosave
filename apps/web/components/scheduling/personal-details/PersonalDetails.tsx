import { usePersonalDetailsForm } from "@/lib/hooks/use-personal-details-form";
import { CountryCodeSelect } from "./CountryCodeSelect";
import type { SchedulingService } from "../service-selection/services-data";
import { ServiceSummary } from "../shared/ServiceSummary";

interface PersonalDetailsProps {
  service?: SchedulingService;
  dateTimeLabel: string;
  modalityLabel: string;
  isUrgent: boolean;
  onBack: () => void;
  onNext: () => void;
}

export function PersonalDetails({
  service,
  dateTimeLabel,
  modalityLabel,
  isUrgent,
  onBack,
  onNext,
}: PersonalDetailsProps) {
  const {
    patientName,
    setPatientName,
    patientEmail,
    setPatientEmail,
    countryCode,
    setCountryCode,
    localPhone,
    setLocalPhone,
    reason,
    setReason,
    acceptedTerms,
    setAcceptedTerms,
    errors,
    submit,
  } = usePersonalDetailsForm();

  const primaryButtonClassName = isUrgent
    ? "bg-sos-500 hover:bg-sos-500/90"
    : "bg-brand-500 hover:bg-brand-600";
  const inputClassName = (hasError?: string) =>
    `h-11 w-full rounded-lg border bg-white px-4 text-base text-ink-900 outline-none transition placeholder:text-ink-400 sm:text-sm dark:bg-white/5 dark:text-white dark:placeholder:text-sand-100/40 ${
      hasError
        ? "border-sos-500 focus:border-sos-500"
        : `border-ink-200/60 dark:border-white/10 ${isUrgent ? "focus:border-sos-500" : "focus:border-brand-500"}`
    }`;
  const checkboxClassName = `mt-0.5 size-4 shrink-0 rounded border-ink-300 ${
    isUrgent
      ? "accent-sos-500 text-sos-500 focus:ring-sos-500"
      : "accent-brand-500 text-brand-500 focus:ring-brand-500"
  }`;

  function handleSubmit() {
    submit(onNext);
  }

  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-ink-900 dark:text-white">Os teus dados</h1>
          <p className="mt-2 text-ink-500 dark:text-sand-100/70">
            Por favor, preencha as suas informações pessoais e descreva brevemente o motivo da sua
            consulta.
          </p>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={onBack}
            className="flex h-12 items-center justify-center gap-2 rounded-xl border border-ink-900 px-6 text-sm font-bold text-ink-900 transition hover:bg-ink-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-ink-900"
          >
            ← Anterior
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className={`flex h-12 items-center justify-center gap-2 rounded-xl px-6 text-sm font-bold text-white transition ${primaryButtonClassName}`}
          >
            Confirmar Marcação →
          </button>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_440px]">
        <div className="flex flex-col gap-2.5">
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-bold text-ink-900 dark:text-white">
                Nome Completo
              </label>
              <input
                type="text"
                value={patientName}
                onChange={(event) => setPatientName(event.target.value)}
                placeholder="Ex: Maria Antónia Francisco"
                className={inputClassName(errors.patientName)}
              />
              {errors.patientName && (
                <p className="mt-1 text-xs text-sos-500">{errors.patientName}</p>
              )}
            </div>

            <div>
              <label className="mb-1 block text-sm font-bold text-ink-900 dark:text-white">
                Endereço de Email (opcional)
              </label>
              <input
                type="email"
                value={patientEmail}
                onChange={(event) => setPatientEmail(event.target.value)}
                placeholder="Ex: maria.antonia@gmail.com"
                className={inputClassName(errors.patientEmail)}
              />
              {errors.patientEmail && (
                <p className="mt-1 text-xs text-sos-500">{errors.patientEmail}</p>
              )}
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-bold text-ink-900 dark:text-white">
              Número de Telefone
            </label>
            <div className="flex gap-2">
              <CountryCodeSelect
                value={countryCode}
                onValueChange={setCountryCode}
                accentClassName={isUrgent ? "focus:border-sos-500" : "focus:border-brand-500"}
              />
              <input
                type="tel"
                value={localPhone}
                onChange={(event) => setLocalPhone(event.target.value)}
                placeholder="Ex: 923 000 000"
                className={inputClassName(errors.patientPhone)}
              />
            </div>
            {errors.patientPhone && (
              <p className="mt-1 text-xs text-sos-500">{errors.patientPhone}</p>
            )}
          </div>

          <div>
            <label className="mb-1 block text-sm font-bold text-ink-900 dark:text-white">
              {isUrgent ? "O que está a sentir neste momento?" : "Motivo da Consulta"}
            </label>
            <textarea
              rows={3}
              value={reason}
              onChange={(event) => setReason(event.target.value)}
              placeholder={
                isUrgent
                  ? "Descreva brevemente a situação e os sintomas que está a sentir agora, para o Bernardo se preparar antes da sessão..."
                  : "Descreva brevemente o que pretende trabalhar nas sessões de terapia..."
              }
              className={`${inputClassName()} h-auto resize-none py-2.5`}
            />
          </div>

          <div>
            <label className="flex items-start gap-2.5 text-sm text-ink-600 dark:text-sand-100/80">
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={(event) => setAcceptedTerms(event.target.checked)}
                className={checkboxClassName}
              />
              Aceito os termos e condições de privacidade e autorizo o processamento dos meus
              dados de saúde mental.
            </label>
            {errors.acceptedTerms && (
              <p className="mt-1 text-xs text-sos-500">{errors.acceptedTerms}</p>
            )}
          </div>
        </div>

        {service && (
          <ServiceSummary
            service={service}
            dateTimeLabel={dateTimeLabel}
            modalityLabel={modalityLabel}
          />
        )}
      </div>

      <div className="mt-6 flex items-center justify-between gap-3 md:hidden">
        <button
          type="button"
          onClick={onBack}
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-ink-900 px-4 text-sm font-bold text-ink-900 transition hover:bg-ink-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-ink-900"
        >
          ← Anterior
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          className={`flex h-12 flex-1 items-center justify-center gap-2 rounded-xl px-4 text-sm font-bold text-white transition ${primaryButtonClassName}`}
        >
          Confirmar →
        </button>
      </div>
    </div>
  );
}
