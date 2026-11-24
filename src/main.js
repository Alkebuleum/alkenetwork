import "./site.css";
import { drawPhone, PHC } from "./phones.js";

/* ============ ALKÉ Network site ============
   alke.network is the welcome page for the ALKÉ web app. A visitor enters
   their email here and goes straight into the app's sign-up, with the email
   and any invite code carried over so the app doesn't ask for them again. */

const APP = (import.meta.env.VITE_APP_URL || "https://app.alke.network").replace(/\/$/, "");
const INVITE_KEY = "alke.invite";

/* ---------- Invites ----------
   Members share alke.network/join/CODE (older links: ?invite=CODE or ?ref=CODE).
   The code is kept for this visit and handed to the app with the email. */
const normInvite = (s) => String(s || "").trim().toUpperCase().replace(/[^A-Z0-9-]/g, "").slice(0, 20);
const store = {
  get() { try { return sessionStorage.getItem(INVITE_KEY) || ""; } catch { return ""; } },
  set(v) { try { sessionStorage.setItem(INVITE_KEY, v); } catch { /* private mode: kept in memory below */ } },
};
let invite = store.get();
{
  const path = /^\/join\/([^/?#]+)/i.exec(location.pathname);
  const q = new URLSearchParams(location.search);
  const code = normInvite(path ? decodeURIComponent(path[1]) : q.get("invite") || q.get("ref"));
  if (code) {
    invite = code;
    store.set(code);
    q.delete("invite");
    q.delete("ref");
    const rest = q.toString();
    history.replaceState(null, "", "/" + (rest ? "?" + rest : "") + location.hash);
  } else if (location.pathname !== "/") {
    history.replaceState(null, "", "/" + location.search + location.hash);
  }
}
if (invite) {
  document.querySelectorAll(".invited").forEach((p) => {
    p.textContent = "You've been invited. Your invite goes with you when you sign up.";
    p.hidden = false;
  });
}

/* Live global activity stays hidden until we switch it on (VITE_SHOW_LIVE=1). */
if (import.meta.env.VITE_SHOW_LIVE === "1") document.getElementById("live")?.removeAttribute("hidden");

/* App links (Log In) follow VITE_APP_URL so a local preview opens the local app. */
/* ---------- Returning members ----------
   While a member is signed in on the app, it sets alke_member (first name
   only, no email or token) on .alke.network. Then the join forms turn into
   "Welcome back" with one tap into the app, and Log In says Open app.
   "Not you?" brings the form back. Without the cookie, the last email typed
   on this device is filled in, so nobody types it twice. */
const LAST_EMAIL = "alke.lastEmail";
const memberName = (() => {
  const m = document.cookie.match(/(?:^|;\s*)alke_member=([^;]*)/);
  if (!m) return "";
  try { return decodeURIComponent(m[1]).trim() || "Alker"; } catch { return "Alker"; }
})();
const lastEmail = { get() { try { return localStorage.getItem(LAST_EMAIL) || ""; } catch { return ""; } }, set(v) { try { localStorage.setItem(LAST_EMAIL, v); } catch { /* private mode */ } } };

if (memberName) {
  document.querySelectorAll("a[data-app='/sign-in']").forEach((a) => { a.dataset.app = "/"; a.textContent = "Open app"; });
  document.querySelectorAll(".invited").forEach((p) => { p.hidden = true; });
  // The header's Join Free becomes Open ALKÉ, straight into the app.
  document.querySelectorAll(".nav-cta a.btn.primary[href='#join']").forEach((a) => { a.removeAttribute("href"); a.dataset.app = "/"; a.textContent = "Open ALKÉ"; });
  document.querySelectorAll("form.join").forEach((form) => {
    const card = document.createElement("div");
    card.className = "welcome-back";
    const hi = document.createElement("p");
    hi.className = "wb-hi";
    hi.append("Welcome back, ");
    const b = document.createElement("b");
    b.textContent = memberName;
    hi.append(b, ".");
    const sub = document.createElement("p");
    sub.className = "wb-sub";
    sub.textContent = "You're signed in to the ALKÉ app on this device. Your drill is one tap away.";
    const acts = document.createElement("div");
    acts.className = "wb-acts";
    const open = document.createElement("a");
    open.className = "btn primary";
    open.href = APP + "/";
    open.innerHTML = 'Open ALKÉ <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
    const not = document.createElement("button");
    not.type = "button";
    not.className = "wb-not";
    not.textContent = "Not you? Use another email";
    not.addEventListener("click", () => {
      card.remove();
      form.hidden = false;
      form.querySelector("input[type=email]")?.focus();
    });
    acts.append(open, not);
    card.append(hi, sub, acts);
    form.hidden = true;
    form.before(card);
  });
} else {
  const last = lastEmail.get();
  if (last) document.querySelectorAll("form.join input[type=email]").forEach((i) => { if (!i.value) i.value = last; });
}

document.querySelectorAll("a[data-app]").forEach((a) => { a.href = APP + a.dataset.app; });

/* ---------- Join forms ----------
   The email and invite travel in the URL fragment (#email=…&invite=…). A
   fragment is never sent to a server or in a Referer header; the app reads
   it once on arrival and removes it from the address bar. */
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
document.querySelectorAll("form.join").forEach((form) => {
  const input = form.querySelector("input[type=email]"), msg = form.querySelector(".join-msg");
  const say = (text, err) => { msg.className = "join-msg" + (err ? " err" : ""); msg.textContent = text; };
  input.addEventListener("input", () => {
    if (input.getAttribute("aria-invalid") === "true" && EMAIL.test(input.value.trim())) { input.removeAttribute("aria-invalid"); say(""); }
  });
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const v = input.value.trim();
    if (!EMAIL.test(v)) {
      input.setAttribute("aria-invalid", "true");
      input.setAttribute("aria-describedby", msg.id || (msg.id = "msg-" + input.id));
      say("Enter your email address, like name@example.com.", true);
      input.focus();
      return;
    }
    input.removeAttribute("aria-invalid");
    lastEmail.set(v);
    const hand = new URLSearchParams({ email: v });
    if (invite) hand.set("invite", invite);
    say("Opening the ALKÉ app…");
    // The app's root, not /sign-up: GitHub Pages serves deep links through 404.html, which would
    // copy the fragment into a query string. The app moves "/" + email to its sign-up screen.
    location.assign(APP + "/#" + hand.toString());
  });
});

