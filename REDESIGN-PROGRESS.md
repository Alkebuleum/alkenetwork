# Alké Redesign — Progress & Direction Notes

## STATUS AT A GLANCE (updated 2026-08-12, end of session)

**Homepage and all 6 inner pages: rewritten and visually verified. Site-wide pivot to the
membership-network model is complete.**

Done this session:
- Nav/footer IA updated (Practice Areas, The Sandbox, Founding Network, Member Login added;
  see `src/components/Header.jsx`, `Footer.jsx`)
- `Hero.jsx`, `WhyJoin.jsx` rewritten for the membership-network positioning + global framing
- 6 new homepage sections built and wired into `src/pages/Landing.jsx`: `WhyNow`, `PracticeAreas`,
  `SectorCircles`, `Sandbox`, `MemberBenefits`, `Sovereignty`, plus a closing `FinalCta`
- `InstitutionalSignal.jsx`, `FoundingCouncil.jsx`, `Stewardship.jsx`, `ApplyForm.jsx` updated for
  global framing (Africa reframed as origin, not boundary)
- `SolutionDiagram.jsx` — the literal Africa-continent map (`AfricaMap.jsx`) was replaced with an
  abstract governance-rings diagram using generic institution-type nodes (University/Bank/Regulator/
  Registry/NGO). `AfricaMap.jsx` + `src/data/africaPaths.js` are now unused by the homepage — left
  in the repo, candidate for reuse as an origin-story visual on `/foundation` during the inner-page
  pass, or deletion if not used there.
- New shared CSS added to `src/index.css`: `.dash-list`, `.two-col`, `.practice-grid` (all follow
  existing token/pattern conventions, no new colors introduced)
- Homepage visually verified end-to-end with Playwright screenshots at 1440px, plus header-only
  checks at 1200/1024/901/390px. Two real layout bugs found and fixed in the same pass:
  1. The desktop nav (now 6 links + Member Login + button, up from 3) overflowed and clipped the
     primary button between ~900–1180px viewport widths. Fixed by raising the desktop↔mobile nav
     breakpoint from 900px to 1180px in `index.css` (search `max-width:1180px`) — that width range
     now correctly gets the hamburger menu instead of a squeezed, broken desktop nav.
  2. The mobile hamburger menu panel (`#mobile-nav`) was rendering with a ~65px-tall background
     while its content overflowed far past it uncontained — a pre-existing bug (not introduced this
     session), caused by `header`'s `backdrop-filter` creating a CSS containing block for its
     `position:fixed` child, which broke the intended `top:var(--nav-h); bottom:0` viewport-relative
     sizing. It was only cosmetically survivable before because the menu had 3 short links; with 6+
     items it became a visibly broken, see-through overlay. Fixed by giving `#mobile-nav` an explicit
     `height:calc(100vh - var(--nav-h))` instead of `bottom:0`, plus `overflow-y:auto` so a taller
     menu scrolls internally rather than overflowing.

**Task 15 (inner pages) — done.** `Foundation.jsx`, `GlobalInfrastructure.jsx`, `Technology.jsx`,
`InstitutionalBrief.jsx`, `Apply.jsx`, `FoundingCouncilPage.jsx` are all rewritten:
- `Technology.jsx` was restructured into the "Practice Areas in depth" page — `#ai` and `#dlt`
  section ids now exist, so the homepage `PracticeAreas.jsx` CTAs (`/technology#ai`,
  `/technology#dlt`) resolve correctly.
