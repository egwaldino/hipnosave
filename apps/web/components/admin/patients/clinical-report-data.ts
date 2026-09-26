import type { AnamneseSection } from "./anamnese-data";

export const CLINICAL_REPORT_SECTIONS: AnamneseSection[] = [
  {
    number: 1,
    title: "Identificação do Paciente",
    description: "Dados cadastrais do paciente e parâmetros da sessão atual",
    rows: [
      [{ id: "fullName", label: "Nome Completo", placeholder: "Ex: Maria Antónia Francisco", type: "text" }],
      [
        { id: "birthDate", label: "Data de Nascimento", placeholder: "DD/MM/AAAA", type: "text" },
        { id: "age", label: "Idade", placeholder: "Ex: 28 anos", type: "text" },
      ],
      [
        { id: "phone", label: "Contacto / Telefone", placeholder: "Ex: 923 000 000", type: "text" },
        { id: "email", label: "E-mail", placeholder: "Ex: maria.antonia@gmail.com", type: "text" },
      ],
      [
        { id: "sessionNumber", label: "Número de Sessão", placeholder: "Ex: Sessão nº 3", type: "text" },
        { id: "sessionDate", label: "Data da Sessão", placeholder: "DD/MM/AAAA", type: "text" },
      ],
      [
        {
          id: "modality",
          label: "Modalidade",
          placeholder: "Ex: Presencial (Consultório Maianga) ou Online (Meet/Zoom)",
          type: "text",
        },
      ],
    ],
  },
  {
    number: 2,
    title: "Avaliação Inicial",
    description: "Estado clínico de entrada do paciente no dia de hoje",
    rows: [
      [
        {
          id: "mainComplaint",
          label: "Queixa Principal / Motivo da Consulta",
          placeholder: "Sintomatologia reportada, gatilhos recentes e o principal foco trazido pelo paciente...",
          type: "textarea",
        },
      ],
      [
        {
          id: "emotionalState",
          label: "Estado Emocional do Paciente",
          placeholder:
            "Observações do terapeuta sobre o humor, postura, recetividade, linguagem corporal e expressão verbal...",
          type: "textarea",
        },
      ],
      [
        {
          id: "anxietyLevel",
          label: "Nível de Ansiedade / Stress (escala de 1 a 10)",
          placeholder: "Indique a pontuação (1-10) auto-relatada e acrescente observações clínicas detalhadas...",
          type: "textarea",
        },
      ],
    ],
  },
  {
    number: 3,
    title: "Sessão de Hipnoterapia",
    description: "Protocolos, fenomenologia e intervenções aplicadas no transe",
    rows: [
      [
        {
          id: "techniquesUsed",
          label: "Técnica(s) Utilizada(s)",
          placeholder: "Ex: Indução de Dave Elman, Regressão de Idade, Dessensibilização Sistemática, Ancoragem, Técnicas de PNL...",
          type: "textarea",
        },
      ],
      [
        {
          id: "tranceLevel",
          label: "Nível de Transe Alcançado",
          placeholder: "Indique se Leve, Médio ou Profundo (Sonambulismo) e descreva os sinais fisiológicos observados...",
          type: "textarea",
        },
      ],
      [
        {
          id: "emergentContent",
          label: "Conteúdos Emergentes Durante a Sessão",
          placeholder: "Imagens e metáforas espontâneas, memórias de infância revividas, sensações somáticas ou catarse emocional...",
          type: "textarea",
        },
      ],
      [
        {
          id: "patientReactions",
          label: "Reações do Paciente Durante a Sessão",
          placeholder: "Acompanhamento respiratório, choro, tremores, riso, relaxamento muscular profundo ou resistência ao processo...",
          type: "textarea",
        },
      ],
      [
        {
          id: "hypnoticSuggestions",
          label: "Sugestões Hipnóticas Aplicadas",
          placeholder: "Metáforas terapêuticas estruturadas, sugestões pós-hipnóticas de empoderamento e reformulações cognitivas...",
          type: "textarea",
        },
      ],
    ],
  },
  {
    number: 4,
    title: "Pós-Sessão",
    description: "Análise imediata do paciente após a emersão do estado de transe",
    rows: [
      [
        {
          id: "postSessionFeedback",
          label: "Feedback do Paciente Após a Sessão",
          placeholder: "Relato do paciente sobre como se sentiu durante o processo, clareza mental e sensações imediatas...",
          type: "textarea",
        },
      ],
      [
        {
          id: "postSessionEmotionalState",
          label: "Estado Emocional Pós-Sessão",
          placeholder: "Avaliação do terapeuta sobre a fisionomia do paciente, alívio de tensões, tranquilidade ou cansaço integrativo...",
          type: "textarea",
        },
      ],
      [
        {
          id: "therapistObservations",
          label: "Observações e Insights do Terapeuta",
          placeholder: "Análise técnica do progresso, conexões com sessões anteriores e pontos-chave de atenção...",
          type: "textarea",
        },
      ],
    ],
  },
  {
    number: 5,
    title: "Plano Terapêutico",
    description: "Estratégia e acompanhamento para continuidade do tratamento",
    rows: [
      [
        {
          id: "nextSessionGoals",
          label: "Objectivos para a Próxima Sessão",
          placeholder: "Próximos passos planejados, novos temas a abordar ou aprofundamento das sugestões aplicadas...",
          type: "textarea",
        },
      ],
      [
        {
          id: "recommendedTasks",
          label: "Tarefas / Exercícios Recomendados ao Paciente",
          placeholder: "Auto-hipnose diária, exercícios de respiração, diário de bordo emocional ou tarefas comportamentais...",
          type: "textarea",
        },
      ],
      [
        {
          id: "referrals",
          label: "Encaminhamentos (se aplicável)",
          placeholder: "Psiquiatria, clínica médica, neurologia ou outras especialidades de suporte...",
          type: "textarea",
          optional: true,
        },
      ],
      [
        {
          id: "prognosis",
          label: "Prognóstico / Evolução do Caso",
          placeholder: "Perspectiva de melhora, ritmo de resposta terapêutica e estimativa de sessões necessárias...",
          type: "textarea",
        },
      ],
    ],
  },
];

interface KnownPatientData {
  name: string;
  phone: string;
  email: string;
  sessions: number;
  currentSession?: string;
}

export function getInitialClinicalReportValues(patient: KnownPatientData): Record<string, string> {
  return {
    fullName: patient.name,
    phone: patient.phone,
    email: patient.email,
    sessionNumber: `Sessão nº ${patient.sessions + 1}`,
    mainComplaint: patient.currentSession ?? "",
  };
}
