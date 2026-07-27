import SolutionDiagram from "./SolutionDiagram";

const REASONS = [
  {
    num: "01",
    label: "Strategic sovereignty",
    hook: "The next digital rails should not be built without Africa at the table.",
    body: [
      "Distributed-ledger infrastructure is increasingly being used for trusted identity, credentials, institutional records, tokenized assets, payments, and digital settlement. Yet most major networks and standards have been developed with limited participation from African institutions.",
      "Alké gives participating institutions a direct role in shaping governance, technical standards, infrastructure requirements, and priority use cases—while remaining connected to the wider global digital economy.",
    ],
    value:
      "Influence over emerging standards, greater institutional control, infrastructure resilience, and long-term strategic capacity.",
    diagram: true,
  },
  {
    num: "02",
    label: "Business value",
    hook: "Solve costly multiparty problems with shared infrastructure.",
    body: [
      "Institutions often spend significant time and resources repeatedly verifying information, reconciling separate records, maintaining fragmented integrations, and processing transactions across disconnected systems.",
      "Alké allows institutions to test whether a shared trust layer can reduce these costs while enabling new services around verifiable credentials, document proofing, trusted data exchange, tokenized assets, stablecoins, and programmable transactions.",
    ],
    value:
      "Lower operating friction, faster verification, improved cross-border reach, access to new services and markets, and more productive use of institutional resources.",
  },
  {
    num: "03",
    label: "Safe adoption",
    hook: "Experiment before committing critical systems or real transactions.",
    body: [
      "The Alké Institutional Sandbox gives technical, legal, compliance, operational, and leadership teams a controlled environment in which to evaluate distributed-ledger use cases together.",
      "Institutions can begin with synthetic data, simulated assets, and non-financial proofs. They can compare results against existing processes, assess governance and compliance requirements, and move approved use cases toward production only after internal review.",
    ],
    value:
      "Lower adoption risk, stronger internal capability, informed implementation planning, and measurable evidence for executive decision-making.",
  },
];

export default function WhyJoin() {
  return (
    <section id="why-join">
      <div className="wrap">
        <div className="reveal">
          <span className="eyebrow"><span className="idx">02 —</span> Why join</span>
          <h2>Why join Alké Network?</h2>
        </div>
        <div className="why-items">
          {REASONS.map((r) => (
            <div className="why-item reveal" key={r.num}>
              <div className="why-item-main">
                <div className="why-item-label">
                  {r.num} — {r.label}
                </div>
                <h3>{r.hook}</h3>
                {r.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="why-item-aside">
                {r.diagram && (
                  <div className="narrative-figure">
                    <SolutionDiagram />
                    <p className="figure-caption">
                      FIG. A — Institutions join a governed perimeter, not a centralized platform.
                    </p>
                  </div>
                )}
                <div className="why-value">
                  <div className="k">Institutional value</div>
                  <p>{r.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
