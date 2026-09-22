import Image from "next/image";
import { ARTICLE_AUTHOR, getRelatedArticles, type BlogArticle } from "../blog-articles-data";
import { ArticleContent } from "./ArticleContent";
import { ArticleCta } from "./ArticleCta";
import { ArticleSidebar } from "./ArticleSidebar";

interface ArticleViewProps {
  article: BlogArticle;
}

export function ArticleView({ article }: ArticleViewProps) {
  const relatedArticles = getRelatedArticles(article.slug, article.tag);

  return (
    <article>
      <div className="mx-auto max-w-4xl px-4 pt-28 sm:pt-32 md:px-8">
        <div className="flex items-center justify-center gap-3 text-xs font-semibold text-ink-400 dark:text-sand-100/60">
          <span className="text-brand-600 uppercase dark:text-brand-500">
            {article.tag}
          </span>
          <span>·</span>
          <span>{article.readTime}</span>
        </div>

        <h1 className="mt-4 text-center text-3xl font-bold text-ink-900 sm:text-4xl dark:text-white">
          {article.title}
        </h1>

        <div className="mt-6 flex items-center justify-center gap-3">
          <div className="relative size-10 shrink-0 overflow-hidden rounded-full">
            <Image
              src={ARTICLE_AUTHOR.avatarUrl}
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="text-left">
            <p className="text-sm font-bold text-ink-900 dark:text-white">
              {ARTICLE_AUTHOR.name}
            </p>
            <p className="text-xs text-ink-400 dark:text-sand-100/60">
              Publicado em {article.publishedAt} · {ARTICLE_AUTHOR.location}
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-5xl px-4 md:px-8">
        <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl sm:aspect-video">
          <Image
            src={article.imageUrl}
            alt=""
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-12 px-4 pb-20 md:px-8 lg:grid-cols-[1fr_280px]">
        <ArticleContent content={article.content} />
        <ArticleSidebar articles={relatedArticles} />
      </div>

      <ArticleCta />
    </article>
  );
}
