"use client";

import { X } from "lucide-react";

interface SlideOverPanelProps {
  title: string;
  subtitle?: string;
  onClose: () => void;
  onSubmit: (event: React.FormEvent) => void;
  footer: React.ReactNode;
  children: React.ReactNode;
}

export function SlideOverPanel({
  title,
  subtitle,
  onClose,
  onSubmit,
  footer,
  children,
}: SlideOverPanelProps) {
  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <button
        type="button"
        aria-label="Fechar painel"
        onClick={onClose}
        className="absolute inset-0 bg-black/60"
      />

      <div className="relative flex h-full w-full max-w-2xl flex-col bg-ink-900 shadow-2xl">
        <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-8 py-5">
          <div>
            <h1 className="text-xl font-extrabold text-white">{title}</h1>
            {subtitle && <p className="mt-0.5 text-sm text-sand-100/70">{subtitle}</p>}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="flex size-9 items-center justify-center rounded-full text-sand-100/70 transition hover:bg-white/10 hover:text-white"
          >
            <X className="size-5" />
          </button>
        </div>

        <form onSubmit={onSubmit} className="flex min-h-0 flex-1 flex-col">
          <div className="min-h-0 flex-1 overflow-y-auto px-8 py-6">{children}</div>
          <div className="flex shrink-0 items-center justify-between gap-3 border-t border-white/10 px-8 py-5">
            {footer}
          </div>
        </form>
      </div>
    </div>
  );
}
