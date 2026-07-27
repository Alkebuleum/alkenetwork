import { useState } from "react";
import { Link } from "react-router-dom";
import Mark from "./Mark";
import ArrowIcon from "./icons/ArrowIcon";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="nav">
        <a className="logo" href="#top" aria-label="Alké Network home" onClick={() => setOpen(false)}>
          <Mark />
          <span>
            <span className="word">alké</span>
            <span className="net">NETWORK</span>
          </span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#why-join">Why join</a>
          <a href="#council">Founding Network</a>
          <Link to="/institutional-brief">Institutional Brief</Link>
        </nav>
        <a className="btn btn-primary" href="#council">
          Apply to Join
          <ArrowIcon />
        </a>
        <button
          className={open ? "nav-toggle open" : "nav-toggle"}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div id="mobile-nav" className={open ? "mobile-nav open" : "mobile-nav"}>
        <nav aria-label="Primary mobile">
          <a href="#why-join" onClick={() => setOpen(false)}>
            Why join
          </a>
          <a href="#council" onClick={() => setOpen(false)}>
            Founding Network
          </a>
          <Link to="/institutional-brief" onClick={() => setOpen(false)}>
            Institutional Brief
          </Link>
        </nav>
        <a className="btn btn-primary" href="#council" onClick={() => setOpen(false)}>
          Apply to Join
          <ArrowIcon />
        </a>
      </div>
    </header>
  );
}
