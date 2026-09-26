"use client";

import { useState } from "react";
import { CalendarDays } from "lucide-react";
import { usePatientsView } from "@/lib/hooks/use-patients-view";
import { AnamnesePanel } from "./AnamnesePanel";
import { ClinicalReportPanel } from "./ClinicalReportPanel";
import { PatientDetail } from "./PatientDetail";
import { PatientsTable } from "./PatientsTable";

const TODAY_LABEL = "Quarta-feira, 28 de Agosto 2026";

export function PatientsView() {
  const {
    search,
    setSearch,
    statusFilter,
    setStatusFilter,
    statusOptions,
    patients,
    selectedPatient,
    selectedId,
    setSelectedId,
  } = usePatientsView();

  const [isAnamneseOpen, setIsAnamneseOpen] = useState(false);
  const [isClinicalReportOpen, setIsClinicalReportOpen] = useState(false);

  return (
    <div className="flex h-full flex-col">
      <div className="flex shrink-0 flex-wrap items-center justify-between gap-4">
        <h1 className="text-3xl font-extrabold text-white">Ficha dos Pacientes</h1>
        <span className="flex items-center gap-2 rounded-xl border border-brand-500/20 bg-brand-500/10 px-4 py-2 text-sm font-semibold text-brand-500">
          <CalendarDays className="size-4" />
          {TODAY_LABEL}
        </span>
      </div>

      <div className="mt-6 flex min-h-0 flex-1 gap-6">
        <PatientsTable
          search={search}
          onSearchChange={setSearch}
          statusFilter={statusFilter}
          statusOptions={statusOptions}
          onStatusChange={setStatusFilter}
          patients={patients}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />
        <PatientDetail
          patient={selectedPatient}
          onOpenAnamnese={() => setIsAnamneseOpen(true)}
          onOpenClinicalReport={() => setIsClinicalReportOpen(true)}
        />
      </div>

      {isAnamneseOpen && selectedPatient && (
        <AnamnesePanel patient={selectedPatient} onClose={() => setIsAnamneseOpen(false)} />
      )}

      {isClinicalReportOpen && selectedPatient && (
        <ClinicalReportPanel
          patient={selectedPatient}
          onClose={() => setIsClinicalReportOpen(false)}
        />
      )}
    </div>
  );
}
