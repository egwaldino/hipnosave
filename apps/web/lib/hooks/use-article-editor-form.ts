"use client";

import { useState } from "react";
import type { AdminArticle } from "@/components/admin/blog/blog-admin-data";

export interface ArticleFormValues {
  title: string;
  category: string;
  tags: string[];
  coverImageUrl: string;
  content: string;
  publishImmediately: boolean;
  publishDate: string;
  author: string;
  excerpt: string;
}

function toFormValues(article?: AdminArticle): ArticleFormValues {
  return {
    title: article?.title ?? "",
    category: article?.category ?? "",
    tags: article?.tags ?? [],
    coverImageUrl: article?.coverImageUrl ?? "",
    content: article?.content ?? "",
    publishImmediately: article?.status === "Publicado",
    publishDate: article?.status === "Publicado" ? "2026-11-28" : "",
    author: article?.author ?? "Bernardo Cassuende",
    excerpt: article?.excerpt ?? "",
  };
}

export function useArticleEditorForm(article?: AdminArticle) {
  const [values, setValues] = useState<ArticleFormValues>(() => toFormValues(article));
  const [isSaving, setIsSaving] = useState(false);

  function updateField<K extends keyof ArticleFormValues>(field: K, value: ArticleFormValues[K]) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  function addTag(tag: string) {
    const trimmed = tag.trim();
    if (trimmed === "" || values.tags.includes(trimmed)) return;
    updateField("tags", [...values.tags, trimmed]);
  }

  function removeTag(tag: string) {
    updateField(
      "tags",
      values.tags.filter((item) => item !== tag),
    );
  }

  async function handleSaveDraft() {
    setIsSaving(true);
    // TODO: chamar lib/api quando existir um endpoint para guardar artigos como rascunho
    setIsSaving(false);
  }

  async function handlePublish() {
    setIsSaving(true);
    // TODO: chamar lib/api quando existir um endpoint para publicar/agendar artigos
    setIsSaving(false);
  }

  return { values, updateField, addTag, removeTag, isSaving, handleSaveDraft, handlePublish };
}
