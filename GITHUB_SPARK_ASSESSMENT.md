# Architecture notes (static site)

This repository is a **static recipe website** for GitHub Pages. It is not an Express, Docker, or Azure app.

## Current architecture

- **Source of truth:** `data/recipes.json`
- **Generator:** `generate-static-site.js` (`npm run build:static`)
- **Validation:** `validate-recipes.js` (`npm test`)
- **Deploy:** `.github/workflows/github-pages.yml` builds `docs/` in CI and publishes to GitHub Pages
- **Living docs:** `README.md` and `GITHUB_PAGES_SETUP.md`

## What changed

An earlier iteration of this project was a dynamic Node/Express app with Docker and Azure Container Instances. That stack is gone. Treat any historical references to Express, EJS, OAuth, Docker, or Azure as obsolete.

## Live site

https://garry-hughes.github.io/my-recipes/
