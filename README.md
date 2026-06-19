# Test-Codex Personal Website

A Vite + React personal webpage, CV, and portfolio scaffold built for GitHub Pages.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Build the production site:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Editing Content

Most portfolio content lives in `src/data/profile.js`. Update that file to change:

- name, headline, location, and intro copy
- social and contact links
- experience, projects, skills, and education
- CV download behavior

The CV button is currently configured as a placeholder. Add a real PDF at `public/cv.pdf` and set `profile.cv.available` to `true` when it is ready.

## Deployment

The site is configured for GitHub Pages at:

```text
https://alessandronocentini.github.io/Test-Codex/
```

The Vite base path is set in `vite.config.js` as `/Test-Codex/`. A GitHub Actions workflow is included in `.github/workflows/deploy.yml` to build and publish the site from the `main` branch.
