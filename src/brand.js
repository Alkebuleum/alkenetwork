import "./site.css";
import "./brand.css";

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
