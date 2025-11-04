
import type { Question } from './types';

export const QUIZ_QUESTIONS: Question[] = [
  // Estratégia em ambientes VUCA e BANI
  {
    questionText: "O que o acrônimo VUCA representa no contexto de gestão estratégica?",
    options: [
      "Visão, Unidade, Clareza, Ação",
      "Volatilidade, Incerteza (Uncertainty), Complexidade, Ambiguidade",
      "Valor, Utilidade, Custo, Agilidade",
      "Vulnerabilidade, Urgência, Criticidade, Amplitude"
    ],
    correctAnswerIndex: 1,
    explanation: "VUCA é um acrônimo para Volatilidade, Incerteza (Uncertainty), Complexidade e Ambiguidade. Ele descreve a natureza desafiadora e imprevisível do ambiente de negócios contemporâneo."
  },
  {
    questionText: "Qual das seguintes características NÃO pertence ao ambiente BANI?",
    options: [
      "Frágil (Brittle)",
      "Ansioso (Anxious)",
      "Não-linear (Non-linear)",
      "Estável (Stable)"
    ],
    correctAnswerIndex: 3,
    explanation: "BANI é um framework que descreve o ambiente atual como Frágil, Ansioso, Não-linear e Incompreensível. Estabilidade é o oposto do que BANI representa."
  },
  {
    questionText: "Em um ambiente VUCA, qual é a melhor abordagem estratégica para uma organização?",
    options: [
      "Manter um planejamento rígido e de longo prazo sem alterações.",
      "Focar em adaptabilidade e resiliência, com ciclos de planejamento mais curtos.",
      "Evitar tomar decisões estratégicas até que o mercado se estabilize.",
      "Copiar a estratégia dos concorrentes mais bem-sucedidos."
    ],
    correctAnswerIndex: 1,
    explanation: "A adaptabilidade e a resiliência são cruciais em ambientes VUCA. As organizações precisam ser capazes de ajustar suas estratégias rapidamente em resposta a mudanças inesperadas, usando ciclos de planejamento mais curtos e iterativos."
  },
  {
    questionText: "A resiliência estratégica em contextos de incerteza refere-se à capacidade de:",
    options: [
      "Prever o futuro com 100% de precisão.",
      "Ignorar completamente as ameaças externas.",
      "Absorver choques, recuperar-se e prosperar em meio à adversidade.",
      "Manter os mesmos processos e produtos, independentemente das mudanças."
    ],
    correctAnswerIndex: 2,
    explanation: "Resiliência estratégica é a capacidade de uma organização de resistir a perturbações, se recuperar rapidamente e até mesmo se fortalecer após eventos adversos, adaptando-se às novas realidades."
  },
  {
    questionText: "Como a visão estratégica ajuda uma empresa a navegar em um ambiente BANI?",
    options: [
      "Eliminando completamente a ansiedade e a fragilidade.",
      "Fornecendo um 'Norte' claro que guia as decisões mesmo quando o caminho é incompreensível.",
      "Garantindo que todos os resultados serão lineares e previsíveis.",
      "Substituindo a necessidade de análise de dados."
    ],
    correctAnswerIndex: 1,
    explanation: "Em um mundo caótico (BANI), uma visão estratégica forte atua como uma bússola, fornecendo direção e propósito. Isso ajuda a alinhar as equipes e a tomar decisões consistentes, mesmo diante da não-linearidade e incompreensibilidade."
  },
  // Inovação e estratégias organizacionais
  {
    questionText: "Qual tipo de inovação se caracteriza por melhorias contínuas em produtos ou processos existentes?",
    options: [
      "Inovação Radical",
      "Inovação Disruptiva",
      "Inovação Incremental",
      "Inovação Arquitetural"
    ],
    correctAnswerIndex: 2,
    explanation: "A inovação incremental foca em fazer pequenas melhorias e ajustes em produtos, serviços ou processos que já existem, visando otimização e eficiência."
  },
  {
    questionText: "A 'inovação disruptiva', um conceito popularizado por Clayton Christensen, refere-se a:",
    options: [
      "Uma inovação que destrói completamente o mercado.",
      "Uma inovação que cria um novo mercado e desestabiliza os concorrentes existentes, muitas vezes começando com um produto mais simples ou acessível.",
      "Qualquer nova tecnologia lançada por uma startup.",
      "Uma melhoria muito grande em um produto já líder de mercado."
    ],
    correctAnswerIndex: 1,
    explanation: "A inovação disruptiva descreve um processo pelo qual um produto ou serviço, inicialmente simples, ganha força em um nicho de mercado e, eventualmente, desloca concorrentes estabelecidos."
  },
  {
    questionText: "Para fomentar uma cultura de inovação, uma organização deve:",
    options: [
      "Punir severamente os erros para garantir a qualidade.",
      "Centralizar todas as decisões de inovação no CEO.",
      "Encorajar a experimentação, a colaboração e a tolerância a falhas calculadas.",
      "Investir apenas em ideias que garantam retorno financeiro imediato."
    ],
    correctAnswerIndex: 2,
    explanation: "Uma cultura de inovação forte é construída sobre a segurança psicológica, onde os funcionários se sentem à vontade para experimentar, compartilhar ideias e aprender com os erros, sem medo de punição."
  },
  {
    questionText: "A integração da inovação com a estratégia organizacional significa que:",
    options: [
      "O departamento de P&D trabalha de forma isolada do resto da empresa.",
      "A inovação é um evento esporádico e não planejado.",
      "As iniciativas de inovação estão diretamente alinhadas com os objetivos de longo prazo da empresa.",
      "A empresa deve inovar em todas as áreas ao mesmo tempo."
    ],
    correctAnswerIndex: 2,
    explanation: "A inovação não deve ser aleatória. Para ser eficaz, ela precisa estar alinhada à estratégia geral da empresa, garantindo que os esforços e recursos sejam direcionados para onde podem gerar mais valor e vantagem competitiva."
  },
  {
    questionText: "O que é 'Inovação Aberta'?",
    options: [
      "Um modelo de inovação que usa apenas recursos internos.",
      "Um processo onde as ideias são de domínio público e não podem ser patenteadas.",
      "Um paradigma que assume que as empresas podem e devem usar ideias externas e internas para inovar.",
      "Um software de gestão de inovação de código aberto."
    ],
    correctAnswerIndex: 2,
    explanation: "A Inovação Aberta (Open Innovation) é um modelo que incentiva a colaboração com parceiros externos, como clientes, fornecedores, universidades e até concorrentes, para acelerar o processo de inovação."
  },
  // Monitoramento e controle da estratégia
  {
    questionText: "O que são KPIs (Key Performance Indicators)?",
    options: [
      "Todos os dados que a empresa coleta.",
      "Opiniões subjetivas dos gestores sobre o desempenho.",
      "Métricas quantificáveis que refletem o quão bem uma organização está atingindo seus objetivos estratégicos.",
      "Metas de vendas anuais da equipe comercial."
    ],
    correctAnswerIndex: 2,
    explanation: "KPIs são indicadores-chave de desempenho. São métricas específicas e mensuráveis escolhidas para monitorar o progresso em direção a metas estratégicas cruciais. Nem toda métrica é um KPI."
  },
  {
    questionText: "Qual a principal função de um dashboard estratégico?",
    options: [
      "Apresentar uma quantidade massiva de dados brutos.",
      "Substituir a necessidade de reuniões de gestão.",
      "Fornecer uma visualização rápida e clara dos KPIs mais importantes para a tomada de decisão.",
      "Gerar relatórios financeiros detalhados para auditoria."
    ],
    correctAnswerIndex: 2,
    explanation: "Um dashboard estratégico é uma ferramenta visual que consolida e exibe os KPIs mais relevantes em uma única tela, permitindo que os gestores monitorem a saúde da organização e o progresso da estratégia de forma rápida e intuitiva."
  },
  {
    questionText: "O Balanced Scorecard (BSC) é uma ferramenta de gestão de desempenho que:",
    options: [
      "Foca exclusivamente em indicadores financeiros.",
      "Traduz a visão e a estratégia em um conjunto de objetivos e indicadores em quatro perspectivas: financeira, clientes, processos internos e aprendizado/crescimento.",
      "Serve apenas para avaliar o desempenho individual dos funcionários.",
      "É utilizada somente por empresas de capital aberto."
    ],
    correctAnswerIndex: 1,
    explanation: "O BSC vai além das métricas financeiras, oferecendo uma visão equilibrada do desempenho organizacional ao incorporar perspectivas de clientes, processos internos e aprendizado e crescimento, alinhando-as à estratégia."
  },
  {
    questionText: "No contexto do controle estratégico, o que significa 'feedback loop'?",
    options: [
      "Um ciclo de reclamações de clientes.",
      "Um processo contínuo de medir o desempenho, comparar com as metas e fazer ajustes na estratégia.",
      "Uma falha no sistema que gera dados repetidos.",
      "A avaliação de desempenho anual dos funcionários."
    ],
    correctAnswerIndex: 1,
    explanation: "Um 'feedback loop' (ciclo de retroalimentação) é fundamental no controle estratégico. Envolve monitorar os resultados (KPIs), analisar desvios em relação ao plano e usar essas informações para corrigir o curso e refinar a estratégia."
  },
  {
    questionText: "A avaliação de desempenho estratégico deve focar em:",
    options: [
      "Apenas no resultado final (lucro), ignorando como foi alcançado.",
      "Encontrar culpados por metas não atingidas.",
      "Entender o progresso em direção aos objetivos de longo prazo e a eficácia da execução da estratégia.",
      "Comparar o desempenho apenas com o mês anterior."
    ],
    correctAnswerIndex: 2,
    explanation: "A avaliação estratégica é holística. Ela não olha apenas para o resultado financeiro, mas também para os indicadores que o impulsionam (leading indicators) e avalia se a estratégia implementada está, de fato, funcionando como o esperado."
  },
  // Transformação digital e gestão da mudança
  {
    questionText: "Como a Inteligência Artificial (IA) pode ser incorporada estrategicamente em uma empresa?",
    options: [
      "Apenas para criar chatbots de atendimento ao cliente.",
      "Para automatizar tarefas, analisar grandes volumes de dados para insights e personalizar a experiência do cliente.",
      "Substituindo completamente a tomada de decisão humana.",
      "Como uma ferramenta de marketing para parecer uma empresa moderna."
    ],
    correctAnswerIndex: 1,
    explanation: "A IA tem um potencial estratégico vasto, incluindo a otimização de operações por meio da automação, a descoberta de padrões em Big Data para prever tendências e a criação de produtos e serviços altamente personalizados."
  },
  {
    questionText: "O que é 'Big Data' e qual sua importância estratégica?",
    options: [
      "Qualquer planilha com mais de 1000 linhas.",
      "Conjuntos de dados extremamente grandes e complexos, cuja análise pode revelar padrões e tendências para decisões mais embasadas.",
      "O departamento de TI de uma grande empresa.",
      "Um software específico para armazenamento de dados."
    ],
    correctAnswerIndex: 1,
    explanation: "Big Data refere-se aos 3 Vs (Volume, Velocidade e Variedade) de dados. Estrategicamente, permite que as empresas entendam melhor seus clientes, otimizem processos e identifiquem novas oportunidades de mercado com base em evidências."
  },
  {
    questionText: "Qual o maior desafio na gestão da mudança durante uma transformação digital?",
    options: [
      "Escolher a tecnologia certa.",
      "O custo do novo software.",
      "A resistência cultural e a necessidade de requalificar os colaboradores.",
      "A falta de espaço físico para novos servidores."
    ],
    correctAnswerIndex: 2,
    explanation: "A tecnologia é apenas uma parte da transformação. O maior obstáculo é, frequentemente, o aspecto humano: superar a resistência à mudança, adaptar a cultura organizacional e desenvolver novas habilidades na força de trabalho."
  },
  {
    questionText: "A automação de processos (RPA - Robotic Process Automation) é estrategicamente usada para:",
    options: [
      "Substituir todos os funcionários por robôs.",
      "Aumentar a burocracia e o número de formulários.",
      "Liberar os funcionários de tarefas repetitivas e de baixo valor, permitindo que foquem em atividades mais estratégicas e criativas.",
      "Tornar os processos mais lentos e complexos."
    ],
    correctAnswerIndex: 2,
    explanation: "O objetivo estratégico da RPA não é apenas cortar custos, mas também aumentar a eficiência, reduzir erros e, mais importante, realocar o talento humano para tarefas que exigem pensamento crítico, criatividade e interação humana."
  },
  {
    questionText: "A transformação digital é, fundamentalmente, sobre:",
    options: [
      "Ter um site e perfis em redes sociais.",
      "Comprar os computadores mais modernos.",
      "Uma mudança na tecnologia utilizada pela empresa.",
      "Uma mudança fundamental no modelo de negócios e na cultura, habilitada pela tecnologia digital."
    ],
    correctAnswerIndex: 3,
    explanation: "A transformação digital é muito mais do que apenas adotar novas tecnologias. É uma reinvenção da organização que repensa como entregar valor aos clientes, utilizando a tecnologia como um pilar central para novos modelos de negócios e processos."
  },
  // Perguntas de revisão geral
  {
    questionText: "A 'visão estratégica' de uma empresa é melhor definida como:",
    options: [
      "Um plano de marketing detalhado para o próximo trimestre.",
      "Uma declaração de sua situação financeira atual.",
      "Uma descrição aspiracional de longo prazo do que a organização deseja se tornar.",
      "A lista de produtos que a empresa vende."
    ],
    correctAnswerIndex: 2,
    explanation: "A visão é o 'sonho' da empresa. É uma declaração concisa que descreve o futuro desejado, servindo para inspirar e guiar todos os stakeholders."
  },
  {
    questionText: "Em um ambiente que muda rapidamente (VUCA/BANI), a 'agilidade estratégica' é a capacidade de:",
    options: [
      "Mudar de estratégia toda semana sem um motivo claro.",
      "Detectar e responder a oportunidades e ameaças com rapidez e flexibilidade.",
      "Executar um plano perfeitamente sem qualquer desvio.",
      "Ter reuniões diárias com toda a equipe."
    ],
    correctAnswerIndex: 1,
    explanation: "Agilidade estratégica combina sensibilidade (perceber as mudanças) com capacidade de resposta (agir rapidamente). É crucial para se manter competitivo em mercados dinâmicos."
  },
  {
    questionText: "Qual a relação entre KPIs e a execução da estratégia?",
    options: [
      "KPIs são irrelevantes para a estratégia.",
      "KPIs são a própria estratégia.",
      "KPIs medem o progresso da execução da estratégia, mostrando se as ações estão levando aos resultados desejados.",
      "KPIs só são definidos depois que a estratégia já foi concluída."
    ],
    correctAnswerIndex: 2,
    explanation: "Estratégia sem medição é apenas um desejo. KPIs são as ferramentas que conectam o plano à realidade, permitindo monitorar, controlar e ajustar a execução para garantir que os objetivos sejam alcançados."
  },
  {
    questionText: "Por que uma cultura que tolera falhas é importante para a inovação?",
    options: [
      "Porque o objetivo é falhar o máximo possível.",
      "Porque a inovação envolve incerteza e experimentação, e nem toda tentativa será bem-sucedida.",
      "Porque não há necessidade de aprender com os erros.",
      "Porque a qualidade não importa no processo de inovação."
    ],
    correctAnswerIndex: 1,
    explanation: "Inovar é explorar o desconhecido. Se as pessoas têm medo de falhar, elas não assumirão os riscos necessários para criar algo novo. Uma cultura saudável encoraja 'falhas inteligentes' das quais se pode aprender e iterar."
  },
  {
    questionText: "A análise de Big Data ajuda na tomada de decisão estratégica ao:",
    options: [
      "Substituir a intuição e experiência dos gestores.",
      "Fornecer insights baseados em evidências em vez de suposições.",
      "Tornar as decisões mais lentas devido ao excesso de informação.",
      "Garantir que todas as decisões tomadas serão 100% corretas."
    ],
    correctAnswerIndex: 1,
    explanation: "Big Data complementa a experiência dos gestores. Ao analisar grandes volumes de dados, as empresas podem identificar padrões de consumo, prever demandas e otimizar operações com um grau de certeza muito maior do que com base apenas na intuição."
  },
  {
    questionText: "O que melhor descreve uma estratégia adaptativa?",
    options: [
      "Uma estratégia que nunca muda.",
      "Uma estratégia que é continuamente ajustada com base no aprendizado e nas mudanças do ambiente.",
      "Uma estratégia que é criada apenas uma vez a cada 10 anos.",
      "Uma estratégia focada apenas em redução de custos."
    ],
    correctAnswerIndex: 1,
    explanation: "Diferente do planejamento tradicional e rígido, a estratégia adaptativa é um processo dinâmico. A organização aprende continuamente com o ambiente e ajusta seu curso, mantendo-se relevante e competitiva."
  },
  {
    questionText: "Qual o papel da liderança na promoção de uma cultura de inovação?",
    options: [
      "Microgerenciar cada projeto de inovação.",
      "Criar um ambiente seguro para a experimentação, fornecer recursos e alinhar a inovação com a visão.",
      "Manter o processo de inovação em segredo do resto da empresa.",
      "Aprovar apenas ideias que eles mesmos tiveram."
    ],
    correctAnswerIndex: 1,
    explanation: "A liderança é fundamental. Os líderes devem atuar como facilitadores, criando as condições para que a inovação floresça: definindo a direção estratégica, alocando recursos, protegendo as equipes de pressões de curto prazo e celebrando tanto os sucessos quanto os aprendizados das falhas."
  },
  {
    questionText: "Como um dashboard bem projetado auxilia no monitoramento da estratégia?",
    options: [
      "Apresentando todos os dados da empresa em uma única tela confusa.",
      "Destacando visualmente os desvios (positivos ou negativos) nos KPIs, permitindo uma ação rápida.",
      "Enviando alertas por e-mail a cada minuto.",
      "Mostrando apenas dados históricos de anos anteriores."
    ],
    correctAnswerIndex: 1,
    explanation: "A força de um dashboard está na sua clareza e foco. Ele usa gráficos, cores e indicadores para traduzir números complexos em insights acionáveis, tornando óbvio onde a atenção da gestão é necessária."
  },
  {
    questionText: "Na gestão da mudança para a transformação digital, a comunicação é crucial para:",
    options: [
      "Manter os funcionários desinformados para evitar pânico.",
      "Anunciar as mudanças apenas no dia em que elas acontecem.",
      "Explicar o 'porquê' da mudança, alinhar expectativas e engajar os colaboradores no processo.",
      "Comunicar-se apenas com a alta gestão."
    ],
    correctAnswerIndex: 2,
    explanation: "A mudança gera incerteza e ansiedade. Uma comunicação clara, consistente e transparente é essencial para construir confiança, explicar os benefícios da transformação (para a empresa e para os funcionários) e garantir que todos se sintam parte da jornada."
  },
  {
    questionText: "A principal diferença entre o ambiente VUCA e o BANI é que:",
    options: [
      "Não há diferença, são exatamente a mesma coisa.",
      "VUCA descreve um mundo complicado, enquanto BANI descreve um mundo caótico e sistemicamente quebrado.",
      "VUCA é sobre tecnologia e BANI é sobre pessoas.",
      "BANI é uma versão mais simples e otimista do VUCA."
    ],
    correctAnswerIndex: 1,
    explanation: "BANI é visto como uma evolução do VUCA para descrever a realidade atual. Enquanto VUCA foca na dificuldade de prever (incerteza, complexidade), BANI descreve um sistema que parece ter perdido a lógica (frágil, não-linear, incompreensível), gerando um sentimento de ansiedade."
  }
];
