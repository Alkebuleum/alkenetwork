// Kedo, the AI network operator: the face is the logo.
// One source for the /brand page (live, animated) and tools/kedo-assets.mjs (the SVG/PNG files in the kit).
// Taken from the Kedo design ("Kedo look options", Matrix · Refined v2).
//
// A face is 9 rows of 9 characters. "." is an unlit dot; anything else is lit:
//   e eye (blinks)   x lit   o/c speaking (alternate)   l/w wave (listening, working)   s sparkle   r red (halted)

export const KEDO = {
  plate: "#0B0F14",
  border: "#2A313C",
  lit: "#F4F0E8",
  off: "#1E242E",
  steady: "#C46A3B",
  alert: "#F2B544",
  halted: "#E5483F",
  offline: "#4A515C",
};

const REST = [".........", ".........", ".........", "..e...e..", "..e...e..", "..e...e..", ".........", ".........", "........."];

export const FACES = [
  { id: "rest", name: "Rest", line: "All steady. I’m here.", rows: REST },
  { id: "hello", name: "Hello", line: "Welcome in, glad you’re here.", rows: [".........", ".........", "..e...e..", "..e...e..", "..e...e..", ".........", ".x.....x.", "..xxxxx..", "........."] },
  { id: "happy", name: "Happy", line: "Upgrade’s done. Zero downtime.", rows: [".........", ".........", "..x...x..", ".x.x.x.x.", ".........", ".........", ".x.....x.", "..xxxxx..", "........."] },
  { id: "listening", name: "Listening", line: "Go ahead, I’m listening.", rows: [".........", ".........", "..e...e..", "..e...e..", "..e...e..", ".........", ".........", "..l.l.l..", "........."] },
  { id: "speaking", name: "Speaking", line: "Here’s what changed overnight.", rows: [".........", ".........", "..e...e..", "..e...e..", "..e...e..", ".........", "...ooo...", "..occco..", "...ooo..."] },
  { id: "thinking", name: "Thinking", line: "Give me a second to check.", rows: [".........", "...e...e.", "...e...e.", "...e...e.", ".........", ".........", "....xx...", ".........", "........."] },
  { id: "working", name: "Working", line: "On it. Rolling out now.", rows: [".........", ".........", "..e...e..", "..e...e..", "..e...e..", ".........", ".........", ".wwwwwww.", "........."] },
  { id: "focused", name: "Focused", line: "Looking into a slow route.", rows: [".........", ".........", ".........", ".xxx.xxx.", ".........", ".........", "...xxx...", ".........", "........."] },
  { id: "wink", name: "Wink", line: "Pro tip: pin the status page.", rows: [".........", ".........", "..e......", "..e......", "..e..xxx.", ".........", ".x.....x.", "..xxxxx..", "........."] },
  { id: "surprised", name: "Surprised", line: "Huh. That’s new to me.", rows: [".........", "..e...e..", "..e...e..", "..e...e..", "..e...e..", ".........", "....x....", "...x.x...", "....x...."] },
  { id: "sorry", name: "Sorry", line: "My mistake. Here’s the fix.", rows: [".........", ".........", ".........", "..e...e..", "..e...e..", ".........", "...xxx...", "..x...x..", "........."] },
  { id: "celebrate", name: "Celebrate", line: "We hit a milestone, Alkers.", rows: ["s.......s", ".........", "..x...x..", ".x.x.x.x.", ".........", ".........", ".x.....x.", "..xxxxx..", "s.......s"] },
];

const face = (id) => FACES.find((f) => f.id === id).rows;
export const STATES = [
  { id: "steady", name: "Steady", spec: "Rest face · solid light", light: KEDO.steady, pulse: false, rows: REST, line: "All steady. Every action today is in the public log." },
  { id: "working", name: "Working", spec: "Working face · pulsing light", light: KEDO.steady, pulse: true, rows: face("working"), line: "Rolling out an upgrade, one region at a time." },
  { id: "alert", name: "Alert", spec: "Focused face · amber pulse", light: KEDO.alert, pulse: true, rows: face("focused"), line: "One route is slow. I’m on it. Nothing to do on your side." },
  { id: "halted", name: "Halted", spec: "Pause bars · solid red", light: KEDO.halted, pulse: false, rows: [".........", ".........", "..rr.rr..", "..rr.rr..", "..rr.rr..", "..rr.rr..", "..rr.rr..", ".........", "........."], line: "Paused by Haltline. A human has the controls." },
  { id: "offline", name: "Offline", spec: "Dark face · grey light", light: KEDO.offline, pulse: false, rows: Array(9).fill("........."), line: "Kedo is offline. The network keeps running without me." },
];

