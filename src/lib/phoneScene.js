/* Draws the hero and mining phone scenes into <canvas data-phone> elements.
   Put a real screenshot path in a canvas's data-src (hero back phone:
   data-src-back) and it replaces the drawn stand-in. */
import { drawPhone, PHC } from "./phoneRenderer";

const RM = typeof window !== "undefined" && !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);

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

/* The in-app countdown to the next session ticks while the page is open. */
const t0 = typeof performance !== "undefined" ? performance.now() : 0;
function mineAnim() {
  if (RM) return null;
  const e = (performance.now() - t0) / 1000;
  return { phase: "active", ring: 0.035 + e / 86400, timer: Math.max(0, 86379 - e), tap: 0 };
}

/* Glows stay inside the canvas so no edge ever shows. */
function softGlow(c, cx, cy, r, a) {
  if (r <= 0) return;
  const g = c.createRadialGradient(cx, cy, 0, cx, cy, r);
  g.addColorStop(0, "rgba(107,72,255," + 0.5 * a + ")");
  g.addColorStop(0.5, "rgba(94,58,255," + 0.16 * a + ")");
  g.addColorStop(1, "rgba(94,58,255,0)");
  c.fillStyle = g;
  c.beginPath(); c.arc(cx, cy, r, 0, Math.PI * 2); c.fill();
}
function floorGlow(c, cx, y, rx, a) {
  if (rx <= 0) return;
  c.save();
  c.translate(cx, y); c.scale(1, 0.17);
  const g = c.createRadialGradient(0, 0, 0, 0, 0, rx);
  g.addColorStop(0, "rgba(156,134,255," + 0.85 * a + ")");
  g.addColorStop(0.3, "rgba(94,58,255," + 0.4 * a + ")");
  g.addColorStop(1, "rgba(94,58,255,0)");
  c.fillStyle = g;
  c.beginPath(); c.arc(0, 0, rx, 0, Math.PI * 2); c.fill();
  c.restore();
}
function glowFor(c, W, H, cx, cy, h, a) {
  softGlow(c, cx, cy, Math.min(cx, W - cx, cy, H - cy, h * 0.75), a);
  floorGlow(c, cx, cy + h * 0.475, Math.min(cx, W - cx, h * 0.55), a);
}

function draw(cv) {
  if (!cv.isConnected) return;
  const kind = cv.dataset.phone;
  const { c, W, H } = fit(cv);
  if (W < 20 || H < 20) return;
  const again = () => draw(cv);
  try {
    if (kind === "hero") {
      const h = Math.min(H * 0.84, W * 1.62);
      const back = shot(cv.dataset.srcBack, again), front = shot(cv.dataset.src, again);
      glowFor(c, W, H, W * 0.33, H * 0.44, h * 0.8, 0.5);
      drawPhone(c, null, W * 0.33, H * 0.44, h * 0.8, { mode: "float", screen: "mining", img: back, anim: back ? null : mineAnim(), glow: false, glowA: 0.55 });
      glowFor(c, W, H, W * 0.63, H * 0.55, h, 0.9);
      drawPhone(c, null, W * 0.63, H * 0.55, h, { mode: "tilt", screen: "welcome", img: front, glow: false });
    } else if (kind === "mining") {
      const h = Math.min(H * 0.88, W * 1.8);
      const img = shot(cv.dataset.src, again);
      glowFor(c, W, H, W * 0.5, H * 0.49, h, 1);
      drawPhone(c, null, W * 0.5, H * 0.49, h, { mode: "tilt", screen: "mining", img, anim: img ? null : mineAnim(), glow: false });
    }
  } catch (e) {
    console.error(e);
  }
}

/* Shared state across all mounted phone canvases. */
const canvases = new Set();
const visible = new Set();
let io = null, ro = null, raf = 0, timer = 0, fontsReady = false;
const drawAll = () => canvases.forEach(draw);

function ensureFonts() {
  if (fontsReady) return;
  fontsReady = true;
  if (!document.fonts || !document.fonts.load) return;
  const faces = ['600 20px "Unbounded"', '400 20px "Space Grotesk"', '500 20px "Space Grotesk"', '600 20px "Space Grotesk"', '700 20px "Space Grotesk"', '500 20px "JetBrains Mono"'];
  Promise.race([Promise.all(faces.map((f) => document.fonts.load(f, "ALKÉ 0:9"))), new Promise((r) => setTimeout(r, 3000))])
    .then(() => { PHC.clear(); drawAll(); })
    .catch(() => {});
}

/* Animated scenes are the ones still showing a drawn countdown. */
const isLive = (cv) => (cv.dataset.phone === "mining" ? !cv.dataset.src : !cv.dataset.srcBack);

export function registerPhone(cv) {
  canvases.add(cv);
  if ("IntersectionObserver" in window) {
    io = io || new IntersectionObserver((list) => list.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target))));
    io.observe(cv);
  } else visible.add(cv);
  if ("ResizeObserver" in window) {
    ro = ro || new ResizeObserver(() => { cancelAnimationFrame(raf); raf = requestAnimationFrame(drawAll); });
    ro.observe(cv);
  }
  if (!RM && !timer) timer = setInterval(() => visible.forEach((v) => isLive(v) && draw(v)), 1000);
  ensureFonts();
  draw(cv);

  return () => {
    canvases.delete(cv);
    visible.delete(cv);
    if (io) io.unobserve(cv);
    if (ro) ro.unobserve(cv);
    if (!canvases.size && timer) { clearInterval(timer); timer = 0; }
  };
}
