import type { ArticleContentBlock } from "../blog-articles-data";

interface ArticleContentProps {
  content: ArticleContentBlock[];
}

export function ArticleContent({ content }: ArticleContentProps) {
  return (
    <div className="flex flex-col gap-5">
      {content.map((block, index) => {
        if (block.type === "heading") {
          return (
            <h2
              key={index}
              className="mt-3 text-2xl font-bold text-ink-900 dark:text-white"
            >
              {block.text}
            </h2>
          );
        }

        if (block.type === "paragraph") {
          return (
            <p key={index} className="leading-7 text-ink-600 dark:text-sand-100/80">
              {block.text}
            </p>
          );
        }

        if (block.type === "quote") {
          return (
            <blockquote
              key={index}
              className="border-l-4 border-brand-500 py-1 pl-5 italic text-ink-700 dark:text-sand-100/90"
            >
              <p className="leading-7">&ldquo;{block.text}&rdquo;</p>
              <cite className="mt-2 block text-xs font-bold tracking-wide text-brand-600 not-italic uppercase dark:text-brand-500">
                — {block.author}
              </cite>
            </blockquote>
          );
        }

        return (
          <ul key={index} className="flex flex-col gap-3">
            {block.items.map((item) => (
              <li key={item.title} className="flex gap-2.5 leading-7 text-ink-600 dark:text-sand-100/80">
                <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand-500" />
                <p>
                  <span className="font-bold text-ink-900 dark:text-white">{item.title}:</span>{" "}
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        );
      })}
    </div>
  );
}
