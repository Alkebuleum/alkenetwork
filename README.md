# ALKÉ Network: alke.network

The public site and the **welcome page for the ALKÉ web app** (app.alke.network).
One static page built with Vite (no framework), deployed to GitHub Pages.

Built from the design handoff in `../ALKE-Network-website-and-app/` (`website/source/body.html`
and `site.js`). The drawn phones come from that design's canvas renderer (`src/phones.js`).

## How visitors get into the app

1. A visitor arrives on alke.network, or on `alke.network/join/CODE` from a member's invite
   (`?invite=CODE` and `?ref=CODE` work too). The invite code is kept for the visit and the
   page shows "You've been invited".
2. They enter their email and press **Claim My Free ALKE**.
3. The page opens `app.alke.network/#email=…&invite=…` (the app root; the app moves it to sign-up). The data is in the URL
   fragment, so it never reaches a server or a Referer header. The app reads it once
   (`src/lib/handoff.js` in the app repo), removes it from the address bar, fills in the
   email and keeps the invite for the profile step.

On the web, a signed-out visitor to the app is sent back here; the app's own welcome
screens stay for the future iOS/Android apps and the Nuru app.

## Development

```
npm install
npm run dev                                         # site only
VITE_APP_URL=http://localhost:5174 npm run dev      # hand off to a local app dev server
npm run build
```

## Files

- `index.html`: the page markup
- `src/site.css`: styles and fonts (`public/fonts/`)
- `src/main.js`: invite capture, the join forms, the drawn phones, the mobile menu
- `src/phones.js`: phone renderer from the design
- Links still waiting on real targets are marked `data-todo` and listed in the browser console.

## Deploy

Pushes to `main` build and deploy automatically via `.github/workflows/deploy.yml`.
`public/404.html` sends unknown paths (like `/join/CODE`) back to the page.
