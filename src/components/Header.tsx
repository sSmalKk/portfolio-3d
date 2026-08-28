import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const { t, language, setLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const getCurriculoUrl = () => {
    return language === 'pt' ? '/curriculo_pt.pdf' : '/curriculo_en.pdf';
  };

  const closeMenu = () => setMenuOpen(false);

  const navLinkClass =
    'block text-white hover:text-white/60 transition-colors py-2 md:py-0';

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-black/40 backdrop-blur-md border-b border-white/20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-3">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white truncate min-w-0">
            {t.profile.name}
          </h1>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
              aria-label={`Switch to ${language === 'en' ? 'Portuguese' : 'English'}`}
              className="bg-white/10 border border-white/20 rounded-full px-3 py-1.5 text-white text-xs sm:text-sm hover:bg-white/20 transition-all"
            >
              {language === 'en' ? 'PT' : 'EN'}
            </button>

            <button
              type="button"
              className="md:hidden bg-white/10 border border-white/20 rounded-full p-2 text-white hover:bg-white/20 transition-all"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            <nav className="hidden md:flex items-center gap-5 lg:gap-6">
              <a
                href="https://github.com/sSmalKk"
                target="_blank"
                rel="noopener noreferrer"
                className={navLinkClass}
              >
                {t.profile.github}
              </a>
              <a
                href="https://www.linkedin.com/in/gustavodantasdev/"
                target="_blank"
                rel="noopener noreferrer"
                className={navLinkClass}
              >
                {t.profile.linkedin}
              </a>
              <a href={getCurriculoUrl()} download className={navLinkClass}>
                {t.profile.cv}
              </a>
            </nav>
          </div>
        </div>

        {menuOpen && (
          <nav className="md:hidden mt-3 pt-3 border-t border-white/15 flex flex-col gap-1">
            <a
              href="https://github.com/sSmalKk"
              target="_blank"
              rel="noopener noreferrer"
              className={navLinkClass}
              onClick={closeMenu}
            >
              {t.profile.github}
            </a>
            <a
              href="https://www.linkedin.com/in/gustavodantasdev/"
              target="_blank"
              rel="noopener noreferrer"
              className={navLinkClass}
              onClick={closeMenu}
            >
              {t.profile.linkedin}
            </a>
            <a href={getCurriculoUrl()} download className={navLinkClass} onClick={closeMenu}>
              {t.profile.cv}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
