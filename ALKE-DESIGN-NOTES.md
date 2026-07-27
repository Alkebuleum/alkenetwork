# Alké Network — Design System Notes

**For: Claude Code. Input: `alke-hero.html`.**

The hero is the reference implementation. Treat it as the source of truth, not as a suggestion. Extract the `:root` token block verbatim into a global stylesheet and build every other section from those tokens. Do not introduce new colors, new fonts, or new radii. If a section seems to need a value that isn't in the token set, you are solving it wrong — reach for spacing, hairlines, or type weight instead.

---

## 1. The design thesis

**Precision instrument, not a startup landing page.**

Alké is selling institutional trust. The design has to feel *engineered and archival* — like a technical standard, a central-bank publication, or a surveying document — while still reading as contemporary software. Every decision below serves that.

Three things carry the identity. Keep all three alive on every screen:

1. **The drafting-table language** — hairline grids, measurement rails, monospace annotations, circled letter callouts, dashed boundaries.
2. **The serif/mono duality** — an editorial serif for human statements, monospace for machine facts. Sans is the connective tissue and should never call attention to itself.
3. **Restraint of the accent** — mint appears as a thin, deliberate signal. It is a status light, not a paint color.

---

## 2. Tokens — copy these exactly

```css
:root{
  /* Surface scale */
  --bg-0:#070908;  --bg-1:#0A0D0C;  --bg-2:#0E1211;  --bg-3:#131817;

  /* Ink */
  --ink-0:#F4F7F5; --ink-1:#C7D1CC; --ink-2:#8B968F;
  --ink-3:#5C6762; --ink-4:#39423E;

  /* Accent */
  --acc:#6FC5A0; --acc-hi:#9BDCBF; --acc-lo:#3F7E67;
  --acc-dim:rgba(111,197,160,.16);

  /* Hairlines */
  --line:rgba(255,255,255,.075);
  --line-strong:rgba(255,255,255,.13);

  /* Type */
  --serif:'Newsreader', 'Iowan Old Style', Georgia, serif;
  --sans:'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --mono:'IBM Plex Mono', ui-monospace, 'SF Mono', Menlo, monospace;

  /* Rhythm */
  --nav-h:74px;
  --gutter:clamp(24px, 5.2vw, 96px);
  --maxw:1440px;
  --ease:cubic-bezier(.22,.61,.36,1);
}
```

**Surface usage.** `--bg-1` is the page. `--bg-2` for a section that needs to recede or separate. `--bg-3` for raised cards. Never a pure `#000`, never a light section — the site is dark end to end. Separation between sections comes from a `1px solid var(--line)` rule, not from alternating background colors. Use a background shift *only* when a section is a genuinely different kind of surface (e.g. a data table, a quote block).

**Ink usage.** `--ink-0` headings only. `--ink-1` lead paragraphs and card body. `--ink-2` standard body copy and captions. `--ink-3` metadata and mono labels. `--ink-4` disabled and hairline decoration. Never set text with `opacity` — pick the right ink token so contrast stays predictable.

**Accent usage.** Hard budget: **one accent-filled element per viewport.** Everything else uses the accent as a 1px stroke, a small dot, a hover state, or a single emphasized word. If two mint buttons are visible at once, demote one to `.btn--ghost`.

---

## 3. Typography

### Scale

| Role | Family | Size | Weight | Leading | Tracking |
|---|---|---|---|---|---|
| Hero H1 | serif | `clamp(2.75rem, 5.05vw, 4.6rem)` | 400 | 1.03 | −0.028em |
| Section H2 | serif | `clamp(2rem, 3.4vw, 3rem)` | 400 | 1.1 | −0.022em |
| Card / sub H3 | sans | `clamp(17px, 1.35vw, 20px)` | 500 | 1.35 | −0.012em |
| Lead paragraph | sans | `clamp(15px, 1.12vw, 17px)` | 300 | 1.62 | 0.002em |
| Body | sans | 15px | 400 | 1.65 | 0 |
| Small / caption | sans | 13.5px | 400 | 1.55 | 0 |
| Micro-label | mono | 10–11px | 400 | 1.4 | 0.14–0.2em, uppercase |
| Data / figures | mono | 13–15px | 500 | 1.3 | 0.01em |

**Rules that matter more than the numbers:**

