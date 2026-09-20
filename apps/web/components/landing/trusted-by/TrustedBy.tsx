import { LogoMarqueeRow } from "./LogoMarqueeRow";

const ENTITIES = [
  { name: "AGT — Administração Geral Tributária", slug: "agt", size: "h-14 sm:h-20", hasDarkVariant: true },
  { name: "Fundo de Fomento Habitacional", slug: "fundo-fomento-habitacional", size: "h-14 sm:h-20", hasDarkVariant: true },
  { name: "Ministério da Educação", slug: "ministerio-educacao", size: "h-8 sm:h-12", hasDarkVariant: true },
  { name: "Polaris", slug: "polaris", size: "h-14 sm:h-20" },
  { name: "Amarelinha Hamburguers", slug: "amarelinha-hamburguers", size: "h-14 sm:h-20" },
  { name: "Ministério das Finanças", slug: "ministerio-financas", size: "h-8 sm:h-12", hasDarkVariant: true },
];

export function TrustedBy() {
  return (
    <section className="bg-[#D9D9D9]/30 py-14 dark:bg-white/5">
      <div className="mx-auto max-w-6xl px-4 text-center md:px-8">
        <p className="text-xs font-bold tracking-[0.2em] text-ink-900 uppercase dark:text-white">
          Entidades que confiam em nós
        </p>
      </div>

      <div className="mt-8">
        <LogoMarqueeRow entities={ENTITIES} />
      </div>
    </section>
  );
}
