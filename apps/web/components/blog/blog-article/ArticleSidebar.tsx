import Image from "next/image";
import Link from "next/link";
import type { BlogArticle } from "../blog-articles-data";

interface ArticleSidebarProps {
  articles: BlogArticle[];
}

export function ArticleSidebar({ articles }: ArticleSidebarProps) {
  if (articles.length === 0) return null;

  return (
    <aside>
      <h3 className="font-bold text-ink-900 dark:text-white">Artigos Relacionados</h3>

      <div className="mt-4 flex flex-col gap-4">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="group flex gap-3 rounded-xl p-1 transition hover:bg-white dark:hover:bg-white/5"
          >
            <div className="relative size-16 shrink-0 overflow-hidden rounded-lg">
              <Image src={article.imageUrl} alt="" fill className="object-cover" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-brand-600 uppercase dark:text-brand-500">
                {article.tag}
              </span>
              <p className="text-sm font-bold text-ink-900 transition group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-500">
                {article.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
}
