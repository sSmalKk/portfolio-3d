import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const FOTO = 'https://avatars.githubusercontent.com/u/49993796?v=4';
const SITE = 'https://dantastec.netlify.app/';

const SEOHead = () => {
  const { t, language } = useLanguage();

  React.useEffect(() => {
    // Title
    document.title = `${t.profile.name} — ${t.profile.role}`;

    // Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t.profile.description);
    } else {
      const desc = document.createElement('meta');
      desc.name = 'description';
      desc.content = t.profile.description;
      document.head.appendChild(desc);
    }

    // Language
    document.documentElement.lang = language;

    // Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', `${t.profile.name} — ${t.profile.role}`);
    }
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', t.profile.description);
    }
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', SITE);
    }
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', FOTO);
    }
    // Twitter
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', `${t.profile.name} — ${t.profile.role}`);
    }
    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', t.profile.description);
    }
    const twitterUrl = document.querySelector('meta[property="twitter:url"]');
    if (twitterUrl) {
      twitterUrl.setAttribute('content', SITE);
    }
    const twitterImage = document.querySelector('meta[property="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('content', FOTO);
    }
    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      (canonical as HTMLLinkElement).rel = 'canonical';
      document.head.appendChild(canonical);
    }
    (canonical as HTMLLinkElement).setAttribute('href', SITE);

    // Structured Data
    const existingStructuredData = document.querySelector('#structured-data');
    if (existingStructuredData) existingStructuredData.remove();
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": t.profile.fullName,
      "jobTitle": t.profile.role,
      "description": t.profile.description,
      "url": SITE,
      "image": FOTO,
      "email": `mailto:${t.contact.emailAddress}`,
      "address": { "@type": "PostalAddress", "addressLocality": "Uberlândia", "addressRegion": "MG", "addressCountry": "BR" },
      "knowsAbout": ["React", "TypeScript", "JavaScript", "Node.js", "Python", "PostgreSQL", "REST API", "GraphQL"],
      "sameAs": [
        "https://www.linkedin.com/in/gustavodantasdev/",
        "https://github.com/sSmalKk"
      ]
    };
    const script = document.createElement('script');
    script.id = 'structured-data';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }, [t, language]);

  return null;
};

export default SEOHead;