- **Serif for statements, sans for explanation, mono for facts.** A section headline is serif. The paragraph under it is sans. A number, a status, a spec key, a date, an ID, a legal reference — mono.
- **Negative tracking scales with size.** Anything above 2rem gets at least −0.02em. Anything under 16px gets 0 or slightly positive. Mono micro-labels get heavy positive tracking (0.14–0.2em) and uppercase.
- **One italic-accent moment per section, maximum.** The hero italicizes "trust" in `--acc-hi`. Reuse the device sparingly — a section headline may italicize its single most important word. Never two words in one headline, never in body copy.
- **Cap measure.** Headlines `max-width: 15–18ch`. Paragraphs `max-width: 46ch` (lead) or `62ch` (body). Never let a line of body text run the full 1440px.
- **`text-wrap: balance`** on every headline. `text-wrap: pretty` on paragraphs.
- **Sentence case everywhere.** The only uppercase on the site is mono micro-labels. No Title Case headings, ever.

---

## 4. Layout

- Container: `max-width: var(--maxw)`, `margin: 0 auto`, `padding-inline: var(--gutter)`.
- Section vertical rhythm: `padding-block: clamp(88px, 11vh, 168px)`. Adjacent sections separated by `border-top: 1px solid var(--line)`.
- **Asymmetry is the default.** Avoid 50/50 splits. Use `1.02fr / 1fr`, `1fr / 1.4fr`, or a 12-column grid with content on 1–7 and visual on 8–12. Perfect symmetry is what made the original look generic.
- **Section anatomy** — repeat this structure so the page has a spine:

  ```
  [mono micro-label — section index + name]     e.g.  "02 — WHY JOIN"
  [serif H2]
  [sans lead paragraph, max 46ch]
  [ ---------- hairline or spacing ---------- ]
  [content: grid / diagram / list]
  ```

  Number the sections in the micro-label (`01 —`, `02 —`). It reinforces the document metaphor and costs nothing.
- **Bleed one element per section.** In the hero, the drawing bleeds past the right gutter. In other sections, let a diagram, a grid line, or a table extend to the viewport edge. It keeps the page from feeling like a stack of centered boxes.
- Mobile: single column below 1080px, nav collapses below 760px, buttons go full-width below 760px.

---

## 5. Components

### Buttons
Use the hero's `.btn`, `.btn--primary`, `.btn--ghost` unchanged. Height 52px, radius 10px. Primary carries `inset 0 1px 0 rgba(255,255,255,.45)` top highlight plus a coloured ambient shadow — that inner highlight is what makes it read as a physical surface rather than a flat rectangle. Do not remove it. Arrow icons translate `4px` on hover.

### Cards
```css
background: linear-gradient(180deg, rgba(255,255,255,.032), rgba(255,255,255,.008));
border: 1px solid var(--line);
border-radius: 14px;
padding: 28px;
```
On hover: `border-color: var(--line-strong)` and `translateY(-2px)`. **No drop shadows on cards** — depth comes from the border and the gradient, not from a shadow. Cards get a mono micro-label at the top, an H3, and body copy in `--ink-2`.

### Hairline data rows
The hero's spec bar is a core component — reuse it for stats, principles, requirements, timelines. Grid of 3–4 columns, 1px vertical dividers between items, mono key above, sans value below. Prefer this over cards whenever the content is short and factual. It is the most "institutional" element in the system.

### Eyebrow / status pill
Reuse `.eyebrow` with the pulsing dot for live status only (open phase, applications open). For non-status labels, drop the pill and use a bare mono micro-label.

### Tables
Hairline only — `border-collapse: collapse`, `border-bottom: 1px solid var(--line)` on rows, no vertical borders, no zebra striping, no container border. Header row in mono uppercase `--ink-3`. Numeric columns right-aligned, `font-variant-numeric: tabular-nums`, mono.

### Forms (application flow)
Inputs 52px tall, `background: rgba(255,255,255,.03)`, `border: 1px solid var(--line)`, radius 10px. Focus: `border-color: var(--acc)` plus `box-shadow: 0 0 0 3px var(--acc-dim)`. Labels in mono micro-label style above the field. Never use placeholder text as a label.

### Footer
Dense and archival, not sparse. Four columns, mono micro-label headings, `--ink-2` links, `--bg-0` background, top hairline. Include a mono line with something like `ALKÉ NETWORK — FOUNDING PHASE — MMXXVI`. Small legitimizing details are the whole point of this brand.

---

## 6. Illustration language — the most important section

This is what makes the site cohesive. Every section that needs a visual gets a **technical drawing**, never a stock illustration, never a photo, never a 3D render, never an emoji or a rounded icon in a colored circle.

**Construction rules:**

