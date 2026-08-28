import { Translation } from '../types/translations';

export const pt: Translation = {
  profile: {
    name: "Gustavo",
    role: "Desenvolvedor Full Stack e Arquiteto de Soluções Digitais",
    positioning: "CONSULTOR, ARQUITETO DE SISTEMAS E DESENVOLVEDOR FULL STACK",
    headline: "TECNOLOGIA PARA TRANSFORMAR IDEIAS EM SISTEMAS REAIS",
    tagline:
      "Arquitetura, desenvolvimento e integração de soluções digitais com foco em performance, escalabilidade e resultado.",
    description:
      "Gustavo Dantas atua no desenvolvimento de sistemas, aplicações web e integrações sob medida, transformando necessidades de negócio em soluções digitais funcionais, escaláveis e sustentáveis.",
    aboutTitle: "Perfil",
    about: [
      "Gustavo Dantas atua no desenvolvimento de sistemas, aplicações web e integrações sob medida, transformando necessidades de negócio em soluções digitais funcionais, escaláveis e sustentáveis.",
      "Sua experiência combina desenvolvimento de software, arquitetura de sistemas, automação de processos e integração entre plataformas. Atua principalmente com JavaScript, TypeScript, Python, React, Node.js e Odoo ERP, construindo aplicações completas do frontend ao backend.",
      "Seu trabalho une engenharia e experiência de usuário, com atenção especial à performance, usabilidade, organização arquitetural e capacidade de evolução dos sistemas.",
      "Mais do que desenvolver interfaces ou escrever código, seu foco está em construir soluções que resolvam problemas reais."
    ],
    github: "GitHub",
    linkedin: "LinkedIn",
    cv: "Currículo"
  },
  projects: {
        title: "Projetos",
        viewDemo: "Ver Demo",
        viewCode: "Código",
        source: "Projetos concluídos, direto dos repositórios públicos em",
    },
  contact: {
    title: "Vamos conversar",
    description:
      "Se sua empresa precisa transformar processos, integrar sistemas ou criar um produto digital capaz de crescer com o negócio, vamos falar.",
    startChat: "Falar no WhatsApp",
    startChat2: "Enviar mensagem",
    formTitle: "Conte sobre o desafio",
    formDescription:
      "Descreva o problema, o contexto e o resultado que você busca. Eu retorno com a próxima etapa.",
    name: "Nome",
    namePlaceholder: "Seu nome",
    email: "E-mail",
    emailPlaceholder: "voce@email.com",
    subject: "Assunto",
    subjectPlaceholder: "Qual desafio você quer resolver?",
    message: "Mensagem",
    messagePlaceholder: "Contexto, processos envolvidos e o que precisa mudar",
    send: "Enviar",
    sending: "Enviando...",
    success: "Mensagem enviada. Em breve retorno o contato.",
    error: "Não foi possível enviar. Tente de novo ou use o WhatsApp.",
    close: "Fechar"
  },
  themes: {
    title: "Temas React",
    viewLive: "Ver Demo",
    list: [
      {
        id: 'portfolio-theme',
        name: 'Tema Portfolio',
        description:
          'Base para apresentar trabalho e posicionamento profissional com estrutura clara e experiência visual consistente.',
        technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
        url: 'https://example.com/portfolio-theme',
        gradientClass: 'bg-gradient-to-br from-neutral-800 to-neutral-400',
        animationDelay: '0s'
      },
      {
        id: 'business-theme',
        name: 'Tema Empresarial',
        description:
          'Estrutura para sites institucionais e produtos digitais corporativos com foco em clareza e conversão.',
        technologies: ['React', 'TypeScript', 'Shadcn UI'],
        url: 'https://example.com/business-theme',
        gradientClass: 'bg-gradient-to-br from-zinc-700 to-zinc-300',
        animationDelay: '1s'
      },
      {
        id: 'ecommerce-theme',
        name: 'Tema E-commerce',
        description:
          'Base para catálogo, carrinho e jornada de compra, pensada para evoluir junto com a operação.',
        technologies: ['React', 'Redux', 'Stripe API'],
        url: 'https://example.com/ecommerce-theme',
        gradientClass: 'bg-gradient-to-br from-gray-900 to-gray-500',
        animationDelay: '2s'
      }
    ]
  },
  navigation: {
    title: "Como Navegar",
    dragAndDrop: "Clique e arraste para explorar",
    clickPlanets: "Clique nos planetas para ver os projetos",
    clickSatellite: "Clique aqui",
    useScroll: "Use o scroll para zoom"
  }
};
