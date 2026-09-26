import type { Metadata } from "next";
import { AgendaView } from "@/components/admin/agenda/AgendaView";
import { DashboardLayout } from "@/components/admin/dashboard/DashboardLayout";

export const metadata: Metadata = {
  title: "Agenda — Hipnosave",
  description: "Agenda médica e gestão de disponibilidade.",
};

export default function AdminAgendaPage() {
  return (
    <DashboardLayout>
      <AgendaView />
    </DashboardLayout>
  );
}
