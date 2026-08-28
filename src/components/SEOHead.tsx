import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const SEOHead = () => {
  const { t, language } = useLanguage();

  React.useEffect(() => {
    // Title
    document.title = `${t.profile.name} - ${t.profile.role}`;

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
      ogTitle.setAttribute('content', `${t.profile.name} - ${t.profile.role}`);
    }
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', t.profile.description);
    }
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', window.location.href);
    }
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', 'https://media.licdn.com/dms/image/v2/D4D03AQESfPbSx0BC3Q/profile-displayphoto-shrink_200_200/B4DZeX9gK_GkAc-/0/1750601174925?e=1756339200&v=beta&t=C2-V2dlnZo-EVgW8c1m2yVJCNWBR-SKrohu_6NdhAOM');
    }
    // Twitter
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', `${t.profile.name} - ${t.profile.role}`);
    }
    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', t.profile.description);
    }
    const twitterUrl = document.querySelector('meta[property="twitter:url"]');
    if (twitterUrl) {
      twitterUrl.setAttribute('content', window.location.href);
    }
    const twitterImage = document.querySelector('meta[property="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('content', 'https://media.licdn.com/dms/image/v2/D4D03AQESfPbSx0BC3Q/profile-displayphoto-shrink_200_200/B4DZeX9gK_GkAc-/0/1750601174925?e=1756339200&v=beta&t=C2-V2dlnZo-EVgW8c1m2yVJCNWBR-SKrohu_6NdhAOM');
    }
    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      (canonical as HTMLLinkElement).rel = 'canonical';
      document.head.appendChild(canonical);
    }
    (canonical as HTMLLinkElement).setAttribute('href', window.location.href);

    // Structured Data
    const existingStructuredData = document.querySelector('#structured-data');
    if (existingStructuredData) existingStructuredData.remove();
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": t.profile.name,
      "jobTitle": t.profile.role,
      "description": t.profile.description,
      "url": window.location.origin,
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
