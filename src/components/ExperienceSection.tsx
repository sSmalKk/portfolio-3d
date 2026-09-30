import { useLanguage } from '../contexts/LanguageContext';
import type { Translation } from '../types/translations';

type Job = Translation['experience']['list'][number];

const Ponto = ({ className = '' }: { className?: string }) => (
  <span
    className={`absolute top-6 h-[15px] w-[15px] rounded-full border-2 border-[#3178C6] bg-neutral-900 ${className}`}
    aria-hidden="true"
  />
);

const CartaoJob = ({ job }: { job: Job }) => (
  <article className="min-w-0 bg-white/[0.06] backdrop-blur-md border border-white/15 rounded-xl p-5 sm:p-6">
    <span className="text-xs tracking-[0.14em] uppercase text-white/60">{job.period}</span>
    <h3 className="mt-1 text-lg sm:text-xl font-bold text-white">{job.role}</h3>
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
  </article>
);

/**
 * Linha do tempo no meio da página. No desktop são duas colunas, a da direita
 * descida, e as experiências alternam de lado sem deixar buraco. No celular a
 * linha vai para a esquerda e tudo empilha em ordem.
 */
const ExperienceSection = () => {
  const { t } = useLanguage();
  const { education, list } = t.experience;
  const esquerda = list.filter((_, i) => i % 2 === 0);
  const direita = list.filter((_, i) => i % 2 === 1);

  return (
    <section id="experiencia" className="scroll-mt-20 py-14 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            {t.experience.title}
          </h2>
          <span className="mt-4 mx-auto block h-[3px] w-12 rounded-full bg-[#3178C6]" aria-hidden="true" />
        </div>

        {/* Celular e tablet: uma coluna, linha à esquerda. */}
        <ol className="relative lg:hidden">
          <span className="absolute top-0 bottom-0 left-[7px] w-px bg-white/15" aria-hidden="true" />
          {list.map((job) => (
            <li key={job.company} className="relative pl-8 mb-8 last:mb-0">
              <Ponto className="left-0" />
              <CartaoJob job={job} />
            </li>
          ))}
        </ol>

        {/* Desktop: linha no meio, cartões intercalados. */}
        <div className="relative hidden lg:grid grid-cols-2 gap-x-16">
          <span className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-white/15" aria-hidden="true" />
          <ol className="space-y-10">
            {esquerda.map((job) => (
              <li key={job.company} className="relative">
                <Ponto className="-right-[calc(2rem+7px)]" />
                <CartaoJob job={job} />
              </li>
            ))}
          </ol>
          <ol className="space-y-10 pt-40">
            {direita.map((job) => (
              <li key={job.company} className="relative">
                <Ponto className="-left-[calc(2rem+8px)]" />
                <CartaoJob job={job} />
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12 sm:mt-16 max-w-3xl mx-auto text-center">
          <h3 className="text-xs sm:text-sm tracking-[0.16em] text-white/60 uppercase mb-3">{education.title}</h3>
          {education.list.map((e) => (
            <p key={e.degree} className="text-white">
              {e.degree} <span className="text-white/60">· {e.school} · {e.period}</span>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