- The "Founding Council" concept survives, reframed from a blockchain validator/consensus body into
  a member-advisory body (parallel to the Foundation's existing Advisory Council) that advises on
  membership standards and sector-circle priorities — not on validator accreditation.
- A site-wide grep for `Africa|diaspora|African|validator|consensus|accredit` after this pass
  turned up only intentional origin-story mentions (Foundation, Stewardship, GlobalInfrastructure),
  a factual press-release URL that can't be changed, and the still-unused `AfricaMap.jsx` /
  `africaPaths.js` files (see below). Re-run that grep before trusting this claim if more time has
  passed and other edits have landed.
- All 6 inner pages screenshotted at 1440px with zero console/page errors.

**Also fixed this session (flagged by the user after reviewing the homepage locally):**
- The `<select>` dropdowns in `ApplyForm.jsx` (institution type / primary interest) were rendering
  with the OS's light-mode popup despite the page being dark-themed. Fixed in `index.css`: added
  `color-scheme:dark` and explicit `background`/`color` on `.apply-field select option` — Chromium
  (and most browsers) use those to theme the native popup. Verified visually.

**Remaining open items — none are blocking, but worth deciding on next:**
1. The Explainer video (`src/components/Explainer.jsx`, YouTube id `q5jmcuY93Qc`) has a thumbnail
   titled "Institutional DLT Sandbox" / "Learn. Test. Adopt with confidence." — an actual recorded
   video, not something a code session can edit. It still contradicts the AI+DLT positioning right
   below the hero. Needs a new explainer video, or the section should be de-emphasized/removed until
   one exists.
2. `InstitutionalSignal.jsx`'s 10 example institutions are still all DLT-adoption quotes (Hedera
   governing council members, Canton Network, Broadridge). The spec wants AI examples too. A
   websearch this session for real, well-sourced AI-adoption institutional quotes didn't turn up
   anything with a clean, citable, single-source quote in the same format as the existing entries —
   fabricating a quote attributed to a real institution was judged too risky to do speculatively.
   Needs a proper research pass, not a copy edit.
3. `AfricaMap.jsx` + `src/data/africaPaths.js` are still unused dead code (superseded by the abstract
   `SolutionDiagram.jsx` rings diagram). Candidate for reuse as an origin-story visual on
   `/foundation`, or deletion.
4. The rest of the `ALKE-DESIGN-NOTES.md` §9 checklist hasn't been formally re-run against the new
   components: contrast audit, focus-visible rings specifically on `PracticeAreas`/`SectorCircles`/
   `MemberBenefits`/`Sovereignty`/`Sandbox`/`FinalCta`, and 1280/768px breakpoints (only
   1440/1200/1024/901/390px were checked this session).
5. Nothing in this redesign has been committed to git yet.

If you're picking this up cold: read §1 (decisions) and this status block. The public site
(`alke.network`) is content-consistent end to end.

---

## 6. PORTAL (`app.alke.network`) — design pass started 2026-08-12

Decision 3 in §1 deferred the portal. The user has now asked to start on it, with explicit
direction: **institutional/enterprise feel — "think Microsoft institutional applications" — dark
theme.**

### Architecture decision

Built as a **separate app at `/portal`**, sibling to the root marketing site, not a route namespace
inside the existing app. Same tooling as the root (`Vite` + `React 19` + `react-router-dom`,
copy-pasted `package.json`/`vite.config.js`). Reasoning: `app.alke.network` is a different subdomain
with a different deploy target than `alke.network`, and the two apps have deliberately different UI
languages (see below) — bundling them would mean fighting one CSS system against the other. Root
`package.json`/`vite.config.js`/`src/` are untouched; the portal is fully self-contained under
`portal/`.

**Not yet wired to CI.** `.github/workflows/deploy.yml` at the repo root only builds/deploys the
root app to the `alke.network` CNAME. The portal has no deploy workflow, no `CNAME` file, and isn't
live anywhere yet — it only runs locally (`cd portal && npm run dev`, currently on port 5174 in this
session). Setting up the actual `app.alke.network` deploy target (new GitHub Pages project, a
different host, whatever the real infra is) is unstarted and wasn't this session's call to make
unilaterally.

### Design direction (deliberately different from the marketing site)

