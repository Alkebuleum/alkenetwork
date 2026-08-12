import { Link } from "react-router-dom";
import ArrowIcon from "./icons/ArrowIcon";

const AI_AREAS = [
  "Institutional AI agents",
  "Workflow automation",
  "Private knowledge systems",
  "AI governance",
  "Responsible AI adoption",
  "Data governance",
  "Open-weight models",
  "Local / private deployment",
  "Institutional RAG",
  "AI procurement",
  "Human oversight",
  "Sovereign AI infrastructure",
];

const DLT_AREAS = [
  "Verifiable identity",
  "Academic & professional credentials",
  "Critical records",
  "Document proofing",
  "Trusted institutional data",
  "Project accountability",
  "Tokenized assets",
  "Stable-value infrastructure",
  "Cross-border settlement",
  "Institutional digital-asset readiness",
];

export default function PracticeAreas() {
  return (
    <section id="practice-areas">
      <div className="wrap">
        <div className="reveal">
          <span className="eyebrow"><span className="idx">04 —</span> Practice areas</span>
          <h2>Two technologies. One institutional adoption model.</h2>
          <p className="section-lede">
            Alké runs each practice area on the same model — intelligence, peer learning, and a
            governed sandbox — but not every institution needs both.
          </p>
        </div>
        <div className="practice-grid reveal">
          <div>
            <div className="k">AI Practice</div>
            <h3>Responsible and Sovereign AI</h3>
            <ul className="dash-list">
              {AI_AREAS.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
            <Link className="btn btn-secondary" to="/technology#ai">
              Explore AI Practice
              <ArrowIcon />
            </Link>
          </div>
          <div>
            <div className="k">DLT Practice</div>
            <h3>Shared Trust and Digital Infrastructure</h3>
            <ul className="dash-list">
              {DLT_AREAS.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
            <Link className="btn btn-secondary" to="/technology#dlt">
              Explore DLT Practice
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
