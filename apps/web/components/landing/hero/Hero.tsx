import Image from "next/image";
import Link from "next/link";
import { Header } from "../header/Header";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col bg-ink-900">
      <Image
        src="/hero-background.webp"
        alt=""
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[rgba(10,18,30,0.75)]" />

      <Header />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 items-center overflow-x-hidden px-4 md:px-8">
        <div className="min-w-0">
          <div className="flex min-w-0 items-center justify-center gap-2 text-[9px] font-semibold tracking-widest text-[#D9D9D9] uppercase sm:gap-3 sm:text-xs sm:tracking-[0.2em]">
            <span className="h-0.5 w-3 shrink-0 bg-[#D9D9D9]/60 sm:w-8" />
            <span className="truncate">Consultório de hipnoterapia &amp; psicologia</span>
            <span className="h-0.5 w-3 shrink-0 bg-[#D9D9D9]/60 sm:w-8" />
          </div>

          <h1 className="mt-6 max-w-3xl text-center text-4xl leading-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            Transforme a tua mente, transforme a tua vida
          </h1>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/scheduling-page"
              className="flex h-13 items-center justify-center rounded-xl bg-brand-500 px-7 text-base font-semibold text-white drop-shadow-[0_0_16px_rgba(43,89,255,0.35)] transition hover:bg-brand-600"
            >
              Marcar Consulta
            </Link>
            <a
              href="#servicos"
              className="flex h-13 items-center justify-center rounded-xl border border-white/70 px-7 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Saber Mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
