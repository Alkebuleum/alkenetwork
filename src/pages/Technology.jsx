import { Link } from "react-router-dom";
import InnerHero from "../components/InnerHero";
import ArrowIcon from "../components/icons/ArrowIcon";

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

export default function Technology() {
  return (
    <div className="inner-page">
      <InnerHero
        eyebrow="Practice Areas"
        title="Two technologies. One institutional adoption model."
        lede="Alké runs each practice area on the same model — intelligence, peer learning, and a governed sandbox. Institutions choose the practice area, or areas, relevant to them; not every institution needs both."
      />

      <section id="ai">
        <div className="wrap">
          <span className="eyebrow"><span className="idx">01 —</span> AI Practice</span>
          <h2>Responsible and Sovereign AI</h2>
          <p className="section-lede">
            AI is reshaping institutional workflows, knowledge systems, decision support, and
            automation. The AI practice helps institutions adopt it responsibly — with governance,
            human oversight, and a clear view of what should stay under institutional control.
          </p>
          <div className="card-grid">
            {AI_AREAS.map((a) => (
              <div className="card" key={a}>
                <div className="k">AI</div>
                <h3>{a}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="dlt">
        <div className="wrap">
          <span className="eyebrow"><span className="idx">02 —</span> DLT Practice</span>
          <h2>Shared Trust and Digital Infrastructure</h2>
          <p className="section-lede">
            Distributed ledgers are being applied to shared verification, trusted records,
            credentials, digital assets, and settlement. The DLT practice helps institutions
            evaluate where a shared trust layer creates real value.
          </p>
          <div className="card-grid">
            {DLT_AREAS.map((a) => (
              <div className="card" key={a}>
                <div className="k">DLT</div>
                <h3>{a}</h3>
              </div>
            ))}
          </div>
          <p className="figure-caption" style={{ marginTop: 28 }}>
            The DLT practice is stewarded today by the Alkebuleum Foundation — see{" "}
            <Link className="textlink" to="/foundation">
              the Alkebuleum Foundation
            </Link>
            .
          </p>
        </div>
      </section>

      <section>
        <div className="wrap" style={{ textAlign: "center" }}>
          <h2 style={{ maxWidth: "20ch", margin: "0 auto 18px" }}>
            Test it before you commit to it.
          </h2>
          <p className="section-lede" style={{ margin: "0 auto 32px" }}>
            The governed sandbox lets institutions evaluate either practice area with synthetic
            data before any production use case.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <Link className="btn btn-primary" to="/apply">
              Apply as a Founding Participant
              <ArrowIcon />
            </Link>
            <Link className="btn btn-secondary" to="/institutional-brief">
              Read the Institutional Brief
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
