import { useEffect, useRef, useState } from "react";
import { AppTile } from "./Brand";

const NAV = [
  ["#get-app", "Get the app"],
  ["#mining", "Mining"],
  ["#how", "How it works"],
  ["#warming", "The pack"],
  ["#post-quantum", "Post-quantum"],
  ["#roadmap", "Roadmap"],
  ["#get-alke", "Get ALKE"],
  ["#join", "Community"],
  ["#faq", "FAQ"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const btn = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        btn.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="top">
      <div className="wrap nav">
        <a className="lockup" href="#top" aria-label="ALKÉ Network home">
          <AppTile />
          <b>ALKE</b>
        </a>
        <nav className={open ? "menu open" : "menu"} id="menu" aria-label="Sections">
          {NAV.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <div className="nav-cta">
          <a className="btn cyanfill small" href="#get-app">
            Get the app
          </a>
          <button
            ref={btn}
            className="burger"
            type="button"
            aria-expanded={open}
            aria-controls="menu"
            aria-label={open ? "Close the menu" : "Open the menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
