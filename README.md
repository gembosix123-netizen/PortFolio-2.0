# Allan Andan — Portfolio

A responsive, motion-led portfolio for Allan Andan, built with React, Vite, and Framer Motion.

## Add another project

Project content is kept separate from the page layout so it can be updated without editing the main React component.

1. Add the project image or video to `public/`.
2. Open `src/data/portfolio.js`.
3. Copy an existing item in the `projects` array and update its text, tags, link, accent colour, and media.
4. Keep each `id` unique and increase the displayed `number`.

Supported media formats:

```js
// One image
media: { type: 'image', src: 'project.jpg', alt: 'Project preview' }

// One looping video
media: { type: 'video', src: 'project.mp4', alt: 'Project preview' }

// A four-image gallery
media: {
  type: 'gallery',
  items: [
    { src: 'project-1.jpg', alt: 'First project view' },
    { src: 'project-2.jpg', alt: 'Second project view' },
  ],
}
```

Frameworks and software shown on the site are managed in the `techStack` array in the same file.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

The production output is written to `dist/`. Vite uses a relative base path, so the build can be deployed at a domain root or a nested path such as GitHub Pages (`/PortFolio-2.0/`).

## Deployment

- **GitHub Pages:** configure a workflow to build with `npm ci && npm run build`, then publish the `dist/` directory.
- **Vercel / Netlify / Firebase Hosting:** use `npm run build` as the build command and `dist` as the output directory.
- The site is a single-page portfolio and does not require server-side route rewrites.
- Vercel can deploy automatically whenever the connected `main` branch receives a new commit.
