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

      <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(0,319px))] lg:justify-center">
        {SERVICES.map((service) => {
          const isSelected = service.slug === selectedSlug;

          return (
            <button
              key={service.slug}
              type="button"
              onClick={() => onSelect(service.slug)}
              className={`flex w-full flex-col overflow-hidden rounded-2xl border-2 bg-[#F7FBFF] p-0 text-left shadow-[0px_4px_16px_rgba(0,0,0,0.078),0px_8px_20px_rgba(43,89,255,0.078)] transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-[1.03] dark:bg-white/5 ${
                isSelected ? "border-brand-500" : "border-transparent"
              }`}
            >
              <div className="relative h-50 w-full">
                <Image
                  src={`/services/${service.slug}.webp`}
                  alt={service.name}
                  fill
                  className="object-cover object-top"
                />
              </div>

              <div className="flex flex-col gap-3 p-5">
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-[17px] leading-5.25 font-bold text-[#1A2530] dark:text-white">
                    {service.name}
                  </h3>
                  <p className="text-sm leading-6 text-[#5C6B73] sm:text-[13px] sm:leading-5 dark:text-sand-100/70">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-[13px] font-medium text-[#5C6B73] dark:text-sand-100/60">
                    <Clock className="size-3.5" />
                    {service.duration}
                  </span>
                  <span className="text-[15px] font-bold text-brand-500">{service.price}</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
