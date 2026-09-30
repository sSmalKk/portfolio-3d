import { useLanguage } from '../contexts/LanguageContext';
import { useAnalytics } from '../hooks/useAnalytics';
import { useGitHubProjects } from '../hooks/useGitHubProjects';

const ProjectsSection = () => {
  const { t } = useLanguage();
  const { trackInteraction } = useAnalytics();
  const { projetos, carregando } = useGitHubProjects();
  const destaque = t.projects.featured;

  const handleProjectClick = (projectId: string, url?: string) => {
    trackInteraction('click', `project-${projectId}`);
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="projetos" className="scroll-mt-20 py-16 sm:py-20 px-4 sm:px-6 z-20">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-10 text-center">
          {t.projects.title}
        </h2>

        <article
          className="max-w-4xl mx-auto mb-10 sm:mb-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 sm:p-8"
          style={{ borderTopColor: '#3178C6', borderTopWidth: 3 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-3">
            <h3 className="text-xl sm:text-2xl font-bold text-white">{destaque.name}</h3>
            <span className="text-xs tracking-[0.14em] uppercase text-white/60">{destaque.label}</span>
          </div>
          <p className="text-white/85 leading-relaxed mb-4">{destaque.description}</p>
          <ul className="list-disc pl-5 space-y-1 text-white/75 text-sm mb-4">
            {destaque.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mb-5">
            {destaque.stack.map((tech) => (
              <span key={tech} className="bg-white/20 text-white px-2 py-1 rounded text-xs">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            <a
              href={destaque.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline hover:text-white/60"
              onClick={() => trackInteraction('click', 'project-publiva')}
            >
              {destaque.urlLabel} →
            </a>
            <span className="text-white/50">{destaque.note}</span>
          </div>
        </article>

        <p className="text-white/60 text-sm text-center mb-8">
          {t.projects.source}{' '}
          <a
            href="https://github.com/sSmalKk"
            target="_blank"
            rel="noreferrer noopener"
            className="underline hover:text-white transition-colors"
            onClick={() => trackInteraction('click', 'github-profile')}
          >
            github.com/sSmalKk
          </a>
          {carregando && <span className="ml-2 opacity-60">…</span>}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projetos.map((project) => (
            <div
              key={project.id}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 sm:p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer"
              onClick={() => handleProjectClick(project.id, project.codeUrl)}
              style={{ borderTopColor: project.color, borderTopWidth: 3 }}
            >
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{project.name}</h3>
              <p className="text-white/80 mb-4 text-sm leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-white/20 text-white px-2 py-1 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center gap-2">
                <span className="text-sm text-white/60">{project.category}</span>
                {project.codeUrl && (
                  <span className="text-sm text-white hover:text-white/60 shrink-0">
                    {t.projects.viewCode} →
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
