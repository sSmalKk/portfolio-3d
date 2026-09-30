import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';
import ContactForm from './ContactForm';

const botao =
  'bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-white hover:bg-white/20 transition-all duration-300';

const ContactSection = () => {
  const { t } = useLanguage();
  const [formOpen, setFormOpen] = useState(false);

  return (
    <section id="contato" className="scroll-mt-20 py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 text-center">
          {t.contact.title}
        </h2>

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-base sm:text-lg text-white/80 mb-4">{t.contact.description}</p>
          <p className="mb-8">
            <a href={`mailto:${t.contact.emailAddress}`} className="text-white underline break-all hover:text-white/60">
              {t.contact.emailAddress}
            </a>
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button type="button" onClick={() => setFormOpen(true)} className={botao}>
              {t.contact.startChat2}
            </button>
            <a href="https://www.linkedin.com/in/gustavodantasdev/" target="_blank" rel="noopener noreferrer" className={botao}>
              {t.profile.linkedin}
            </a>
            <a href="https://api.whatsapp.com/send/?phone=5561981594849" target="_blank" rel="noopener noreferrer" className={botao}>
              {t.contact.startChat}
            </a>
          </div>
        </div>
      </div>

      <ContactForm open={formOpen} onOpenChange={setFormOpen} />
    </section>
  );
};

export default ContactSection;
