import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleEditorForm } from "@/components/admin/blog/ArticleEditorForm";
import { ADMIN_ARTICLES, getArticleById } from "@/components/admin/blog/blog-admin-data";
import { DashboardLayout } from "@/components/admin/dashboard/DashboardLayout";

interface EditArticlePageProps {
  params: Promise<{ articleId: string }>;
}

export function generateStaticParams() {
  return ADMIN_ARTICLES.map((article) => ({ articleId: article.id }));
}

export async function generateMetadata({ params }: EditArticlePageProps): Promise<Metadata> {
  const { articleId } = await params;
  const article = getArticleById(articleId);

  return { title: article ? `Editar — ${article.title}` : "Editar Artigo" };
}

export default async function EditArticlePage({ params }: EditArticlePageProps) {
  const { articleId } = await params;
  const article = getArticleById(articleId);

  if (!article) notFound();

  return (
    <DashboardLayout>
      <ArticleEditorForm pageTitle="Editar Artigo" article={article} />
    </DashboardLayout>
  );
}
