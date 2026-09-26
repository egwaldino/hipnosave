import type { Metadata } from "next";
import { DashboardHome } from "@/components/admin/dashboard/DashboardHome";
import { DashboardLayout } from "@/components/admin/dashboard/DashboardLayout";

export const metadata: Metadata = {
  title: "Painel Principal — Hipnosave",
  description: "Área de administração do site Hipnosave.",
};

export default function AdminDashboardPage() {
  return (
    <DashboardLayout>
      <DashboardHome />
    </DashboardLayout>
  );
}
