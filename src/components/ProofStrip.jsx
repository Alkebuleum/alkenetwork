import { Link } from "react-router-dom";

export default function ProofStrip() {
  return (
    <section className="proof-strip">
      <div className="wrap">
        <div className="reveal">
          <p>Leading financial institutions worldwide are already building shared digital rails.</p>
          <div className="proof-names">
            Global reference points — Project Agorá <span>(BIS)</span> · Swift · Partior · Canton
            Network
          </div>
          <Link className="textlink" to="/global-infrastructure">
            Explore the global infrastructure shift →
          </Link>
        </div>
      </div>
    </section>
  );
}
