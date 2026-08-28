import { Translation } from '../types/translations';

export const en: Translation = {
  profile: {
    name: "Gustavo",
    role: "Full Stack Developer and Digital Solutions Architect",
    positioning: "CONSULTANT, SYSTEMS ARCHITECT AND FULL STACK DEVELOPER",
    headline: "TECHNOLOGY TO TURN IDEAS INTO REAL SYSTEMS",
    tagline:
      "Architecture, development and integration of digital solutions focused on performance, scalability and results.",
    description:
      "Gustavo Dantas builds custom systems, web applications and integrations, turning business needs into functional, scalable and sustainable digital solutions.",
    aboutTitle: "Profile",
    about: [
      "Gustavo Dantas builds custom systems, web applications and integrations, turning business needs into functional, scalable and sustainable digital solutions.",
      "His experience combines software development, systems architecture, process automation and platform integration. He works primarily with JavaScript, TypeScript, Python, React, Node.js and Odoo ERP, delivering complete applications from frontend to backend.",
      "His work brings together engineering and user experience, with special attention to performance, usability, architectural clarity and the long-term evolution of systems.",
      "More than building interfaces or writing code, his focus is on creating solutions that solve real problems."
    ],
    github: "GitHub",
    linkedin: "LinkedIn",
    cv: "Resume"
  },
  projects: {
        title: "Projects",
        viewDemo: "View Demo",
        viewCode: "Code",
        source: "Finished projects, straight from the public repositories at",
    },
  contact: {
    title: "Let's talk",
    description:
      "If your company needs to transform processes, integrate systems or create a digital product that can grow with the business, let's talk.",
    startChat: "Talk on WhatsApp",
    startChat2: "Send a message",
    formTitle: "Tell me about the challenge",
    formDescription:
      "Describe the problem, the context and the outcome you need. I'll reply with the next step.",
    name: "Name",
    namePlaceholder: "Your name",
    email: "Email",
    emailPlaceholder: "you@email.com",
    subject: "Subject",
    subjectPlaceholder: "What challenge do you want to solve?",
    message: "Message",
    messagePlaceholder: "Context, processes involved and what needs to change",
    send: "Send",
    sending: "Sending...",
    success: "Message sent. I'll get back to you soon.",
    error: "Could not send. Try again or use WhatsApp.",
    close: "Close"
  },
  themes: {
    title: "React Themes",
    viewLive: "View Live",
    list: [
      {
        id: 'portfolio-theme',
        name: 'Portfolio Theme',
        description:
          'A foundation for presenting work and professional positioning with clear structure and a consistent visual experience.',
        technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
        url: 'https://example.com/portfolio-theme',
        gradientClass: 'bg-gradient-to-br from-neutral-800 to-neutral-400',
        animationDelay: '0s'
      },
      {
        id: 'business-theme',
        name: 'Business Theme',
        description:
          'A structure for institutional sites and corporate digital products focused on clarity and conversion.',
        technologies: ['React', 'TypeScript', 'Shadcn UI'],
        url: 'https://example.com/business-theme',
        gradientClass: 'bg-gradient-to-br from-zinc-700 to-zinc-300',
        animationDelay: '1s'
      },
      {
        id: 'ecommerce-theme',
        name: 'E-commerce Theme',
        description:
          'A base for catalog, cart and purchase journey, designed to evolve with the operation.',
        technologies: ['React', 'Redux', 'Stripe API'],
        url: 'https://example.com/ecommerce-theme',
        gradientClass: 'bg-gradient-to-br from-gray-900 to-gray-500',
        animationDelay: '2s'
      }
    ]
  },
  navigation: {
    title: "How to Navigate",
    dragAndDrop: "Click and drag to explore",
    clickPlanets: "Click the planets to see the projects",
    clickSatellite: "Click here",
    useScroll: "Use scroll to zoom"
  }
};
