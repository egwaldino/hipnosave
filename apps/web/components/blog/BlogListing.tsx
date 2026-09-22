"use client";

import { useBlogFilters } from "@/lib/hooks/use-blog-filters";
import { SectionHeading } from "@/components/landing/shared/SectionHeading";
import { BlogCategoryFilter } from "./BlogCategoryFilter";
import { BlogGrid } from "./BlogGrid";
import { BlogPagination } from "./BlogPagination";
import { BlogSearchBar } from "./BlogSearchBar";

export function BlogListing() {
  const {
    search,
    setSearch,
    category,
    setCategory,
    categories,
    articles,
    page,
    totalPages,
    setPage,
  } = useBlogFilters();

  return (
    <section className="bg-[#D9D9D9]/30 pt-32 pb-20 sm:pt-40 sm:pb-28 dark:bg-white/5">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Espaço de conhecimento"
          title="Blog — Artigos e Dicas de Saúde Mental"
          description="Mantenha-se informado sobre os métodos de autodesenvolvimento, hipnose científica e descobertas clínicas recentes explicadas de forma simples."
        />

        <div className="mx-auto mt-10 max-w-xl">
          <BlogSearchBar value={search} onChange={setSearch} />
        </div>

        <BlogCategoryFilter categories={categories} active={category} onSelect={setCategory} />

        {articles.length > 0 ? (
          <BlogGrid articles={articles} />
        ) : (
          <p className="mt-16 text-center text-ink-500 dark:text-sand-100/70">
            Nenhum artigo encontrado para a sua pesquisa.
          </p>
        )}

        {totalPages > 1 && (
          <BlogPagination page={page} totalPages={totalPages} onPageChange={setPage} />
        )}
      </div>
    </section>
  );
}
