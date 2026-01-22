# Classical Garden (11ty)

A static Eleventy (11ty) blog tailored for GitHub Pages with classical book typography.

## Quick start

```bash
npm install
npm run dev
```

Then open the local URL Eleventy prints (usually `http://localhost:8080`).

## Build for production

```bash
npm run build
```

Output is written to `_site/`.

## GitHub Pages

The workflow in `.github/workflows/pages.yml` builds and deploys on push to `main`.
If your Pages URL uses a repository subpath, the workflow sets `ELEVENTY_PATH_PREFIX` automatically.

## Structure

- `src/` content and templates
- `src/_includes/layouts/` layouts
- `src/assets/` CSS + ornaments
- `src/essays/`, `src/notes/`, `src/projects/` content collections
- `src/plots/` per-plot archives + RSS
- `src/tags/` tags index + tag archives
