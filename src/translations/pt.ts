import { Translation } from '../types/translations';

export const pt: Translation = {
  profile: {
    name: "Gustavo Dantas",
    fullName: "Gustavo Dantas Guimarães",
    role: "Desenvolvedor Full Stack",
    positioning: "Desenvolvedor Full Stack · Backend · APIs e integrações",
    headline: "Sistemas web completos, do banco de dados à interface.",
    tagline:
      "Desenvolvo aplicações com React, TypeScript, Node.js e Python: APIs, regras de negócio, integrações com serviços externos e automação de processos.",
    description:
      "Gustavo Dantas, Desenvolvedor Full Stack (React, TypeScript, Node.js, Python). Sistemas web, APIs REST e GraphQL, integrações e automação.",
    aboutTitle: "Sobre",
    about: [
      "Sou Desenvolvedor Full Stack e trabalho no sistema inteiro: modelagem do banco, regras de negócio, API e interface. O que mais faço bem é a parte em que o problema está na regra, e não na tela: permissões, filas de processamento, integrações com APIs externas e dados que precisam continuar consistentes.",
      "Hoje desenvolvo o Publiva, um SaaS em produção que gera e publica conteúdo em redes sociais. Antes, trabalhei em um assistente de IA integrado ao WhatsApp na Spacetrack Tecnologia, no aplicativo Didder pela Minerva e em um ERP para clínicas construído sobre o Odoo.",
      "Sou tecnólogo em Análise e Desenvolvimento de Sistemas e técnico em Computação. Também tenho formação em design, o que me ajuda a entregar interfaces bem acabadas.",
    ],
    github: "GitHub",
    linkedin: "LinkedIn",
    cv: "Currículo",
    seeProjects: "Ver projetos",
  },
  stack: {
    title: "Tecnologias",
    groups: [
      { label: "Principal", items: ["TypeScript", "JavaScript", "React", "Node.js", "Python"] },
      { label: "Backend e dados", items: ["PostgreSQL", "MongoDB", "REST", "GraphQL", "Express", "Supabase"] },
      { label: "Integrações e infraestrutura", items: ["Webhooks", "WhatsApp (Evolution API)", "AWS (Lambda, S3, SQS)", "Docker", "GitHub Actions"] },
      { label: "Também", items: ["Java", "Odoo", "Next.js", "Tailwind CSS", "Three.js"] },
    ],
  },
  experience: {
    title: "Experiência",
    list: [
      {
        role: "Desenvolvedor Full Stack",
        company: "Publiva · projeto próprio",
        period: "2026 – atual",
        location: "Remoto",
        summary:
          "SaaS em produção que cria, agenda e publica conteúdo para redes sociais. Sou responsável pelo produto inteiro, do banco ao deploy.",
        highlights: [
          "API em camadas (rotas → casos de uso → repositórios), com as regras de dependência verificadas por teste no CI.",
          "Multi-tenant por organização, com papéis, cobrança por uso e planos no Stripe.",
          "Fila de jobs no próprio PostgreSQL (FOR UPDATE SKIP LOCKED) disparada por cron a cada 5 minutos.",
          "Publicação no Instagram, Facebook, LinkedIn, Pinterest e WhatsApp por adapters atrás de uma interface comum.",
          "CI/CD no GitHub Actions: testes, migrations e deploy no AWS Lambda via OIDC, sem chave de acesso guardada.",
        ],
        stack: ["TypeScript", "React", "TanStack Start", "PostgreSQL", "AWS Lambda", "Stripe", "OpenAI"],
      },
      {
        role: "Desenvolvedor",
        company: "Spacetrack Tecnologia",
        period: "nov/2025 – jan/2026",
        location: "Uberlândia, MG · presencial",
        summary:
          "Desenvolvimento de um assistente de inteligência artificial integrado ao WhatsApp pela Evolution API.",
        highlights: [
          "Orquestração e processamento de dados com Python, filas no AWS SQS e buckets S3.",
          "Tarefas no servidor Java, página web e dashboard operacional do projeto.",
        ],
        stack: ["Python", "AWS SQS", "AWS S3", "Java", "Evolution API"],
      },
      {
        role: "Desenvolvedor Full Stack",
        company: "Minerva Intermediações de Negócios · app Didder",
        period: "out/2024 – jun/2025, depois sob demanda",
        location: "Remoto",
        summary:
          "Desenvolvimento do aplicativo Didder, da interface ao backend. Depois do período fixo, continuei atendendo o projeto sob demanda.",
        highlights: [
          "Dashboards integrados a uma API GraphQL.",
          "Migração do backend Node.js/Express e do servidor de integração com WhatsApp de JavaScript para TypeScript.",
          "Migração do front de Bootstrap para Tailwind CSS e ajustes em Next.js.",
          "Interface, layouts e animações do app (SVG e Lottie), além de automações de relatórios com ExcelJS.",
        ],
        stack: ["React", "Next.js", "TypeScript", "Node.js", "GraphQL", "Tailwind CSS"],
      },
      {
        role: "Desenvolvedor (freelance)",
        company: "Acescode · ERP para clínicas em Odoo",
        period: "fev/2025 – abr/2025",
        location: "Remoto",
        summary:
          "Customização do Odoo 18 para gestão de clínicas: agendamento, histórico clínico, assinaturas, permissões multiempresa e integração com WhatsApp.",
        highlights: [],
        stack: ["Python", "Odoo", "PostgreSQL"],
      },
    ],
    education: {
      title: "Formação",
      list: [
        { degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas", school: "UNOPAR", period: "2022 – 2025" },
        { degree: "Técnico em Computação", school: "CEBRAC", period: "2019" },
      ],
    },
  },
  projects: {
    title: "Projetos",
    viewCode: "Código",
    source: "Código aberto em",
    featured: {
      name: "Publiva",
      label: "Produto em produção",
      description:
        "SaaS que gera o plano, o texto e as artes de uma campanha com IA, monta o calendário e publica sozinho nas redes sociais no horário marcado.",
      highlights: [
        "~560 módulos TypeScript, 50 tabelas e 31 migrations versionadas",
        "8 decisões de arquitetura registradas em ADRs",
        "Deploy contínuo no AWS Lambda via GitHub Actions + OIDC",
      ],
      stack: ["TypeScript", "React", "PostgreSQL", "AWS", "Stripe", "OpenAI"],
      url: "https://publiva.com.br",
      urlLabel: "publiva.com.br",
      note: "Código privado.",
      screenshotAlt: "Dashboard do Publiva: resumo das campanhas, calendário de postagens e agente de IA",
    },
  },
  contact: {
    title: "Contato",
    description:
      "Estou disponível para vagas de Desenvolvedor Full Stack, Backend ou Software Developer, presencial em Uberlândia, híbrido ou remoto.",
    emailAddress: "dantaswebdesign77@gmail.com",
    startChat: "WhatsApp",
    startChat2: "Enviar mensagem",
    formTitle: "Enviar mensagem",
    formDescription: "Respondo por e-mail.",
    name: "Nome",
    namePlaceholder: "Seu nome",
    email: "E-mail",
    emailPlaceholder: "voce@empresa.com",
    subject: "Assunto",
    subjectPlaceholder: "Vaga, projeto ou dúvida",
    message: "Mensagem",
    messagePlaceholder: "Escreva sua mensagem",
    send: "Enviar",
    sending: "Enviando...",
    success: "Mensagem enviada. Respondo em breve.",
    error: "Não foi possível enviar. Tente de novo ou escreva para o e-mail.",
    close: "Fechar",
  },
};
