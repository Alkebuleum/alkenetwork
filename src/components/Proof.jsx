import { Link } from "react-router-dom";

export default function Proof() {
  return (
    <div className="proof-strip">
      <div className="wrap reveal">
        <p>Leading financial institutions worldwide are already building shared digital rails.</p>
        <div className="proof-names">
          Global reference points — <b>Project Agorá</b> (BIS) · <b>Swift</b> · <b>Partior</b> ·{" "}
          <b>Canton Network</b>
        </div>
        <Link className="textlink" to="/global-infrastructure">
          Explore the global infrastructure shift →
        </Link>
      </div>
    </div>
  );
}