/* ---------- Phones ----------
   Drawn stand-ins of the app screens. Put a real screenshot path in a canvas's
   data-src (hero back phone: data-src-back) and it replaces the drawing.
   data-phone="hero" draws the pair; any other value draws one phone. */
const RM = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
const shots = {};
function shot(src, again) {
  if (!src) return null;
  const s = shots[src];
  if (s && s !== "loading") return s;
  if (!s) {
    shots[src] = "loading";
    const im = new Image();
    im.onload = () => { im._id = src; shots[src] = im; again(); };
    im.onerror = () => { delete shots[src]; console.info("ALKÉ site: screenshot not found:", src); };
    im.src = src;
  }
  return null;
}
function fit(cv) {
  const r = cv.getBoundingClientRect();
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  const w = Math.max(1, Math.round(r.width * dpr)), h = Math.max(1, Math.round(r.height * dpr));
  if (cv.width !== w) cv.width = w;
  if (cv.height !== h) cv.height = h;
  const c = cv.getContext("2d");
  c.setTransform(dpr, 0, 0, dpr, 0, 0);
  c.clearRect(0, 0, r.width, r.height);
  return { c, W: r.width, H: r.height };
}
/* The countdown to the next daily session ticks while the page is open. */
const t0 = performance.now();
function sessionAnim() {
  if (RM) return null;
  const e = (performance.now() - t0) / 1000;
  return { phase: "active", ring: 0.035 + e / 86400, timer: Math.max(0, 86379 - e), tap: 0 };
}
/* Glows stay inside the canvas so no edge ever shows. */
function softGlow(c, cx, cy, r, a) {
  if (r <= 0) return;
  const g = c.createRadialGradient(cx, cy, 0, cx, cy, r);
  g.addColorStop(0, "rgba(107,72,255," + (0.5 * a) + ")");
  g.addColorStop(0.5, "rgba(94,58,255," + (0.16 * a) + ")");
  g.addColorStop(1, "rgba(94,58,255,0)");
  c.fillStyle = g;
  c.beginPath(); c.arc(cx, cy, r, 0, Math.PI * 2); c.fill();
}
function floorGlow(c, cx, y, rx, a) {
  if (rx <= 0) return;
  c.save();
  c.translate(cx, y); c.scale(1, 0.17);
  const g = c.createRadialGradient(0, 0, 0, 0, 0, rx);
  g.addColorStop(0, "rgba(156,134,255," + (0.85 * a) + ")");
  g.addColorStop(0.3, "rgba(94,58,255," + (0.4 * a) + ")");
  g.addColorStop(1, "rgba(94,58,255,0)");
  c.fillStyle = g;
  c.beginPath(); c.arc(0, 0, rx, 0, Math.PI * 2); c.fill();
  c.restore();
}
function glowFor(c, W, H, cx, cy, h, a) {
  softGlow(c, cx, cy, Math.min(cx, W - cx, cy, H - cy, h * 0.75), a);
  floorGlow(c, cx, cy + h * 0.475, Math.min(cx, W - cx, h * 0.55), a);
}
const animated = (cv) => !RM && (cv.dataset.phone === "hero" ? !cv.dataset.srcBack : cv.dataset.phone === "mining" && !cv.dataset.src);
function draw(cv) {
  const kind = cv.dataset.phone;
  const { c, W, H } = fit(cv);
  if (W < 20 || H < 20) return;
  const again = () => draw(cv);
  try {
    if (kind === "hero") {
      const h = Math.min(H * 0.84, W * 1.62);
      const back = shot(cv.dataset.srcBack, again), front = shot(cv.dataset.src, again);
      glowFor(c, W, H, W * 0.33, H * 0.44, h * 0.8, 0.5);
      drawPhone(c, null, W * 0.33, H * 0.44, h * 0.8, { mode: "float", screen: "mining", img: back, anim: back ? null : sessionAnim(), glow: false, glowA: 0.55 });
      glowFor(c, W, H, W * 0.63, H * 0.55, h, 0.9);
      drawPhone(c, null, W * 0.63, H * 0.55, h, { mode: "tilt", screen: "welcome", img: front, glow: false });
    } else {
      const h = Math.min(H * 0.88, W * 1.8);
      const img = shot(cv.dataset.src, again);
      glowFor(c, W, H, W * 0.5, H * 0.49, h, 1);
      drawPhone(c, null, W * 0.5, H * 0.49, h, { mode: "tilt", screen: kind, img, anim: img || kind !== "mining" ? null : sessionAnim(), glow: false });
    }
  } catch (e) { console.error(e); }
}
const canvases = Array.from(document.querySelectorAll("canvas[data-phone]"));
const drawAll = () => canvases.forEach(draw);
const visible = new Set();
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((list) => list.forEach((e) => { if (e.isIntersecting) visible.add(e.target); else visible.delete(e.target); }));
  canvases.forEach((cv) => io.observe(cv));
} else canvases.forEach((cv) => visible.add(cv));
if ("ResizeObserver" in window) {
  let raf = 0;
  const ro = new ResizeObserver(() => { cancelAnimationFrame(raf); raf = requestAnimationFrame(drawAll); });
  canvases.forEach((cv) => ro.observe(cv));
} else window.addEventListener("resize", drawAll);
drawAll();
if (document.fonts && document.fonts.load) {
  const faces = ['400 20px "Space Grotesk"', '500 20px "Space Grotesk"', '600 20px "Space Grotesk"', '700 20px "Space Grotesk"', '500 20px "JetBrains Mono"', '700 20px "Chakra Petch"'];
  Promise.race([Promise.all(faces.map((f) => document.fonts.load(f, "ALKÉ 0:9"))), new Promise((r) => setTimeout(r, 3000))])
    .then(() => { PHC.clear(); drawAll(); document.documentElement.dataset.ready = "1"; })
    .catch(() => { document.documentElement.dataset.ready = "1"; });
} else document.documentElement.dataset.ready = "1";
if (!RM) setInterval(() => { visible.forEach((cv) => { if (animated(cv)) draw(cv); }); }, 1000);

