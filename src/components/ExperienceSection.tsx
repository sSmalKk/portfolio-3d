import { useLanguage } from '../contexts/LanguageContext';

const ExperienceSection = () => {
  const { t } = useLanguage();
  const { education } = t.experience;

  return (
    <section id="experiencia" className="scroll-mt-20 py-12 sm:py-16 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-10 tracking-tight">
          {t.experience.title}
        </h2>

        <ol className="space-y-8 sm:space-y-10 border-l border-white/15 pl-5 sm:pl-8">
          {t.experience.list.map((job) => (
            <li key={job.company} className="relative">
              <span className="absolute -left-[25px] sm:-left-[37px] top-2 h-2.5 w-2.5 rounded-full bg-white/70" />
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="text-lg sm:text-xl font-bold text-white">{job.role}</h3>
                <span className="text-sm text-white/60 shrink-0">{job.period}</span>
              </div>
              <p className="text-white/80 text-sm sm:text-base">
                {job.company} <span className="text-white/50">· {job.location}</span>
              </p>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed font-light mt-3">{job.summary}</p>

              {job.highlights.length > 0 && (
                <ul className="list-disc pl-5 mt-3 space-y-1.5 text-white/75 text-sm leading-relaxed font-light">
                  {job.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-2 mt-3">
                {job.stack.map((tech) => (
                  <span key={tech} className="bg-white/15 text-white px-2 py-0.5 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12">
          <h3 className="text-xs sm:text-sm tracking-[0.16em] text-white/60 uppercase mb-2">{education.title}</h3>
          <p className="text-white">
            {education.degree} <span className="text-white/60">· {education.school} · {education.period}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
