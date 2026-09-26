"use client";

import { CalendarDays } from "lucide-react";
import { useBlogAdmin } from "@/lib/hooks/use-blog-admin";
import { BlogArticlesTable } from "./BlogArticlesTable";
import { BlogStats } from "./BlogStats";

const TODAY_LABEL = "Quarta-feira, 28 de Agosto 2026";

export function BlogManagementView() {
  const { search, setSearch, statusFilter, setStatusFilter, statusOptions, articles } =
    useBlogAdmin();

  return (
    <div className="flex h-full flex-col">
      <div className="flex shrink-0 flex-wrap items-center justify-between gap-4">
        <h1 className="text-3xl font-extrabold text-white">Gestão de Artigos</h1>
        <span className="flex items-center gap-2 rounded-xl border border-brand-500/20 bg-brand-500/10 px-4 py-2 text-sm font-semibold text-brand-500">
          <CalendarDays className="size-4" />
          {TODAY_LABEL}
        </span>
      </div>

      <BlogStats />

      <BlogArticlesTable
        search={search}
        onSearchChange={setSearch}
        statusFilter={statusFilter}
        statusOptions={statusOptions}
        onStatusChange={setStatusFilter}
        articles={articles}
      />
    </div>
  );
}
