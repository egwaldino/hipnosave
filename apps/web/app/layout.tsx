import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hipnosave — Consultório de Psicologia e Hipnoterapia",
  description: "TODO: descrição do site",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
