# Alké Network

Landing site for Alké Network — an institutionally governed distributed ledger network.
Built with React + Vite, deployed to GitHub Pages at [alke.network](https://alke.network).

## Development

```
npm install
npm run dev
```

## Build

```
npm run build
npm run preview
```

## Deploy

Pushes to `main` build and deploy automatically via `.github/workflows/deploy.yml`.

## Structure

- `src/components/` — header, hero, and page-section components
- `src/pages/Landing.jsx` — composes the one-page landing site
- `src/App.jsx` — routes (landing page + placeholder pages for links not yet built out)
- `design-reference/` — original static HTML mockup this app was built from