The marketing site (`ALKE-DESIGN-NOTES.md`) is an editorial/archival "drafting-table" language:
serif headlines, generous whitespace, technical-drawing illustrations. That's wrong for a tool
people use daily. The portal instead reads as a **dense enterprise console** — closer to Microsoft
365 admin center / Azure Portal than to the marketing site's own hero:

- **Same color tokens, different type system.** Reused the exact `--bg-0..3` / `--ink-0..4` / `--acc`
  / `--line` values for brand continuity, but dropped the Newsreader serif entirely — headings are
  Inter (sans), same as body. A dense data tool doesn't get a display serif.
- **Shell, not a page.** `--sidebar-w:264px` fixed left rail (`--bg-0`, darkest surface) + a
  `60px` sticky topbar (search, notification bell, profile) over a lighter content canvas
  (`--bg-1`), the classic admin-console "chrome vs. canvas" split.
- **Smaller, denser scale throughout.** 14px base body vs. the marketing site's 16px; 38–40px
  buttons vs. 52px; cards use 20px padding vs. 28px.
- **New component vocabulary not needed on the marketing site:** sidebar nav links with active-state
  left accent bar, status badges/pills (`.badge`, `.badge--acc/warn/bad`), a phase-track + progress
  bar pair for sandbox projects, data cards, and an auth split-screen (dark grid-pattern aside +
  centered form) for `/login` that deliberately echoes enterprise-SSO login pages.
- Icons are a small hand-built line-icon set (`portal/src/components/icons.jsx`) at 24px, single
  stroke weight — kept in the same "restrained technical drawing" spirit as the marketing site's
  illustrations rather than importing an icon library.

### What's built (design-pass scope, not full Part 4 build-out)

- Full app shell: `Sidebar.jsx` (all nav items from spec's "Portal global navigation" — Network group
  + Institution group), `Topbar.jsx`, `AppShell.jsx` (handles the mobile drawer state)
- `/login` — fully designed per spec's auth-screens list, split-screen with mocked submit (routes to
  `/` on submit, no real auth — see below)
- `/forgot-password`, `/verify`, `/invite`, `/onboarding` — minimal placeholder screens reusing the
  auth-form layout (`AuthStub.jsx`), just enough that Login's links don't dead-end. **Not designed
  to spec depth** — `/onboarding` in particular needs the real multi-step institution+profile+
  interests flow from spec Part 4 "Member onboarding," not just a placeholder.
- `/` (Dashboard/Home) — fully designed per spec's four dashboard questions (what's changing / what
  are peers doing / what are we working on / what should we do next), with realistic mock data in
  `portal/src/data/mock.js`
