# Import HTML posts into 11ty notes

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan is maintained according to `.agent/PLANS.md` from the repository root.

## Purpose / Big Picture

Convert the exported HTML posts in `/Users/matthewmoore/Downloads/a4b4450a5587ea7c481c4eae9910352ef8c713b896e8410c1c7376340e251851/posts/html` into Eleventy markdown notes under `src/notes/`, with clean front matter, a summarizing subtitle, and tags chosen from the allowed set (home automation, software engineering, product management, startups). Any local media from `/Users/matthewmoore/Downloads/a4b4450a5587ea7c481c4eae9910352ef8c713b896e8410c1c7376340e251851/media` should be moved into `src/assets/images/notes/<slug>/` and referenced in the markdown. After the change, `npm run build` should succeed and the notes should render in the notes list.

## Progress

- [x] (2026-01-24 20:12Z) Prepare a one-off import script (outside the repo) that parses HTML, generates front matter, converts body HTML to markdown via pandoc, rewrites local media paths, and writes notes into `src/notes/` with collision-safe slugs.
- [x] (2026-01-24 20:33Z) Run the import, copy media into `src/assets/images/notes/<slug>/` (leave originals intact per user), and ensure slugs are length-safe.
- [x] (2026-01-24 20:38Z) Spot check several notes for formatting, images, dates, subtitles, tag correctness, and iframe rendering; adjust script and re-run as needed.
- [x] (2026-01-24 20:41Z) Build the site to validate output and note any issues.
- [x] (2026-01-24 20:43Z) Record outcomes and close the plan.

## Surprises & Discoveries

- Pandoc converted iframes into placeholder content; replaced with explicit iframe passthrough to keep embeds intact.
  Evidence: `src/notes/video-what-makes-something-go-viral-dao-nguyen.md`.
- Extremely long titles created filenames exceeding OS limits; slugs now clamp to 80 chars.
  Evidence: file name too long error during initial import.

## Decision Log

- Decision: Use pandoc for HTML-to-Markdown conversion instead of a custom parser.
  Rationale: Pandoc is available in the environment and produces consistent markdown with minimal effort, reducing risk for hundreds of files.
  Date/Author: 2026-01-24 / Codex
- Decision: Replace iframe blocks after pandoc conversion and remove HTML div wrappers before conversion.
  Rationale: Preserve embedded videos while keeping markdown output clean and Eleventy-friendly.
  Date/Author: 2026-01-24 / Codex
- Decision: Remove the keyword \"nest\" from home-automation tagging.
  Rationale: Prevent false positives where \"nest\" appears in normal prose.
  Date/Author: 2026-01-24 / Codex

## Outcomes & Retrospective

- Imported 265 HTML posts into `src/notes/` with subtitles, tags, and cleaned markdown; 29 local media files copied into `src/assets/images/notes/`.
- Build succeeded with `npm run build`, indicating Eleventy can render the new notes.

Plan update note (2026-01-24): Updated progress, decisions, discoveries, and outcomes after completing import and validation.

## Context and Orientation

This repository is an Eleventy (11ty) static site. Notes live in `src/notes/` as markdown files with YAML front matter and are listed via the notes collection. Existing note examples include `src/notes/how-i-like-to-hire-engineers.md`, which uses front matter fields `layout`, `title`, `date`, `type`, `subtitle`, and `tags`, and references local images under `/assets/images/notes/<slug>/...`. Site assets live in `src/assets/`, and images for notes are stored under `src/assets/images/notes/` with one folder per note slug.

The HTML export to import lives outside the repo in `/Users/matthewmoore/Downloads/a4b4450a5587ea7c481c4eae9910352ef8c713b896e8410c1c7376340e251851/posts/html`. Some HTML posts contain local media references like `../../media/<filename>`; those files exist in `/Users/matthewmoore/Downloads/a4b4450a5587ea7c481c4eae9910352ef8c713b896e8410c1c7376340e251851/media`. Other posts reference external image URLs or embedded iframes (e.g., YouTube); these should remain as external references.

## Plan of Work

Create a one-off Python script in `/tmp` that reads each HTML file, extracts the title (prefer `<h1>`; otherwise derive from image caption or iframe title), extracts the date from the footer timestamp or embedded date string, and removes the header/footer markup. For each post, rewrite any `../../media/<filename>` references to `/assets/images/notes/<slug>/<filename>` and collect the media filenames. Use pandoc to convert the sanitized HTML body to markdown. Generate front matter with `layout: layouts/post.njk`, `type: note`, a generated `subtitle` (short summary from the first meaningful sentence or caption), and `tags` from the allowed list based on keyword matching; default to `startups` if no matches. Write the markdown to `src/notes/<slug>.md`, making the slug collision-safe by appending `-<postid>` when necessary. Copy media files into `src/assets/images/notes/<slug>/` and remove the used files from the source media folder after the import completes. Spot check output and re-run if fixes are needed.

## Concrete Steps

Run the import from the repo root (`/Users/matthewmoore/Projects/matthewpaulmoore.com`). Create the script in `/tmp`, execute it, then review a small sample of notes and images.

Expected steps (transcripts abbreviated):

    python3 /tmp/import_html_notes.py
    # outputs: processed N files, wrote N notes, moved M media files

If spot checks reveal issues, edit the script and re-run after deleting the generated notes for a clean retry.

## Validation and Acceptance

- Run `npm run build` from the repo root and expect Eleventy to build without errors.
- Open a few notes in `src/notes/` and confirm:
  - Front matter has valid `title`, `date` (YYYY-MM-DD), `subtitle`, and `tags` values.
  - Markdown body renders without stray HTML headers/footers.
  - Local images resolve to `/assets/images/notes/<slug>/...` and exist on disk.
- Confirm the media folder in Downloads no longer contains files that were imported.

## Idempotence and Recovery

The import is not idempotent if re-run without cleanup because it will attempt to recreate notes that already exist and may move media files that were already moved. For a retry, delete the generated markdown files in `src/notes/` that were created by the import and restore the media files to the source folder (or re-download the export). The script will skip overwriting existing note files unless instructed to do so.

## Artifacts and Notes

Keep a short sample of generated front matter and a sample conversion in mind when spot-checking. Example format (not verbatim):

    ---
    layout: layouts/post.njk
    title: Example Title
    date: 2009-04-01
    type: note
    subtitle: "Short summary of the post."
    tags:
      - startups
    ---

## Interfaces and Dependencies

Use pandoc (already available in the environment) for HTML-to-Markdown conversion. Use Python 3 standard library for parsing and file operations. No repository code changes are required beyond adding markdown files under `src/notes/` and images under `src/assets/images/notes/`.
