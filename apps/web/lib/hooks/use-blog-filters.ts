"use client";

import { useMemo, useState } from "react";
import { BLOG_ARTICLES, BLOG_CATEGORIES } from "@/components/blog/blog-articles-data";

const PAGE_SIZE = 6;

export function useBlogFilters() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("Todos");
  const [page, setPage] = useState(1);

  const filteredArticles = useMemo(() => {
    const query = search.trim().toLowerCase();

    return BLOG_ARTICLES.filter((article) => {
      const matchesCategory = category === "Todos" || article.tag === category;
      const matchesSearch =
        query === "" ||
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  const totalPages = Math.max(1, Math.ceil(filteredArticles.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const articles = filteredArticles.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  function updateSearch(value: string) {
    setSearch(value);
    setPage(1);
  }

  function updateCategory(value: string) {
    setCategory(value);
    setPage(1);
  }

  return {
    search,
    setSearch: updateSearch,
    category,
    setCategory: updateCategory,
    categories: BLOG_CATEGORIES,
    articles,
    totalResults: filteredArticles.length,
    page: currentPage,
    totalPages,
    setPage,
  };
}