- Every other sidebar destination (`/intelligence`, `/network`, `/groups`, `/sandbox`, `/studio`,
  `/learn`, `/library`, `/sovereignty`, `/events`, `/messages`, `/notifications`, `/organization`,
  `/organization/team`, `/membership`, `/profile`, `/settings`) routes to a shared `StubPage.jsx`
  empty-state component (per spec's "empty states should educate" rule) so the nav is fully
  clickable and coherent, but **none of those modules have real designed content yet** — that's the
  bulk of the remaining Part 4 work.
- Visually verified at 1440px (login, dashboard, two stub pages) and 390px (dashboard + mobile
  drawer open/closed) via Playwright, zero console errors.

### Explicit non-goals this pass (per the frontend-only boundary, spec Part 5)

- No real authentication — `/login`'s submit just navigates to `/`. A real integration needs a typed
  `services/auth` interface per spec Part 5, not implemented yet.
- All data is mock/fictional (`portal/src/data/mock.js`) — no service layer (`services/` folder from
  spec Part 5) exists yet to abstract a future backend.
- No role-based UI states (Institutional Admin / Executive / Program Lead / etc. from spec) — the
  current user is hardcoded as one role.

### Next steps, roughly in spec Part 6 order

1. Design the actual module screens in priority order — Intelligence feed, Network directory +
   institution profile, then Sandbox (project list + detail) since it's called out as "one of the
   portal's central features."
2. Build out the real onboarding flow (institution setup → personal profile → interests).
3. Sovereignty Center — spec flags this as "one of Alké's most distinctive areas," worth designing
   with real care (maturity assessment, Level 1–5 progression) rather than as a stub.
4. Decide and set up the actual `app.alke.network` deploy target.
5. Introduce the `services/` abstraction layer once any of the above needs to look like it's talking
   to a backend, per spec Part 5's API-abstraction requirement.

---

**Purpose of this file:** `alke-redesign.md` is the target spec (product/content brief, not a literal
build order). This file tracks *where implementation actually stands against that spec*, decisions
already made with the user, and what's next — so a future session (human or AI) doesn't have to
re-derive it by diffing the whole repo again. Update this file as work progresses; don't let it go stale.

Last updated: 2026-08-12.

---

## 0. The single most important finding

**The live site is not a "DLT-first, needs AI added" site. It's built as a literal blockchain protocol,
and the new spec is not that at all.**

`alke-redesign.md` Part 2 is explicit:

> Do not describe Alké primarily as: A blockchain / A cryptocurrency network / A Web3 network...
> Alké is an **institutional membership and adoption network**. AI and DLT are its first two
> practice areas.

But the current site (Hero, WhyJoin, Foundation, GlobalInfrastructure, FoundingCouncilPage,
Technology, Apply, InstitutionalBrief — i.e. almost every page) is written as if Alké **is** a
distributed ledger network itself:

- "Institutionally governed distributed ledger"
- "accredits validators," "consensus," "Founding Council... guiding governance"
- Foundation page: "Governance of Africa's sovereign trust layer," focus areas like "Digital identity
  & credentials," "Payments & financial access" framed as *things the network's ledger does*, not
  services a membership network provides
- No AI content anywhere except one throwaway "Sovereign AI & assistive systems" focus card

This is a strategic pivot, not a copy pass: membership network with a sandbox/working
groups/learning-academy model (new spec) vs. a governed L1-style protocol with validators and a
Founding Council that ratifies consensus rules (current site). Renaming things won't bridge that gap —
sections like "validator accreditation," "consensus," "protocol direction" don't have an equivalent
in the new model at all and should probably be retired, not reworded.

**Recommendation (not yet actioned):** treat this as its own decision point with the user before
writing more copy. Don't quietly reinterpret "validator accreditation" as "sandbox governance" —
ask.

---

## 1. Decisions made with the user (2026-08-12)

1. **Design system: keep the current one.** `ALKE-DESIGN-NOTES.md` (dark, mint-on-near-black,
   drafting-table/technical-drawing motif, serif+sans+mono type system) is the source of truth for
   visuals — not the literal hex palette in `alke-redesign.md` Part 1 (Near-Black `#0D1110` /
   Institutional Teal `#519384` / Warm Ivory `#F0F0E9` / Soft Neutral Gray `#B4B6B2`). Treat
   `alke-redesign.md`'s design section as directional ("institutional, calm, technical, restrained
   accent") already satisfied by the existing system, not as literal tokens to swap in.
2. **Geography: go global.** The doc's own late-added addendum ("Strategic Geographic Positioning
   Update," bottom of `alke-redesign.md`) supersedes the earlier Africa/diaspora-restricted framing.
   Membership copy should read as globally open; Africa's role becomes *origin story*, not
   *eligibility boundary*. Confirmed with user.
3. **Session scope: public website (`alke.network`) only.** `app.alke.network` (Part 4 of the spec —
   full member portal: auth, onboarding, dashboard, sandbox, working groups, sovereignty center,
   messaging, etc.) is out of scope for now. It's a separate, multi-week build. Do not start
   scaffolding it without an explicit go-ahead.
4. **Retire the DLT-protocol framing entirely.** Alké is a membership network, full stop. Drop
   validator/consensus/accreditation/protocol language everywhere it currently exists. DLT becomes
   one practice area (alongside AI), delivered through working groups and the sandbox — not a
   network members join as node operators. This confirms §0's recommendation. Confirmed with user.
5. **Add a Member Login nav item / CTA now**, even though `app.alke.network` doesn't exist yet.
   Link it out to `https://app.alke.network` per the spec, so the site's IA already matches the
   target even before the portal is built. Confirmed with user.

---

## 2. Current implementation map

Stack: React 18 + Vite + react-router. Single SPA, no CMS/backend — everything is hardcoded JSX/copy.

### Files
```
src/App.jsx                      route table
src/pages/Landing.jsx             assembles the homepage sections
src/components/Hero.jsx           homepage hero
src/components/Explainer.jsx      "01 — Watch" video section
src/components/WhyJoin.jsx        "02 — Why join" (3 pillars: sovereignty / business value / safe adoption)
src/components/InstitutionalSignal.jsx   "03" quote carousel of external institutions
src/components/FoundingCouncil.jsx        "04 — Founding Participant" + inline apply form
src/components/Stewardship.jsx    Alkebuleum Foundation strip
src/components/AfricaMap.jsx      literal Africa continent SVG, used inside SolutionDiagram
src/components/SolutionDiagram.jsx        the "Why join" figure — nodes joining a ring around AfricaMap
src/pages/InstitutionalBrief.jsx, Apply.jsx, FoundingCouncilPage.jsx,
         GlobalInfrastructure.jsx, Technology.jsx, Foundation.jsx    inner pages
```

### Homepage section coverage vs. `alke-redesign.md` Part 3 spec sections
| Spec section | Status |
|---|---|
| Hero | ✅ exists, but framed as DLT protocol + Africa-only (see §0, §3) |
| Why Now | ⚠️ partially covered by `Explainer` (video) but no "Why Now" argument section |
| Why Join Alké (3 pillars) | ✅ exists as `WhyJoin`, but pillars are DLT-only, need AI+DLT reframe |
| Practice Areas (AI practice / DLT practice) | ❌ missing entirely — no AI content on the site |
| Sector Circles | ❌ missing |
| The Institutional Sandbox | ❌ missing as a standalone section (sandbox is mentioned in passing, not explained) |
| Member Benefits (9 cards) | ❌ missing |
| Global Institutional Signal | ✅ exists as `InstitutionalSignal`, DLT-only examples, needs AI examples + global (non-Africa-only) framing |
| Sovereignty | ⚠️ sovereignty language exists scattered (Foundation, WhyJoin) but no dedicated section matching the spec's Use→Understand→Integrate→Control→Own framing |
| Founding Network | ✅ exists as `FoundingCouncil`, needs global-positioning copy pass |
| Stewardship | ✅ exists, needs Africa-as-origin-not-boundary copy pass |
| Final CTA | ❌ missing as a distinct closing section (site ends at Stewardship) |
| Footer / Member Login | ✅ footer exists; **no Member Login link anywhere** — nav, footer, hero all lack it (expected, since app.alke.network doesn't exist yet — but the CTA button/placeholder should probably exist per spec so the site is ready to point to it later) |

### Global nav vs. spec
Spec wants: Why Alké · Practice Areas · The Sandbox · Membership · Founding Network · Institutional
Brief · Member Login · Join the Network.
Current `Header.jsx` has: Why join · Founding Network · Institutional Brief · Apply to Join. No
Practice Areas, no Sandbox, no Membership, no Member Login.

---

## 3. Africa/global-positioning audit (files that need the copy pass from decision #2)

Grep for `Africa|African|diaspora` across `src/` turned up:
- `src/components/Hero.jsx:54` — ledger stat "Participation: Africa & the Diaspora"
- `src/components/Footer.jsx:18` — "digital-asset infrastructure for Africa and the Diaspora"
- `src/components/WhyJoin.jsx:7-9` — headline "should not be built without Africa at the table" + body
- `src/components/InstitutionalSignal.jsx:60,65,232` — "Banking — Africa" tag, "African institutions
  are already evaluating DLT," closing callout "Alké gives African institutions the same opportunity"
- `src/pages/GlobalInfrastructure.jsx:11,72-74,83` — heavy Africa framing throughout, including a
  headline restating "without Africa at the table"
- `src/pages/Foundation.jsx:10-11,29,59` — "Governance of Africa's sovereign trust layer," pull quote
  "built by Africa — for the institutions that serve her," "African and diaspora policy... leaders"
- `src/pages/InstitutionalBrief.jsx:22` — "built for Africa and the diaspora"
- `src/pages/Apply.jsx:41`, `src/pages/FoundingCouncilPage.jsx:84`, `src/pages/Technology.jsx:71` —
  "Civic & diaspora bodies" as an institution-type label (this one may be fine to keep as one
  institution type among several — not inherently a restriction — revisit once other copy is fixed)
- `src/components/SolutionDiagram.jsx` + `src/components/AfricaMap.jsx` + `src/data/africaPaths.js` —
  **the flagship "Why Join" diagram is a literal Africa continent outline with member nodes joining
  it.** This is a visual, not copy — can't fix with a text edit. If membership is global, this diagram
  contradicts the words next to it. Needs either (a) replacement with the abstract "concentric
  governance rings" diagram `ALKE-DESIGN-NOTES.md` §6 already specifies, or (b) a deliberate decision
  to keep the Africa map as an "origin story" visual elsewhere (e.g. only on `/foundation`) but not as
  the primary homepage join diagram.

**Status: not yet started.** Paused before editing because of the bigger finding in §0 — fixing
Africa→global framing on copy that's about to be rewritten for the AI+DLT pivot anyway would be
wasted/conflicting work. Do the pivot decision first, then the geography pass, ideally in the same
editing sessions per page so each file is only rewritten once.

---

## 4. Open questions — resolved (see §1, decisions 4–5)

Both answered by the user on 2026-08-12: fully retire the protocol framing; add Member Login now,
linking to `https://app.alke.network`. No open questions blocking work as of this update.

---

## 5. Suggested phased plan once direction is confirmed

Mirrors `alke-redesign.md` Part 6, scoped to public site only:

1. **Positioning pivot** — decide scope of the DLT-protocol → membership-network reframe (§0, §4.1).
2. **Nav + IA** — add Practice Areas, The Sandbox, Membership, Member Login to `Header.jsx`/`Footer.jsx`.
3. **Homepage gap-fill** — build the missing sections in order: Why Now, Practice Areas (AI + DLT),
   Sector Circles, The Institutional Sandbox, Member Benefits, Sovereignty, Final CTA. Reuse existing
   component patterns (`WhyJoin`'s item/aside layout, `InstitutionalSignal`'s card carousel,
   `PathDiagram`/`SolutionDiagram`'s SVG conventions) rather than inventing new visual language.
4. **Geography pass** — apply the Africa→global copy fixes from §3 across all files in the same pass
   as step 3 (don't touch a file twice).
5. **Illustration fix** — resolve the AfricaMap/SolutionDiagram contradiction (§3, last bullet).
6. **Inner pages** — align `Foundation.jsx`, `GlobalInfrastructure.jsx`, `Technology.jsx`,
   `InstitutionalBrief.jsx`, `Apply.jsx`, `FoundingCouncilPage.jsx` with the pivoted positioning.
7. **Polish** — accessibility/perf items in spec Part 5 are largely already satisfied by the existing
   design system (see `ALKE-DESIGN-NOTES.md` §9 checklist); re-verify at the end rather than mid-build.

Portal (`app.alke.network`, spec Part 4) is intentionally not in this plan — separate project, start
a new progress file for it if/when scoped.
