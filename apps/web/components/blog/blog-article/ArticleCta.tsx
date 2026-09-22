import Link from "next/link";

export function ArticleCta() {
  return (
    <section className="border-b border-white/10 bg-ink-900 py-20 text-center sm:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Pronto para transformar a sua vida?
        </h2>
        <p className="mt-4 text-sand-100/70">
          Dê o primeiro passo para uma saúde mental melhor. Agende uma consulta com
          Bernardo Cassuende hoje mesmo, presencialmente em Luanda ou Online.
        </p>
        <Link
          href="/scheduling-page"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-xl bg-brand-500 px-7 text-sm font-bold text-white transition hover:bg-brand-600"
        >
          Marcar Consulta
        </Link>
      </div>
    </section>
  );
}
