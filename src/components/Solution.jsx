import { Link } from "react-router-dom";

const PHASE_ONE = [
  "Simulate stablecoin and tokenized-asset transactions",
  "Test privacy-preserving identity",
  "Pilot cross-institution use cases",
  "Prepare technical, risk and compliance teams",
  "Help define governance and participation standards",
];

export default function Solution() {
  return (
    <section className="block" id="solution">
      <div className="wrap">
        <div className="block-head">
          <p className="eyebrow">The solution</p>
          <h2>Shared infrastructure, governed by trusted institutions.</h2>
        </div>
        <p className="solution-body">
          Alké Network enables participating institutions to experiment with digital assets,
          identity and settlement while sensitive data remains under institutional control.
        </p>

        <p className="phase-label">During Phase 1, founding members can:</p>
        <ul className="network-list">
          {PHASE_ONE.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <Link className="explore-link" to="/network">
          Explore the Network →
        </Link>
      </div>
    </section>
  );
}
