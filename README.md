# Portfolio — Gustavo Dantas

Personal portfolio of a Full Stack Developer, live at **[dantastec.netlify.app](https://dantastec.netlify.app)**.
Bilingual (Portuguese / English), single page, deployed on Netlify.

## What's in it

- **About, stack and experience** — static content in `src/translations/{pt,en}.ts`, typed by `src/types/translations.ts`.
- **Projects** — a short, hand-picked list. The selection lives in `src/hooks/useGitHubProjects.ts` (`VITRINE`); the text of each card comes from the repository itself through the GitHub API, so descriptions are never written twice.
- **Contact** — a Netlify Forms form plus email, LinkedIn and WhatsApp links.
- **Résumé** — `public/curriculo_pt.pdf` and `public/curriculo_en.pdf`.

## Technical notes

- **GitHub API without a token.** The anonymous API allows 60 requests per hour per IP, so the response is cached in `localStorage` for 6 hours. If the API fails or the limit is reached, the page falls back to the snapshot in `src/data/projects-fallback.json`, so the section is never empty.
- **One source per text.** Portuguese descriptions come from the repository `description` field on GitHub; English ones from `src/data/descriptions-en.json`, keyed by repository name. A repository without a translation shows the Portuguese text instead of an empty card.
- **Analytics** — page views and clicks are stored in Supabase (`src/hooks/useAnalytics.ts`). The key in `src/integrations/supabase/client.ts` is the public *anon* key; access is governed by row level security.

## Stack

React 18 · TypeScript · Vite · Tailwind CSS · shadcn/ui · Supabase · Netlify

## Running locally

```sh
npm install
npm run dev      # http://localhost:8080
npm run build    # production build in dist/
```

No environment variables are needed.
