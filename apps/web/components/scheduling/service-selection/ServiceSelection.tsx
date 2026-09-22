import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import { SERVICES } from "./services-data";

interface ServiceSelectionProps {
  selectedSlug: string | null;
  onSelect: (slug: string) => void;
}

export function ServiceSelection({ selectedSlug, onSelect }: ServiceSelectionProps) {
  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-ink-900 dark:text-white">
            Escolha o serviço
          </h1>
          <p className="mt-2 text-ink-500 dark:text-sand-100/70">
            Selecione a abordagem terapêutica adequada para a sua jornada de bem-estar mental.
          </p>
        </div>

        <Link
          href="/"
          className="hidden h-12 items-center justify-center gap-2 rounded-xl border border-ink-900 px-6 text-sm font-bold text-ink-900 transition hover:bg-ink-900 hover:text-white md:flex dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-ink-900"
        >
          ← Anterior
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(0,319px))] lg:justify-center">
        {SERVICES.map((service) => {
          const isSelected = service.slug === selectedSlug;

          return (
            <button
              key={service.slug}
              type="button"
              onClick={() => onSelect(service.slug)}
              className={`group flex w-full flex-col overflow-hidden rounded-2xl border-2 bg-white text-left shadow-soft transition hover:-translate-y-1 dark:bg-white/5 ${
                isSelected ? "border-brand-500" : "border-transparent"
              }`}
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={`/services/${service.slug}.webp`}
                  alt={service.name}
                  fill
                  className="object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between text-xs font-semibold text-ink-400 dark:text-sand-100/60">
                  <span className="flex items-center gap-1.5 rounded bg-brand-500/10 px-2 py-1 text-brand-600 dark:bg-brand-500/20 dark:text-white">
                    <Clock className="size-3.5" />
                    {service.duration}
                  </span>
                  <span className="text-sm font-bold text-brand-500">{service.price}</span>
                </div>
                <h3 className="mt-3 font-bold text-ink-900 dark:text-white">{service.name}</h3>
                <p className="mt-2 text-sm text-ink-500 dark:text-sand-100/70">
                  {service.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
