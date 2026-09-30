export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

export interface FeaturedProduct {
  name: string;
  label: string;
  description: string;
  highlights: string[];
  stack: string[];
  url: string;
  urlLabel: string;
  note: string;
  screenshotAlt: string;
}

export interface Translation {
  profile: {
    name: string;
    fullName: string;
    role: string;
    positioning: string;
    headline: string;
    tagline: string;
    description: string;
    aboutTitle: string;
    about: string[];
    github: string;
    linkedin: string;
    cv: string;
    seeProjects: string;
  };
  stack: {
    title: string;
    groups: Array<{ label: string; items: string[] }>;
  };
  experience: {
    title: string;
    list: Experience[];
    education: {
      title: string;
      list: Array<{ degree: string; school: string; period: string }>;
    };
  };
  projects: {
    title: string;
    viewCode: string;
    source: string;
    featured: FeaturedProduct;
  };
  contact: {
    title: string;
    description: string;
    emailAddress: string;
    startChat: string;
    startChat2: string;
    formTitle: string;
    formDescription: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    subject: string;
    subjectPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    success: string;
    error: string;
    close: string;
  };
}
