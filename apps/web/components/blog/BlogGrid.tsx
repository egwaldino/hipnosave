import { BlogCard } from "./BlogCard";
import type { BlogArticle } from "./blog-articles-data";

interface BlogGridProps {
  articles: BlogArticle[];
}

export function BlogGrid({ articles }: BlogGridProps) {
  return (
    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <BlogCard key={article.slug} article={article} />
      ))}
    </div>
  );
}
