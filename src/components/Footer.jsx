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
            <a href="#problem">The problem</a>
            <a href="#solution">The network</a>
            <a href="#council">Founding Council</a>
            <a href="#steward">Stewardship</a>
          </nav>
          <nav className="foot-links" aria-label="Resources">
            <span className="h">Resources</span>
            <Link to="/technology">Technology</Link>
            <Link to="/institutional-brief">Institutional Brief</Link>
            <a href="#council">Apply</a>
          </nav>
        </div>
        <div className="foot-bottom">
          <span>Stewarded by the Alkebuleum Foundation</span>
          <span className="url">alke.network</span>
        </div>
      </div>
    </footer>
  );
}
