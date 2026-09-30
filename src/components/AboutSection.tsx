import { useLanguage } from '../contexts/LanguageContext';
import SecaoDividida from './SecaoDividida';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <SecaoDividida id="perfil" chamada={t.profile.role} titulo={t.profile.aboutTitle} lado="esquerda">
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
    </SecaoDividida>
  );
};

export default AboutSection;
