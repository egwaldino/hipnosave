import Link from "next/link";
import { BlogCard } from "@/components/blog/BlogCard";
import { BLOG_ARTICLES } from "@/components/blog/blog-articles-data";
import { SectionHeading } from "../shared/SectionHeading";

const PREVIEW_ARTICLES = BLOG_ARTICLES.slice(0, 6);

export function Blog() {
  return (
    <section
      id="blog"
      className="bg-[#D9D9D9]/30 py-20 sm:py-28 dark:bg-white/5"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Espaço de conhecimento"
          title="Artigos e Dicas de Saúde Mental"
          description="Mantenha-se informado sobre os métodos de autodesenvolvimento e descobertas científicas recentes de forma simplificada."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PREVIEW_ARTICLES.map((article, index) => (
            <BlogCard
              key={article.slug}
              article={article}
              className={index >= 4 ? "hidden sm:block" : ""}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/blog"
            className="flex h-12 items-center justify-center rounded-xl border border-ink-900 px-7 text-sm font-bold text-ink-900 transition hover:bg-ink-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-ink-900"
          >
            Ver Todos os Artigos
          </Link>
        </div>
      </div>
    </section>
  );
}
