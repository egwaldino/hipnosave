"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useSmoothScrollTo } from "@/lib/hooks/use-smooth-scroll-to";
import { ThemeToggle } from "./ThemeToggle";
import { WhatsAppIcon } from "./WhatsAppIcon";

const WHATSAPP_URL = "https://wa.me/244923435995";

interface MobileMenuProps {
  navLinks: { label: string; href: string; id?: string }[];
  isScrolled?: boolean;
}

export function MobileMenu({ navLinks, isScrolled }: MobileMenuProps) {
  const scrollToSection = useSmoothScrollTo();
  const { resolvedTheme } = useTheme();

  return (
    <Dialog>
      <DialogTrigger
        render={
          <button
            type="button"
            aria-label="Abrir menu"
            className={`cursor-pointer p-1 transition-colors duration-500 md:hidden ${
              isScrolled ? "text-ink-900 dark:text-white" : "text-white"
            }`}
          >
            <Menu className="size-6" />
          </button>
        }
      />
      <DialogContent
        showCloseButton={false}
        className="fixed inset-0 z-50 flex h-full max-h-full w-full max-w-full translate-x-0 translate-y-0 flex-col gap-10 overflow-y-auto rounded-none border-0 bg-white p-6 text-ink-900 ring-0 md:hidden dark:bg-ink-900 dark:text-white"
      >
        <div className="flex items-center justify-between">
          <Image
            src={resolvedTheme === "dark" ? "/logo-hipnosave-on-dark.webp" : "/logo-hipnosave.webp"}
            alt="HipnoSave — Consultório de Hipnoterapia"
            width={130}
            height={86}
            className="h-24 w-auto"
          />
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <DialogClose aria-label="Fechar menu" className="cursor-pointer p-1">
              <X className="size-7" />
            </DialogClose>
          </div>
        </div>

        <nav className="flex flex-col gap-8">
          {navLinks.map((link) => (
            <DialogClose
              key={link.label}
              render={
                <a
                  href={link.href}
                  onClick={(event) => {
                    event.preventDefault();
                    scrollToSection(link.id);
                  }}
                />
              }
              className="text-base font-extrabold"
            >
              {link.label}
            </DialogClose>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-3">
          <DialogClose
            render={<Link href="/scheduling-page" />}
            className="flex h-14 items-center justify-center rounded-xl bg-brand-500 text-base font-semibold text-white"
          >
            Marcar Consulta
          </DialogClose>
          <DialogClose
            render={<a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" />}
            className="flex h-14 items-center justify-center gap-2 rounded-xl border border-[#25d366] text-base font-semibold text-[#25d366]"
          >
            <WhatsAppIcon className="size-5" />
            WhatsApp
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
