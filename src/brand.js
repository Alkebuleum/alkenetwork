import "./site.css";
import "./brand.css";
import { FACES, STATES, faceSVG } from "./kedo.js";

// Mobile menu
const menu = document.getElementById("menu");
const toggle = document.getElementById("navToggle");
toggle?.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});
menu?.addEventListener("click", (e) => {
  if (e.target.closest("a")) { menu.classList.remove("open"); toggle?.setAttribute("aria-expanded", "false"); }
});

// Kedo: a player, the expression sheet, the network states and the construction view, all drawn from src/kedo.js
const $ = (id) => document.getElementById(id);
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
function play(f) {
  $("kdPlayer").innerHTML = faceSVG(f.rows, { size: 320, animate: true, light: f.light, pulse: f.pulse, title: `Kedo · ${f.name}` });
  $("kdName").textContent = f.name;
  $("kdLine").textContent = `“${f.line}”`;
}
if ($("kdPlayer")) {
  play(FACES[1]);
  const dl = (kind, id) =>
    `<div class="bk-dl">${["png", "svg"].map((t) => `<a href="/brand-kit/07-kedo/${t}/kedo-${kind}-${id}.${t}" download>${t.toUpperCase()}</a>`).join("")}</div>`;
  $("kdFaces").innerHTML = FACES.map((f, i) => `
    <li><button type="button" class="kd-pick" data-i="${i}" aria-label="Show ${f.name} in the player">${faceSVG(f.rows, { size: 120, animate: true, title: `Kedo · ${f.name}` })}</button>
      <b>${f.name}</b><span>“${esc(f.line)}”</span>${dl("expression", f.id)}</li>`).join("");
  $("kdFaces").addEventListener("click", (e) => {
    const b = e.target.closest(".kd-pick");
    if (!b) return;
    play(FACES[+b.dataset.i]);
    if (matchMedia("(max-width: 900px)").matches) $("kdPlayer").scrollIntoView({ block: "center" });
  });
  $("kdStates").innerHTML = STATES.map((s) => `
    <li>${faceSVG(s.rows, { size: 96, animate: true, light: s.light, pulse: s.pulse, title: `Kedo · ${s.name}` })}
      <div><b>${s.name}</b><code>${s.spec}</code><span>“${esc(s.line)}”</span>${dl("state", s.id)}</div></li>`).join("");
  $("kdGrid").innerHTML = faceSVG(FACES[0].rows, { size: 140, off: "#3A414C", title: "Kedo construction grid" });
}

// Click a swatch to copy its hex code
const toast = document.getElementById("toast");
let timer;
function say(text) {
  toast.textContent = text;
  toast.classList.add("show");
  clearTimeout(timer);
  timer = setTimeout(() => toast.classList.remove("show"), 1600);
}
document.querySelectorAll("[data-copy]").forEach((el) => {
  el.addEventListener("click", async () => {
    const hex = el.dataset.copy;
    try { await navigator.clipboard.writeText(hex); say(`Copied ${hex}`); }
    catch { say(hex); }
  });
});
