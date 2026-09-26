"use client";

import { useState } from "react";

export function usePanelForm(initialValues: Record<string, string> = {}) {
  const [values, setValues] = useState<Record<string, string>>(initialValues);
  const [isSaving, setIsSaving] = useState(false);

  function updateField(id: string, value: string) {
    setValues((current) => ({ ...current, [id]: value }));
  }

  async function handleSave(event: React.FormEvent) {
    event.preventDefault();
    setIsSaving(true);
    // TODO: chamar lib/api quando existir um endpoint para guardar este formulário
    setIsSaving(false);
  }

  return { values, updateField, isSaving, handleSave };
}
