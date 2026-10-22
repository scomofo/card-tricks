# Sleight School

Card magic & cardistry syllabus with animations and practice tools.

## Files
- `index.html` — structure & lesson content
- `styles.css` — layout, theme, mobile, tags
- `anims.js` — animation definitions
- `boards/*.png` — 240 step boards displayed in each trick's photo guide
- `board-guides.js` — accessible collapsible photo references and broken-image fallback
- `app.js` — player, progress, filters, practice tools
- `manifest.json` / `sw.js` — PWA offline shell

## Deploy
Upload **all** of the files above to GitHub Pages (same folder). Do not upload only `index.html`.

## Features
- 240 lessons with tags, angle notes, challenges, daily drill, export progress
- Onboarding path, cheat sheets, routine builder guidance
- Lazy-loaded animations, mobile layout, installable PWA

## Verify boards
Run `node --test tests/board-guides.test.cjs` to check all 240 image references, lookup behavior, accessible photo guides, and missing-image fallback. The service worker caches the small app shell, not the large board PNGs; photos require network access.
