import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';
import ContactForm from './ContactForm';
import SecaoDividida from './SecaoDividida';

const botao =
  'bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-white text-center hover:bg-white/20 transition-all duration-300';

const ContactSection = () => {
  const { t } = useLanguage();
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <SecaoDividida id="contato" titulo={t.contact.title} apoio={t.contact.description} lado="esquerda">
        <p className="mb-6">
          <a href={`mailto:${t.contact.emailAddress}`} className="text-white text-base sm:text-lg underline break-all hover:text-white/60">
            {t.contact.emailAddress}
          </a>
        </p>

        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
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
      </SecaoDividida>

      <ContactForm open={formOpen} onOpenChange={setFormOpen} />
    </>
  );
};

export default ContactSection;
