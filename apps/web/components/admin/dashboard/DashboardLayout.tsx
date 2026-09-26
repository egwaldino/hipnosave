"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, Folder, LayoutDashboard, Settings, Users } from "lucide-react";

const NAV_ITEMS = [
  { label: "Painel Principal", href: "/admin/painel", Icon: LayoutDashboard },
  { label: "Agenda", href: "/admin/painel/agenda", Icon: Calendar },
  { label: "Pacientes", href: "/admin/painel/pacientes", Icon: Users },
  { label: "Blog", href: "/admin/painel/blog", Icon: Folder },
  { label: "Configurações", href: "/admin/painel/configuracoes", Icon: Settings },
];

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="dark flex h-screen overflow-hidden bg-ink-900">
      <aside className="flex w-64 shrink-0 flex-col overflow-y-auto border-r border-white/10 bg-white/5 px-4 pt-2 pb-2">
        <div className="flex items-center justify-start px-2">
          <Image
            src="/logo-hipnosave-on-dark.webp"
            alt="HipnoSave"
            width={332}
            height={220}
            className="h-24 w-auto shrink-0"
          />
        </div>

        <nav className="mt-2 flex flex-col gap-1">
          {NAV_ITEMS.map(({ label, href, Icon }) => {
            const isActive = pathname === href;

            return (
              <Link
                key={label}
                href={href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold transition ${
                  isActive
                    ? "bg-brand-500/20 text-white"
                    : "text-sand-100/70 hover:bg-white/10"
                }`}
              >
                <Icon className="size-4.5 shrink-0" />
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto flex items-center gap-3 border-t border-white/10 pt-4">
          <div className="relative size-10 shrink-0 overflow-hidden rounded-full">
            <Image
              src="/bernardo-cassuende-portrait.webp"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-bold text-white">Bernardo Cassuende</p>
            <Link
              href="/admin"
              className="text-xs font-semibold text-sos-500 transition hover:text-sos-500/80"
            >
              Terminar Sessão
            </Link>
          </div>
        </div>
      </aside>

      <main className="flex h-full flex-1 flex-col overflow-hidden p-8">{children}</main>
    </div>
  );
}
