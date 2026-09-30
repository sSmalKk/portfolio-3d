import { useLanguage } from '../contexts/LanguageContext';

const StackSection = () => {
  const { t } = useLanguage();

  return (
    <section id="stack" className="scroll-mt-20 py-12 sm:py-16 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight">
          {t.stack.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
      </div>
    </section>
  );
};

export default StackSection;
