import { useEffect, useRef, useState } from "react";
import { PUVV_BODY, PUVV_FACE, PUVV_FX, PUVV_VIEWBOX } from "./puvvArt";
import "./puvv-moods.css";
import "./puvv.css";

/* Puvv, the ALKE mascot: the same drawing and moods as in the Nuru app
   (tools/puvv-art.mjs copies them from Nuru's design board).

   <Puvv mood="idle" />   holds one mood (he still breathes, blinks and flicks an ear).
   <Puvv live />          the hero: he pops in, runs through his moods, watches the
                          pointer and hops when tapped. */

// The hero's loop: [mood, how long he holds it].
const SHOW = [
  ["greeting", 3400],
  ["idle", 2400],
  ["searching", 3800],
  ["done", 2400],
  ["idle", 2600],
  ["listening", 3000],
  ["thinking", 3400],
  ["done", 2400],
  ["idle", 3200],
];

const still = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function Puvv({ mood = "idle", live = false, className = "", label = "Puvv, the ALKE mascot, an African wild dog" }) {
  const root = useRef(null);
  const [step, setStep] = useState(0);
  const [cheer, setCheer] = useState(0); // set by a tap: he hops and sparkles

  // Run through the moods.
  useEffect(() => {
    if (!live || still()) return;
    const t = setTimeout(() => setStep((s) => (s + 1) % SHOW.length), SHOW[step][1]);
    return () => clearTimeout(t);
  }, [live, step]);

  // A tap makes him hop, then the loop carries on.
  useEffect(() => {
    if (!cheer) return;
    const t = setTimeout(() => setCheer(0), 1800);
    return () => clearTimeout(t);
  }, [cheer]);

  // His eyes and head follow the pointer.
  useEffect(() => {
    const el = root.current;
    if (!live || !el || still()) return;
    let frame = 0;
    let rest = 0;
    const look = (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height * 0.43);
        const far = Math.hypot(dx, dy) || 1;
        const pull = Math.min(1, far / (r.width * 0.9));
        el.style.setProperty("--lx", ((dx / far) * pull * 8).toFixed(2));
        el.style.setProperty("--ly", ((dy / far) * pull * 6).toFixed(2));
        el.style.setProperty("--lean", ((dx / far) * pull * 3).toFixed(2));
        el.classList.add("puvv-looking");
        clearTimeout(rest);
        rest = setTimeout(() => {
          el.classList.remove("puvv-looking");
          for (const v of ["--lx", "--ly", "--lean"]) el.style.setProperty(v, "0");
        }, 2600);
      });
    };
    window.addEventListener("pointermove", look, { passive: true });
    return () => {
      window.removeEventListener("pointermove", look);
      cancelAnimationFrame(frame);
      clearTimeout(rest);
    };
  }, [live]);

  const now = cheer ? "done" : live ? SHOW[step][0] : mood;
  const cls = ["ak", `is-${now}`, "puvv", live ? "puvv-live" : "", className].filter(Boolean).join(" ");

  return (
    <div ref={root} className={cls} role="img" aria-label={label} onPointerDown={live ? () => setCheer((n) => n + 1) : undefined}>
      <span className="ak-ring" aria-hidden="true" />
      <div className="ak-disc" aria-hidden="true">
        <svg className="ak-svg" viewBox={PUVV_VIEWBOX} dangerouslySetInnerHTML={{ __html: PUVV_BODY }} />
      </div>
      <svg className="ak-svg ak-char" viewBox={PUVV_VIEWBOX} aria-hidden="true" dangerouslySetInnerHTML={{ __html: PUVV_FACE }} />
      <svg className="ak-svg ak-fx" viewBox={PUVV_VIEWBOX} aria-hidden="true" dangerouslySetInnerHTML={{ __html: PUVV_FX }} />
    </div>
  );
}
