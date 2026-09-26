import Link from "next/link";
import { ChevronDown, Pencil, Search, Trash2 } from "lucide-react";
import type { AdminArticle, STATUS_FILTER_OPTIONS } from "./blog-admin-data";

const STATUS_BADGE: Record<AdminArticle["status"], string> = {
  Publicado: "bg-success-500/15 text-success-500",
  Rascunho: "bg-amber-500/15 text-amber-400",
  Arquivado: "bg-white/10 text-sand-100/60",
};

interface BlogArticlesTableProps {
  search: string;
  onSearchChange: (value: string) => void;
  statusFilter: string;
  statusOptions: readonly (typeof STATUS_FILTER_OPTIONS)[number][];
  onStatusChange: (value: (typeof STATUS_FILTER_OPTIONS)[number]) => void;
  articles: AdminArticle[];
}

export function BlogArticlesTable({
  search,
  onSearchChange,
  statusFilter,
  statusOptions,
  onStatusChange,
  articles,
}: BlogArticlesTableProps) {
  return (
    <div className="mt-6 flex min-h-0 flex-1 flex-col rounded-2xl bg-white/5 p-6 shadow-soft">
      <div className="flex shrink-0 flex-wrap items-center justify-between gap-3">
        <div className="relative max-w-md flex-1">
          <Search className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-sand-100/50" />
          <input
            type="text"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Pesquisar artigo..."
            className="h-11 w-full rounded-lg border border-white/10 bg-white/5 pr-4 pl-11 text-sm text-white outline-none transition placeholder:text-sand-100/40 focus:border-brand-500"
          />
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <select
              value={statusFilter}
              onChange={(event) =>
                onStatusChange(event.target.value as (typeof STATUS_FILTER_OPTIONS)[number])
              }
              className="h-11 w-44 appearance-none rounded-lg border border-white/10 bg-white/5 pr-9 pl-4 text-sm text-white outline-none transition focus:border-brand-500 scheme-dark [&>option]:bg-ink-800 [&>option]:text-white"
            >
              {statusOptions.map((option) => (
                <option key={option} value={option}>
                  Estado: {option}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-sand-100/50" />
          </div>

          <Link
            href="/admin/painel/blog/novo"
            className="flex h-11 items-center gap-2 rounded-xl bg-brand-500 px-5 text-sm font-bold text-white transition hover:bg-brand-600"
          >
            Novo Artigo +
          </Link>
        </div>
      </div>

      <div className="mt-5 min-h-0 flex-1 overflow-y-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-xs font-semibold text-sand-100/50">
              <th className="pb-3 font-semibold">Título</th>
              <th className="pb-3 font-semibold">Categoria</th>
              <th className="pb-3 font-semibold">Estado</th>
              <th className="pb-3 font-semibold">Data de Publicação</th>
              <th className="pb-3 font-semibold">Visualizações</th>
              <th className="pb-3 font-semibold">Ações</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article) => (
              <tr key={article.id} className="border-t border-white/10">
                <td className="max-w-72 truncate py-3 font-bold text-white">{article.title}</td>
                <td className="py-3 text-sand-100/70">{article.category}</td>
                <td className="py-3">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-bold ${STATUS_BADGE[article.status]}`}
                  >
                    {article.status}
                  </span>
                </td>
                <td className="py-3 text-sand-100/70">{article.publishedAt ?? "—"}</td>
                <td className="py-3 font-bold text-white">{article.views}</td>
                <td className="py-3">
                  <div className="flex items-center gap-3">
                    <Link
                      href={`/admin/painel/blog/${article.id}`}
                      aria-label="Editar artigo"
                      className="text-brand-500 transition hover:text-brand-600"
                    >
                      <Pencil className="size-4" />
                    </Link>
                    <button
                      type="button"
                      aria-label="Eliminar artigo"
                      className="text-danger-500 transition hover:text-danger-500/80"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {articles.length === 0 && (
          <p className="mt-6 text-center text-sm text-sand-100/50">Nenhum artigo encontrado.</p>
        )}
      </div>
    </div>
  );
}
