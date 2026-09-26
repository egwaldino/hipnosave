"use client";

import { usePanelForm } from "@/lib/hooks/use-panel-form";
import { ANAMNESE_SECTIONS, getInitialAnamneseValues } from "./anamnese-data";
import { AnamneseSection } from "./AnamneseSection";
import { PanelFormActions } from "./PanelFormActions";
import type { Patient } from "./patients-data";
import { SlideOverPanel } from "./SlideOverPanel";

interface AnamnesePanelProps {
  patient: Patient;
  onClose: () => void;
}

export function AnamnesePanel({ patient, onClose }: AnamnesePanelProps) {
  const { values, updateField, isSaving, handleSave } = usePanelForm(
    getInitialAnamneseValues(patient),
  );

  return (
    <SlideOverPanel
      title="Ficha de Anamnese"
      subtitle={patient.name}
      onClose={onClose}
      onSubmit={handleSave}
      footer={<PanelFormActions isSaving={isSaving} saveLabel="Guardar Ficha" />}
    >
      <div className="flex flex-col gap-6">
        {ANAMNESE_SECTIONS.map((section) => (
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
