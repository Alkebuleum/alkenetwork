import { Link } from "react-router-dom";
import PathDiagram from "./PathDiagram";

const JOURNEY = ["Discover", "Design", "Prototype", "Sandbox", "Measure", "Decide"];

const START_WITH = [
  "Synthetic data",
  "Sample workflows",
  "Non-sensitive information",
  "Simulated assets",
  "Controlled AI environments",
];

export default function Sandbox() {
  return (
    <section id="sandbox">
      <div className="wrap">
        <div className="reveal">
          <span className="eyebrow"><span className="idx">06 —</span> Safe adoption</span>
          <h2>Experiment before committing critical systems.</h2>
          <p className="section-lede">
            The Alké Institutional Sandbox gives members a controlled environment to test emerging
            technologies before production adoption.
          </p>
        </div>

        <div className="reveal" style={{ marginTop: 48 }}>
          <PathDiagram steps={JOURNEY} />
        </div>

        <div className="two-col reveal">
          <div>
            <p className="section-body">
              Institutions can begin with synthetic data, sample workflows, non-sensitive
              information, simulated assets, and controlled AI environments — with no assumption
              of production adoption.
            </p>
            <p className="section-body" style={{ marginTop: 16 }}>
              A successful sandbox may lead to production. A sandbox may also prove that a
              technology is not appropriate for the institution. Both are valuable outcomes.
            </p>
            <Link className="textlink" to="/institutional-brief" style={{ display: "inline-block", marginTop: 24 }}>
              See how the sandbox works →
            </Link>
          </div>
          <ul className="dash-list">
            {START_WITH.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