/* ---------- Menu on small screens ---------- */
const btn = document.getElementById("navToggle"), menu = document.getElementById("menu");
const setMenu = (open) => {
  btn.setAttribute("aria-expanded", String(open));
  btn.setAttribute("aria-label", open ? "Close the menu" : "Open the menu");
  menu.classList.toggle("open", open);
};
btn.addEventListener("click", () => setMenu(btn.getAttribute("aria-expanded") !== "true"));
menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && menu.classList.contains("open")) { setMenu(false); btn.focus(); } });

/* ---------- Placeholders still waiting on a real link or confirmation ---------- */
const todos = Array.from(new Set(Array.from(document.querySelectorAll("[data-todo]")).map((e) => e.dataset.todo)));
if (todos.length) console.info("ALKÉ site: confirm before launch:\n- " + todos.join("\n- "));

/* Coming back from the app with the Back button: clear "Opening the ALKÉ app…". */
window.addEventListener("pageshow", (e) => {
  if (e.persisted) document.querySelectorAll(".join-msg").forEach((m) => { m.className = "join-msg"; m.textContent = ""; });
});

/* ---------- The ALKÉ series ----------
   Each episode plays inline when tapped (the files live with the app). */
const VIDEOS = APP + "/videos/";
document.querySelectorAll("button[data-ep]").forEach((b) => {
  b.addEventListener("click", () => {
    const n = b.dataset.ep;
    const v = document.createElement("video");
    v.className = "ep-video";
    v.src = `${VIDEOS}alke-ep${n}.mp4`;
    v.poster = b.querySelector(".ep-thumb img").getAttribute("src");
    v.controls = true;
    v.playsInline = true;
    v.setAttribute("aria-label", b.getAttribute("aria-label").replace(/^Play /, ""));
    const box = document.createElement("div");
    box.className = "ep playing";
    box.append(v, b.querySelector(".ep-meta"));
    b.replaceWith(box);
    v.play().catch(() => {});
  });
});
