import { Link } from "react-router-dom";
import Mark from "./Mark";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot">
          <div>
            <Link className="logo" to="/">
              <Mark className="footer-mark" />
              <span>
                <span className="word">alké</span>
                <span className="net">NETWORK</span>
              </span>
            </Link>
            <p className="desc">
              The institutional network for frontier-technology adoption — beginning with AI and
              distributed ledgers. Globally open, institutionally governed.
            </p>
          </div>
          <nav className="foot-links" aria-label="Network">
            <span className="h">Network</span>
            <Link to="/#why-join">Why Alké</Link>
            <Link to="/#practice-areas">Practice Areas</Link>
            <Link to="/#sandbox">The Sandbox</Link>
            <Link to="/#council">Founding Network</Link>
          </nav>
          <nav className="foot-links" aria-label="Governance">
            <span className="h">Governance</span>
            <Link to="/founding-council">Founding Council</Link>
            <Link to="/foundation">The Alkebuleum Foundation</Link>
            <Link to="/global-infrastructure">Global Infrastructure Shift</Link>
          </nav>
          <nav className="foot-links" aria-label="Resources">
            <span className="h">Resources</span>
            <Link to="/technology">Practice Areas in Depth</Link>
            <Link to="/institutional-brief">Institutional Brief</Link>
            <Link to="/apply">Apply</Link>
            <a href="https://app.alke.network" target="_blank" rel="noopener noreferrer">
              Member Login
            </a>
          </nav>
        </div>
        <div className="foot-bottom">
          <span>ALKÉ NETWORK — FOUNDING PHASE — MMXXVI</span>
          <span>Stewarded by the Alkebuleum Foundation</span>
          <span className="url">alke.network</span>
        </div>
      </div>
    </footer>
  );
}
