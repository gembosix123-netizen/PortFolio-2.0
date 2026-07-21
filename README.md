# Allan Andan — Multidisciplinary Portfolio

A multipage portfolio for Allan Andan: founder of Netsa Digital Solutions, developer, system builder, and graphic designer based in Kota Kinabalu, Sabah, Malaysia.

## Pages

- `/` — portfolio index
- `/development` — websites, systems, and AI work
- `/development/:slug` — individual project case studies
- `/design` — jersey, identity, and motion design
- `/company` — Netsa Digital Solutions
- `/about` — story, toolkit, and experience
- `/contact` — WhatsApp, email, and GitHub

## Add a development project

1. Add its screenshot to `public/projects/`.
2. Open `src/data/portfolio.js`.
3. Add a new object to `developmentProjects` with a unique `slug`.
4. The archive and case-study route will be created automatically.

```js
{
  slug: 'project-name',
  number: '05',
  title: 'Project Name',
  type: 'Website or system',
  year: '2026',
  image: 'projects/project-name.png',
  href: 'https://project.example.com',
  color: '#d5f5ff',
  summary: 'What the project is.',
  challenge: 'The problem it needed to solve.',
  response: 'How the project responds to that problem.',
  highlights: ['Highlight one', 'Highlight two'],
}
```

Graphic-design collections and the toolkit are managed in `designCollections` and `toolGroups` in the same file.

## Development

```bash
npm install
npm run dev
npm run lint
npm run build
```

The project uses React, Vite, React Router, Anime.js, Framer Motion, React Spline, the Spline runtime, and Lucide icons. Anime.js powers the hero typography entrance. The interactive custom 3D artwork is used as a safe fallback until a personal Spline scene is configured.

## Add a Spline scene

1. Open the scene in Spline and select **Export → Code → React**.
2. Copy the exported `scene.splinecode` URL.
3. Copy `.env.example` to `.env` and set `VITE_SPLINE_SCENE_URL`.
4. Add the same environment variable in Vercel for production.

Vercel routing is configured in `vercel.json` so every page works when opened directly.
