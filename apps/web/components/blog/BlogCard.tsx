import Image from "next/image";
import Link from "next/link";
import type { BlogArticle } from "./blog-articles-data";

interface BlogCardProps {
  article: BlogArticle;
  className?: string;
}

export function BlogCard({ article, className = "" }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className={`group overflow-hidden rounded-2xl bg-white shadow-soft transition hover:-translate-y-1 dark:bg-white/5 ${className}`}
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={article.imageUrl}
          alt=""
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between text-xs font-semibold text-ink-400 dark:text-sand-100/60">
          <span className="rounded bg-brand-500/10 px-2 py-1 text-brand-600 uppercase dark:bg-brand-500/20 dark:text-white">
            {article.tag}
          </span>
          <span>{article.readTime}</span>
        </div>
        <h3 className="mt-3 font-bold text-ink-900 dark:text-white">{article.title}</h3>
        <p className="mt-2 line-clamp-3 text-sm text-ink-500 dark:text-sand-100/70">
          {article.excerpt}
        </p>
      </div>
    </Link>
  );
}
