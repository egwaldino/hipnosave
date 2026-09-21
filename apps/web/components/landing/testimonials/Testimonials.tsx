"use client";

import { Star } from "lucide-react";
import { useMarqueeScroll } from "@/lib/hooks/use-marquee-scroll";
import { SectionHeading } from "../shared/SectionHeading";

const TESTIMONIALS = [
  {
    quote:
      "Cheguei ao consultório do Dr. Bernardo sem esperança de conseguir lidar com o pânico de falar em público. Após 4 sessões de hipnoterapia, recuperei totalmente a minha segurança.",
    name: "Ana",
    role: "Paciente — Tratamento Concluído",
    rating: 5,
  },
  {
    quote:
    "Sofria de insónia há mais de um ano. As sessões ajudaram-me a identificar a raiz do problema e hoje já durmo sem qualquer medicação.",
    name: "Rui",
    role: "Paciente — Tratamento Concluído",
    rating: 4,
  },
  {
    quote:
      "Excelente profissional. A abordagem direta e clínica da hipnose ajudou-me a ultrapassar uma depressão profunda que já arrastava há anos. Grato pelas consultas eficientes.",
    name: "Mateus",
    role: "Paciente — Tratamento Concluído",
    rating: 5,
  },
  {
    quote:
    "Processo muito profissional do início ao fim. Ainda estou a trabalhar alguns pontos, mas os avanços com a minha ansiedade já são visíveis.",
    name: "Beatriz",
    role: "Paciente — Em Acompanhamento",
    rating: 4,
  },
  {
    quote:
      "Consegui finalmente parar de fumar. Já tinha tentado adesivos, pastilhas e nada funcionava. O Dr. Bernardo trabalhou diretamente as razões da minha ansiedade e o desejo desapareceu.",
    name: "Cláudia",
    role: "Paciente — Tratamento Concluído",
    rating: 5,
  },
  {
    quote:
      "Já tinha alguma resistência em relação à hipnose, mas o acompanhamento profissional mudou a minha perspetiva. Estou a lidar muito melhor com o stress do dia a dia.",
    name: "Nelson",
    role: "Paciente — Em Acompanhamento",
    rating: 4,
  },
];

export function Testimonials() {
  const loopedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];
  const scrollRef = useMarqueeScroll({ direction: "right" });

  return (
    <section
      id="depoimentos"
      className="bg-sand-50 py-20 sm:py-28 dark:bg-ink-900"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Testemunhos reais"
          title="O que dizem os nossos pacientes"
          description="Relatos sinceros de pessoas que transformaram as suas vidas através do nosso método clínico."
        />
      </div>

      <div
        ref={scrollRef}
        className="mt-14 scrollbar-none overflow-x-auto pb-15 mask-[linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
      >
        <div className="flex w-max gap-6">
          {loopedTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className="flex w-94 shrink-0 flex-col rounded-2xl bg-[#D9D9D9]/30 p-6 shadow-soft sm:w-80 dark:bg-white/5"
            >
              <div className="flex gap-1 text-brand-500">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className="size-4"
                    fill={starIndex < testimonial.rating ? "currentColor" : "none"}
                  />
                ))}
              </div>

              <p className="mt-4 flex-1 text-md md:text-sm text-ink-600 italic dark:text-sand-100/80">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="mt-6 border-t border-ink-200/60 pt-4 dark:border-white/10">
                <p className="font-bold text-ink-900 dark:text-white">
                  {testimonial.name}
                </p>
                <p className="text-sm text-ink-400 dark:text-sand-100/60">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
