"use client";

import { useMemo, useState } from "react";
import { ADMIN_ARTICLES, STATUS_FILTER_OPTIONS } from "@/components/admin/blog/blog-admin-data";

export function useBlogAdmin() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<(typeof STATUS_FILTER_OPTIONS)[number]>("Todos");

  const articles = useMemo(() => {
    const query = search.trim().toLowerCase();

    return ADMIN_ARTICLES.filter((article) => {
      const matchesStatus = statusFilter === "Todos" || article.status === statusFilter;
      const matchesSearch = query === "" || article.title.toLowerCase().includes(query);
      return matchesStatus && matchesSearch;
    });
  }, [search, statusFilter]);

  return {
    search,
    setSearch,
    statusFilter,
    setStatusFilter,
    statusOptions: STATUS_FILTER_OPTIONS,
    articles,
  };
}
