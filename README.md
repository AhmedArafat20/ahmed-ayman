# Adding images

## Projects (94) — automatic
1. Install Node.js (https://nodejs.org), open a terminal inside this folder.
2. `npm install`         (once, downloads a headless browser)
3. `npm run shots`       (captures every live site into img/projects/ with the right name)
   - Re-run for failed ones: `npm run shots -- alafdal curax`
   - Redo everything:       `npm run shots -- --force`

## Projects — manual
Put your own screenshot in `img/projects/` named exactly as in `img/projects/NAMES.txt`
(project name in lowercase; .jpg / .png / .webp all work). Manual files are never overwritten.

## Only projects with images are shown
After adding/removing project images run `npm run manifest` (or double-click `update-images.bat`).
`npm run shots` does it automatically.

## Certificates (17)
Put them in `img/certs/` named 1.jpeg ... 17.jpeg (same order as the CERTS list in js/data.js).

## Your photo
`img/profile.jpg`
