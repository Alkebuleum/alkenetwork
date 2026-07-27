import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Mark from "./Mark";
import ArrowIcon from "./icons/ArrowIcon";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  function goHome(e) {
    setOpen(false);
    if (location.pathname === "/" && !location.hash) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (location.pathname === "/") {
      e.preventDefault();
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <header>
      <div className="nav">
        <Link className="logo" to="/" aria-label="Alké Network home" onClick={goHome}>
          <Mark />
          <span>
            <span className="word">alké</span>
            <span className="net">NETWORK</span>
          </span>
        </Link>
        <nav className="nav-links" aria-label="Primary">
          <Link to="/#why-join">Why join</Link>
          <Link to="/#council">Founding Network</Link>
          <Link to="/institutional-brief">Institutional Brief</Link>
        </nav>
        <Link className="btn btn-primary" to="/#council">
          Apply to Join
          <ArrowIcon />
        </Link>
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
          <Link to="/#why-join" onClick={() => setOpen(false)}>
            Why join
          </Link>
          <Link to="/#council" onClick={() => setOpen(false)}>
            Founding Network
          </Link>
          <Link to="/institutional-brief" onClick={() => setOpen(false)}>
            Institutional Brief
          </Link>
        </nav>
        <Link className="btn btn-primary" to="/#council" onClick={() => setOpen(false)}>
          Apply to Join
          <ArrowIcon />
        </Link>
      </div>
    </header>
  );
}
