import { Link } from "react-router-dom";

export default function Stewardship() {
  return (
    <div className="wrap">
      <div className="steward-strip reveal" id="steward">
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="4" fill="none" />
          <circle cx="50" cy="50" r="6" fill="currentColor" />
        </svg>
        <p>
          <b>Stewarded by the Alkebuleum Foundation</b> — a public-interest steward for
          institutional frontier-technology adoption, born from a commitment to African and
          diaspora institutional participation and open globally today.
        </p>
        <Link className="textlink" to="/foundation">
          About the Foundation →
        </Link>
      </div>
    </div>
  );
}
