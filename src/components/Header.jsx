import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Mark from "./Mark";

export default function Header() {
  const ref = useRef(null);

  useEffect(() => {
    const hdr = ref.current;
    function onScroll() {
      hdr.classList.toggle("scrolled", scrollY > innerHeight * 0.55);
    }
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header id="hdr" ref={ref}>
      <div className="wrap nav">
        <a className="logo" href="#top" aria-label="Alké Network home">
          <Mark />
          <span>
            <span className="word">alké</span>
            <span className="net">NETWORK</span>
          </span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#network">Network</a>
          <a href="#council">Founding Council</a>
          <a href="#steward">Stewardship</a>
          <Link to="/institutional-brief">Institutional Brief</Link>
        </nav>
        <a className="btn btn-primary" href="#council">
          Apply to Join
        </a>
      </div>
    </header>
  );
}
