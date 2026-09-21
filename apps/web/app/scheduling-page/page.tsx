import { Suspense } from "react";
import type { Metadata } from "next";
import { SchedulingFlow } from "@/components/scheduling/SchedulingFlow";
import { SchedulingSkeleton } from "@/components/scheduling/shared/SchedulingSkeleton";

export const metadata: Metadata = {
  title: "Marcar Consulta — Hipnosave",
  description:
    "Marque a sua consulta de psicologia e hipnoterapia em poucos passos: escolha o serviço, a data e hora, os seus dados e confirme a marcação.",
};

export default function SchedulingPage() {
  return (
    <Suspense fallback={<SchedulingSkeleton />}>
      <SchedulingFlow />
    </Suspense>
  );
}
