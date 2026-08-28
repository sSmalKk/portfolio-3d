import { useLanguage } from '../contexts/LanguageContext';
import { useAnalytics } from '../hooks/useAnalytics';
import { useGitHubProjects } from '../hooks/useGitHubProjects';

const ProjectsSection = () => {
  const { t } = useLanguage();
  const { trackInteraction } = useAnalytics();
  const { projetos, carregando } = useGitHubProjects();

  const handleProjectClick = (projectId: string, url?: string) => {
    trackInteraction('click', `project-${projectId}`);
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <section className="min-h-[100svh] py-16 sm:py-20 px-4 sm:px-6 z-20">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 text-center">
          {t.projects.title}
        </h2>

        <p className="text-white/60 text-sm text-center mb-8 sm:mb-12">
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
