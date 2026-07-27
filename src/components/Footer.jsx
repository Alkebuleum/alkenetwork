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
              Institutionally governed digital-asset infrastructure for Africa and the Diaspora.
            </p>
          </div>
          <nav className="foot-links" aria-label="Network">
            <span className="h">Network</span>
            <Link to="/#why-join">Why join</Link>
            <Link to="/#council">Founding Network</Link>
            <Link to="/#steward">Stewardship</Link>
          </nav>
          <nav className="foot-links" aria-label="Governance">
            <span className="h">Governance</span>
            <Link to="/founding-council">Founding Council</Link>
            <Link to="/foundation">The Alkebuleum Foundation</Link>
            <Link to="/global-infrastructure">Global infrastructure shift</Link>
          </nav>
          <nav className="foot-links" aria-label="Resources">
            <span className="h">Resources</span>
            <Link to="/technology">Technology</Link>
            <Link to="/institutional-brief">Institutional Brief</Link>
            <Link to="/apply">Apply</Link>
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
