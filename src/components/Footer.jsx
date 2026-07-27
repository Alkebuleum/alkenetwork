import { Link } from "react-router-dom";
import Mark from "./Mark";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot">
          <div>
            <a className="logo" href="#top">
              <Mark className="footer-mark" />
              <span>
                <span className="word">alké</span>
                <span className="net">NETWORK</span>
              </span>
            </a>
            <p className="desc">
              Institutionally governed digital-asset infrastructure for Africa and the Diaspora.
            </p>
          </div>
          <nav className="foot-links" aria-label="Network">
            <span className="h">Network</span>
            <a href="#why-join">Why join</a>
            <a href="#council">Founding Network</a>
            <a href="#steward">Stewardship</a>
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
            <a href="#council">Apply</a>
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
