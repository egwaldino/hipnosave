import type { Metadata } from "next";
import { DashboardLayout } from "@/components/admin/dashboard/DashboardLayout";
import { SettingsView } from "@/components/admin/settings/SettingsView";

export const metadata: Metadata = {
  title: "Configurações — Hipnosave",
  description: "Gerir o perfil, segurança e horário de funcionamento.",
};

export default function AdminSettingsPage() {
  return (
    <DashboardLayout>
      <SettingsView />
    </DashboardLayout>
  );
}
