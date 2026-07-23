# Alké Network

Landing site for Alké Network — Africa's institutional network for the digital-asset economy.
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

The homepage covers exactly four things: the problem, the solution, who's behind it, and how to
apply. Deeper technical detail (network architecture, tokens, validators, every use case) belongs
on inner pages, not the homepage.

- `src/components/` — header, hero, and page-section components
- `src/pages/Landing.jsx` — composes the one-page landing site (Hero → Problem → Solution → Founding Council)
- `src/App.jsx` — routes (landing page + placeholder pages for inner content not yet built out)
- `design-reference/` — static HTML mockups this app was built from
