"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useScrollHeader } from "@/lib/hooks/use-scroll-header";
import { useSmoothScrollTo } from "@/lib/hooks/use-smooth-scroll-to";
import { MobileMenu } from "./MobileMenu";
import { SosDialog } from "./SosDialog";
import { ThemeToggle } from "./ThemeToggle";

export const NAV_LINKS = [
  { label: "Início", href: "/", id: undefined },
  { label: "Serviços", href: "#servicos", id: "servicos" },
  { label: "Sobre", href: "#sobre", id: "sobre" },
  { label: "Blog", href: "#blog", id: "blog" },
  { label: "Depoimentos", href: "#depoimentos", id: "depoimentos" },
  { label: "FAQ", href: "#faq", id: "faq" },
];

export function Header() {
  const { isScrolled, isHidden } = useScrollHeader();
  const scrollToSection = useSmoothScrollTo();
  const { resolvedTheme } = useTheme();
  const isLightLogo = isScrolled && resolvedTheme !== "dark";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full bg-transparent transition-[backdrop-filter,transform] duration-500 ease-out ${
        isScrolled ? "backdrop-blur-md" : ""
      } ${isHidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 md:px-8">
        <a href="/" className="shrink-0">
          <Image
            src={isLightLogo ? "/logo-hipnosave.webp" : "/logo-hipnosave-on-dark.png"}
            alt="HipnoSave — Consultório de Hipnoterapia"
            width={130}
            height={86}
            className="h-24 w-auto"
            priority
          />
        </a>

        <nav
          className={`hidden items-center gap-8 text-sm font-medium transition-colors duration-500 md:flex ${
            isScrolled ? "text-ink-900 dark:text-white" : "text-sand-50"
          }`}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(event) => {
                event.preventDefault();
                scrollToSection(link.id);
              }}
              className="transition hover:text-sage-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle
            className={`order-2 md:order-1 ${isScrolled ? "text-ink-900 dark:text-white" : "text-white"}`}
          />

          <SosDialog
            trigger={
              <button
                type="button"
                aria-label="Contacto de emergência SOS"
                className="order-1 flex h-6.25 w-15.5 cursor-pointer items-center justify-center gap-1.5 rounded-full bg-sos-500 text-xs font-bold text-white shadow-[0_0_20px_rgba(232,87,58,0.25)] md:order-2 md:h-11 md:w-auto md:justify-start md:gap-2 md:rounded-xl md:px-4 md:text-sm md:font-semibold md:text-[#f5f5f5]"
              >
                <span className="relative flex h-2 w-2 shrink-0 md:h-2.5 md:w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex h-full w-full rounded-full bg-white" />
                </span>
                <span className="md:hidden">SOS</span>
                <span className="hidden md:inline">Consulta SOS</span>
              </button>
            }
          />

          <Link
            href="/em-construcao"
            className="order-4 hidden h-11 w-38 items-center justify-center rounded-xl bg-brand-500 text-sm font-semibold text-[#f5f5f5] drop-shadow-[0_0_16px_rgba(43,89,255,0.35)] transition hover:bg-brand-600 md:order-3 md:flex"
          >
            Marcar Consulta
          </Link>

          <div className="order-3 md:order-4">
            <MobileMenu navLinks={NAV_LINKS} isScrolled={isScrolled} />
          </div>
        </div>
      </div>
    </header>
  );
}
