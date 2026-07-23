import Mark from "./Mark";

export default function Header() {
  return (
    <header className="site-nav">
      <div className="wrap nav-inner">
        <a className="brand" href="#top" aria-label="Alké Network home">
          <Mark />
          <span className="brand-word">
            alké<span className="brand-tag">NETWORK</span>
          </span>
        </a>
        <nav className="nav-links">
          <a className="nav-link" href="#problem">
            The problem
          </a>
          <a className="nav-link" href="#solution">
            The network
          </a>
          <a className="nav-link" href="#council">
            Founding Council
          </a>
          <a className="nav-cta" href="#council">
            Apply to participate
          </a>
        </nav>
      </div>
    </header>
  );
}
