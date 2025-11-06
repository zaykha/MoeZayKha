# Moe Zay Kha – React 3D Portfolio (Vite)

This is a refactor of the original single-file 3D portfolio into a production-ready React app (Vite + React, styled-components, @react-three/fiber + drei).

## Stack

- Build: Vite + React (JS)
- 3D: @react-three/fiber, @react-three/drei
- Styling: styled-components (GlobalStyle + theme)
- Animations: AOS (scroll reveal), Swiper (vertical slider)
- Lint/Format: ESLint (React + a11y) + Prettier

## Scripts

- `npm run dev` – local dev
- `npm run build` – production build
- `npm run preview` – preview build
- `npm run lint` – lint
- `npm run format` – format with Prettier

## Structure

```
src/
  assets/              # images, models, textures (optional; large models in public/)
  components/
    layout/            # Header, Footer, Nav, Section
    sections/          # Hero, About, Experience, Projects, Contact
    three/             # Canvas3D, Scene (Model, Lights)
    ui/                # Button, etc.
  hooks/               # useAOS, useMediaQuery
  styles/              # GlobalStyle.js, theme.js
  App.jsx
  main.jsx
public/
  MZKwebsite.glb, images, icons, etc.
```

## Features

- Visual parity and smoother performance with code-splitting and Suspense fallbacks.
- R3F replaces manual Three.js renderer/camera loop.
- `useGLTF` and `useAnimations` preload and play GLTF animations.
- AOS initialized once via a custom hook.
- Accessibility: semantic landmarks, focus-visible, aria labels.
- SEO: base metadata + OG/Twitter tags in `index.html`.

## Migration Notes

- The previous `index.html` and `main.js` were superseded by React. The original static HTML is still available under `dist/index.html` (built output) and source content can be ported into section components as needed.
- Three.js imperative logic (camera tween + DOM event listeners) is replaced by declarative React + `OrbitControls` with initial positions/targets matching original viewpoints. Additional camera transitions can be added by lerping camera position/target on state changes.
- EmailJS integration is loaded lazily in `Contact.jsx` to avoid blocking.
- Models remain in `public/` for caching and to avoid bundling bloat. Use `/MZKwebsite.glb` path.

## Deployment

1. `npm run build`
2. Deploy the `dist/` folder to any static host (Netlify, Vercel, GitHub Pages, etc.).

## Deviations

- Some extremely detailed text blocks from the original HTML were condensed into cards to fit a maintainable component structure. They can be expanded as separate components without changing architecture.
- Swiper is implemented via `swiper/react` with a vertical loop to match the prior UX. Any font-awesome or Google Charts usages from the legacy app were not carried over by default; they can be added if required.

