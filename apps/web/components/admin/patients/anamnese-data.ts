export interface AnamneseField {
  id: string;
  label: string;
  placeholder: string;
  type: "text" | "textarea";
  optional?: boolean;
}

export interface AnamneseSection {
  number: number;
  title: string;
  description: string;
  rows: AnamneseField[][];
}

interface KnownPatientData {
  name: string;
  phone: string;
  email: string;
}

export function getInitialAnamneseValues(patient: KnownPatientData): Record<string, string> {
  return {
    fullName: patient.name,
    phone: patient.phone,
    email: patient.email,
  };
}

export const ANAMNESE_SECTIONS: AnamneseSection[] = [
  {
    number: 1,
    title: "Dados Pessoais",
    description: "Informações cadastrais e profissionais básicas do paciente",
    rows: [
      [{ id: "fullName", label: "Nome Completo", placeholder: "Ex: Maria Antónia Francisco", type: "text" }],
      [{ id: "birthDate", label: "Data de Nascimento", placeholder: "DD/MM/AAAA", type: "text" }],
      [{ id: "address", label: "Endereço Residencial", placeholder: "Ex: Rua 28 de Maio, Nº 45", type: "text" }],
      [
        {
          id: "addressComplement",
          label: "Complemento",
          placeholder: "Apto, Bloco, etc. (Opcional)",
          type: "text",
          optional: true,
        },
      ],
      [
        { id: "neighborhood", label: "Bairro", placeholder: "Ex: Maianga", type: "text" },
        { id: "city", label: "Cidade", placeholder: "Ex: Luanda", type: "text" },
      ],
      [{ id: "phone", label: "Telefone de Contacto", placeholder: "Ex: 923 000 000", type: "text" }],
      [{ id: "email", label: "Endereço de Email", placeholder: "Ex: maria.antonia@gmail.com", type: "text" }],
      [{ id: "company", label: "Empresa", placeholder: "Nome da empresa onde trabalha", type: "text" }],
      [{ id: "activity", label: "Atividade", placeholder: "Ramo de atividade da empresa", type: "text" }],
      [{ id: "role", label: "Cargo", placeholder: "Cargo ocupado atualmente", type: "text" }],
      [
        {
          id: "workPhone",
          label: "Telefone Profissional",
          placeholder: "Contacto profissional (Opcional)",
          type: "text",
          optional: true,
        },
      ],
      [{ id: "profession", label: "Profissão", placeholder: "Ex: Engenheira de Software", type: "text" }],
      [
        { id: "maritalStatus", label: "Estado Civil", placeholder: "Solteiro(a), Casado(a), etc.", type: "text" },
        { id: "religion", label: "Religião", placeholder: "Ex: Cristã (Opcional)", type: "text", optional: true },
        { id: "education", label: "Escolaridade", placeholder: "Ex: Licenciatura Completa", type: "text" },
      ],
    ],
  },
  {
    number: 2,
    title: "Avaliação Clínica",
    description: "Abordagem terapêutica, histórico de hábitos e autoperceção",
    rows: [
      [
        {
          id: "substanceUse",
          label: "Faz uso de alguma substância química? Qual?",
          placeholder: "Descreva medicamentos, tratamentos em curso ou substâncias de uso regular...",
          type: "textarea",
        },
      ],
      [
        {
          id: "familyRelationship",
          label: "Como é seu relacionamento com sua família? (pais, irmãos e etc...)",
          placeholder: "Descreva a dinâmica familiar e possíveis pontos de tensão emocional...",
          type: "textarea",
        },
      ],
      [
        {
          id: "selfPerception",
          label: "Como se descreveria? Como você se enxerga?",
          placeholder: "Autoimagem, qualidades apontadas e pontos que gostaria de transformar...",
          type: "textarea",
        },
      ],
      [
        {
          id: "sleep",
          label: "Como é seu sono? Dorme bem? Sonhos?",
          placeholder: "Qualidade do repouso, recorrência de insónia ou pesadelos marcantes...",
          type: "textarea",
        },
      ],
      [
        {
          id: "fears",
          label: "Tem fobia/medo de algo? (Ex. Mar, água, trovão e etc...)",
          placeholder: "Fobias específicas, reações físicas diante dos estímulos...",
          type: "textarea",
        },
      ],
      [
        {
          id: "habits",
          label: "Fuma? Bebe? Com que frequência?",
          placeholder: "Consumo de tabaco, álcool ou outros estimulantes...",
          type: "textarea",
        },
      ],
      [
        {
          id: "lifeMarks",
          label: "Algum fato marcante na sua vida? Infância, adolescência e etc...",
          placeholder: "Traumas, perdas importantes ou marcos de mudança de comportamento...",
          type: "textarea",
        },
      ],
      [
        {
          id: "safePlace",
          label: "Lugar de paz (imaginar)",
          placeholder: "Descrição do refúgio mental seguro do paciente para ancoragem terapêutica...",
          type: "textarea",
        },
      ],
      [
        {
          id: "perceptionSystem",
          label: "Linguagem - Percepção - Sistema de entendimento",
          placeholder:
            "Observações do terapeuta sobre o sistema de representação preferencial (Visual, Auditivo, Cinestésico)...",
          type: "textarea",
        },
      ],
    ],
  },
  {
    number: 3,
    title: "Motivo da Consulta",
    description: "Sintomas, expectativas do tratamento e projeção de cura",
    rows: [
      [
        {
          id: "mainComplaint",
          label: "O que lhe trouxe aqui?",
          placeholder: "Queixa principal trazida pelo paciente na primeira sessão...",
          type: "textarea",
        },
      ],
      [
        {
          id: "problemOnset",
          label: "Quando isso se tornou um problema?",
          placeholder: "Frequência do sintoma e gatilhos que desencadearam a necessidade de ajuda...",
          type: "textarea",
        },
      ],
      [
        {
          id: "relief",
          label: "Existe algo capaz de aliviar seu sintoma? Quando isso acontece?",
          placeholder: "Comportamentos de refúgio ou condições favoráveis...",
          type: "textarea",
        },
      ],
      [
        {
          id: "worsening",
          label: "Existe algo que piora o seu sintoma? Quando isso acontece?",
          placeholder: "Ambientes, falas ou situações que agravam o sofrimento...",
          type: "textarea",
        },
      ],
      [
        {
          id: "curedGoal",
          label: "Se você estivesse curado, o que você faria que não pode fazer agora?",
          placeholder: "Objetivo prático e aspirações de liberdade do paciente...",
          type: "textarea",
        },
      ],
      [
        {
          id: "additionalNotes",
          label: "Existe mais alguma coisa que você ache que eu deveria saber?",
          placeholder: "Observações complementares compartilhadas espontaneamente...",
          type: "textarea",
        },
      ],
    ],
  },
];
