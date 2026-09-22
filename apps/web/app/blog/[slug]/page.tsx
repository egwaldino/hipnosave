import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleView } from "@/components/blog/blog-article/ArticleView";
import { BLOG_ARTICLES, getArticleBySlug } from "@/components/blog/blog-articles-data";
import { Footer } from "@/components/landing/footer/Footer";
import { Header } from "@/components/landing/header/Header";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return BLOG_ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) return {};

  return {
    title: `${article.title} — Hipnosave`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  return (
    <div>
      <Header variant="solid" backHref="/blog" />
      <ArticleView article={article} />
      <Footer />
    </div>
  );
}
