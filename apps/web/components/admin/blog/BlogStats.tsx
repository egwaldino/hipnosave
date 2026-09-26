import { BarChart3, CheckCircle2, Folder, Users } from "lucide-react";
import { BLOG_STATS } from "./blog-admin-data";

const STATS = [
  { label: "Total de Artigos", value: BLOG_STATS.total.toString(), Icon: Folder },
  { label: "Publicados", value: BLOG_STATS.published.toString(), Icon: CheckCircle2 },
  { label: "Rascunhos", value: BLOG_STATS.drafts.toString(), Icon: BarChart3 },
  {
    label: "Visualizações este Mês",
    value: BLOG_STATS.viewsThisMonth.toLocaleString("pt-PT"),
    Icon: Users,
  },
];

export function BlogStats() {
  return (
    <div className="mt-6 grid shrink-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {STATS.map(({ label, value, Icon }) => (
        <div key={label} className="flex items-center gap-4 rounded-2xl bg-white/5 p-5 shadow-soft">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-500/15 text-brand-500">
            <Icon className="size-5" />
          </span>
          <div>
            <p className="text-2xl font-extrabold text-white">{value}</p>
            <p className="text-xs text-sand-100/60">{label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
