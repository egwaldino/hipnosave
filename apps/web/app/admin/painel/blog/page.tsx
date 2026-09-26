import type { Metadata } from "next";
import { BlogManagementView } from "@/components/admin/blog/BlogManagementView";
import { DashboardLayout } from "@/components/admin/dashboard/DashboardLayout";

export const metadata: Metadata = {
  title: "Gestão de Artigos — Hipnosave",
  description: "Gerir os artigos do blog.",
};

export default function AdminBlogPage() {
  return (
    <DashboardLayout>
      <BlogManagementView />
    </DashboardLayout>
  );
}
