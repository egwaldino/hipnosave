import type { Metadata } from "next";
import { ArticleEditorForm } from "@/components/admin/blog/ArticleEditorForm";
import { DashboardLayout } from "@/components/admin/dashboard/DashboardLayout";

export const metadata: Metadata = {
  title: "Novo Artigo — Hipnosave",
  description: "Criar um novo artigo do blog.",
};

export default function NewArticlePage() {
  return (
    <DashboardLayout>
      <ArticleEditorForm pageTitle="Novo Artigo" />
    </DashboardLayout>
  );
}
