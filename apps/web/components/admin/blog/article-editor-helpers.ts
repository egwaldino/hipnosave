export function slugify(title: string): string {
  return title
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function getSeoPreview(title: string, excerpt: string) {
  return {
    title: title ? `${title} — HipnoSave` : "Título do Artigo — HipnoSave",
    url: `https://hipnosave.com/blog/${title ? slugify(title) : "url-do-artigo"}`,
    excerpt:
      excerpt || "Escreva o conteúdo ou resumo do artigo para gerar a pré-visualização SEO aqui...",
  };
}
