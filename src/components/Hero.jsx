import { Link } from "react-router-dom";
import HeroNetwork from "./HeroNetwork";

export default function Hero() {
  return (
    <div className="hero" id="top">
      <HeroNetwork />

      <div className="hero-scrim" aria-hidden="true"></div>

      <div className="hero-content">
        <div className="lockup" aria-label="Alké Network">
          <svg className="lockup-mark" viewBox="0 0 100 100" aria-hidden="true">
            <path className="stroke link" d="M37 31 L65 42 L38 63 L37 31" pathLength="1" />
            <path className="stroke spoke" d="M37 31 L19.5 19.5" pathLength="1" />
            <path className="stroke spoke" d="M37 31 L50 6.5" pathLength="1" />
            <path className="stroke spoke" d="M65 42 L80.5 19.5" pathLength="1" />
            <path className="stroke spoke" d="M65 42 L93.5 50" pathLength="1" />
            <path className="stroke spoke" d="M38 63 L19.5 80.5" pathLength="1" />
            <path className="stroke spoke" d="M38 63 L50 93.5" pathLength="1" />
            <circle className="stroke ring" cx="50" cy="50" r="44" pathLength="1" />
            <circle className="node n1" cx="37" cy="31" r="7" />
            <circle className="node n2" cx="65" cy="42" r="7" />
            <circle className="node n3" cx="38" cy="63" r="7" />
          </svg>
          <span className="lockup-rule"></span>
          <span className="lockup-word">
            <span className="alke">alké</span>
            <span className="net">NETWORK</span>
          </span>
        </div>

        <span className="eyebrow stage s1">Institutionally Governed Digital-Asset Network</span>

        <h1 className="stage s2">
          Shared digital rails, <em>governed by trusted institutions.</em>
        </h1>

        <div className="hero-ctas stage s3">
          <a className="btn btn-primary" href="#council">
            Apply to Join the Founding Council
          </a>
          <Link className="btn btn-secondary" to="/institutional-brief">
            View Institutional Brief
          </Link>
        </div>
      </div>

      <div className="scroll-cue" aria-hidden="true">
        <span>SCROLL</span>
        <div className="track"></div>
      </div>
    </div>
  );
}
