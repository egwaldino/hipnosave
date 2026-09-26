"use client";

import { useMemo, useState } from "react";
import { PATIENTS, STATUS_OPTIONS, type Patient } from "@/components/admin/patients/patients-data";

export function usePatientsView() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<(typeof STATUS_OPTIONS)[number]>("Ativo");
  const [selectedId, setSelectedId] = useState<string>(PATIENTS[0].id);

  const patients = useMemo(() => {
    const query = search.trim().toLowerCase();

    return PATIENTS.filter((patient) => {
      const matchesStatus = statusFilter === "Todos" || patient.status === statusFilter;
      const matchesSearch = query === "" || patient.name.toLowerCase().includes(query);
      return matchesStatus && matchesSearch;
    });
  }, [search, statusFilter]);

  const selectedPatient: Patient | undefined =
    patients.find((patient) => patient.id === selectedId) ?? patients[0];

  return {
    search,
    setSearch,
    statusFilter,
    setStatusFilter,
    statusOptions: STATUS_OPTIONS,
    patients,
    selectedPatient,
    selectedId: selectedPatient?.id,
    setSelectedId,
  };
}
