export type ArticleContentBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "quote"; text: string; author: string }
  | { type: "list"; items: { title: string; description: string }[] };

export interface BlogArticle {
  slug: string;
  tag: string;
  readTime: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  publishedAt: string;
  content: ArticleContentBlock[];
}

export const BLOG_CATEGORIES = [
  "Todos",
  "Hipnose",
  "Ansiedade",
  "Hábitos",
  "Mitos",
  "Saúde Mental",
  "Vícios",
] as const;

export const ARTICLE_AUTHOR = {
  name: "Bernardo Cassuende",
  role: "Psicólogo e Hipnoterapeuta",
  avatarUrl: "/bernardo-cassuende-portrait.webp",
  location: "Luanda, Angola",
};

const QUOTE_AUTHOR = "BERNARDO CASSUENDE, HIPNOSAVE";

function articleImage(slug: string) {
  return `/blog/${slug}.webp`;
}

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return BLOG_ARTICLES.find((article) => article.slug === slug);
}

export function getRelatedArticles(currentSlug: string, tag: string, limit = 3): BlogArticle[] {
  const others = BLOG_ARTICLES.filter((article) => article.slug !== currentSlug);
  const sameTag = others.filter((article) => article.tag === tag);
  const rest = others.filter((article) => article.tag !== tag);
  return [...sameTag, ...rest].slice(0, limit);
}

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    slug: "hipnoterapia-clinica-como-funciona",
    tag: "Hipnose",
    readTime: "5 min de leitura",
    title: "O que é a Hipnoterapia Clínica e como funciona?",
    excerpt:
      "Descubra as bases neurológicas e comportamentais fundamentadas em estudos que auxiliam o desenvolvimento humano sustentável.",
    imageUrl: articleImage("hipnoterapia-clinica-como-funciona"),
    publishedAt: "15 de Agosto, 2026",
    content: [
      { type: "heading", text: "A neurociência por trás do estado de transe terapêutico" },
      {
        type: "paragraph",
        text: "Diferente da hipnose de entretenimento, muito divulgada na televisão e no cinema, a hipnoterapia clínica é uma técnica científica segura e validada que visa aceder a camadas mais profundas da mente (o subconsciente) para promover mudanças comportamentais e emocionais rápidas e duradouras.",
      },
      {
        type: "paragraph",
        text: "Durante uma sessão de hipnoterapia orientada por um profissional de psicologia certificado, o paciente é guiado para um estado altamente focado de atenção concentrada, frequentemente chamado de transe. A nível cerebral, estudos modernos de ressonância magnética mostram que este estado diminui a atividade na rede de modo padrão (DMN) e aumenta a ligação com o sistema de controlo executivo, deixando a mente flexível a novas perspetivas.",
      },
      {
        type: "quote",
        text: "O transe hipnótico não é dormir nem perder o controlo. É um estado refinado de foco interno onde o subconsciente resolve traumas profundos que o consciente racional bloqueia.",
        author: QUOTE_AUTHOR,
      },
      { type: "heading", text: "Benefícios clínicos fundamentais" },
      {
        type: "paragraph",
        text: "Com as nossas sessões estruturadas em Luanda ou em formato de teleconsulta, temos documentado excelentes taxas de sucesso no tratamento de problemas específicos que por vezes demoram anos na psicoterapia analítica convencional:",
      },
      {
        type: "list",
        items: [
          {
            title: "Desensibilização de Fobias",
            description: "Medo de falar em público, fobias sociais e medos irracionais tratados na raiz neurológica.",
          },
          {
            title: "Tratamento da Ansiedade Geral",
            description: "Reprogramação do estado de alerta constante do sistema nervoso simpático.",
          },
          {
            title: "Quebra de Vícios (Tabagismo)",
            description: "Cancelamento dos estímulos automáticos que geram a vontade obsessiva de fumar.",
          },
          {
            title: "Autoimagem e Confiança",
            description: "Fortalecimento estrutural do amor-próprio e desconstrução da autocrítica interna.",
          },
        ],
      },
      {
        type: "paragraph",
        text: "Agendar uma consulta e experimentar o método HipnoSave é o primeiro passo para resgatar o controlo da sua saúde emocional e restaurar o equilíbrio que você merece.",
      },
    ],
  },
  {
    slug: "autohipnose-tecnicas-seguras",
    tag: "Hipnose",
    readTime: "4 min de leitura",
    title: "Autohipnose: técnicas seguras para praticar em casa",
    excerpt:
      "Um guia prático com exercícios simples de relaxamento e foco que pode aplicar no seu dia a dia, sempre com acompanhamento clínico.",
    imageUrl: articleImage("autohipnose-tecnicas-seguras"),
    publishedAt: "20 de Agosto, 2026",
    content: [
      { type: "heading", text: "Como funciona um exercício de autohipnose" },
      {
        type: "paragraph",
        text: "A autohipnose parte do mesmo princípio da hipnoterapia clínica: um estado de atenção focada onde o corpo relaxa profundamente e a mente se torna mais recetiva a sugestões positivas. Ao contrário do que muitos pensam, não é preciso um terapeuta presente para entrar neste estado — só é preciso treino e um protocolo seguro.",
      },
      {
        type: "paragraph",
        text: "O segredo está na indução progressiva: relaxar o corpo do topo da cabeça até aos pés, reduzir o ritmo respiratório e repetir mentalmente uma frase-âncora que a pessoa associa a calma. Com prática regular, o cérebro aprende a entrar neste estado em poucos minutos.",
      },
      {
        type: "quote",
        text: "A autohipnose não substitui o acompanhamento clínico, mas é uma ferramenta poderosa para o paciente continuar o trabalho terapêutico em casa, entre sessões.",
        author: QUOTE_AUTHOR,
      },
      { type: "heading", text: "Boas práticas para praticar com segurança" },
      {
        type: "paragraph",
        text: "Antes de começar, é importante seguir algumas regras simples para que o exercício seja eficaz e seguro:",
      },
      {
        type: "list",
        items: [
          {
            title: "Ambiente controlado",
            description: "Escolha um local silencioso, sem ecrãs, onde não seja interrompido durante 10 a 15 minutos.",
          },
          {
            title: "Nunca ao volante",
            description: "A autohipnose provoca sonolência real — pratique sempre sentado ou deitado, em segurança.",
          },
          {
            title: "Frase-âncora curta",
            description: "Use sempre a mesma frase positiva para condicionar o cérebro a associá-la ao relaxamento.",
          },
          {
            title: "Acompanhamento inicial",
            description: "As primeiras sessões devem ser guiadas por um profissional, para aprender a técnica corretamente.",
          },
        ],
      },
      {
        type: "paragraph",
        text: "Depois de dominar a técnica com o acompanhamento certo, a autohipnose torna-se um recurso que pode usar sempre que precisar de recuperar o foco e a calma.",
      },
    ],
  },
  {
    slug: "esgotamento-mental-stress-precoce",
    tag: "Ansiedade",
    readTime: "7 min de leitura",
    title: "Como identificar o esgotamento mental e stress precoce",
    excerpt:
      "Conheça os sinais físicos e psicológicos que indicam saturação cognitiva e as melhores abordagens clínicas para recuperar o equilíbrio.",
    imageUrl: articleImage("esgotamento-mental-stress-precoce"),
    publishedAt: "10 de Agosto, 2026",
    content: [
      { type: "heading", text: "O que acontece no corpo antes do esgotamento" },
      {
        type: "paragraph",
        text: "O esgotamento mental raramente surge de repente. É o resultado de semanas ou meses de sobrecarga cognitiva, em que o sistema nervoso simpático permanece ativado com mais frequência do que devia, sem tempo suficiente para recuperar.",
      },
      {
        type: "paragraph",
        text: "Os primeiros sinais costumam ser subtis: dificuldade de concentração, irritabilidade, insónia ligeira e uma sensação constante de estar sempre atrasado. Quando ignorados, estes sintomas evoluem para exaustão física, apatia emocional e, em casos graves, para um quadro clínico de burnout.",
      },
      {
        type: "quote",
        text: "O esgotamento não é fraqueza, é um sinal biológico de que o sistema precisa de recuperar. Quanto mais cedo se reconhece, mais rápida é a recuperação.",
        author: QUOTE_AUTHOR,
      },
      { type: "heading", text: "Sinais de alerta a não ignorar" },
      {
        type: "paragraph",
        text: "Reconhecer estes sinais precocemente é o primeiro passo para travar o esgotamento antes de se tornar crónico:",
      },
      {
        type: "list",
        items: [
          {
            title: "Fadiga persistente",
            description: "Cansaço que não melhora mesmo depois de dormir bem.",
          },
          {
            title: "Irritabilidade fora do habitual",
            description: "Reações emocionais desproporcionais a pequenos contratempos.",
          },
          {
            title: "Perda de motivação",
            description: "Tarefas que antes eram simples passam a parecer impossíveis.",
          },
          {
            title: "Sintomas físicos recorrentes",
            description: "Dores de cabeça, tensão muscular ou problemas digestivos sem causa aparente.",
          },
        ],
      },
      {
        type: "paragraph",
        text: "Se reconhece três ou mais destes sinais, procurar apoio psicológico cedo pode evitar meses de recuperação mais tarde.",
      },
    ],
  },
  {
    slug: "respiracao-diafragmatica-ansiedade",
    tag: "Ansiedade",
    readTime: "4 min de leitura",
    title: "Respiração diafragmática: a ferramenta mais rápida contra a ansiedade",
    excerpt:
      "Um exercício de dois minutos, validado clinicamente, que ativa o sistema nervoso parassimpático e reduz o pico de ansiedade.",
    imageUrl: articleImage("respiracao-diafragmatica-ansiedade"),
    publishedAt: "28 de Agosto, 2026",
    content: [
      { type: "heading", text: "Porque a respiração é o atalho mais rápido para acalmar o corpo" },
      {
        type: "paragraph",
        text: "Quando a ansiedade dispara, a respiração torna-se curta e torácica, sinalizando ao cérebro que existe perigo. A respiração diafragmática inverte este processo: ao respirar profundamente com o diafragma, ativa-se o nervo vago, que por sua vez acalma o sistema nervoso em poucos segundos.",
      },
      {
        type: "paragraph",
        text: "É uma das poucas técnicas que consegue interromper uma crise de ansiedade em tempo real, sem precisar de medicação ou de um ambiente especial. Pode ser feita sentado, de pé ou deitado, em qualquer lugar.",
      },
      {
        type: "quote",
        text: "O corpo acredita no que a respiração lhe diz. Respire devagar e fundo, e o cérebro entende que está em segurança.",
        author: QUOTE_AUTHOR,
      },
      { type: "heading", text: "Como praticar o exercício de dois minutos" },
      {
        type: "paragraph",
        text: "Este exercício simples pode ser repetido sempre que sentir os primeiros sinais de ansiedade a subir:",
      },
      {
        type: "list",
        items: [
          {
            title: "Inspire pelo nariz durante 4 segundos",
            description: "Sinta o abdómen a expandir, não o peito.",
          },
          {
            title: "Segure o ar durante 4 segundos",
            description: "Mantenha o corpo relaxado, sem tensão nos ombros.",
          },
          {
            title: "Expire pela boca durante 6 segundos",
            description: "Solte o ar lentamente, como se estivesse a esvaziar um balão.",
          },
          {
            title: "Repita o ciclo 6 a 8 vezes",
            description: "A maioria das pessoas sente alívio percetível antes do fim do exercício.",
          },
        ],
      },
      {
        type: "paragraph",
        text: "Praticar esta respiração diariamente, mesmo sem ansiedade presente, treina o sistema nervoso a recuperar o equilíbrio mais depressa quando realmente precisar.",
      },
    ],
  },
  {
    slug: "rotina-matinal-cerebro",
    tag: "Hábitos",
    readTime: "5 min de leitura",
    title: "Como construir uma rotina matinal que o cérebro não sabota",
    excerpt:
      "Pequenos ajustes na primeira hora do dia que reduzem a fadiga de decisão e tornam os bons hábitos automáticos.",
    imageUrl: articleImage("rotina-matinal-cerebro"),
    publishedAt: "5 de Agosto, 2026",
    content: [
      { type: "heading", text: "Porque a primeira hora do dia decide o resto" },
      {
        type: "paragraph",
        text: "O cérebro tem uma reserva limitada de força de vontade que se esgota ao longo do dia — o fenómeno chamado fadiga de decisão. Uma rotina matinal bem desenhada reduz o número de decisões que precisa de tomar logo pela manhã, poupando essa energia para o que realmente importa.",
      },
      {
        type: "paragraph",
        text: "Não se trata de acordar às cinco da manhã ou seguir uma rotina rígida copiada de outra pessoa. Trata-se de criar uma sequência simples e repetível que o corpo e a mente reconheçam como sinal de que o dia começou.",
      },
      {
        type: "quote",
        text: "Não é motivação que sustenta um bom hábito, é a repetição automática de uma pequena sequência de ações.",
        author: QUOTE_AUTHOR,
      },
      { type: "heading", text: "Elementos que tornam uma rotina matinal eficaz" },
      {
        type: "paragraph",
        text: "Estes são os pilares que, em conjunto, ajudam o cérebro a entrar em modo produtivo sem esforço consciente:",
      },
      {
        type: "list",
        items: [
          {
            title: "Ordem fixa e curta",
            description: "Três a cinco passos simples, sempre pela mesma ordem, para não exigir decisão.",
          },
          {
            title: "Luz natural cedo",
            description: "Exposição à luz do dia nos primeiros 30 minutos regula o relógio biológico.",
          },
          {
            title: "Sem ecrãs nos primeiros minutos",
            description: "Adiar as notificações evita entrar em modo reativo antes de começar o dia.",
          },
          {
            title: "Uma micro-vitória inicial",
            description: "Completar uma tarefa pequena gera dopamina e motivação para o resto do dia.",
          },
        ],
      },
      {
        type: "paragraph",
        text: "Ao fim de duas a três semanas de repetição consistente, a rotina deixa de exigir esforço — torna-se automática, exatamente como pretendido.",
      },
    ],
  },
  {
    slug: "pequenos-habitos-grandes-mudancas",
    tag: "Hábitos",
    readTime: "5 min de leitura",
    title: "Pequenos hábitos, grandes mudanças: a ciência por trás da repetição",
    excerpt:
      "Como a repetição consistente de micro-hábitos reorganiza vias neuronais e sustenta mudanças de comportamento a longo prazo.",
    imageUrl: articleImage("pequenos-habitos-grandes-mudancas"),
    publishedAt: "22 de Julho, 2026",
    content: [
      { type: "heading", text: "A ciência por trás da repetição" },
      {
        type: "paragraph",
        text: "Cada vez que repete um comportamento, o cérebro fortalece as ligações neuronais associadas a essa ação, tornando-a mais automática e exigindo cada vez menos esforço consciente. É este princípio — a plasticidade neuronal — que explica porque pequenas mudanças, mantidas ao longo do tempo, produzem resultados muito maiores do que grandes mudanças abandonadas ao fim de poucos dias.",
      },
      {
        type: "paragraph",
        text: "Não é o tamanho do hábito que determina o sucesso, mas a consistência. Um exercício de cinco minutos feito todos os dias vale mais, a longo prazo, do que uma hora de exercício feita apenas quando há motivação.",
      },
      {
        type: "quote",
        text: "Mudar de vida não exige força de vontade sobre-humana. Exige apenas um pequeno hábito repetido o suficiente para se tornar identidade.",
        author: QUOTE_AUTHOR,
      },
      { type: "heading", text: "Como tornar um hábito pequeno e duradouro" },
      {
        type: "paragraph",
        text: "Estes princípios ajudam a transformar uma boa intenção num hábito que realmente se mantém:",
      },
      {
        type: "list",
        items: [
          {
            title: "Comece mais pequeno do que imagina",
            description: "Se a meta parecer fácil demais, está no tamanho certo para começar.",
          },
          {
            title: "Associe a um hábito já existente",
            description: "Ligue o novo comportamento a algo que já faz automaticamente, como escovar os dentes.",
          },
          {
            title: "Celebre cada repetição",
            description: "Reconhecer o progresso, por mais pequeno, reforça a ligação neuronal.",
          },
          {
            title: "Aceite falhas pontuais",
            description: "Um dia perdido não apaga o progresso — o que importa é retomar no dia seguinte.",
          },
        ],
      },
      {
        type: "paragraph",
        text: "A soma de pequenas repetições consistentes é, invariavelmente, mais poderosa do que qualquer mudança drástica de curta duração.",
      },
    ],
  },
  {
    slug: "mitos-da-hipnose-controlo",
    tag: "Mitos",
    readTime: "4 min de leitura",
    title: "Mitos da Hipnose: Por que não vai perder o controlo",
    excerpt:
      "Desmistificamos o transe hipnótico. Saiba por que mantém total controlo ético e moral durante todas as fases do tratamento clínico.",
    imageUrl: articleImage("mitos-da-hipnose-controlo"),
    publishedAt: "30 de Julho, 2026",
    content: [
      { type: "heading", text: "De onde vêm os mitos sobre a hipnose" },
      {
        type: "paragraph",
        text: "Grande parte do receio em relação à hipnose vem dos espetáculos de entretenimento, onde pessoas parecem perder o controlo e fazer coisas embaraçosas ao comando de um hipnotizador. Esta imagem, construída para fins de espetáculo, nada tem a ver com a hipnoterapia clínica praticada em contexto terapêutico.",
      },
      {
        type: "paragraph",
        text: "Na realidade, estudos de neuroimagem mostram que a pessoa hipnotizada mantém atividade cerebral consciente e continua a poder recusar sugestões que entrem em conflito com os seus valores. O transe é um estado de foco elevado, não de submissão.",
      },
      {
        type: "quote",
        text: "Ninguém faz, em hipnose, algo que recusaria fazer completamente acordado. O controlo ético permanece sempre do lado do paciente.",
        author: QUOTE_AUTHOR,
      },
      { type: "heading", text: "Os mitos mais comuns, desmontados" },
      {
        type: "paragraph",
        text: "Estes são os receios que mais frequentemente impedem as pessoas de experimentar a hipnoterapia clínica:",
      },
      {
        type: "list",
        items: [
          {
            title: "\"Vou perder o controlo\"",
            description: "Falso — a pessoa está sempre consciente e pode interromper a sessão a qualquer momento.",
          },
          {
            title: "\"Só funciona em mentes fracas\"",
            description: "Pelo contrário, quanto maior a capacidade de concentração, mais fácil é atingir o estado hipnótico.",
          },
          {
            title: "\"Posso ficar preso em transe\"",
            description: "Impossível — o transe termina naturalmente, mesmo sem intervenção do terapeuta.",
          },
          {
            title: "\"É o mesmo que hipnose de palco\"",
            description: "Contextos, objetivos e ética são completamente diferentes.",
          },
        ],
      },
      {
        type: "paragraph",
        text: "Compreender estes mitos é muitas vezes o primeiro passo para que os pacientes se sintam confortáveis em experimentar um tratamento com resultados clinicamente comprovados.",
      },
    ],
  },
  {
    slug: "tecnicas-autoajuda-crises-ansiedade",
    tag: "Saúde Mental",
    readTime: "8 min de leitura",
    title: "Técnicas de autoajuda para acalmar crises de ansiedade em minutos",
    excerpt:
      "Práticas imediatas baseadas na regulação da respiração e reorientação sensorial que acalmam a ativação excessiva do sistema nervoso.",
    imageUrl: articleImage("tecnicas-autoajuda-crises-ansiedade"),
    publishedAt: "12 de Julho, 2026",
    content: [
      { type: "heading", text: "O que fazer nos primeiros segundos de uma crise" },
      {
        type: "paragraph",
        text: "Numa crise de ansiedade, o corpo entra em modo de alerta máximo — coração acelerado, respiração curta, pensamentos acelerados. Tentar pensar racionalmente nesse momento raramente funciona, porque a parte do cérebro responsável pela lógica está temporariamente menos acessível.",
      },
      {
        type: "paragraph",
        text: "As técnicas mais eficazes nesse momento não dependem de raciocínio, mas de estímulos sensoriais diretos que sinalizam segurança ao sistema nervoso de forma imediata, reduzindo a intensidade da crise em poucos minutos.",
      },
      {
        type: "quote",
        text: "Numa crise, o objetivo não é pensar melhor, é ajudar o corpo a sentir-se seguro primeiro. O resto vem depois.",
        author: QUOTE_AUTHOR,
      },
      { type: "heading", text: "Quatro técnicas para aplicar de imediato" },
      {
        type: "paragraph",
        text: "Estas práticas podem ser usadas em qualquer lugar, sem preparação prévia, assim que sentir uma crise a começar:",
      },
      {
        type: "list",
        items: [
          {
            title: "Técnica 5-4-3-2-1",
            description: "Identifique 5 coisas que vê, 4 que sente, 3 que ouve, 2 que cheira e 1 que saboreia.",
          },
          {
            title: "Água fria no rosto ou pulsos",
            description: "Ativa o reflexo de mergulho, que reduz a frequência cardíaca rapidamente.",
          },
          {
            title: "Contagem regressiva em voz alta",
            description: "Ocupa o córtex pré-frontal e interrompe o ciclo de pensamentos acelerados.",
          },
          {
            title: "Pressão firme nas mãos",
            description: "Cruzar os braços e pressionar os antebraços gera uma sensação de contenção e segurança.",
          },
        ],
      },
      {
        type: "paragraph",
        text: "Praticar estas técnicas fora das crises, quando está calmo, torna-as muito mais eficazes no momento em que realmente precisar delas.",
      },
    ],
  },
  {
    slug: "dependencia-redes-sociais-cerebro",
    tag: "Vícios",
    readTime: "6 min de leitura",
    title: "Dependência de redes sociais: como o cérebro é recompensado",
    excerpt:
      "O mecanismo de dopamina por trás do scroll infinito e estratégias clínicas para recuperar o controlo sobre o tempo de ecrã.",
    imageUrl: articleImage("dependencia-redes-sociais-cerebro"),
    publishedAt: "18 de Julho, 2026",
    content: [
      { type: "heading", text: "O mecanismo de recompensa por trás do scroll infinito" },
      {
        type: "paragraph",
        text: "As redes sociais são desenhadas para libertar pequenas doses de dopamina de forma imprevisível — cada notificação, like ou vídeo novo é uma pequena recompensa que mantém o cérebro em busca da próxima. Este padrão é o mesmo mecanismo neurológico presente noutras formas de dependência comportamental.",
      },
      {
        type: "paragraph",
        text: "Com o tempo, o cérebro habitua-se a este nível de estimulação constante, tornando atividades mais lentas — como ler um livro ou simplesmente estar em silêncio — desconfortáveis ou aborrecidas por comparação.",
      },
      {
        type: "quote",
        text: "Não é falta de força de vontade. É um sistema de recompensa desenhado, propositadamente, para ser difícil de largar.",
        author: QUOTE_AUTHOR,
      },
      { type: "heading", text: "Como recuperar o controlo sobre o tempo de ecrã" },
      {
        type: "paragraph",
        text: "Estas estratégias ajudam a reduzir a dependência sem exigir uma rutura radical e pouco realista:",
      },
      {
        type: "list",
        items: [
          {
            title: "Notificações desligadas por defeito",
            description: "Elimina o gatilho externo que interrompe constantemente a atenção.",
          },
          {
            title: "Ecrã a preto e branco",
            description: "Reduz o apelo visual das aplicações, diminuindo o tempo de uso sem esforço consciente.",
          },
          {
            title: "Janelas de uso definidas",
            description: "Reserve horários específicos para consultar redes sociais, em vez de acesso ilimitado.",
          },
          {
            title: "Substituição ativa",
            description: "Tenha sempre uma alternativa pronta (livro, caminhada) para o momento em que sentir o impulso de abrir a aplicação.",
          },
        ],
      },
      {
        type: "paragraph",
        text: "A hipnoterapia pode complementar estas estratégias, atuando diretamente nas âncoras emocionais que tornam o hábito tão automático e difícil de quebrar.",
      },
    ],
  },
];
