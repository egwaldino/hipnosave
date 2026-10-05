"use client";

import Image from "next/image";
import { usePaginatedGrid } from "@/lib/hooks/use-paginated-grid";
import { SectionHeading } from "../shared/SectionHeading";

const CONCERNS = [
  { name: "depressao" },
  { name: "tabagismo" },
  { name: "medo-de-falar-em-publico" },
  { name: "fobias" },
  { name: "insonia" },
  { name: "burnout" },
  { name: "ansiedade" },
  { name: "ejaculacao-precoce" },
  { name: "frigidez" },
  { name: "sindrome-de-panico" },
  { name: "anorexia" },
  { name: "enxaqueca" },
  { name: "bulimia" },
  { name: "alcoolismo" },
  { name: "luto-patologico" },
];

export function Services() {
  const { visibleItems, hasMore, showMore } = usePaginatedGrid(CONCERNS, {
    mobilePageSize: 4,
    desktopPageSize: 6,
  });

  return (
    <section
      id="servicos"
      className="bg-[#D9D9D9]/30 py-20 sm:py-28 dark:bg-ink-900"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Como podemos ajudar"
          title="Os Nossos Serviços Psicoterapêuticos"
          description="Abordagens terapêuticas integrativas focadas em resultados, adaptadas à necessidade de cada paciente."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6 lg:gap-15">
          {visibleItems.map((concern) => (
            <div
              key={concern.name}
              className="relative block aspect-square transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-[1.03]"
            >
              <Image
                src={`/services/${concern.name}.webp`}
                alt={concern.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={showMore}
              className="flex cursor-pointer h-12 items-center justify-center rounded-xl border border-ink-900 px-7 text-sm font-bold text-ink-900 transition hover:bg-ink-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-ink-900"
            >
              Ver Mais
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
