import { useLanguage } from '../contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="perfil" className="py-16 sm:py-20 px-4 sm:px-6 relative">
      <div className="container mx-auto max-w-4xl">
        <p className="text-xs sm:text-sm tracking-[0.16em] text-white/60 uppercase mb-3">
          {t.profile.role}
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-10 tracking-tight">
          {t.profile.aboutTitle}
        </h2>

        <div className="space-y-5 sm:space-y-6">
          {t.profile.about.map((paragraph) => (
            <p
              key={paragraph.slice(0, 48)}
              className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed font-light"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
