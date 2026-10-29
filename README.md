# Noopur Trivedi · ePortfolio

Executive profile site for Noopur Trivedi: Senior Business Analyst, Enterprise Transformation, AI Product Strategist. Live at [noopurtrivedi.com](https://noopurtrivedi.com).

## Structure

| Route | Page |
|---|---|
| `/` | Profile (landing): hero, professional record, principles, experience timeline |
| `/work` | Enterprise Work: program highlights and organizations |
| `/ai` | AI Projects: the product portfolio, presented at capability level |
| `/founder` | Founder Journey |
| `/who-i-am` | Who I Am: personal timeline and pursuits |
| `/life/*` | Photography, Art, Animal Advocacy, Adventures |
| `/certifications` | Credentials with verification links |
| `/contact` | Contact form and direct channels |

Site content (products, programs, experience) lives in `src/data/projects.ts`. Every page is paginated by `src/components/PageNav.tsx`, whose `pageOrder` array defines the reading order.

## Stack

React 18 + Vite + TypeScript, Tailwind CSS, Framer Motion, Lucide icons, React Router. Deployed on Vercel (`vercel.json` rewrites all routes to `index.html`).

## Develop

```bash
npm install
npm run dev       # local dev server
npm run build     # type-check + production build to dist/
npm run preview   # serve the production build
```

## Content rules

- Facts mirror the resume. Do not add metrics, employers, or dates that are not in the source material.
- AI products are pre-launch: one-liners and approved highlights only, no architectures or evaluation methodology.
- The phone number is intentionally not published anywhere on the site.
