import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "../shared/SectionHeading";

const FAQS = [
  {
    question: "O que é a hipnoterapia?",
    answer:
      "A hipnoterapia é o uso clínico da hipnose para colocar o paciente em um estado de foco profundo e relaxamento (transe). Sob este estado, o subconsciente fica mais aberto a sugestões terapêuticas para tratar problemas emocionais e comportamentais.",
  },
  {
    question: "A hipnoterapia funciona para ansiedade?",
    answer:
      "Sim. A hipnoterapia é amplamente usada como complemento ao tratamento da ansiedade, ajudando a reduzir os níveis de tensão e a trabalhar as causas subjacentes.",
  },
  {
    question: "Quantas sessões são necessárias?",
    answer:
      "Depende do caso e dos objetivos de cada paciente. Muitas pessoas notam avanços já nas primeiras sessões; um plano completo é definido após a avaliação inicial.",
  },
  {
    question: "As consultas podem ser online?",
    answer:
      "Sim, as consultas podem ser realizadas presencialmente em Luanda ou online, mantendo a mesma qualidade de acompanhamento.",
  },
  {
    question: "A hipnoterapia é segura?",
    answer:
      "Sim. É uma técnica clínica reconhecida, conduzida por um profissional registado na Ordem dos Psicólogos de Angola, sempre com o consentimento e controlo do paciente.",
  },
  {
    question: "Como posso agendar uma consulta?",
    answer:
      'Podes marcar diretamente pelo botão "Marcar Consulta" no site, ou entrar em contacto por WhatsApp ou email.',
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-sand-50 py-20 sm:py-28 dark:bg-ink-900">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Esclareça dúvidas"
          title="Perguntas Frequentes"
          description="Entenda o processo terapêutico para iniciar o seu tratamento com tranquilidade e segurança."
        />

        <Accordion className="mt-12 flex flex-col gap-3">
          {FAQS.map((faq) => (
            <AccordionItem
              key={faq.question}
              value={faq.question}
              className="rounded-xl border-0 bg-[#D9D9D9]/30 px-5 dark:bg-white/5"
            >
              <AccordionTrigger className="py-4 text-base font-bold text-ink-900 hover:no-underline dark:text-white">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-ink-600 dark:text-sand-100/80">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
