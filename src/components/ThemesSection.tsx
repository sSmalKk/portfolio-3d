import { useLanguage } from '../contexts/LanguageContext';
import { useAnalytics } from '../hooks/useAnalytics';

const ThemesSection = () => {
  const { t } = useLanguage();
  const { trackInteraction } = useAnalytics();

  const handleThemeClick = (themeId: string, url: string) => {
    trackInteraction('click', `theme-${themeId}`);
    window.open(url, '_blank');
  };

  return (
    <section className="min-h-[100svh] py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="relative z-10 container mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 sm:mb-12 text-center tracking-tight">
          {t.themes.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {t.themes.list.map((theme) => (
            <div
              key={theme.id}
              className="group cursor-pointer"
              onClick={() => handleThemeClick(theme.id, theme.url)}
            >
              <div className="relative aspect-video mb-4 sm:mb-6 rounded-xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div
                  className={`absolute inset-0 ${theme.gradientClass} animate-pulse-slow`}
                  style={{ animationDelay: theme.animationDelay }}
                />
                <div className="absolute inset-0 grain-texture" />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/20 backdrop-blur-md rounded-full px-3 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {t.themes.viewLive}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-white/70 transition-colors">
                  {theme.name}
                </h3>
                <p className="text-white/70 leading-relaxed font-light text-sm">
                  {theme.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {theme.technologies.map((tech) => (
                    <span key={tech} className="bg-white/20 text-white px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThemesSection;
