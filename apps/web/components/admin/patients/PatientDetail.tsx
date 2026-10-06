import Image from "next/image";
import { CalendarClock, FileText, Mail, Phone, ScrollText } from "lucide-react";
import { useSessionAttendance } from "@/lib/hooks/use-session-attendance";
import type { Patient } from "./patients-data";

interface PatientDetailProps {
  patient?: Patient;
  onOpenAnamnese: () => void;
  onOpenClinicalReport: () => void;
  onOpenSessionScheduling: () => void;
}

export function PatientDetail({
  patient,
  onOpenAnamnese,
  onOpenClinicalReport,
  onOpenSessionScheduling,
}: PatientDetailProps) {
  const { entries: sessionHistory, toggleAttendance } = useSessionAttendance(
    patient?.id,
    patient?.sessionHistory ?? [],
  );

  if (!patient) {
    return (
      <div className="flex w-80 shrink-0 items-center justify-center rounded-2xl bg-white/5 p-6 text-center text-sm text-sand-100/50 shadow-soft">
        Selecione um paciente para ver a ficha.
      </div>
    );
  }

  return (
    <div className="flex w-80 shrink-0 flex-col overflow-y-auto rounded-2xl bg-white/5 p-6 shadow-soft">
      <div className="flex flex-col items-center text-center">
        <div className="relative size-20 shrink-0 overflow-hidden rounded-full bg-white/10">
          {patient.avatarUrl && (
            <Image src={patient.avatarUrl} alt="" fill className="object-cover" />
          )}
        </div>
        <h3 className="mt-3 text-lg font-bold text-white">{patient.name}</h3>
        <p className="text-sm font-semibold text-brand-500">ID: #{patient.id}</p>
        {patient.currentSession && (
          <p className="mt-1 text-xs text-sand-100/60">
            Sessão Actual: {patient.currentSession}
          </p>
        )}
      </div>

      <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-5 text-sm">
        <span className="flex items-center gap-2.5 text-sand-100/80">
          <Phone className="size-4 shrink-0 text-brand-500" />
          {patient.phone}
        </span>
        <span className="flex items-center gap-2.5 text-sand-100/80">
          <Mail className="size-4 shrink-0 text-brand-500" />
          {patient.email}
        </span>
        <button
          type="button"
          onClick={onOpenAnamnese}
          className="flex items-center gap-2.5 text-left text-brand-500 transition hover:text-brand-600"
        >
          <FileText className="size-4 shrink-0" />
          Ficha de Anamnese
        </button>
        <button
          type="button"
          onClick={onOpenClinicalReport}
          className="flex items-center gap-2.5 text-left text-brand-500 transition hover:text-brand-600"
        >
          <ScrollText className="size-4 shrink-0" />
          Relatório Clínico
        </button>
        <button
          type="button"
          onClick={onOpenSessionScheduling}
          className="flex items-center gap-2.5 text-left text-brand-500 transition hover:text-brand-600"
        >
          <CalendarClock className="size-4 shrink-0" />
          Agendar Sessões
        </button>
      </div>

      <div className="mt-6 border-t border-white/10 pt-5">
        <h4 className="text-sm font-bold text-white">Histórico de Sessões</h4>

        {sessionHistory.length === 0 ? (
          <p className="mt-3 text-xs text-sand-100/50">Sem sessões registadas.</p>
        ) : (
          <ul className="mt-3 flex flex-col gap-3">
            {sessionHistory.map((entry, index) => (
              <li key={index} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-sand-100/80">
                  {sessionHistory.length - index}
                </span>
                <div>
                  <span className="text-xs font-semibold text-brand-500">{entry.date}</span>
                  <p className="text-sand-100/90">{entry.label}</p>
                  <button
                    type="button"
                    onClick={() => toggleAttendance(index)}
                    className={`mt-1 inline-block rounded-full px-2 py-0.5 text-xs font-bold transition ${
                      entry.attended
                        ? "bg-success-500/15 text-success-500 hover:bg-success-500/25"
                        : "bg-danger-500/15 text-danger-500 hover:bg-danger-500/25"
                    }`}
                  >
                    {entry.attended ? "Compareceu" : "Faltou"}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
