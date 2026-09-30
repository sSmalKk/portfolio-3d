import { Translation } from '../types/translations';

export const en: Translation = {
  profile: {
    name: "Gustavo Dantas",
    fullName: "Gustavo Dantas Guimarães",
    role: "Full Stack Developer",
    positioning: "Full Stack Developer · Backend · APIs and integrations",
    headline: "Complete web systems, from the database to the interface.",
    tagline:
      "I build applications with React, TypeScript, Node.js and Python: APIs, business rules, third-party integrations and process automation.",
    description:
      "Gustavo Dantas, Full Stack Developer (React, TypeScript, Node.js, Python). Web systems, REST and GraphQL APIs, integrations and automation.",
    aboutTitle: "About",
    about: [
      "I'm a Full Stack Developer and I work across the whole system: database modeling, business rules, API and interface. Where I do my best work is where the problem lives in the rules rather than on the screen: permissions, job queues, third-party API integrations and data that has to stay consistent.",
      "I currently build Publiva, a SaaS in production that generates and publishes social media content. Before that I worked on an AI assistant integrated with WhatsApp at Spacetrack Tecnologia, on the Didder app for Minerva, and on a clinic ERP built on Odoo.",
      "I hold a technologist degree in Systems Analysis and Development and a computer technician diploma. I also have a design background, which helps me ship polished interfaces.",
    ],
    github: "GitHub",
    linkedin: "LinkedIn",
    cv: "Résumé",
    seeProjects: "See projects",
  },
  stack: {
    title: "Tech stack",
    groups: [
      { label: "Core", items: ["TypeScript", "JavaScript", "React", "Node.js", "Python"] },
      { label: "Backend and data", items: ["PostgreSQL", "MongoDB", "REST", "GraphQL", "Express", "Supabase"] },
      { label: "Integrations and infrastructure", items: ["Webhooks", "WhatsApp (Evolution API)", "AWS (Lambda, S3, SQS)", "Docker", "GitHub Actions"] },
      { label: "Also", items: ["Java", "Odoo", "Next.js", "Tailwind CSS", "Three.js"] },
    ],
  },
  experience: {
    title: "Experience",
    list: [
      {
        role: "Full Stack Developer",
        company: "Publiva · own product",
        period: "2026 – present",
        location: "Remote",
        summary:
          "SaaS in production that creates, schedules and publishes social media content. I own the whole product, from the database to deployment.",
        highlights: [
          "Layered API (routes → use cases → repositories), with dependency rules enforced by a test in CI.",
          "Multi-tenant by organization, with roles, usage-based billing and Stripe plans.",
          "Job queue inside PostgreSQL (FOR UPDATE SKIP LOCKED) driven by a cron every 5 minutes.",
          "Publishing to Instagram, Facebook, LinkedIn, Pinterest and WhatsApp through adapters behind a common interface.",
          "CI/CD on GitHub Actions: tests, migrations and deploy to AWS Lambda via OIDC, with no stored access keys.",
        ],
        stack: ["TypeScript", "React", "TanStack Start", "PostgreSQL", "AWS Lambda", "Stripe", "OpenAI"],
      },
      {
        role: "Developer",
        company: "Spacetrack Tecnologia",
        period: "Nov 2025 – Jan 2026",
        location: "Uberlândia, Brazil · on-site",
        summary: "Built an artificial intelligence assistant integrated with WhatsApp through the Evolution API.",
        highlights: [
          "Data orchestration and processing with Python, AWS SQS queues and S3 buckets.",
          "Work on the Java server, a web page and the project's operations dashboard.",
        ],
        stack: ["Python", "AWS SQS", "AWS S3", "Java", "Evolution API"],
      },
      {
        role: "Full Stack Developer",
        company: "Minerva Intermediações de Negócios · Didder app",
        period: "Oct 2024 – Jun 2025, then on demand",
        location: "Remote",
        summary:
          "Development of the Didder app, from the interface to the backend. After the fixed period I kept working on the project on demand.",
        highlights: [
          "Dashboards integrated with a GraphQL API.",
          "Migrated the Node.js/Express backend and the WhatsApp integration server from JavaScript to TypeScript.",
          "Moved the front end from Bootstrap to Tailwind CSS and worked on Next.js.",
          "App interface, layouts and animations (SVG and Lottie), plus report automation with ExcelJS.",
        ],
        stack: ["React", "Next.js", "TypeScript", "Node.js", "GraphQL", "Tailwind CSS"],
      },
      {
        role: "Developer (freelance)",
        company: "Acescode · clinic ERP on Odoo",
        period: "Feb 2025 – Apr 2025",
        location: "Remote",
        summary:
          "Customized Odoo 18 for clinic management: scheduling, clinical history, subscriptions, multi-company permissions and WhatsApp integration.",
        highlights: [],
        stack: ["Python", "Odoo", "PostgreSQL"],
      },
    ],
    education: {
      title: "Education",
      list: [
        { degree: "Technologist in Systems Analysis and Development", school: "UNOPAR", period: "2022 – 2025" },
        { degree: "Computer Technician", school: "CEBRAC", period: "2019" },
      ],
    },
  },
  projects: {
    title: "Projects",
    viewCode: "Code",
    source: "Open source on",
    featured: {
      name: "Publiva",
      label: "In production",
      description:
        "SaaS that uses AI to generate a campaign's plan, copy and artwork, builds the calendar and publishes to social networks on schedule.",
      highlights: [
        "~560 TypeScript modules, 50 tables and 31 versioned migrations",
        "8 architecture decisions recorded as ADRs",
        "Continuous deployment to AWS Lambda via GitHub Actions + OIDC",
      ],
      stack: ["TypeScript", "React", "PostgreSQL", "AWS", "Stripe", "OpenAI"],
      url: "https://publiva.com.br",
      urlLabel: "publiva.com.br",
      note: "Private source code.",
    },
  },
  contact: {
    title: "Contact",
    description:
      "I'm available for Full Stack, Backend or Software Developer roles: on-site in Uberlândia, hybrid or remote.",
    emailAddress: "dantaswebdesign77@gmail.com",
    startChat: "WhatsApp",
    startChat2: "Send a message",
    formTitle: "Send a message",
    formDescription: "I reply by email.",
    name: "Name",
    namePlaceholder: "Your name",
    email: "Email",
    emailPlaceholder: "you@company.com",
    subject: "Subject",
    subjectPlaceholder: "Role, project or question",
    message: "Message",
    messagePlaceholder: "Write your message",
    send: "Send",
    sending: "Sending...",
    success: "Message sent. I'll get back to you soon.",
    error: "Couldn't send it. Try again or write to the email address.",
    close: "Close",
  },
};
