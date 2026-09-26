import type { Metadata } from "next";
import { DashboardLayout } from "@/components/admin/dashboard/DashboardLayout";
import { PatientsView } from "@/components/admin/patients/PatientsView";

export const metadata: Metadata = {
  title: "Pacientes — Hipnosave",
  description: "Ficha e histórico de pacientes.",
};

export default function AdminPatientsPage() {
  return (
    <DashboardLayout>
      <PatientsView />
    </DashboardLayout>
  );
}
