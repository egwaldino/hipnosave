import { getSeoPreview } from "./article-editor-helpers";

interface SeoPreviewCardProps {
  title: string;
  excerpt: string;
}

export function SeoPreviewCard({ title, excerpt }: SeoPreviewCardProps) {
  const preview = getSeoPreview(title, excerpt);

  return (
    <div className="rounded-2xl bg-white/5 p-6 shadow-soft">
      <h3 className="text-sm font-bold text-white">Pré-visualização SEO Google</h3>
      <div className="mt-4">
        <p className="text-lg text-brand-400">{preview.title}</p>
        <p className="text-sm text-success-500">{preview.url}</p>
        <p className="mt-1 text-sm text-sand-100/70">{preview.excerpt}</p>
      </div>
    </div>
  );
}
