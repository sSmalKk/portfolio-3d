export interface Translation {
  profile: {
    name: string;
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
  };
  projects: {
    title: string;
    viewDemo: string;
    viewCode: string;
    source: string;
  };
  contact: {
    title: string;
    description: string;
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
  themes: {
    title: string;
    viewLive: string;
    list: Array<{
      id: string;
      name: string;
      description: string;
      technologies: string[];
      url: string;
      gradientClass: string;
      animationDelay: string;
    }>;
  };
  navigation: {
    title: string;
    dragAndDrop: string;
    clickPlanets: string;
    clickSatellite: string;
    useScroll: string;
  };
}
