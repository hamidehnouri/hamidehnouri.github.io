# Hamideh’s pixel portfolio

A small React + Vite project based on the approved pixel portfolio design. Plain JavaScript and CSS, with no UI framework or backend.

## Run locally

Use Node.js 22.12 or newer (Node 24 LTS is also supported).

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. To check the production version:

```sh
npm run build
npm run preview
```

## Edit the site

- `src/data.js`: profile, projects, work history, social links, and GitHub contribution snapshot.
- `src/App.jsx`: page structure, navigation, projects, story, and contact section.
- `src/components/Avatar.jsx`: clickable character in “Say hello.”
- `src/components/PixelLogo.jsx`: Atari-style pixel interpretations of the LinkedIn and GitHub logos.
- `src/components/GitHubActivity.jsx`: contribution calendar and daily counts.
- `src/styles.css`: colors, pixel typography, and responsive layout.
- `src/assets/`: the local character image and Press Start 2P font.

The font and character load locally. The site needs no API key and has no email link. LinkedIn may ask visitors to log in.

## GitHub activity

The calendar uses the verified 28 September 2026 snapshot: 241 contributions across 14 active days. It does **not** update automatically. Edit `githubActivity` in `src/data.js` to supply a newer snapshot; its start date should be a Sunday. Counts and date labels are calculated from that data.

## Build for GitHub Pages

`npm run build` produces the static site in `dist/`. The Vite `base: './'` setting supports both a `hamidehnouri.github.io` repository and a project repository subpath. Publish the **contents of `dist/`** using GitHub Pages; the React source itself needs to be built first. No routing rewrite is needed because section navigation is local React state.

This project has not been published or pushed to GitHub.

## Font credit

Press Start 2P by CodeMan38, licensed under the SIL Open Font License 1.1. The complete license is included at `src/assets/OFL.txt`. The WOFF file is a lossless compression of the original font.
