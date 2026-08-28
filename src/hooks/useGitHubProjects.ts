import { useEffect, useMemo, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import fallback from '../data/projects-fallback.json';
import descricoesEn from '../data/descriptions-en.json';

/**
 * Projetos vêm da API do GitHub, não de uma lista escrita à mão.
 *
 * Cada texto existe uma vez só:
 *   - português  → campo `description` do próprio repositório
 *   - inglês     → `data/descriptions-en.json`, chaveado pelo nome do repo
 *   - tecnologias → `topics` do repositório
 *
 * Repositório novo aparece aqui sozinho; repositório que vira privado some
 * sozinho. Link morto deixa de ser possível, porque a lista é a realidade da
 * conta. Repo ainda sem tradução cai no texto em português — esquecer de
 * traduzir degrada, não quebra.
 *
 * A API anônima do GitHub permite 60 requisições por hora por IP, então o
 * resultado fica em cache no navegador. Se a API falhar ou o limite estourar,
 * cai no snapshot em `data/projects-fallback.json` e a seção nunca fica vazia.
 */

const USUARIO = 'sSmalKk';
const CHAVE_CACHE = 'github-repos-v2';
const VALIDADE_MS = 6 * 60 * 60 * 1000; // 6 horas

export interface Projeto {
  id: string;
  name: string;
  description: string;
  category: string;
  technologies: string[];
  color: string;
  codeUrl?: string;
}

/** Forma crua vinda da API, guardada no cache sem tradução aplicada. */
interface RepoGitHub {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  topics?: string[];
  fork: boolean;
  archived: boolean;
  pushed_at: string;
}

const CORES: Record<string, string> = {
  TypeScript: '#3178C6',
  JavaScript: '#F7DF1E',
  Python: '#3776AB',
  Java: '#ED8B00',
  HTML: '#E34F26',
  CSS: '#1572B6',
  Shell: '#89E051',
};
const COR_PADRAO = '#8B5CF6';

/** Nomes próprios que a capitalização automática erraria. */
const NOMES: Record<string, string> = {
  'exceljs-styling': 'ExcelJS Styling',
  'whatsapp-stock-bot': 'WhatsApp Stock Bot',
  'todo-mvc-mongodb': 'Todo MVC MongoDB',
  'javascript-freecodecamp': 'JavaScript freeCodeCamp',
  'jarvis-ai-system': 'Jarvis AI System',
  'portfolio-3d': 'Portfolio 3D',
  'invoice-pdf-to-excel': 'Invoice PDF to Excel',
  'minecraft-handcuff-mod': 'Minecraft Handcuff Mod',
};
const SIGLAS = new Set(['pdf', 'api', 'ui', 'uno', '3d', 'mvc', 'ai']);

function titulo(slug: string): string {
  if (NOMES[slug]) return NOMES[slug];
  return slug
    .split('-')
    .map((p) => (SIGLAS.has(p.toLowerCase()) ? p.toUpperCase() : p.charAt(0).toUpperCase() + p.slice(1)))
    .join(' ');
}

const CATEGORIAS: Record<'pt' | 'en', Record<string, string>> = {
  pt: {
    specification: 'Especificação',
    game: 'Jogo',
    automation: 'Automação',
    portfolio: 'Web',
    backend: 'Backend',
    mod: 'Mod',
    outro: 'Projeto',
  },
  en: {
    specification: 'Specification',
    game: 'Game',
    automation: 'Automation',
    portfolio: 'Web',
    backend: 'Backend',
    mod: 'Mod',
    outro: 'Project',
  },
};

function categoria(repo: RepoGitHub, lang: 'pt' | 'en'): string {
  const t = repo.topics ?? [];
  const dic = CATEGORIAS[lang];
  if (t.includes('specification')) return dic.specification;
  if (t.includes('game')) return dic.game;
  if (t.includes('automation')) return dic.automation;
  if (t.includes('portfolio')) return dic.portfolio;
  if (t.includes('rest-api') || t.includes('mvc')) return dic.backend;
  if (t.includes('mod')) return dic.mod;
  return repo.language ?? dic.outro;
}

function paraProjeto(repo: RepoGitHub, lang: 'pt' | 'en'): Projeto {
  const en = (descricoesEn as Record<string, string>)[repo.name];
  const topics = (repo.topics ?? []).filter((t) => t !== 'specification' && t !== 'wip');
  return {
    id: repo.name,
    name: titulo(repo.name),
    // Sem tradução, mostra o português — melhor que um card vazio.
    description: (lang === 'en' ? en : null) ?? repo.description ?? '',
    category: categoria(repo, lang),
    technologies: topics.length > 0 ? topics.slice(0, 6) : repo.language ? [repo.language] : [],
    color: CORES[repo.language ?? ''] ?? COR_PADRAO,
    codeUrl: repo.html_url,
  };
}

/**
 * O portfólio mostra só o que está pronto.
 *
 * `wip` é trabalho em andamento e `specification` é plano sem código — os dois
 * ficam de fora daqui. Quem quiser o quadro completo, inclusive o inacabado,
 * encontra em github.com/sSmalKk, onde cada projeto aparece com seu estado.
 * Vitrine e inventário são coisas diferentes.
 */
function pronto(repo: RepoGitHub): boolean {
  const t = repo.topics ?? [];
  return !t.includes('wip') && !t.includes('specification');
}

/** Mais recente primeiro. */
function ordenar(repos: RepoGitHub[]): RepoGitHub[] {
  return [...repos].sort((a, b) => b.pushed_at.localeCompare(a.pushed_at));
}

function lerCache(): RepoGitHub[] | null {
  try {
    const bruto = localStorage.getItem(CHAVE_CACHE);
    if (!bruto) return null;
    const { quando, dados } = JSON.parse(bruto);
    if (Date.now() - quando > VALIDADE_MS) return null;
    return dados as RepoGitHub[];
  } catch {
    return null;
  }
}

function gravarCache(dados: RepoGitHub[]): void {
  try {
    localStorage.setItem(CHAVE_CACHE, JSON.stringify({ quando: Date.now(), dados }));
  } catch {
    // Navegador com storage bloqueado: seguir sem cache é aceitável.
  }
}

export function useGitHubProjects() {
  const { language } = useLanguage();
  const [repos, setRepos] = useState<RepoGitHub[] | null>(() => lerCache());
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    if (lerCache()) return; // cache válido, não gasta requisição

    let cancelado = false;
    setCarregando(true);

    fetch(`https://api.github.com/users/${USUARIO}/repos?per_page=100&sort=updated`)
      .then((r) => {
        if (!r.ok) throw new Error(`GitHub respondeu ${r.status}`);
        return r.json();
      })
      .then((todos: RepoGitHub[]) => {
        if (cancelado) return;
        const uteis = todos.filter(
          (r) => !r.fork && !r.archived && r.name !== USUARIO && r.description,
        );
        if (uteis.length === 0) return;
        // Guarda a forma crua: a tradução é aplicada na renderização, então
        // trocar de idioma não precisa de nova requisição.
        const enxuto = uteis.map(({ name, description, html_url, language, topics, fork, archived, pushed_at }) => ({
          name, description, html_url, language, topics, fork, archived, pushed_at,
        }));
        setRepos(enxuto);
        gravarCache(enxuto);
      })
      .catch(() => {
        // Fica sem repos; o memo abaixo cai no fallback.
      })
      .finally(() => {
        if (!cancelado) setCarregando(false);
      });

    return () => {
      cancelado = true;
    };
  }, []);

  const projetos = useMemo<Projeto[]>(() => {
    // O fallback é guardado na forma crua, então respeita idioma e filtro
    // igual ao que vem da API — o cache não carrega decisão de exibição.
    const base = repos ?? (fallback as RepoGitHub[]);
    return ordenar(base.filter(pronto)).map((r) => paraProjeto(r, language));
  }, [repos, language]);

  return { projetos, carregando };
}
