import { useLanguage } from '../contexts/LanguageContext';
import { useAnalytics } from '../hooks/useAnalytics';
import { useEffect, useState } from 'react';
import ContactForm from './ContactForm';

const HeroSection = () => {
  const { t } = useLanguage();
  const { trackInteraction } = useAnalytics();
  const [formOpen, setFormOpen] = useState(false);

  useEffect(() => {
    trackInteraction('page_view', 'hero-section');
  }, []);

  const handleContactClick = () => {
    trackInteraction('click', 'contact-button');
    window.open('https://api.whatsapp.com/send/?phone=5561981594849', '_blank');
  };

  const handleFormClick = () => {
    trackInteraction('click', 'contact-form-button');
    setFormOpen(true);
  };

  return (
    <section id="info" className="min-h-[100svh] relative overflow-hidden">
      <div className="fixed inset-0 -z-20 heartbeat-gradient" />
      <div className="fixed inset-0 -z-10 grain-texture pointer-events-none" />

      <div className="relative z-30 flex min-h-[100svh] w-full">
        <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 min-h-[100svh] flex py-24 sm:py-[80px]">
          <div className="w-full h-full max-w-5xl flex flex-col justify-center gap-5 sm:gap-7">
            <p className="text-xs sm:text-sm md:text-base tracking-[0.12em] sm:tracking-[0.18em] text-white/70 uppercase font-medium">
              {t.profile.positioning}
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight max-w-4xl">
              {t.profile.headline}
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 max-w-3xl leading-relaxed font-light">
              {t.profile.tagline}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto pt-1">
              <button
                onClick={handleContactClick}
                className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base text-white hover:bg-white/20 transition-all duration-300"
              >
                {t.contact.startChat}
              </button>

              <button
                onClick={handleFormClick}
                className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base text-white hover:bg-white/20 transition-all duration-300"
              >
                {t.contact.startChat2}
              </button>
            </div>
          </div>
        </div>
      </div>

      <ContactForm open={formOpen} onOpenChange={setFormOpen} />
    </section>
  );
};

export default HeroSection;
