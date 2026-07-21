# Allan Andan — Portfolio

A responsive, minimalist portfolio for Allan Andan, built with React and Vite.

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
