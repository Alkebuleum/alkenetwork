import { Link } from "react-router-dom";
import Mark from "./Mark";

export default function Header() {
  return (
    <header>
      <div className="wrap nav">
        <a className="logo" href="#top" aria-label="Alké Network home">
          <Mark />
          <span>
            <span className="word">alké</span>
            <span className="net">NETWORK</span>
          </span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#problem">The problem</a>
          <a href="#solution">The network</a>
          <a href="#council">Founding Council</a>
          <Link to="/institutional-brief">Institutional Brief</Link>
        </nav>
        <a className="btn btn-primary" href="#council">
          Apply to Join
        </a>
      </div>
    </header>
  );
}
