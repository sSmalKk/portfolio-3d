import { useLanguage } from '../contexts/LanguageContext';
import SecaoDividida from './SecaoDividida';

const StackSection = () => {
  const { t } = useLanguage();

  return (
    <SecaoDividida id="stack" titulo={t.stack.title} lado="direita">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {t.stack.groups.map((group) => (
          <div key={group.label}>
            <p className="text-xs sm:text-sm tracking-[0.16em] text-white/60 uppercase mb-3">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="bg-white/10 border border-white/15 text-white px-3 py-1 rounded-full text-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SecaoDividida>
  );
};

export default StackSection;