- **Stroke hierarchy is mandatory.** Three weights: `1.6` for primary silhouettes, `1.2–1.3` for secondary structure, `1.0` for grid, annotation, and hatching. A drawing at one uniform stroke weight is the exact failure mode of the original hero.
- **Opacity hierarchy too.** Strokes range `stroke-opacity` `.6` (foreground) → `.3` (mid) → `.13–.2` (grid). Fills are `fill-opacity` `.03–.07` washes, never solid.
- **Always mask the edges.** Grids and drawings must dissolve via a `radialGradient` mask, never terminate at a hard rectangle edge. Copy `#m-fade` and `#m-left` from the hero SVG.
- **Two grid densities:** 36px fine at `.13` opacity, 180px major at `.2`.
- **Annotate everything.** Circled letter callouts (A, B, C) with dashed leader lines, mono labels at 9–9.5px with `letter-spacing: 1.5`, measurement rails with end ticks, corner registration marks, a scale bar. These details do more for credibility than the drawing itself.
- **Dashed = boundary or governance.** Solid = structure. `stroke-dasharray="4 5"` for zones, `"3 4"` for leader lines, `"5 7"` with animated `stroke-dashoffset` for data flow.
- **Monochrome mint only.** Every stroke is `#6FC5A0` or `#9BDCBF` at varying opacity. Never a second hue.
- **One glow node per drawing** (`filter: url(#glow)` on a small circle) as the focal point. More than one and it turns into a Christmas tree.

**Subject matter per section — draw the concept, not a metaphor:**

- *Why join* → concentric governance rings; a member node joining a ratified perimeter.
- *Founding Network* → a lattice of institution glyphs at varying scale with quorum lines between them.
- *Architecture / How it works* → an exploded stack: consensus layer, credential layer, application layer, drawn as offset isometric planes (reuse the hero's ledger-plane geometry).
- *Institutional Brief* → a document plan view with section rules, page ticks, and a seal mark.
- *Apply* → a sequenced path diagram: introductory conversation → technical review → ratification, as numbered nodes on a dashed track.

Reuse the hero's `<defs>` block wholesale — `g-fine`, `g-major`, `fade`, `m-fade`, `stone`, `plane`, `glow`. Every drawing on the site should share those definitions so they look like plates from the same document.

---

## 7. Motion

- **Easing is always `var(--ease)`** — `cubic-bezier(.22,.61,.36,1)`. Nothing else.
- Entrance: fade + `translateY(16px)`, 0.9s, staggered 90ms per element. On scroll, use `IntersectionObserver` with `threshold: 0.15` and trigger once — never re-animate on scroll-back.
- Hover transitions 200–250ms. Never above 400ms on an interactive element.
- Ambient SVG motion (dash flow, travelling pulses) runs 4.5–7s and must be barely perceptible. If a visitor notices the animation before the headline, slow it down.
- **No parallax, no scroll-jacking, no counter-up number animations, no marquees.** They read as marketing; this brand is not marketing.
- Wrap everything in `@media (prefers-reduced-motion: reduce)` disabling animation and setting final state.

---

## 8. Do / Don't

**Do**
- Use hairlines and spacing to create structure
- Number sections and label things in monospace
- Let one element bleed off-grid per section
- Keep paragraphs under 62ch
- Add small factual details — dates, IDs, phase names, scale bars

**Don't**
- Add a second accent color, or a gradient that isn't the subtle surface wash
- Use drop shadows on cards, or any glow outside SVG focal nodes
- Center-align a full section (headline + paragraph + button stacked centered) — it flattens the page. Left-align by default; centering is allowed only for a final CTA band.
- Use rounded-square icons in tinted circles — that's SaaS vernacular and it will break the whole thing
- Use emoji anywhere
- Set body copy larger than 17px or lighter than `--ink-2`
- Alternate section backgrounds light/dark

---

## 9. Build checklist

- [ ] Tokens extracted to a single global stylesheet; zero hardcoded hex values in components
- [ ] Fonts self-hosted or preloaded with `font-display: swap`; only the weights actually used (Newsreader 300/400 + italic 300/400, Inter 300/400/450/500, IBM Plex Mono 400/500)
- [ ] Every section follows the micro-label → serif H2 → lead → content anatomy
- [ ] Every visual is a hairline technical drawing sharing the hero's `<defs>`
- [ ] One accent-filled element per viewport
- [ ] Contrast: all body text ≥ 4.5:1 against its surface (`--ink-2` on `--bg-1` passes; `--ink-3` is decorative only and must never carry sentence-level content)
- [ ] Focus-visible ring on every interactive element: `box-shadow: 0 0 0 3px var(--acc-dim)`
- [ ] `prefers-reduced-motion` honoured throughout
- [ ] Tested at 1440, 1280, 1080, 768, 390px
- [ ] No layout shift: SVGs have explicit `viewBox` and aspect ratio reserved
