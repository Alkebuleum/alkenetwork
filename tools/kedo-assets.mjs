// Writes Kedo's files into the brand kit: public/brand-kit/07-kedo/{svg,png}.
//   node tools/kedo-assets.mjs            SVGs, plus PNGs if Microsoft Edge or Chrome is installed (headless render)
// Drawing comes from src/kedo.js, the same code the /brand page uses.
import { mkdirSync, writeFileSync, existsSync, rmSync } from "node:fs";
import { join, resolve } from "node:path";
import { execFileSync } from "node:child_process";
import { tmpdir } from "node:os";
import { pathToFileURL } from "node:url";
import { KEDO, FACES, STATES, SMALL, faceSVG, lockupSVG } from "../src/kedo.js";

const root = resolve(import.meta.dirname, "..", "public", "brand-kit", "07-kedo");
const svgDir = join(root, "svg");
const pngDir = join(root, "png");
mkdirSync(svgDir, { recursive: true });
mkdirSync(pngDir, { recursive: true });

// name -> [svg, png width, png height]
const files = {
  "kedo-face": [faceSVG(FACES[0].rows, { title: "Kedo" }), 1024, 1024],
  "kedo-lockup-dark-bg": [lockupSVG({ title: "Kedo" }), 1616, 448],
  "kedo-lockup-light-bg": [lockupSVG({ ink: KEDO.plate, border: false, title: "Kedo" }), 1616, 448],
  "kedo-icon-small": [faceSVG(SMALL, { title: "Kedo (small sizes)" }), 256, 256],
};
for (const f of FACES) files[`kedo-expression-${f.id}`] = [faceSVG(f.rows, { title: `Kedo · ${f.name}` }), 1024, 1024];
for (const s of STATES) files[`kedo-state-${s.id}`] = [faceSVG(s.rows, { light: s.light, title: `Kedo · ${s.name}` }), 1024, 1024];

for (const [name, [svg]] of Object.entries(files)) writeFileSync(join(svgDir, `${name}.svg`), svg + "\n");
console.log(`${Object.keys(files).length} SVGs -> ${svgDir}`);

writeFileSync(join(root, "kedo-colours.txt"), `KEDO · COLOURS

Plate      ${KEDO.plate}   the face plate
Lit dot    ${KEDO.lit}   eyes, mouth, the word KEDO
Unlit dot  ${KEDO.off}   unlit dots on the plate

Status light (top-right corner of the plate)
Steady     ${KEDO.steady}   copper: all steady, or working (pulsing)
Alert      ${KEDO.alert}   amber: something needs attention (pulsing)
Halted     ${KEDO.halted}   red: paused by Haltline, with the pause bars
Offline    ${KEDO.offline}   grey: Kedo is offline, the face goes dark

Kedo's palette is its own. Kedo appears alongside ALKÉ Network, but don't recolour
Kedo in ALKÉ Violet or Fuel Gold.
`);

const browser = [
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "/usr/bin/google-chrome",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
].find((p) => existsSync(p));
if (!browser) {
  console.log("No Edge/Chrome found: PNGs not rendered.");
} else {
  const tmp = join(tmpdir(), "kedo-png");
  mkdirSync(tmp, { recursive: true });
  for (const [name, [svg, w, h]] of Object.entries(files)) {
    const page = join(tmp, `${name}.html`);
    const sized = svg.replace(/width="[^"]+" height="[^"]+"/, `width="${w}" height="${h}"`);
    writeFileSync(page, `<!doctype html><html><head><style>html,body{margin:0;background:transparent;overflow:hidden}svg{display:block}</style></head><body>${sized}</body></html>`);
    execFileSync(browser, [
      "--headless", "--disable-gpu", "--hide-scrollbars", "--force-device-scale-factor=1",
      "--default-background-color=00000000", `--window-size=${w},${h}`,
      `--screenshot=${join(pngDir, `${name}.png`)}`, pathToFileURL(page).href,
    ], { stdio: "ignore" });
  }
  rmSync(tmp, { recursive: true, force: true });
  console.log(`${Object.keys(files).length} PNGs -> ${pngDir}`);
}
