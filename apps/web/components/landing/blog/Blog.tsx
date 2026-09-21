import Link from "next/link";
import { SectionHeading } from "../shared/SectionHeading";

const ARTICLES = [
  {
    tag: "Hipnose",
    readTime: "5 min de leitura",
    title: "O que é a Hipnoterapia Clínica e como funciona?",
    excerpt: "Descubra as bases neurológicas e comportamentais...",
  },
  {
    tag: "Ansiedade",
    readTime: "7 min de leitura",
    title: "Como identificar o esgotamento mental e stress precoce",
    excerpt: "Descubra as bases neurológicas e comportamentais...",
  },
  {
    tag: "Hábitos",
    readTime: "6 min de leitura",
    title: "O papel do subconsciente no emagrecimento definitivo",
    excerpt: "Descubra as bases neurológicas e comportamentais...",
  },
  {
    tag: "Mitos",
    readTime: "4 min de leitura",
    title: "Mitos da Hipnose: Por que não vai perder o controlo",
    excerpt: "Descubra as bases neurológicas e comportamentais...",
  },
  {
    tag: "Saúde Mental",
    readTime: "8 min de leitura",
    title: "Técnicas de autoajuda para acalmar crises de ansiedade em minutos",
    excerpt: "Descubra as bases neurológicas e comportamentais...",
  },
  {
    tag: "Vícios",
    readTime: "10 min de leitura",
    title: "Cessação tabágica: a psicologia por trás do hábito de fumar",
    excerpt: "Descubra as bases neurológicas e comportamentais...",
  },
];

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
          {ARTICLES.map((article, index) => (
            <Link
              key={article.title}
              href="/em-construcao"
              className={`overflow-hidden rounded-2xl bg-sand-50 shadow-soft transition hover:-translate-y-1 dark:bg-ink-900 ${
                index >= 4 ? "hidden sm:block" : ""
              }`}
            >
              <div className="aspect-video bg-linear-to-br from-brand-500/40 to-ink-600" />
              <div className="p-5">
                <div className="flex items-center justify-between text-xs font-semibold text-ink-400 dark:text-sand-100/60">
                  <span className="rounded bg-brand-500/10 px-2 py-1 text-brand-600 uppercase dark:bg-brand-500/20 dark:text-white">
                    {article.tag}
                  </span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="mt-3 font-bold text-ink-900 dark:text-white">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm text-ink-500 dark:text-sand-100/70">
                  {article.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/em-construcao"
            className="flex h-12 items-center justify-center rounded-xl border border-ink-900 px-7 text-sm font-bold text-ink-900 transition hover:bg-ink-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-ink-900"
          >
            Ver Todos os Artigos
          </Link>
        </div>
      </div>
    </section>
  );
}
