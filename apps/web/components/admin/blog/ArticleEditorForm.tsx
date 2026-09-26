"use client";

import Link from "next/link";
import {
  Bold,
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  Heading2,
  Heading3,
  Image as ImageIcon,
  Italic,
  Link2,
  List,
  Quote,
} from "lucide-react";
import { useArticleEditorForm } from "@/lib/hooks/use-article-editor-form";
import type { AdminArticle } from "./blog-admin-data";
import { getArticleCategories } from "./blog-admin-data";
import { CoverImageUpload } from "./CoverImageUpload";
import { SeoPreviewCard } from "./SeoPreviewCard";
import { TagsInput } from "./TagsInput";

const TOOLBAR_ICONS = [Bold, Italic, Heading2, Heading3, List, Link2, ImageIcon, Quote];
const ARTICLE_CATEGORIES = getArticleCategories();

const fieldClassName =
  "h-11 w-full rounded-lg border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition placeholder:text-sand-100/40 focus:border-brand-500 scheme-dark";

interface ArticleEditorFormProps {
  pageTitle: string;
  article?: AdminArticle;
}

export function ArticleEditorForm({ pageTitle, article }: ArticleEditorFormProps) {
  const { values, updateField, addTag, removeTag, isSaving, handleSaveDraft, handlePublish } =
    useArticleEditorForm(article);

  const primaryLabel = values.publishImmediately ? "Publicar Artigo" : "Agendar Artigo";

  return (
    <div className="flex h-full flex-col">
      <div className="flex shrink-0 flex-wrap items-center justify-between gap-4">
        <h1 className="text-3xl font-extrabold text-white">{pageTitle}</h1>
        <span className="flex items-center gap-2 rounded-xl border border-brand-500/20 bg-brand-500/10 px-4 py-2 text-sm font-semibold text-brand-500">
          <CalendarDays className="size-4" />
          Quarta-feira, 28 de Agosto 2026
        </span>
      </div>

      <div className="mt-6 flex shrink-0 flex-wrap items-center justify-between gap-3">
        <Link
          href="/admin/painel/blog"
          className="flex items-center gap-1 text-sm font-semibold text-brand-500 transition hover:text-brand-600"
        >
          <ChevronLeft className="size-4" />
          Voltar aos Artigos
        </Link>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleSaveDraft}
            disabled={isSaving}
            className="flex h-11 items-center justify-center rounded-xl border border-white/10 px-5 text-sm font-semibold text-white transition hover:bg-white/10 disabled:opacity-60"
          >
            Guardar Rascunho
          </button>
          <button
            type="button"
            onClick={handlePublish}
            disabled={isSaving}
            className="flex h-11 items-center justify-center rounded-xl bg-brand-500 px-5 text-sm font-bold text-white transition hover:bg-brand-600 disabled:opacity-60"
          >
            {isSaving ? "A guardar..." : primaryLabel}
          </button>
        </div>
      </div>

      <div className="mt-6 grid min-h-0 flex-1 grid-cols-1 gap-6 overflow-y-auto pb-2 lg:grid-cols-[1fr_360px]">
        <div className="flex flex-col gap-5 rounded-2xl bg-white/5 p-6 shadow-soft">
          <div>
            <label htmlFor="title" className="mb-1 block text-sm font-bold text-white">
              Título do Artigo
            </label>
            <input
              id="title"
              type="text"
              value={values.title}
              onChange={(event) => updateField("title", event.target.value)}
              placeholder="Escreva o título do artigo..."
              className={fieldClassName}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="category" className="mb-1 block text-sm font-bold text-white">
                Categoria
              </label>
              <div className="relative">
                <select
                  id="category"
                  value={values.category}
                  onChange={(event) => updateField("category", event.target.value)}
                  className={`${fieldClassName} appearance-none pr-10 [&>option]:bg-ink-800 [&>option]:text-white`}
                >
                  <option value="">Selecione a categoria</option>
                  {ARTICLE_CATEGORIES.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-sand-100/50" />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-bold text-white">Tags / Palavras-chave</label>
              <TagsInput tags={values.tags} onAdd={addTag} onRemove={removeTag} />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-bold text-white">Imagem de Capa</label>
            <CoverImageUpload
              imageUrl={values.coverImageUrl}
              onChange={(url) => updateField("coverImageUrl", url)}
            />
          </div>

          <div>
            <label htmlFor="content" className="mb-1 block text-sm font-bold text-white">
              Conteúdo do Artigo
            </label>
            <div className="rounded-t-lg border border-b-0 border-white/10 bg-white/5 px-3 py-2">
              <div className="flex items-center gap-3 text-sand-100/60">
                {TOOLBAR_ICONS.map((Icon, index) => (
                  <button
                    key={index}
                    type="button"
                    className="transition hover:text-white"
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <Icon className="size-4" />
                  </button>
                ))}
              </div>
            </div>
            <textarea
              id="content"
              rows={12}
              value={values.content}
              onChange={(event) => updateField("content", event.target.value)}
              placeholder="Comece a escrever o conteúdo do artigo..."
              className="w-full resize-none rounded-b-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-sand-100/40 focus:border-brand-500"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="rounded-2xl bg-white/5 p-6 shadow-soft">
            <h3 className="text-sm font-bold text-white">Definições do Artigo</h3>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm font-semibold text-white">Publicar Imediatamente</span>
              <button
                type="button"
                role="switch"
                aria-checked={values.publishImmediately}
                onClick={() => updateField("publishImmediately", !values.publishImmediately)}
                className={`relative h-6 w-11 shrink-0 rounded-full transition ${
                  values.publishImmediately ? "bg-brand-500" : "bg-white/15"
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 size-5 rounded-full bg-white transition-transform ${
                    values.publishImmediately ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            <div className="mt-4">
              <label htmlFor="publishDate" className="mb-1 block text-sm font-bold text-white">
                Data de Publicação
              </label>
              <input
                id="publishDate"
                type="date"
                value={values.publishDate}
                onChange={(event) => updateField("publishDate", event.target.value)}
                disabled={values.publishImmediately}
                className={`${fieldClassName} disabled:opacity-50`}
              />
            </div>

            <div className="mt-4">
              <label htmlFor="author" className="mb-1 block text-sm font-bold text-white">
                Autor
              </label>
              <input
                id="author"
                type="text"
                value={values.author}
                onChange={(event) => updateField("author", event.target.value)}
                className={fieldClassName}
              />
            </div>

            <div className="mt-4">
              <label htmlFor="excerpt" className="mb-1 block text-sm font-bold text-white">
                Resumo / Excerpt
              </label>
              <textarea
                id="excerpt"
                rows={3}
                value={values.excerpt}
                onChange={(event) => updateField("excerpt", event.target.value)}
                placeholder="Escreva um breve resumo do artigo..."
                className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition placeholder:text-sand-100/40 focus:border-brand-500"
              />
            </div>
          </div>

          <SeoPreviewCard title={values.title} excerpt={values.excerpt} />
        </div>
      </div>
    </div>
  );
}