// Under 32 px: a 5 × 5 face, no status light.
export const SMALL = [".....", ".x.x.", ".x.x.", ".x.x.", "....."];

// KEDO spelled in the same dots, 7 rows × 23 columns.
const LETTERS = {
  K: ["x...x", "x..x.", "x.x..", "xx...", "x.x..", "x..x.", "x...x"],
  E: ["xxxxx", "x....", "x....", "xxxx.", "x....", "x....", "xxxxx"],
  D: ["xxxx.", "x...x", "x...x", "x...x", "x...x", "x...x", "xxxx."],
  O: [".xxx.", "x...x", "x...x", "x...x", "x...x", "x...x", ".xxx."],
};
export const WORD = Array.from({ length: 7 }, (_, r) => ["K", "E", "D", "O"].map((l) => LETTERS[l][r]).join("."));

const n = (v) => +v.toFixed(2);

// Dots as SVG circles. Grid of `cols` columns, `width` wide, `gap` between dots, starting at (x0, y0).
function dots(rows, { x0, y0, width, gap, off, ink = KEDO.lit, animate }) {
  const cols = rows[0].length;
  const d = (width - gap * (cols - 1)) / cols;
  const pitch = d + gap;
  let out = "";
  rows.forEach((row, r) => {
    [...row].forEach((ch, c) => {
      const lit = ch !== ".";
      if (!lit && !off) return;
      const fill = ch === "r" ? KEDO.halted : lit ? ink : off;
      let cls = "";
      let style = "";
      if (animate) {
        if (ch === "e") cls = "kd-blink";
        else if (ch === "o") cls = "kd-a";
        else if (ch === "c") cls = "kd-b";
        else if (ch === "s") cls = "kd-tw";
        else if (ch === "l" || ch === "w") { cls = "kd-wave"; style = ` style="animation-delay:${n(c * (ch === "l" ? 0.15 : 0.12))}s"`; }
      }
      out += `<circle${cls ? ` class="${cls}"` : ""}${style} cx="${n(x0 + c * pitch + d / 2)}" cy="${n(y0 + r * pitch + d / 2)}" r="${n(d / 2)}" fill="${fill}"/>`;
    });
  });
  return out;
}

// The face on its plate. Proportions follow the 380 px master: plate radius 22%, 9-dot grid 270 wide with 11 gaps,
// light 16 px, 34 px in from the top right.
export function faceSVG(rows, { size = 512, light = KEDO.steady, pulse = false, off = KEDO.off, border = true, animate = false, title = "Kedo" } = {}) {
  const small = rows.length === 5;
  const grid = small ? 222 : 270;
  const gap = small ? 12 : 11;
  const x0 = (380 - grid) / 2;
  const body =
    `<rect x="0.5" y="0.5" width="379" height="379" rx="84" fill="${KEDO.plate}"${border ? ` stroke="${KEDO.border}"` : ""}/>` +
    (light && !small ? `<circle${animate && pulse ? ' class="kd-pip"' : ""} cx="${380 - 34 - 8}" cy="${34 + 8}" r="8" fill="${light}"/>` : "") +
    dots(rows, { x0, y0: x0, width: grid, gap, off: small ? null : off, animate });
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 380" width="${size}" height="${size}" role="img" aria-label="${title}"><title>${title}</title>${body}</svg>`;
}

// Plate beside the dotted word. `ink` is the word colour: ivory on dark, plate colour on light.
export function lockupSVG({ ink = KEDO.lit, border = true, light = KEDO.steady, title = "Kedo" } = {}) {
  const W = 404, H = 112;
  const plate =
    `<rect x="0.5" y="0.5" width="111" height="111" rx="26" fill="${KEDO.plate}"${border ? ` stroke="${KEDO.border}"` : ""}/>` +
    `<circle cx="${112 - 12 - 4}" cy="${12 + 4}" r="4" fill="${light}"/>` +
    dots(REST, { x0: 20, y0: 20, width: 72, gap: 2, off: "#161B23" });
  const wordH = 7 * ((264 - 22 * 3.3) / 23) + 6 * 3.3;
  const word = dots(WORD, { x0: 140, y0: (H - wordH) / 2, width: 264, gap: 3.3, ink });
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W * 2}" height="${H * 2}" role="img" aria-label="${title}"><title>${title}</title>${plate}${word}</svg>`;
}
