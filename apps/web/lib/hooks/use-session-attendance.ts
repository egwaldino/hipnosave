"use client";

import { useEffect, useState } from "react";
import type { SessionHistoryEntry } from "@/components/admin/patients/patients-data";

export function useSessionAttendance(
  patientId: string | undefined,
  sessionHistory: SessionHistoryEntry[],
) {
  const [overrides, setOverrides] = useState<Record<number, boolean>>({});

  useEffect(() => {
    setOverrides({});
  }, [patientId]);

  function toggleAttendance(index: number) {
    setOverrides((current) => {
      const currentValue = index in current ? current[index] : sessionHistory[index]?.attended;
      return { ...current, [index]: !currentValue };
    });
  }

  const entries = sessionHistory.map((entry, index) => ({
    ...entry,
    attended: index in overrides ? overrides[index] : entry.attended,
  }));

  return { entries, toggleAttendance };
}
