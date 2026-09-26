import { BLOG_CATEGORIES } from "@/components/blog/blog-articles-data";

export type ArticleStatus = "Publicado" | "Rascunho" | "Arquivado";

export interface AdminArticle {
  id: string;
  title: string;
  category: string;
  status: ArticleStatus;
  publishedAt?: string;
  views: number;
  excerpt: string;
  tags: string[];
  coverImageUrl?: string;
  content: string;
  author: string;
}

export const STATUS_FILTER_OPTIONS = ["Todos", "Publicado", "Rascunho", "Arquivado"] as const;

export const BLOG_STATS = {
  total: 12,
  published: 8,
  drafts: 3,
  viewsThisMonth: 1240,
};

export const ADMIN_ARTICLES: AdminArticle[] = [
  {
    id: "1",
    title: "O que é a Hipnoterapia Clínica e como funciona?",
    category: "Hipnose",
    status: "Publicado",
    publishedAt: "24 Ago 2026",
    views: 342,
    excerpt:
      "Descubra as bases neurológicas e comportamentais fundamentadas em estudos que auxiliam o desenvolvimento humano sustentável e a ressignificação de traumas.",
    tags: ["hipnoterapia", "saúde mental", "ansiedade"],
    coverImageUrl: "/blog/hipnoterapia-clinica-como-funciona.webp",
    content: "Introdução à Hipnose Terapêutica\n\nDiferente da hipnose de entretenimento...",
    author: "Dr. Bernardo Cassuende",
  },
  {
    id: "2",
    title: "Como identificar o esgotamento mental e stress precoce",
    category: "Ansiedade",
    status: "Publicado",
    publishedAt: "17 Ago 2026",
    views: 289,
    excerpt:
      "Conheça os sinais físicos e psicológicos que indicam saturação cognitiva e as melhores abordagens clínicas para recuperar o equilíbrio.",
    tags: ["ansiedade", "burnout"],
    coverImageUrl: "/blog/esgotamento-mental-stress-precoce.webp",
    content: "",
    author: "Dr. Bernardo Cassuende",
  },
  {
    id: "3",
    title: "O papel do subconsciente no emagrecimento definitivo",
    category: "Hábitos",
    status: "Publicado",
    publishedAt: "10 Ago 2026",
    views: 195,
    excerpt:
      "Entenda como a reprogramação das âncoras emocionais ligadas à alimentação no subconsciente permite a perda de peso sem sofrimento.",
    tags: ["hábitos", "subconsciente"],
    coverImageUrl: "/blog/rotina-matinal-cerebro.webp",
    content: "",
    author: "Dr. Bernardo Cassuende",
  },
  {
    id: "4",
    title: "Mitos da Hipnose: Por que não vai perder o controlo",
    category: "Mitos",
    status: "Rascunho",
    views: 0,
    excerpt:
      "Desmistificamos o transe hipnótico. Saiba por que mantém total controlo ético e moral durante todas as fases do tratamento clínico.",
    tags: ["hipnose", "mitos"],
    coverImageUrl: "/blog/mitos-da-hipnose-controlo.webp",
    content: "",
    author: "Dr. Bernardo Cassuende",
  },
  {
    id: "5",
    title: "Técnicas de autoajuda para acalmar crises de ansiedade em minutos",
    category: "Saúde Mental",
    status: "Publicado",
    publishedAt: "3 Ago 2026",
    views: 412,
    excerpt:
      "Práticas imediatas baseadas na regulação da respiração e reorientação sensorial que acalmam a ativação excessiva do sistema nervoso.",
    tags: ["saúde mental", "ansiedade"],
    coverImageUrl: "/blog/tecnicas-autoajuda-crises-ansiedade.webp",
    content: "",
    author: "Dr. Bernardo Cassuende",
  },
  {
    id: "6",
    title: "Cessação tabágica: a psicologia por trás do hábito de fumar",
    category: "Vícios",
    status: "Arquivado",
    publishedAt: "12 Jul 2026",
    views: 52,
    excerpt:
      "Como a hipnoterapia ajuda a quebrar os gatilhos automáticos do tabagismo, reconfigurando a relação com a ansiedade que o alimenta.",
    tags: ["vícios", "tabagismo"],
    coverImageUrl: "/blog/dependencia-redes-sociais-cerebro.webp",
    content: "",
    author: "Dr. Bernardo Cassuende",
  },
];

export function getArticleById(id: string): AdminArticle | undefined {
  return ADMIN_ARTICLES.find((article) => article.id === id);
}

export function getArticleCategories(): string[] {
  return BLOG_CATEGORIES.filter((category) => category !== "Todos");
}
