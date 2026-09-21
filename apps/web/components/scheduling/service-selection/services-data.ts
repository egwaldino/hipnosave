export interface SchedulingService {
  slug: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  isUrgent?: boolean;
}

export const SERVICES: SchedulingService[] = [
  {
    slug: "ansiedade",
    name: "Ansiedade",
    description:
      "Técnicas clínicas comprovadas para reduzir a ativação do sistema nervoso e recuperar controlo.",
    duration: "50 min",
    price: "120.000 Kz",
  },
  {
    slug: "sindrome-de-panico",
    name: "Síndrome de Pânico",
    description:
      "Dessensibilização e reprogramação das respostas de medo intenso e ataques de pânico.",
    duration: "50 min",
    price: "150.000 Kz",
  },
  {
    slug: "depressao",
    name: "Depressão",
    description:
      "Abordagem terapêutica para reestruturar padrões de pensamento e restaurar a motivação.",
    duration: "50 min",
    price: "120.000 Kz",
  },
  {
    slug: "luto-patologico",
    name: "Luto Patológico",
    description: "Acompanhamento no processo de elaboração do luto e aceitação da perda.",
    duration: "50 min",
    price: "150.000 Kz",
  },
  {
    slug: "fobias",
    name: "Fobias",
    description:
      "Dessensibilização sistemática de medos irracionais, alturas, espaços fechados, falar em público.",
    duration: "40 min",
    price: "100.000 Kz",
  },
  {
    slug: "insonia",
    name: "Insónia",
    description: "Técnicas de relaxamento profundo e reprogramação dos padrões de sono.",
    duration: "40 min",
    price: "100.000 Kz",
  },
  {
    slug: "tabagismo",
    name: "Tabagismo",
    description:
      "Tratamento focado para quebrar a dependência psicológica e o automatismo do tabaco.",
    duration: "60 min",
    price: "180.000 Kz",
  },
  {
    slug: "medo-de-falar-em-publico",
    name: "Medo de Falar em Público",
    description: "Fortalecimento da confiança e dessensibilização da ansiedade social.",
    duration: "50 min",
    price: "120.000 Kz",
  },
  {
    slug: "alcoolismo",
    name: "Alcoolismo",
    description:
      "Intervenção terapêutica para superar a dependência e reconstruir hábitos saudáveis.",
    duration: "60 min",
    price: "180.000 Kz",
  },
  {
    slug: "frigidez",
    name: "Frigidez",
    description:
      "Abordagem clínica para desbloquear barreiras emocionais e restaurar a intimidade.",
    duration: "50 min",
    price: "150.000 Kz",
  },
  {
    slug: "burnout",
    name: "Burnout",
    description:
      "Recuperação do esgotamento profissional com técnicas de gestão de stress e equilíbrio.",
    duration: "50 min",
    price: "150.000 Kz",
  },
  {
    slug: "enxaqueca",
    name: "Enxaqueca",
    description: "Tratamento das causas emocionais e tensionais que desencadeiam dores crónicas.",
    duration: "50 min",
    price: "100.000 Kz",
  },
  {
    slug: "bulimia",
    name: "Bulimia",
    description: "Reestruturação da relação com a alimentação e os padrões emocionais associados.",
    duration: "50 min",
    price: "180.000 Kz",
  },
  {
    slug: "ejaculacao-precoce",
    name: "Ejaculação Precoce",
    description: "Reprogramação do subconsciente para maior controlo e confiança.",
    duration: "50 min",
    price: "150.000 Kz",
  },
  {
    slug: "anorexia",
    name: "Anorexia",
    description:
      "Intervenção terapêutica para restaurar uma relação saudável com o corpo e a alimentação.",
    duration: "60 min",
    price: "180.000 Kz",
  },
];

export const SOS_SERVICE: SchedulingService = {
  slug: "sos",
  name: "Consulta SOS",
  description:
    "Sessão prioritária de psicologia e hipnoterapia para situações urgentes, disponível ainda hoje.",
  duration: "50 min",
  price: "190.000 Kz",
  isUrgent: true,
};

export function getServiceBySlug(slug: string | null): SchedulingService | undefined {
  return [...SERVICES, SOS_SERVICE].find((service) => service.slug === slug);
}
