"use client";

import { usePanelForm } from "@/lib/hooks/use-panel-form";
import { AnamneseSection } from "./AnamneseSection";
import { CLINICAL_REPORT_SECTIONS, getInitialClinicalReportValues } from "./clinical-report-data";
import { PanelFormActions } from "./PanelFormActions";
import type { Patient } from "./patients-data";
import { SlideOverPanel } from "./SlideOverPanel";

interface ClinicalReportPanelProps {
  patient: Patient;
  onClose: () => void;
}

export function ClinicalReportPanel({ patient, onClose }: ClinicalReportPanelProps) {
  const { values, updateField, isSaving, handleSave } = usePanelForm(
    getInitialClinicalReportValues(patient),
  );

  return (
    <SlideOverPanel
      title="Relatório Clínico"
      subtitle={patient.name}
      onClose={onClose}
      onSubmit={handleSave}
      footer={<PanelFormActions isSaving={isSaving} saveLabel="Guardar Relatório" />}
    >
      <p className="mb-6 text-sm text-sand-100/70">
        Registe as observações e evolução terapêutica de cada sessão.
      </p>

      <div className="flex flex-col gap-6">
        {CLINICAL_REPORT_SECTIONS.map((section) => (
          <AnamneseSection
            key={section.number}
            section={section}
            values={values}
            onChange={updateField}
          />
        ))}
      </div>
    </SlideOverPanel>
  );
}
