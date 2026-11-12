/* Canvas renderer for the ALKÉ Network app phones.
   Ported from the "ALKÉ Network.html" design. Every teaser shows a phone with
   the real app screen; until real screenshots are supplied, a drawn stand-in
   of that screen fills the phone. Stand-ins carry no network figures and no
   ALKE amounts. */
const DISPLAY = '"Unbounded", "Space Grotesk", system-ui, sans-serif';
const BODY = '"Space Grotesk", system-ui, -apple-system, "Segoe UI", sans-serif';
const MONO = '"JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospace';
const HAS_LS = typeof CanvasRenderingContext2D !== "undefined" && "letterSpacing" in CanvasRenderingContext2D.prototype;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const c01 = (t) => (t < 0 ? 0 : t > 1 ? 1 : t);
const ez = (t) => { t = c01(t); return 1 - Math.pow(1 - t, 3); };
function hexRgb(h) {
  h = String(h).replace("#", "");
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  const n = parseInt(h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
function rgba(h, a) { const c = hexRgb(h); return "rgba(" + c[0] + "," + c[1] + "," + c[2] + "," + a + ")"; }
function linGrad(ctx, x0, y0, x1, y1, stops) {
  const g = ctx.createLinearGradient(x0, y0, x1, y1);
  stops.forEach((c, i) => {
    if (Array.isArray(c)) g.addColorStop(c[0], c[1]);
    else g.addColorStop(stops.length === 1 ? 0 : i / (stops.length - 1), c);
  });
  return g;
}
function setFont(ctx, fam, weight, size, track) {
  ctx.font = weight + " " + size.toFixed(2) + "px " + fam;
  if (HAS_LS) ctx.letterSpacing = ((track || 0) * size).toFixed(2) + "px";
}
function runW(ctx, t, size, track) {
  if (HAS_LS) return ctx.measureText(t).width - (track || 0) * size;
  let w = 0;
  for (const ch of t) w += ctx.measureText(ch).width + (track || 0) * size;
  return w - (track || 0) * size;
}
function drawRun(ctx, t, x, y, size, track) {
  if (HAS_LS || !track) { ctx.fillText(t, x, y); return; }
  let cx = x;
  for (const ch of t) { ctx.fillText(ch, cx, y); cx += ctx.measureText(ch).width + track * size; }
}
function rr(ctx, x, y, w, h, r) {
  const rad = typeof r === "number" ? [r, r, r, r] : r;
  const [tl, tr, br, bl] = rad.map((v) => Math.max(0, Math.min(v, w / 2, h / 2)));
  ctx.beginPath();
  ctx.moveTo(x + tl, y);
  ctx.lineTo(x + w - tr, y);
  ctx.arcTo(x + w, y, x + w, y + tr, tr);
  ctx.lineTo(x + w, y + h - br);
  ctx.arcTo(x + w, y + h, x + w - br, y + h, br);
  ctx.lineTo(x + bl, y + h);
  ctx.arcTo(x, y + h, x, y + h - bl, bl);
  ctx.lineTo(x, y + tl);
  ctx.arcTo(x, y, x + tl, y, tl);
  ctx.closePath();
}
function coverImage(ctx, img, x, y, w, h, alignTop) {
  const iw = img.naturalWidth || img.width, ih = img.naturalHeight || img.height;
  const ir = iw / ih, br = w / h;
  let sw, sh, sx, sy;
  if (ir > br) { sh = ih; sw = sh * br; sx = (iw - sw) / 2; sy = 0; }
  else { sw = iw; sh = sw / br; sx = 0; sy = alignTop ? 0 : (ih - sh) / 2; }
  ctx.drawImage(img, sx, sy, sw, sh, x, y, w, h);
}
function hexPath(c, cx, cy, R, rot) {
  c.beginPath();
  for (let k = 0; k < 6; k++) {
    const a = -Math.PI / 2 + (Math.PI / 3) * k + (rot || 0);
    const x = cx + R * Math.cos(a), y = cy + R * Math.sin(a);
    if (k) c.lineTo(x, y); else c.moveTo(x, y);
  }
  c.closePath();
}
function drawMark(c, cx, cy, R, o) {
  o = o || {};
  const lw = R * (o.lw || 0.088);
  const d = o.draw == null ? 1 : c01(o.draw);
  if (d <= 0) return;
  c.save();
  if (o.alpha != null) c.globalAlpha *= o.alpha;
  c.lineCap = "round"; c.lineJoin = "round";
  const hexLen = 6 * R;
  if (o.dashed) {
    c.save();
    c.globalAlpha *= 0.8 * ez((d - 0.35) / 0.65);
    c.setLineDash([R * 0.15, R * 0.12]);
    c.lineWidth = lw * 0.55;
    c.strokeStyle = o.hex || TH.gold;
    hexPath(c, cx, cy, R * 1.3);
    c.stroke();
    c.restore();
  }
  if (o.glow) { c.shadowColor = rgba(TH.gold, 0.6); c.shadowBlur = R * 0.4; }
  c.lineWidth = lw;
  c.strokeStyle = o.hex || TH.gold;
  if (d < 1) c.setLineDash([hexLen * ez(d / 0.6), hexLen * 2]);
  hexPath(c, cx, cy, R);
  c.stroke();
  c.setLineDash([]);
  c.shadowBlur = 0;
  const inner = ez((d - 0.3) / 0.7);
  if (inner > 0) {
    c.globalAlpha *= inner;
    c.strokeStyle = o.ink || "#FFFFFF";
    c.lineWidth = lw * 0.86;
    c.beginPath();
    c.moveTo(cx, cy - R * 0.6 * inner); c.lineTo(cx, cy + R * 0.6 * inner);
    const dx = R * 0.26, dy = R * 0.24;
    for (const s of [-1, 1]) for (const k of [0.16, 0.36]) {
      const ax = cx + s * R * k * (2 - inner), bx = ax + s * dx;
      c.moveTo(bx, cy - dy); c.lineTo(ax, cy); c.lineTo(bx, cy + dy);
    }
    c.stroke();
  }
  c.restore();
}
function arrowR(c, x, y, s, color, lw) {
  c.save(); c.strokeStyle = color; c.lineWidth = lw || s * 0.12; c.lineCap = "round"; c.lineJoin = "round";
  c.beginPath(); c.moveTo(x, y); c.lineTo(x + s, y); c.moveTo(x + s * 0.62, y - s * 0.36); c.lineTo(x + s, y); c.lineTo(x + s * 0.62, y + s * 0.36);
  c.stroke(); c.restore();
}
const TH = {
  base: "#0E071C", text: "#F7F2E8", muted: "#B9B3C6", faint: "rgba(185,179,198,.62)",
  gold: "#F5B84D", goldHi: ["#FFE29C", "#F5B84D", "#EA9F34"], violet: "#5E3AFF", lilac: "#A58BFF",
  card: "rgba(255,255,255,.045)", cardLine: "rgba(255,255,255,.10)", line: "rgba(247,242,232,.12)", ink: "#160B2E",
};

/* ============ Phone and app screens ============ */
/* The app-ad rule: every teaser shows a phone with the real app screen.
   Drop the real screenshot into the Screen slot; until then a drawn
   stand-in of that screen fills the phone. Stand-ins carry no network
   figures and no ALKE amounts. */
const PHONE_AR = 0.4755;
const SCR_W = 390;
function devScale(ctx) {
  try { const m = ctx.getTransform(); return Math.max(0.08, Math.hypot(m.a, m.b)); } catch { return 1; }
}

/* ---------- UI kit for the drawn screens (logical 390 px wide) ---------- */
const UIC = {
  text: "#F7F2E8", sub: "#B9B3C6", faint: "rgba(185,179,198,.58)", lilac: "#A58BFF", violet: "#6A47FF",
  gold: "#F5B84D", green: "#4ADE9B", pink: "#FF6F8E", card: "rgba(255,255,255,.055)", line: "rgba(255,255,255,.09)",
  cyan: "#5CE1E6", cyanHi: "#7FE9EE", mint: "#6EE7B7",
};
/* Icons drawn from the app's own 24-unit SVG paths. */
const U_PATHS = {
  games: "M6.7 5.5h10.6a3.9 3.9 0 0 1 3.9 3.5l.7 6.4a2.9 2.9 0 0 1-5 2.3l-1.6-1.8a2 2 0 0 0-1.5-.7h-3.6a2 2 0 0 0-1.5.7l-1.6 1.8a2.9 2.9 0 0 1-5-2.3l.7-6.4a3.9 3.9 0 0 1 3.9-3.5zM8 9.2v3.6M6.2 11h3.6M14.9 12a.6.6 0 1 0 1.2 0a.6.6 0 1 0-1.2 0M16.9 9.8a.6.6 0 1 0 1.2 0a.6.6 0 1 0-1.2 0",
  shield: "M12 3.5 5 6.5v5c0 4.4 2.9 8 7 9.5 4.1-1.5 7-5.1 7-9.5v-5z",
  spin: "M19.5 12a7.5 7.5 0 1 1-2.2-5.3M19.5 4.5v4h-4",
  streak: "M12 21c3.9 0 7-2.6 7-6.4 0-3.3-2.2-5.4-3.9-7.2.1 2.1-.9 3.5-2.1 4C13.4 8 11.7 5.1 9.2 3.5c.4 3.1-1.4 4.9-2.7 6.6C5.4 11.5 5 12.8 5 14.6 5 18.4 8.1 21 12 21z",
  trap: "M3.5 16.5 6 9.5l2.5 7 2.5-7 2.5 7 2.5-7 2.5 7 2.5-7M3.5 19.5h17",
  leak: "M12 3.5s6 6.4 6 10.4a6 6 0 0 1-12 0c0-4 6-10.4 6-10.4zM8.5 14.5h7",
  drain: "M12 3.5 5 6.5v5c0 4.4 2.9 8 7 9.5 4.1-1.5 7-5.1 7-9.5v-5zM9 12h6",
  reset: "M4.5 12a7.5 7.5 0 1 0 2.2-5.3M4.5 4.5v4h4",
  glitch: "M4 6.5h9M15.5 6.5H20M4 12h4M10.5 12H20M4 17.5h11M17.5 17.5H20",
};
function uPath(c, d, x, y, s, color, lw) {
  c.save();
  c.translate(x - s / 2, y - s / 2);
  c.scale(s / 24, s / 24);
  c.strokeStyle = color; c.lineWidth = lw || 2; c.lineCap = "round"; c.lineJoin = "round";
  c.stroke(new Path2D(d));
  c.restore();
}
function uT(c, s, x, y, size, o) {
  o = o || {};
  setFont(c, o.mono ? MONO : o.display ? DISPLAY : BODY, o.w || 500, size, o.tr || 0);
  c.fillStyle = o.color || UIC.text;
  c.textBaseline = "alphabetic";
  let lx = x;
  if (o.align) { const w = runW(c, s, size, o.tr || 0); lx = o.align === "right" ? x - w : x - w / 2; }
  drawRun(c, s, lx, y, size, o.tr || 0);
}
function uTW(c, s, size, o) { o = o || {}; setFont(c, o.mono ? MONO : BODY, o.w || 500, size, o.tr || 0); return runW(c, s, size, o.tr || 0); }
function uWrap(c, s, x, y, size, maxW, lh, o) {
  o = o || {};
  setFont(c, BODY, o.w || 400, size, 0);
  c.fillStyle = o.color || UIC.sub;
  const words = String(s).split(/\s+/);
  let line = "", yy = y;
  const out = [];
  for (const w of words) {
    const t = line ? line + " " + w : w;
    if (c.measureText(t).width > maxW && line) { out.push(line); line = w; } else line = t;
  }
  if (line) out.push(line);
  out.forEach((l) => {
    const lw = c.measureText(l).width;
    c.fillText(l, o.align === "center" ? x - lw / 2 : x, yy);
    yy += lh;
  });
  return yy;
}
function uCard(c, x, y, w, h, r, o) {
  o = o || {};
  c.save();
  rr(c, x, y, w, h, r);
  c.fillStyle = o.fill || linGrad(c, x, y, x, y + h, ["rgba(255,255,255,.07)", "rgba(255,255,255,.03)"]);
  c.fill();
  c.lineWidth = 1;
  c.strokeStyle = o.line || UIC.line;
  c.stroke();
  c.restore();
}
function uChip(c, x, y, text, o) {
  o = o || {};
  const size = o.size || 12, h = o.h || 28, pad = o.pad || 12;
  const dot = o.dot ? 14 : 0, ic = o.icon ? 18 : 0;
  const w = pad * 2 + dot + ic + uTW(c, text, size, { w: o.w || 500 });
  const x0 = o.align === "right" ? x - w : o.align === "center" ? x - w / 2 : x;
  c.save();
  rr(c, x0, y, w, h, h / 2);
  c.fillStyle = o.fill || "rgba(255,255,255,.06)";
  c.fill();
  if (o.dash) c.setLineDash([3, 3]);
  c.strokeStyle = o.line || "rgba(255,255,255,.12)";
  c.lineWidth = 1;
  c.stroke();
  c.setLineDash([]);
  if (o.dot) { c.beginPath(); c.arc(x0 + pad + 4, y + h / 2, 3.6, 0, Math.PI * 2); c.fillStyle = o.dot; c.fill(); }
  if (o.icon) uIcon(c, o.icon, x0 + pad + 7, y + h / 2, 13, o.iconColor || o.color || UIC.text, 1.6);
  uT(c, text, x0 + pad + dot + ic, y + h / 2 + size * 0.36, size, { w: o.w || 500, color: o.color || UIC.text });
  c.restore();
  return w;
}
function uBtn(c, x, y, w, h, text, o) {
  o = o || {};
  c.save();
  c.shadowColor = "rgba(106,71,255,.55)"; c.shadowBlur = 18; c.shadowOffsetY = 6;
  rr(c, x, y, w, h, h / 2);
  c.fillStyle = o.fill || linGrad(c, x, y, x + w, y + h, ["#7C5CFF", "#5E3AFF"]);
  c.fill();
  c.restore();
  const tw = uTW(c, text, o.size || 16, { w: 600 }) + (o.arrow ? 26 : 0);
  uT(c, text, x + (w - tw) / 2, y + h / 2 + (o.size || 16) * 0.36, o.size || 16, { w: 600, color: o.color || "#FFFFFF" });
  if (o.arrow) arrowR(c, x + (w + tw) / 2 - 16, y + h / 2, 14, o.color || "#FFFFFF", 2);
}
function uIcon(c, name, x, y, s, color, lw) {
  if (U_PATHS[name]) { const b = s * 1.12; uPath(c, U_PATHS[name], x, y, b, color, ((lw || s * 0.09) * 24) / b); return; }
  c.save();
  c.translate(x, y);
  c.strokeStyle = color; c.fillStyle = color;
  c.lineWidth = lw || s * 0.09; c.lineCap = "round"; c.lineJoin = "round";
  const k = s / 2;
  c.beginPath();
  switch (name) {
    case "home":
      c.moveTo(-0.8 * k, -0.05 * k); c.lineTo(0, -0.78 * k); c.lineTo(0.8 * k, -0.05 * k);
      c.moveTo(-0.6 * k, -0.22 * k); c.lineTo(-0.6 * k, 0.78 * k); c.lineTo(0.6 * k, 0.78 * k); c.lineTo(0.6 * k, -0.22 * k);
      c.stroke(); break;
    case "govern":
      c.moveTo(-0.85 * k, -0.35 * k); c.lineTo(0, -0.85 * k); c.lineTo(0.85 * k, -0.35 * k); c.closePath();
      for (const cx of [-0.55, 0, 0.55]) { c.moveTo(cx * k, -0.2 * k); c.lineTo(cx * k, 0.55 * k); }
      c.moveTo(-0.9 * k, 0.8 * k); c.lineTo(0.9 * k, 0.8 * k);
      c.stroke(); break;
    case "network":
      c.arc(-0.32 * k, -0.35 * k, 0.3 * k, 0, Math.PI * 2);
      c.moveTo(-0.9 * k, 0.75 * k); c.quadraticCurveTo(-0.9 * k, 0.1 * k, -0.32 * k, 0.1 * k); c.quadraticCurveTo(0.25 * k, 0.1 * k, 0.25 * k, 0.75 * k);
      c.moveTo(0.52 * k, -0.62 * k); c.arc(0.42 * k, -0.4 * k, 0.24 * k, -1.2, 1.9);
      c.moveTo(0.55 * k, 0.12 * k); c.quadraticCurveTo(0.95 * k, 0.2 * k, 0.95 * k, 0.7 * k);
      c.stroke(); break;
    case "profile":
      c.arc(0, -0.35 * k, 0.36 * k, 0, Math.PI * 2);
      c.moveTo(-0.75 * k, 0.8 * k); c.quadraticCurveTo(-0.75 * k, 0.12 * k, 0, 0.12 * k); c.quadraticCurveTo(0.75 * k, 0.12 * k, 0.75 * k, 0.8 * k);
      c.stroke(); break;
    case "info":
      c.moveTo(0, -0.05 * k); c.lineTo(0, 0.5 * k); c.stroke();
      c.beginPath(); c.arc(0, -0.42 * k, 0.09 * k, 0, Math.PI * 2); c.fill(); break;
    case "help":
      c.arc(0, -0.25 * k, 0.38 * k, Math.PI * 1.05, Math.PI * 2.3); c.lineTo(0, 0.25 * k); c.stroke();
      c.beginPath(); c.arc(0, 0.62 * k, 0.09 * k, 0, Math.PI * 2); c.fill(); break;
    case "back":
      c.moveTo(0.25 * k, -0.55 * k); c.lineTo(-0.3 * k, 0); c.lineTo(0.25 * k, 0.55 * k); c.stroke(); break;
    case "flag":
      c.moveTo(-0.55 * k, 0.85 * k); c.lineTo(-0.55 * k, -0.8 * k); c.lineTo(0.6 * k, -0.8 * k); c.lineTo(0.35 * k, -0.4 * k); c.lineTo(0.6 * k, 0); c.lineTo(-0.55 * k, 0); c.stroke(); break;
    case "refresh":
      c.arc(0, 0, 0.62 * k, -Math.PI * 0.35, Math.PI * 1.45); c.stroke();
      c.beginPath(); c.moveTo(0.18 * k, -0.95 * k); c.lineTo(0.5 * k, -0.62 * k); c.lineTo(0.12 * k, -0.38 * k); c.stroke(); break;
    case "flame":
      c.moveTo(0, -0.9 * k); c.bezierCurveTo(0.6 * k, -0.3 * k, 0.75 * k, 0.15 * k, 0.55 * k, 0.5 * k);
      c.bezierCurveTo(0.35 * k, 0.9 * k, -0.35 * k, 0.9 * k, -0.55 * k, 0.5 * k);
      c.bezierCurveTo(-0.7 * k, 0.15 * k, -0.45 * k, -0.15 * k, -0.2 * k, -0.35 * k);
      c.bezierCurveTo(-0.15 * k, -0.05 * k, 0.05 * k, 0.05 * k, 0.1 * k, -0.15 * k);
      c.bezierCurveTo(0.2 * k, -0.45 * k, 0.05 * k, -0.7 * k, 0, -0.9 * k);
      c.stroke(); break;
    case "bell":
      c.moveTo(-0.6 * k, 0.45 * k); c.lineTo(-0.6 * k, -0.05 * k); c.quadraticCurveTo(-0.6 * k, -0.7 * k, 0, -0.7 * k); c.quadraticCurveTo(0.6 * k, -0.7 * k, 0.6 * k, -0.05 * k); c.lineTo(0.6 * k, 0.45 * k); c.lineTo(0.78 * k, 0.6 * k); c.lineTo(-0.78 * k, 0.6 * k); c.closePath();
      c.moveTo(-0.2 * k, 0.8 * k); c.lineTo(0.2 * k, 0.8 * k); c.stroke(); break;
    case "lock":
      rr(c, -0.6 * k, -0.1 * k, 1.2 * k, 0.95 * k, 0.18 * k); c.stroke();
      c.beginPath(); c.arc(0, -0.15 * k, 0.4 * k, Math.PI, 0); c.stroke(); break;
    case "heart":
      c.moveTo(0, 0.8 * k); c.bezierCurveTo(-1.1 * k, 0.05 * k, -0.7 * k, -0.95 * k, 0, -0.35 * k); c.bezierCurveTo(0.7 * k, -0.95 * k, 1.1 * k, 0.05 * k, 0, 0.8 * k); c.fill(); break;
    case "share":
      c.moveTo(0, 0.3 * k); c.lineTo(0, -0.85 * k); c.moveTo(-0.38 * k, -0.48 * k); c.lineTo(0, -0.85 * k); c.lineTo(0.38 * k, -0.48 * k);
      c.moveTo(-0.45 * k, -0.15 * k); c.lineTo(-0.7 * k, -0.15 * k); c.lineTo(-0.7 * k, 0.85 * k); c.lineTo(0.7 * k, 0.85 * k); c.lineTo(0.7 * k, -0.15 * k); c.lineTo(0.45 * k, -0.15 * k);
      c.stroke(); break;
    case "check":
      c.moveTo(-0.55 * k, 0.02 * k); c.lineTo(-0.15 * k, 0.42 * k); c.lineTo(0.6 * k, -0.4 * k); c.stroke(); break;
    case "plus":
      c.moveTo(-0.6 * k, 0); c.lineTo(0.6 * k, 0); c.moveTo(0, -0.6 * k); c.lineTo(0, 0.6 * k); c.stroke(); break;
    case "chev":
      c.moveTo(-0.2 * k, -0.5 * k); c.lineTo(0.3 * k, 0); c.lineTo(-0.2 * k, 0.5 * k); c.stroke(); break;
    case "spark":
      c.moveTo(0, -0.9 * k); c.quadraticCurveTo(0.1 * k, -0.1 * k, 0.9 * k, 0); c.quadraticCurveTo(0.1 * k, 0.1 * k, 0, 0.9 * k);
      c.quadraticCurveTo(-0.1 * k, 0.1 * k, -0.9 * k, 0); c.quadraticCurveTo(-0.1 * k, -0.1 * k, 0, -0.9 * k); c.fill(); break;
  }
  c.restore();
}
function uStatus(c) {
  uT(c, "9:41", 34, 34, 15.5, { w: 600 });
  c.save();
  c.fillStyle = UIC.text;
  [5, 7.5, 10, 12.5].forEach((h, i) => { rr(c, 290 + i * 5.2, 30 - h, 3.4, h, 1); c.fill(); });
  c.strokeStyle = UIC.text; c.lineWidth = 2; c.lineCap = "round";
  for (let i = 0; i < 3; i++) { c.beginPath(); c.arc(323, 31, 3 + i * 3.6, -Math.PI * 0.76, -Math.PI * 0.24); c.stroke(); }
  rr(c, 336, 21.5, 24, 12, 3.5); c.lineWidth = 1.2; c.strokeStyle = "rgba(247,242,232,.55)"; c.stroke();
  rr(c, 338, 23.5, 17, 8, 2); c.fill();
  rr(c, 361, 25.5, 2, 4, 1); c.fillStyle = "rgba(247,242,232,.55)"; c.fill();
  c.restore();
}
function uTabs(c, H, active) {
  const y = H - 92, h = 66;
  c.save();
  c.shadowColor = "rgba(0,0,0,.45)"; c.shadowBlur = 20;
  rr(c, 14, y, 362, h, 26);
  c.fillStyle = "rgba(24,15,44,.92)";
  c.fill();
  c.restore();
  rr(c, 14, y, 362, h, 26); c.strokeStyle = "rgba(255,255,255,.09)"; c.lineWidth = 1; c.stroke();
  const items = [["home", "Home", 52], ["games", "Games", 122], ["mine", "Mine", 195], ["network", "Network", 268], ["profile", "Profile", 338]];
  items.forEach(([ic, lab, x]) => {
    const on = active === ic;
    if (ic === "mine") {
      c.save();
      c.shadowColor = "rgba(106,71,255,.75)"; c.shadowBlur = on ? 22 : 12;
      hexPath(c, x, y + 20, 25);
      c.fillStyle = linGrad(c, x, y - 5, x, y + 45, ["#8466FF", "#5530F0"]);
      c.fill();
      c.restore();
      drawMark(c, x, y + 20, 11, { hex: "#FFFFFF", ink: "#FFFFFF", lw: 0.12 });
      uT(c, lab, x, y + 58, 10.5, { w: 600, color: on ? UIC.text : UIC.sub, align: "center" });
      return;
    }
    uIcon(c, ic, x, y + 25, 20, on ? UIC.text : "rgba(185,179,198,.75)", 1.7);
    uT(c, lab, x, y + 54, 10.5, { w: on ? 600 : 500, color: on ? UIC.text : "rgba(185,179,198,.8)", align: "center" });
  });
}
function uHomeBar(c, H) { rr(c, 128, H - 13, 134, 5, 3); c.fillStyle = "rgba(247,242,232,.55)"; c.fill(); }
function uBg(c, H, gx, gy) {
  c.fillStyle = linGrad(c, 0, 0, 0, H, ["#140A2C", "#0B0619", "#07040F"]);
  c.fillRect(0, 0, SCR_W, H);
  const g = c.createRadialGradient(gx, gy, 0, gx, gy, 300);
  g.addColorStop(0, "rgba(94,58,255,.38)"); g.addColorStop(0.5, "rgba(94,58,255,.1)"); g.addColorStop(1, "rgba(94,58,255,0)");
  c.fillStyle = g; c.fillRect(0, 0, SCR_W, H);
}
/* Orb with dial ring and the mark (welcome, home, mining). */
function uOrb(c, cx, cy, R, prog, o) {
  o = o || {};
  c.save();
  c.strokeStyle = "rgba(165,139,255,.24)"; c.lineWidth = 1.2;
  for (let i = 0; i < 72; i++) {
    const a = (i / 72) * Math.PI * 2, r0 = R - 12, r1 = R - (i % 6 === 0 ? 4 : 7);
    c.beginPath(); c.moveTo(cx + Math.cos(a) * r0, cy + Math.sin(a) * r0); c.lineTo(cx + Math.cos(a) * r1, cy + Math.sin(a) * r1); c.stroke();
  }
  c.beginPath(); c.arc(cx, cy, R, 0, Math.PI * 2); c.strokeStyle = "rgba(165,139,255,.22)"; c.lineWidth = 2; c.stroke();
  if (prog > 0) {
    const a0 = -Math.PI / 2, a1 = a0 + Math.PI * 2 * prog;
    c.beginPath(); c.arc(cx, cy, R, a0, a1);
    c.strokeStyle = linGrad(c, cx - R, cy - R, cx + R, cy + R, ["#C9B8FF", "#7C5CFF"]); c.lineWidth = 3.4; c.lineCap = "round";
    c.shadowColor = "rgba(150,120,255,.9)"; c.shadowBlur = 10; c.stroke();
    c.shadowBlur = 12; c.beginPath(); c.arc(cx + Math.cos(a1) * R, cy + Math.sin(a1) * R, 5, 0, Math.PI * 2); c.fillStyle = "#FFFFFF"; c.fill();
  }
  c.restore();
  const r = R * (o.orb || 0.72);
  const g = c.createRadialGradient(cx - r * 0.2, cy - r * 0.3, r * 0.05, cx, cy, r);
  g.addColorStop(0, "#9A82FF"); g.addColorStop(0.45, "#5B38F0"); g.addColorStop(0.85, "#2D168A"); g.addColorStop(1, "rgba(45,22,138,0)");
  c.save();
  c.shadowColor = "rgba(106,71,255,.8)"; c.shadowBlur = 40;
  c.beginPath(); c.arc(cx, cy, r, 0, Math.PI * 2); c.fillStyle = g; c.fill();
  c.restore();
  c.beginPath(); c.arc(cx, cy, r * 0.82, 0, Math.PI * 2); c.strokeStyle = "rgba(255,255,255,.12)"; c.lineWidth = 1; c.stroke();
  drawMark(c, cx, cy, r * 0.44, { hex: "#FFFFFF", ink: "#FFFFFF", lw: 0.1 });
}

/* ---------- ALKÉ Hex board: 19 flat-top cells, columns A–E ---------- */
const HEX_COLS = [3, 4, 5, 4, 3];
const HEX_CELLS = (() => {
  const out = [];
  HEX_COLS.forEach((n, ci) => {
    for (let ri = 0; ri < n; ri++) out.push({ code: "ABCDE"[ci] + (ri + 1), x: (ci - 2) * 1.5, y: (ri - (n - 1) / 2) * Math.sqrt(3) });
  });
  return out;
})();
function hexNeighbors(code) {
  const a = HEX_CELLS.find((c) => c.code === code);
  return HEX_CELLS.filter((b) => b !== a && Math.hypot(a.x - b.x, a.y - b.y) < 1.8).map((b) => b.code);
}
/* Board states. "mid" is consistent with the rules: a number counts the traps
   touching a tile, a gold rim means a gold piece touches it. */
const HEX_BOARDS = {
  play: { gold: ["B2", "C3", "C4", "C5"], open: [], traps: [] },
  fresh: { gold: [], open: [], traps: [] },
  mid: { gold: [], open: ["C1", "C2", "D2", "B2"], traps: ["A1", "D1", "E3"], pieces: ["B3", "C3", "C4", "C5", "D3", "B4"] },
};
function drawHexBoard(c, cx, cy, r, o) {
  o = o || {};
  const B = HEX_BOARDS[o.board || "play"] || HEX_BOARDS.play;
  const F = r * 5.05;
  c.save();
  hexPath(c, cx, cy, F);
  c.fillStyle = linGrad(c, cx, cy - F, cx, cy + F, ["rgba(84,58,190,.32)", "rgba(40,24,98,.42)"]);
  c.fill();
  c.strokeStyle = "rgba(245,184,77,.32)"; c.lineWidth = r * 0.04; c.stroke();
  for (const cell of HEX_CELLS) {
    const x = cx + cell.x * r, y = cy + cell.y * r, cr = r * 0.95;
    const isGold = B.gold.includes(cell.code), isOpen = B.open.includes(cell.code);
    if (isGold) {
      c.save();
      hexPath(c, x, y, cr, Math.PI / 6);
      c.fillStyle = "#0E0A1C"; c.fill();
      c.shadowColor = "rgba(245,184,77,.8)"; c.shadowBlur = r * 0.35;
      c.strokeStyle = "#F7C35E"; c.lineWidth = r * 0.085; c.stroke();
      c.restore();
      c.beginPath(); c.arc(x, y, r * 0.06, 0, Math.PI * 2); c.fillStyle = "rgba(247,242,232,.35)"; c.fill();
    } else if (isOpen) {
      const n = hexNeighbors(cell.code).filter((nb) => B.traps.includes(nb)).length;
      const rim = (B.pieces || []).some((p) => hexNeighbors(cell.code).includes(p));
      c.save();
      hexPath(c, x, y, cr, Math.PI / 6);
      c.fillStyle = "#130E22"; c.fill();
      c.strokeStyle = rim ? "rgba(247,195,94,.95)" : "rgba(255,255,255,.12)"; c.lineWidth = rim ? r * 0.075 : r * 0.04;
      if (rim) { c.shadowColor = "rgba(245,184,77,.55)"; c.shadowBlur = r * 0.25; }
      c.stroke();
      c.restore();
      if (n > 0) uT(c, String(n), x, y + r * 0.27, r * 0.78, { w: 700, color: UIC.text, align: "center" });
    } else {
      c.save();
      hexPath(c, x, y, cr, Math.PI / 6);
      c.fillStyle = linGrad(c, x, y - cr, x, y + cr, ["#4A36A8", "#2E2170"]);
      c.fill();
      c.strokeStyle = "rgba(150,128,255,.75)"; c.lineWidth = r * 0.055; c.stroke();
      hexPath(c, x, y, cr * 0.8, Math.PI / 6);
      c.strokeStyle = "rgba(255,255,255,.07)"; c.lineWidth = r * 0.04; c.stroke();
      c.restore();
      if (o.codes) uT(c, cell.code, x, y + r * 0.2, r * 0.52, { mono: true, w: 600, color: "#E2D9FF", align: "center" });
      else uT(c, "?", x, y + r * 0.27, r * 0.72, { w: 700, color: "#D7CBFF", align: "center" });
    }
  }
  c.restore();
}

/* ---------- ALKÉ Rush: the 19-node lattice (pointy-top) and a 7-node mini ---------- */
const RUSH_KINDS = (() => {
  const gold = { fill: "#16132C", edge: "rgba(242,198,107,.6)", ink: "#F2C66B" };
  const bad = { fill: "#2A0E18", edge: "rgba(255,138,154,.7)", ink: "#FF8A9A" };
  return {
    xp20: Object.assign({ label: "+20" }, gold),
    xp50: Object.assign({ label: "+50" }, gold, { edge: "rgba(242,198,107,.85)" }),
    xp100: { label: "+100", fill: "#3A2A12", edge: "#F7D58A", ink: "#FCE7B5" },
    boost: { label: "×2", fill: "#201A46", edge: "rgba(198,182,255,.8)", ink: "#C6B6FF" },
    shield: { icon: "shield", fill: "#0F231E", edge: "rgba(110,231,183,.75)", ink: "#6EE7B7" },
    spin: { icon: "spin", fill: "#111B37", edge: "rgba(143,178,255,.75)", ink: "#8FB2FF" },
    streak: { icon: "streak", fill: "#23170D", edge: "rgba(247,178,103,.75)", ink: "#F7B267" },
    mystery: { label: "?", fill: "#0D2227", edge: "rgba(127,233,238,.75)", ink: "#7FE9EE" },
    trap: Object.assign({ icon: "trap" }, bad), leak: Object.assign({ icon: "leak" }, bad), drain: Object.assign({ icon: "drain" }, bad),
    reset: Object.assign({ icon: "reset" }, bad), glitch: Object.assign({ icon: "glitch" }, bad),
  };
})();
const RUSH_LAYOUT = ["xp20", "shield", "xp50", "leak", "xp20", "boost", "xp20", "spin", "xp50", "xp100", "trap", "xp20", "reset", "mystery", "xp50", "streak", "glitch", "xp20", "drain"];
const RUSH_CELLS = (() => {
  const out = [];
  for (let r = -2; r <= 2; r++) for (let q = -2; q <= 2; q++) if (Math.abs(q + r) <= 2) out.push({ q, r });
  return out;
})();
function litHex(c, x, y, R) {
  c.save();
  c.shadowColor = "rgba(92,225,230,.95)"; c.shadowBlur = R * 0.9;
  hexPath(c, x, y, R);
  c.fillStyle = linGrad(c, x, y - R, x, y + R, ["#B9FAFB", "#25B5C6"]); c.fill();
  c.restore();
  hexPath(c, x, y, R); c.strokeStyle = "#E9FEFF"; c.lineWidth = Math.max(1.4, R * 0.07); c.stroke();
}
/* The board mid-run: the signal has just landed on `landed`, after walking `trail`. */
function drawRushLattice(c, cx, cy, R, o) {
  o = o || {};
  const w = Math.sqrt(3) * R, pos = RUSH_CELLS.map((p) => ({ x: cx + w * (p.q + p.r / 2), y: cy + R * 1.5 * p.r }));
  const trail = o.trail || [];
  if (trail.length > 1) {
    c.save();
    c.setLineDash([2, 6]); c.lineCap = "round"; c.lineWidth = 2.2; c.strokeStyle = "rgba(127,233,238,.55)";
    c.beginPath(); trail.forEach((i, k) => (k ? c.lineTo(pos[i].x, pos[i].y) : c.moveTo(pos[i].x, pos[i].y))); c.stroke();
    c.restore();
  }
  RUSH_CELLS.forEach((p, i) => {
    const K = RUSH_KINDS[RUSH_LAYOUT[i]], x = pos[i].x, y = pos[i].y, r = R * 0.92;
    const lit = i === o.landed;
    if (lit) litHex(c, x, y, r);
    else {
      hexPath(c, x, y, r); c.fillStyle = K.fill; c.fill();
      c.strokeStyle = K.edge; c.lineWidth = 1.6; c.stroke();
    }
    const ink = lit ? "#04161A" : K.ink;
    if (K.label) uT(c, K.label, x, y + R * (K.label === "?" ? 0.2 : 0.16), R * (K.label === "+100" ? 0.36 : K.label === "?" ? 0.52 : 0.42), { w: 700, color: ink, align: "center" });
    else uIcon(c, K.icon, x, y, R * 0.6, ink, 1.8);
  });
}
function uLattice7(c, cx, cy, R) {
  const w = Math.sqrt(3) * R;
  const ring = [[w, 0, "rgba(110,231,183,.85)"], [w / 2, R * 1.5, "rgba(255,138,154,.85)"], [-w / 2, R * 1.5, "rgba(247,178,103,.85)"], [-w, 0, "rgba(198,182,255,.85)"], [-w / 2, -R * 1.5, "rgba(143,178,255,.85)"], [w / 2, -R * 1.5, "rgba(242,198,107,.9)"]];
  ring.forEach(([dx, dy, edge]) => {
    hexPath(c, cx + dx, cy + dy, R * 0.9); c.fillStyle = "#14122A"; c.fill();
    c.strokeStyle = edge; c.lineWidth = 1.4; c.stroke();
  });
  litHex(c, cx, cy, R * 0.9);
  c.save();
  c.strokeStyle = "#04161A"; c.lineWidth = Math.max(1.4, R * 0.16); c.lineCap = "round"; c.lineJoin = "round";
  c.beginPath(); c.moveTo(cx - R * 0.38, cy); c.lineTo(cx + R * 0.32, cy); c.moveTo(cx + R * 0.06, cy - R * 0.28); c.lineTo(cx + R * 0.34, cy); c.lineTo(cx + R * 0.06, cy + R * 0.28); c.stroke();
  c.restore();
}

/* ---------- Screens ---------- */
function drawScreen(c, key, H, o) {
  o = o || {};
  const fn = SCREEN_DRAW[key] || SCREEN_DRAW.home;
  c.save();
  fn(c, H, o);
  c.restore();
}
const SCREEN_DRAW = {
  welcome(c, H) {
    uBg(c, H, 200, 250);
    uStatus(c);
    drawMark(c, 40, 82, 11, { hex: UIC.lilac, ink: "#FFFFFF", lw: 0.12 });
    uT(c, "ALKÉ", 60, 88, 14, { display: true, w: 600, tr: 0.22 });
    uT(c, "Sign in", 360, 88, 15, { w: 600, color: UIC.lilac, align: "right" });
    uOrb(c, 200, 256, 118, 0.62, { orb: 0.66 });
    uChip(c, 30, 136, "Daily sessions open", { dot: UIC.green, size: 12, h: 30, fill: "rgba(18,12,34,.85)" });
    uChip(c, 372, 336, "New game · ALKÉ Rush", { icon: "games", iconColor: UIC.cyanHi, size: 12, h: 30, align: "right", fill: "rgba(18,12,34,.85)" });
    rr(c, 30, 398, 20, 5, 3); c.fillStyle = UIC.lilac; c.fill();
    c.beginPath(); c.arc(60, 400.5, 2.6, 0, Math.PI * 2); c.fillStyle = "rgba(185,179,198,.45)"; c.fill();
    uT(c, "Join the Network.", 30, 448, 28, { w: 700 });
    uT(c, "Shape the Future.", 30, 484, 28, { w: 700, color: UIC.lilac });
    uWrap(c, "The community home of the Alkebuleum blockchain. Show up each day, learn, contribute and play.", 30, 522, 13.5, 330, 20, { color: UIC.sub });
    const chips = ["Nothing to buy", "No wallet to start", "About a minute"];
    let cs = 11.5, cp = 10;
    const cw = () => chips.reduce((m, t) => m + cp * 2 + 18 + uTW(c, t, cs, { w: 500 }), 0) + 6 * (chips.length - 1);
    while (cw() > 330 && cs > 8.5) { cs -= 0.25; cp = Math.max(6, cp - 0.25); }
    let x = 30;
    chips.forEach((t) => { x += uChip(c, x, 596, t, { icon: "check", iconColor: UIC.green, size: cs, h: 28, pad: cp }) + 6; });
    uBtn(c, 30, 650, 330, 54, "Get started", { arrow: true, size: 16.5 });
    uT(c, "I already have an account", 195, 742, 14, { w: 500, color: UIC.sub, align: "center" });
    uHomeBar(c, H);
  },
  home(c, H) {
    uBg(c, H, 300, 200);
    uStatus(c);
    hexPath(c, 40, 88, 21); c.fillStyle = "rgba(94,58,255,.25)"; c.fill(); c.strokeStyle = UIC.lilac; c.lineWidth = 1.5; c.stroke();
    drawMark(c, 40, 88, 9.5, { hex: UIC.gold, ink: "#FFFFFF", lw: 0.13 });
    uT(c, "Good evening", 72, 82, 12.5, { color: UIC.sub });
    uT(c, "Alker", 72, 103, 18, { w: 600 });
    uIcon(c, "bell", 352, 88, 21, UIC.text, 1.7);
    c.beginPath(); c.arc(360, 79, 4, 0, Math.PI * 2); c.fillStyle = UIC.gold; c.fill();
    uCard(c, 16, 124, 358, 198, 24, { fill: linGrad(c, 16, 124, 374, 322, ["rgba(110,80,255,.28)", "rgba(40,22,96,.35)"]), line: "rgba(165,139,255,.3)" });
    uT(c, "TODAY'S SESSION", 34, 156, 10.5, { mono: true, tr: 0.16, color: UIC.lilac });
    uT(c, "Ready when", 34, 190, 23, { w: 700 });
    uT(c, "you are", 34, 218, 23, { w: 700 });
    uChip(c, 34, 232, "12-day streak", { icon: "flame", iconColor: UIC.gold, color: UIC.gold, size: 12, h: 28, fill: "rgba(245,184,77,.1)", line: "rgba(245,184,77,.3)" });
    uBtn(c, 34, 272, 150, 38, "Start session", { size: 14 });
    uOrb(c, 296, 222, 62, 0, { orb: 0.7 });
    uCard(c, 16, 336, 358, 150, 22);
    uT(c, "YOUR ALLOCATION", 34, 366, 10.5, { mono: true, tr: 0.16, color: UIC.sub });
    uChip(c, 356, 348, "Locked", { icon: "lock", size: 11.5, h: 26, pad: 10, align: "right" });
    rr(c, 34, 392, 322, 10, 5); c.fillStyle = "rgba(255,255,255,.08)"; c.fill();
    rr(c, 34, 392, 228, 10, 5); c.fillStyle = linGrad(c, 34, 0, 262, 0, ["#7C5CFF", "#A58BFF"]); c.fill();
    c.save(); rr(c, 266, 392, 90, 10, 5); c.clip(); c.strokeStyle = "rgba(165,139,255,.55)"; c.lineWidth = 2;
    for (let i = 0; i < 20; i++) { c.beginPath(); c.moveTo(262 + i * 7, 404); c.lineTo(272 + i * 7, 390); c.stroke(); } c.restore();
    c.beginPath(); c.arc(38, 426, 4, 0, Math.PI * 2); c.fillStyle = "#8F78FF"; c.fill();
    uT(c, "Warmed", 48, 430, 12, { w: 500 });
    c.beginPath(); c.arc(120, 426, 4, 0, Math.PI * 2); c.strokeStyle = UIC.lilac; c.lineWidth = 1.5; c.stroke();
    uT(c, "Still cold", 130, 430, 12, { w: 500 });
    uWrap(c, "Each verified invite warms 10 of your cold ALKE a day. Only warmed ALKE converts.", 34, 458, 11.5, 320, 16, { color: UIC.faint });
    uCard(c, 16, 500, 358, 118, 22, { line: "rgba(245,184,77,.22)" });
    const mini = [[0, 0, 1], [-1.5, -0.866, 0], [0, -1.732, 1], [1.5, -0.866, 0], [-1.5, 0.866, 0], [1.5, 0.866, 1], [0, 1.732, 0]];
    mini.forEach(([mx, my, g]) => {
      hexPath(c, 66 + mx * 12.5, 559 + my * 12.5, 11.6, Math.PI / 6);
      c.fillStyle = g ? "#120C20" : "#3E2E98"; c.fill();
      c.strokeStyle = g ? UIC.gold : "rgba(150,128,255,.8)"; c.lineWidth = g ? 2 : 1.2; c.stroke();
    });
    uT(c, "ALKÉ HEX · DAILY BOARD LIVE", 114, 530, 9.5, { mono: true, tr: 0.12, color: UIC.gold });
    uT(c, "Rebuild the mark", 114, 554, 17, { w: 600 });
    uT(c, "Find the gold pieces, dodge the traps.", 114, 576, 12, { color: UIC.sub });
    uChip(c, 114, 586, "Game XP · play only", { size: 10.5, h: 22, pad: 9, color: UIC.lilac, line: "rgba(165,139,255,.35)", fill: "rgba(94,58,255,.12)" });
    uCard(c, 16, 632, 358, 104, 22, { line: "rgba(92,225,230,.3)", fill: linGrad(c, 16, 632, 374, 736, ["rgba(60,199,214,.12)", "rgba(60,199,214,.03)"]) });
    uLattice7(c, 66, 684, 10.5);
    uT(c, "ALKÉ RUSH · NEW GAME", 114, 662, 9.5, { mono: true, tr: 0.12, color: UIC.cyanHi });
    uT(c, "Risk it or bank it", 114, 686, 17, { w: 600 });
    uT(c, "Stop on the XP. Bank before a hazard hits.", 114, 708, 12, { color: UIC.sub });
    uIcon(c, "chev", 352, 684, 16, UIC.sub, 1.8);
    uTabs(c, H, "home");
    uHomeBar(c, H);
  },
  mining(c, H, o) {
    const an = o.anim || null;
    const idle = an && an.phase === "idle";
    uBg(c, H, 195, 320);
    uStatus(c);
    uT(c, "COMMUNITY MINING", 26, 90, 11, { mono: true, tr: 0.16, color: UIC.sub });
    c.beginPath(); c.arc(352, 84, 17, 0, Math.PI * 2); c.fillStyle = "rgba(255,255,255,.06)"; c.fill(); c.strokeStyle = UIC.line; c.lineWidth = 1; c.stroke();
    c.beginPath(); c.arc(352, 84, 9, 0, Math.PI * 2); c.strokeStyle = UIC.text; c.lineWidth = 1.4; c.stroke();
    uIcon(c, "info", 352, 85, 13, UIC.text, 1.6);
    uT(c, idle ? "Ready when you are" : "Session active", 26, 126, 26, { w: 600 });
    if (idle) uChip(c, 26, 142, "One tap starts today's session", { dot: UIC.lilac, size: 12, h: 30, fill: "rgba(165,139,255,.1)", line: "rgba(165,139,255,.3)" });
    else uChip(c, 26, 142, "Recorded at 21:04 · runs for 24 hours", { dot: UIC.green, size: 12, h: 30, fill: "rgba(74,222,155,.08)", line: "rgba(74,222,155,.3)", color: "#CFF7E4" });
    const ring = an ? an.ring : 0.035;
    uOrb(c, 195, 318, 122, ring, { orb: 0.72 });
    if (an && an.tap > 0 && an.tap < 1) {
      c.save();
      c.beginPath(); c.arc(195, 318, 40 + an.tap * 110, 0, Math.PI * 2);
      c.strokeStyle = "rgba(255,255,255," + (0.6 * (1 - an.tap)).toFixed(3) + ")"; c.lineWidth = 3; c.stroke();
      c.restore();
    }
    let secs = an && an.timer != null ? an.timer : 86379;
    const hh = Math.floor(secs / 3600), mm = Math.floor((secs % 3600) / 60), ss = Math.floor(secs % 60);
    const clock = [hh, mm, ss].map((n) => String(n).padStart(2, "0")).join(":");
    uT(c, idle ? "24:00:00" : clock, 195, 500, 42, { w: 600, align: "center" });
    uT(c, idle ? "ONE TAP STARTS 24 HOURS" : "UNTIL YOUR NEXT SESSION", 195, 526, 11, { mono: true, tr: 0.18, color: UIC.sub, align: "center" });
    const sw = uTW(c, "13-day streak once today is verified", 13, { w: 500 });
    uIcon(c, "flame", 195 - sw / 2 - 12, 552, 15, UIC.gold, 1.6);
    uT(c, "13-day streak once today is verified", 195 - sw / 2 + 2, 557, 13, { w: 500, color: UIC.gold });
    uCard(c, 16, 584, 358, 150, 22);
    uT(c, "TODAY'S ESTIMATE", 34, 614, 10.5, { mono: true, tr: 0.16, color: UIC.sub });
    uChip(c, 356, 598, "Pending", { size: 11.5, h: 26, pad: 11, align: "right", dash: true, line: "rgba(247,242,232,.35)", fill: "rgba(255,255,255,0)" });
    uT(c, "Not a reward yet.", 34, 648, 20, { w: 600 });
    uWrap(c, "The amount is set once today is verified and depends on participation.", 34, 672, 12.5, 320, 17, { color: UIC.sub });
    const steps = [["Recorded", UIC.green, true], ["Pending", UIC.lilac, false], ["Set", "rgba(185,179,198,.5)", false]];
    c.strokeStyle = "rgba(255,255,255,.12)"; c.lineWidth = 2; c.beginPath(); c.moveTo(44, 712); c.lineTo(300, 712); c.stroke();
    steps.forEach(([t, col, done], i) => {
      const x = 44 + i * 128;
      c.beginPath(); c.arc(x, 712, 6, 0, Math.PI * 2); c.fillStyle = done ? col : "#140C26"; c.fill(); c.strokeStyle = col; c.lineWidth = 1.6; c.stroke();
      uT(c, t, x + 12, 716, 11.5, { w: 500, color: done ? UIC.text : UIC.sub });
    });
    uTabs(c, H, "mine");
    uHomeBar(c, H);
  },
  hex(c, H, o) {
    const chal = !!o.codes;
    uBg(c, H, 195, 420);
    uStatus(c);
    c.beginPath(); c.arc(42, 92, 20, 0, Math.PI * 2); c.fillStyle = "rgba(255,255,255,.06)"; c.fill(); c.strokeStyle = UIC.line; c.lineWidth = 1; c.stroke();
    uIcon(c, "back", 42, 92, 16, UIC.text, 2);
    c.beginPath(); c.arc(348, 92, 20, 0, Math.PI * 2); c.fillStyle = "rgba(255,255,255,.06)"; c.fill(); c.stroke();
    uIcon(c, "help", 348, 90, 16, UIC.text, 2);
    uT(c, chal ? "DAILY BOARD · SAME FOR EVERYONE" : "LEVEL 4 · EASY", 195, 84, 10.5, { mono: true, tr: 0.18, color: UIC.gold, align: "center" });
    uT(c, chal ? "Rebuild the mark" : "Build the frame", 195, 108, 18, { w: 600, align: "center" });
    const stats = [["LIVES", 98, "rgba(255,111,142,.12)", "rgba(255,111,142,.35)"], [chal ? "22" : "13", 72, null, null, "MOVES"], [chal ? "2:30" : "0:02", 72, null, null, "TIME"], ["0", 92, "rgba(245,184,77,.1)", "rgba(245,184,77,.4)", "ROUND XP"]];
    let x = 14;
    stats.forEach((s, i) => {
      uCard(c, x, 128, s[1], 56, 16, { fill: s[2] || "rgba(255,255,255,.06)", line: s[3] || UIC.line });
      if (i === 0) {
        [0, 1, 2].forEach((k) => uIcon(c, "heart", x + 27 + k * 22, 148, 17, UIC.pink));
        uT(c, "LIVES", x + s[1] / 2, 175, 9.5, { mono: true, tr: 0.12, color: UIC.sub, align: "center" });
      } else {
        uT(c, s[0], x + s[1] / 2, 157, 19, { w: 600, align: "center", color: i === 3 ? UIC.gold : UIC.text });
        uT(c, s[4], x + s[1] / 2, 175, 9.5, { mono: true, tr: 0.1, color: i === 3 ? UIC.gold : UIC.sub, align: "center" });
      }
      x += s[1] + 8;
    });
    uCard(c, 14, 194, 362, 68, 18);
    drawMark(c, 50, 228, 15, { hex: "rgba(245,184,77,.75)", ink: "rgba(247,242,232,.35)", lw: 0.07, dashed: true });
    uT(c, "0 of 6 pieces", 84, 221, 14.5, { w: 600 });
    uT(c, "0 / 30 XP", 360, 221, 11, { mono: true, color: UIC.sub, align: "right" });
    rr(c, 84, 230, 276, 5, 3); c.fillStyle = "rgba(255,255,255,.08)"; c.fill();
    uT(c, "Banked only when you win", 84, 253, 11.5, { color: UIC.sub });
    drawHexBoard(c, 195, 448, 29, { board: o.board || (chal ? "fresh" : "play"), codes: chal });
    rr(c, 14, 614, 362, 32, 16); c.fillStyle = "rgba(255,255,255,.06)"; c.fill(); c.strokeStyle = UIC.line; c.lineWidth = 1; c.stroke();
    uT(c, chal ? "First move is always safe. Reply with your tile." : "Find 6 gold pieces. Read the numbers and gold rims.", 195, 635, 12, { w: 600, align: "center" });
    rr(c, 14, 658, 290, 48, 24); c.fillStyle = "rgba(255,255,255,.05)"; c.fill(); c.stroke();
    uIcon(c, "flag", 124, 682, 16, UIC.text, 1.8);
    uT(c, "Flag a trap", 140, 688, 15, { w: 600 });
    c.beginPath(); c.arc(340, 682, 24, 0, Math.PI * 2); c.fillStyle = "rgba(255,255,255,.05)"; c.fill(); c.stroke();
    uIcon(c, "refresh", 340, 683, 17, UIC.text, 1.8);
    uWrap(c, "Game XP is for play only: no monetary value, not transferable, never redeemable for ALKE.", 195, 736, 11, 330, 16, { color: UIC.faint, align: "center" });
    uHomeBar(c, H);
  },
  games(c, H) {
    uBg(c, H, 280, 300);
    uStatus(c);
    uT(c, "GAMES", 24, 88, 11, { mono: true, tr: 0.18, color: UIC.lilac });
    uT(c, "Play for game XP", 24, 120, 26, { w: 700 });
    uCard(c, 16, 140, 358, 106, 20);
    uT(c, "TODAY", 34, 166, 10.5, { mono: true, tr: 0.16, color: UIC.sub });
    uT(c, "Resets at midnight", 356, 166, 11, { color: UIC.faint, align: "right" });
    hexPath(c, 44, 193, 9, Math.PI / 6); c.fillStyle = "#120C20"; c.fill(); c.strokeStyle = UIC.gold; c.lineWidth = 1.8; c.stroke();
    uT(c, "Hex daily board", 62, 198, 13.5, { w: 600 });
    uT(c, "+100 XP", 356, 198, 12.5, { w: 600, color: UIC.gold, align: "right" });
    litHex(c, 44, 225, 9);
    uT(c, "Rush · bank 250 in one run", 62, 230, 13.5, { w: 600 });
    uT(c, "+50 XP", 356, 230, 12.5, { w: 600, color: UIC.gold, align: "right" });
    uCard(c, 16, 260, 358, 140, 22, { line: "rgba(245,184,77,.3)", fill: linGrad(c, 16, 260, 374, 400, ["rgba(245,184,77,.10)", "rgba(245,184,77,.03)"]) });
    drawHexBoard(c, 70, 330, 9.2, { board: "play" });
    uT(c, "GAME 1 · ALKÉ HEX", 132, 290, 9.5, { mono: true, tr: 0.12, color: UIC.gold });
    uT(c, "Rebuild the mark", 132, 316, 18, { w: 600 });
    uWrap(c, "Reveal tiles, read the clues and dodge the traps.", 132, 338, 12, 226, 16, { color: UIC.sub });
    uChip(c, 132, 364, "Daily board live", { dot: UIC.green, size: 10.5, h: 22, pad: 9 });
    uCard(c, 16, 414, 358, 140, 22, { line: "rgba(92,225,230,.34)", fill: linGrad(c, 16, 414, 374, 554, ["rgba(60,199,214,.13)", "rgba(60,199,214,.03)"]) });
    uLattice7(c, 72, 484, 13);
    uT(c, "GAME 2 · ALKÉ RUSH", 132, 444, 9.5, { mono: true, tr: 0.12, color: UIC.cyanHi });
    uChip(c, 356, 428, "New", { size: 10.5, h: 22, pad: 9, align: "right", color: UIC.cyanHi, fill: "rgba(92,225,230,.12)", line: "rgba(127,233,238,.4)" });
    uT(c, "Risk it or bank it", 132, 470, 18, { w: 600 });
    uWrap(c, "Stop the light on the XP. Bank before a hazard hits.", 132, 492, 12, 226, 16, { color: UIC.sub });
    uChip(c, 132, 518, "5 scored runs a day", { size: 10.5, h: 22, pad: 9, color: UIC.text });
    uCard(c, 16, 568, 358, 132, 22);
    uT(c, "THREE COUNTERS, NEVER MIXED", 34, 594, 10, { mono: true, tr: 0.14, color: UIC.sub });
    [["Game XP", "Play only", UIC.gold], ["Contribution", "Participation", UIC.lilac], ["ALKE", "Cold · locked", UIC.text]].forEach(([t, d, col], i) => {
      const x = 34 + i * 112;
      uT(c, t, x, 624, 14, { w: 600, color: col });
      uT(c, d, x, 644, 11.5, { color: UIC.sub });
    });
    c.strokeStyle = "rgba(255,255,255,.08)"; c.lineWidth = 1; c.beginPath(); c.moveTo(34, 660); c.lineTo(356, 660); c.stroke();
    uIcon(c, "flame", 42, 680, 13, UIC.gold);
    uT(c, "Games never warm ALKE. Only verified invites do.", 58, 684, 11.5, { color: UIC.sub });
    uTabs(c, H, "games");
    uHomeBar(c, H);
  },
  rush(c, H) {
    uBg(c, H, 195, 430);
    const g = c.createRadialGradient(195, 420, 0, 195, 420, 250);
    g.addColorStop(0, "rgba(60,199,214,.22)"); g.addColorStop(1, "rgba(60,199,214,0)");
    c.fillStyle = g; c.fillRect(0, 0, SCR_W, H);
    uStatus(c);
    c.beginPath(); c.arc(42, 92, 20, 0, Math.PI * 2); c.fillStyle = "rgba(255,255,255,.06)"; c.fill(); c.strokeStyle = UIC.line; c.lineWidth = 1; c.stroke();
    uIcon(c, "back", 42, 92, 16, UIC.text, 2);
    c.beginPath(); c.arc(348, 92, 20, 0, Math.PI * 2); c.fillStyle = "rgba(255,255,255,.06)"; c.fill(); c.stroke();
    uIcon(c, "help", 348, 90, 16, UIC.text, 2);
    uT(c, "SCORED RUN 2 OF 5", 195, 86, 10.5, { mono: true, tr: 0.16, color: UIC.cyanHi, align: "center" });
    uT(c, "ALKÉ Rush", 195, 109, 17, { w: 600, align: "center" });
    uCard(c, 14, 128, 362, 84, 18, { fill: "rgba(255,255,255,.05)" });
    c.save(); rr(c, 24, 138, 190, 64, 14); c.setLineDash([4, 4]); c.strokeStyle = "rgba(127,233,238,.6)"; c.lineWidth = 1.2; c.stroke(); c.restore();
    uT(c, "UNBANKED · AT RISK", 38, 158, 9.5, { mono: true, tr: 0.12, color: UIC.cyanHi });
    uT(c, "150", 38, 191, 28, { w: 700 });
    uT(c, "XP", 44 + uTW(c, "150", 28, { w: 700 }), 191, 13, { w: 600, color: UIC.sub });
    uT(c, "BANKED · SAFE", 232, 158, 9.5, { mono: true, tr: 0.12, color: UIC.gold });
    uT(c, "180", 232, 191, 28, { w: 700, color: UIC.gold });
    uT(c, "XP", 238 + uTW(c, "180", 28, { w: 700 }), 191, 13, { w: 600, color: UIC.sub });
    uT(c, "SPINS", 16, 241, 9.5, { mono: true, tr: 0.12, color: UIC.sub });
    for (let i = 0; i < 5; i++) {
      hexPath(c, 68 + i * 19, 237, 7.5);
      if (i < 3) { c.fillStyle = UIC.cyan; c.fill(); } else { c.strokeStyle = "rgba(127,233,238,.45)"; c.lineWidth = 1.3; c.stroke(); }
    }
    uChip(c, 270, 224, "1 shield", { icon: "shield", iconColor: UIC.mint, color: UIC.mint, size: 11, h: 26, pad: 9, align: "right", fill: "rgba(110,231,183,.1)", line: "rgba(110,231,183,.35)" });
    uChip(c, 376, 224, "×2 boost", { size: 11, h: 26, pad: 10, align: "right", color: "#C6B6FF", fill: "rgba(139,109,255,.14)", line: "rgba(198,182,255,.4)" });
    drawRushLattice(c, 195, 420, 33, { landed: 8, trail: [9, 10, 5, 4, 8] });
    rr(c, 14, 566, 362, 34, 17); c.fillStyle = "rgba(92,225,230,.1)"; c.fill(); c.strokeStyle = "rgba(127,233,238,.35)"; c.lineWidth = 1; c.stroke();
    uT(c, "Stopped on +50 XP. Bank it or risk again.", 195, 588, 12.5, { w: 600, align: "center" });
    c.save();
    c.shadowColor = "rgba(245,184,77,.5)"; c.shadowBlur = 16; c.shadowOffsetY = 5;
    rr(c, 14, 614, 174, 56, 28); c.fillStyle = linGrad(c, 14, 614, 188, 670, ["#F7D58A", "#C98A1E"]); c.fill();
    c.restore();
    uT(c, "BANK 150", 101, 648, 15, { w: 700, color: "#1A1205", align: "center" });
    rr(c, 202, 614, 174, 56, 28); c.fillStyle = "rgba(92,225,230,.08)"; c.fill(); c.strokeStyle = UIC.cyan; c.lineWidth = 1.6; c.stroke();
    uT(c, "RISK AGAIN", 289, 648, 15, { w: 700, color: UIC.cyanHi, align: "center" });
    uT(c, "Next spin is faster · 5 of 19 are hazards · shield ready", 195, 696, 11.5, { color: UIC.sub, align: "center" });
    uWrap(c, "Game XP is for play only: no monetary value, never redeemable for ALKE.", 195, 728, 11, 330, 16, { color: UIC.faint, align: "center" });
    uHomeBar(c, H);
  },
  invite(c, H) {
    uBg(c, H, 260, 220);
    uStatus(c);
    uT(c, "NETWORK", 24, 88, 11, { mono: true, tr: 0.18, color: UIC.lilac });
    uT(c, "Grow together", 24, 120, 26, { w: 700 });
    uCard(c, 16, 140, 358, 152, 22, { fill: linGrad(c, 16, 140, 374, 292, ["rgba(110,80,255,.26)", "rgba(40,22,96,.3)"]), line: "rgba(165,139,255,.3)" });
    uT(c, "YOUR INVITE CODE", 34, 170, 10.5, { mono: true, tr: 0.16, color: UIC.lilac });
    uT(c, "ALKER-7Q2K", 34, 210, 28, { mono: true, w: 600, tr: 0.04 });
    uBtn(c, 254, 184, 102, 38, "Share", { size: 14 });
    c.strokeStyle = "rgba(255,255,255,.1)"; c.lineWidth = 1; c.beginPath(); c.moveTo(34, 236); c.lineTo(356, 236); c.stroke();
    uIcon(c, "flame", 42, 262, 14, UIC.gold);
    uT(c, "Verified invites warm your cold ALKE.", 58, 267, 12.5, { w: 500, color: UIC.sub });
    uCard(c, 16, 306, 358, 176, 22, { line: "rgba(245,184,77,.28)", fill: linGrad(c, 16, 306, 374, 482, ["rgba(245,184,77,.10)", "rgba(245,184,77,.03)"]) });
    uT(c, "HOW WARMING WORKS", 34, 336, 10.5, { mono: true, tr: 0.16, color: UIC.gold });
    uT(c, "10 a day per verified invite", 34, 364, 17, { w: 600 });
    rr(c, 34, 380, 322, 40, 12); c.fillStyle = "rgba(10,6,20,.55)"; c.fill(); c.strokeStyle = "rgba(245,184,77,.3)"; c.lineWidth = 1; c.stroke();
    uT(c, "cold ALKE ÷ (verified invites × 10/day)", 195, 405, 12, { mono: true, w: 500, align: "center" });
    uWrap(c, "Unverified invites and your own mining warm nothing. Only warmed ALKE converts to hot ALKE.", 34, 442, 12, 322, 17, { color: UIC.sub });
    uCard(c, 16, 496, 358, 96, 22, { line: "rgba(245,184,77,.2)" });
    c.save(); c.shadowColor = "rgba(245,184,77,.6)"; c.shadowBlur = 14; drawMark(c, 62, 544, 22, { lw: 0.1, dashed: true }); c.restore();
    uT(c, "FOUNDING ALKER", 106, 530, 10.5, { mono: true, tr: 0.16, color: UIC.gold });
    uT(c, "Among the first in", 106, 554, 17, { w: 600 });
    uT(c, "A badge for the first ones in. Recognition only.", 106, 575, 11.5, { color: UIC.sub });
    uT(c, "Your circles", 24, 626, 17, { w: 600 });
    uT(c, "Start a circle", 366, 626, 12.5, { w: 600, color: UIC.lilac, align: "right" });
    const circles = [["Night Owls", "Weekly lesson night", ["NO", "KA", "TE"], "#8F78FF"]];
    let y = 642;
    circles.forEach(([n, d, av, col]) => {
      uCard(c, 16, y, 358, 82, 20);
      av.forEach((a, i) => {
        const ax = 46 + i * 22;
        c.beginPath(); c.arc(ax, y + 41, 17, 0, Math.PI * 2); c.fillStyle = i === 0 ? col : i === 1 ? "#4A3A8C" : "#2C2052"; c.fill();
        c.strokeStyle = "#140C26"; c.lineWidth = 3; c.stroke();
        uT(c, a, ax, y + 45.5, 11, { w: 600, align: "center", color: i === 0 && col === UIC.gold ? "#1C1030" : "#FFFFFF" });
      });
      uT(c, n, 112, y + 37, 15.5, { w: 600 });
      uT(c, d, 112, y + 58, 12, { color: UIC.sub });
      uIcon(c, "chev", 352, y + 41, 16, UIC.sub, 1.8);
      y += 94;
    });
    uTabs(c, H, "network");
    uHomeBar(c, H);
  },
};

/* ---------- The phone: body, screen, perspective ---------- */
const PHC = new Map();
function paintPhoneBody(c, w, h, o) {
  const R = w * 0.16;
  rr(c, 0, 0, w, h, R);
  c.fillStyle = linGrad(c, 0, 0, w, 0, ["#544779", "#2A2142", "#1A1429", "#2C2446", "#574A80"]);
  c.fill();
  c.save();
  rr(c, 0.8, 0.8, w - 1.6, h - 1.6, R);
  c.lineWidth = 1.6;
  c.strokeStyle = linGrad(c, 0, 0, w, h, ["rgba(200,182,255,.95)", "rgba(255,255,255,.22)", "rgba(150,120,255,.7)"]);
  c.stroke();
  c.restore();
  const b1 = w * 0.018;
  rr(c, b1, b1, w - 2 * b1, h - 2 * b1, R - b1);
  c.fillStyle = "#040207";
  c.fill();
  const b = w * 0.038, sx = b, sy = b, sw = w - 2 * b, sh = h - 2 * b, sr = R - b * 0.85;
  c.save();
  rr(c, sx, sy, sw, sh, sr);
  c.clip();
  if (o.img) {
    c.fillStyle = "#000"; c.fillRect(sx, sy, sw, sh);
    coverImage(c, o.img, sx, sy, sw, sh, true);
  } else {
    const k = sw / SCR_W;
    c.translate(sx, sy);
    c.scale(k, k);
    drawScreen(c, o.screen || "home", sh / k, o);
  }
  c.restore();
  if (!o.img) {
    rr(c, w / 2 - sw * 0.155, sy + sh * 0.013, sw * 0.31, sh * 0.034, sh * 0.017);
    c.fillStyle = "#000";
    c.fill();
  }
  c.save();
  rr(c, sx, sy, sw, sh, sr);
  c.clip();
  c.fillStyle = linGrad(c, sx, sy, sx + sw * 0.6, sy + sh * 0.45, ["rgba(255,255,255,.075)", "rgba(255,255,255,.015)", "rgba(255,255,255,0)"]);
  c.beginPath(); c.moveTo(sx, sy); c.lineTo(sx + sw * 0.85, sy); c.lineTo(sx, sy + sh * 0.5); c.closePath(); c.fill();
  c.restore();
}
function phoneCanvas(ctx, w, h, o) {
  const ds = devScale(ctx);
  const key = o.anim ? null : [o.screen, o.img ? o.img._id : "", o.board || "", o.codes ? 1 : 0, Math.round(w), Math.round(h), ds.toFixed(3)].join("|");
  if (key && PHC.has(key)) return PHC.get(key);
  const cv = document.createElement("canvas");
  cv.width = Math.max(2, Math.ceil(w * ds));
  cv.height = Math.max(2, Math.ceil(h * ds));
  const c = cv.getContext("2d");
  c.scale(cv.width / w, cv.height / h);
  paintPhoneBody(c, w, h, o);
  if (key) { PHC.set(key, cv); while (PHC.size > 14) PHC.delete(PHC.keys().next().value); }
  return cv;
}
function phoneGlow(ctx, cx, cy, w, h, a) {
  ctx.save();
  ctx.globalCompositeOperation = "screen";
  let g = ctx.createRadialGradient(cx, cy, 0, cx, cy, h * 0.75);
  g.addColorStop(0, rgba("#6B48FF", 0.5 * a)); g.addColorStop(0.45, rgba("#5E3AFF", 0.17 * a)); g.addColorStop(1, rgba("#5E3AFF", 0));
  ctx.fillStyle = g;
  ctx.fillRect(cx - h, cy - h, h * 2, h * 2);
  ctx.translate(cx, cy + h * 0.475);
  ctx.scale(1, 0.17);
  g = ctx.createRadialGradient(0, 0, 0, 0, 0, w * 1.15);
  g.addColorStop(0, rgba("#9C86FF", 0.9 * a)); g.addColorStop(0.3, rgba("#5E3AFF", 0.42 * a)); g.addColorStop(1, rgba("#5E3AFF", 0));
  ctx.fillStyle = g;
  ctx.beginPath(); ctx.arc(0, 0, w * 1.15, 0, Math.PI * 2); ctx.fill();
  ctx.restore();
}
/* o: mode tilt|straight|float, screen, img, anim, board, codes, glow (bool), glowA, dy */
function drawPhone(ctx, S, cx, cy, h, o) {
  o = o || {};
  const w = h * PHONE_AR;
  const mode = o.mode || "tilt";
  if (o.glow !== false) phoneGlow(ctx, cx, cy, w, h, o.glowA == null ? 1 : o.glowA);
  const pc = phoneCanvas(ctx, w, h, o);
  ctx.save();
  ctx.translate(cx, cy);
  if (mode === "tilt") {
    ctx.rotate(0.045);
    const sL = 0.905, sR = 1, Wd = w * 0.93, t = w * 0.042;
    ctx.save();
    ctx.shadowColor = rgba("#7B5CFF", 0.85 * (o.glowA == null ? 1 : o.glowA)); ctx.shadowBlur = h * 0.07;
    rr(ctx, -Wd / 2 + 4, -h / 2 * 0.95, Wd - 8, h * 0.95, w * 0.14);
    ctx.fillStyle = "#0B0618"; ctx.fill();
    ctx.restore();
    rr(ctx, Wd / 2 - t * 1.4, -h / 2 + h * 0.065, t * 2.4, h * 0.87, t * 1.1);
    ctx.fillStyle = linGrad(ctx, Wd / 2 - t, 0, Wd / 2 + t, 0, ["#241B38", "#64578F", "#2A2140"]);
    ctx.fill();
    ctx.fillStyle = "#4A3E6E";
    rr(ctx, Wd / 2 + t * 0.75, -h * 0.2, t * 0.55, h * 0.1, t * 0.27); ctx.fill();
    rr(ctx, Wd / 2 + t * 0.75, -h * 0.065, t * 0.55, h * 0.055, t * 0.27); ctx.fill();
    const ds = devScale(ctx);
    const n = clamp(Math.round((Wd * ds) / 1.5), 24, 1200);
    const sw = pc.width / n;
    for (let i = 0; i < n; i++) {
      const u = (i + 0.5) / n;
      const dh = h * (sL + (sR - sL) * u);
      ctx.drawImage(pc, i * sw, 0, sw + 0.6, pc.height, -Wd / 2 + (i / n) * Wd, -dh / 2, Wd / n + 0.7 / ds, dh);
    }
  } else {
    if (mode === "float") ctx.rotate(-0.06);
    ctx.save();
    ctx.shadowColor = rgba("#7B5CFF", 0.75 * (o.glowA == null ? 1 : o.glowA)); ctx.shadowBlur = h * 0.06;
    rr(ctx, -w / 2 + 3, -h / 2 + 3, w - 6, h - 6, w * 0.15);
    ctx.fillStyle = "#0B0618"; ctx.fill();
    ctx.restore();
    ctx.drawImage(pc, -w / 2, -h / 2, w, h);
  }
  ctx.restore();
  return { w, h };
}

export { drawPhone, PHC };
