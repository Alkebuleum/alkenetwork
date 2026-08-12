import SolutionDiagram from "./SolutionDiagram";

const REASONS = [
  {
    num: "01",
    label: "Understand what is changing",
    hook: "Prepare your institution before the future becomes a procurement decision.",
    body: [
      "AI is reshaping institutional workflows, knowledge systems, decision support, and automation. Distributed ledgers are being applied to shared verification, trusted records, credentials, digital assets, and settlement.",
      "Most institutions know these shifts matter but still face the same questions: what is relevant to us, where is the actual business value, what risks must we manage, and what should stay under our control. Alké gives institutions structured intelligence, peer learning, expert briefings, and working groups to answer those questions together.",
    ],
    value: "Foresight · Knowledge · Better decisions",
    diagram: true,
  },
  {
    num: "02",
    label: "Turn technology into institutional value",
    hook: "Identify real institutional problems, not speculative technology.",
    body: [
      "Institutions often spend significant time and resources on repetitive manual work, fragmented integrations, and disconnected verification processes — the kind of friction AI and shared infrastructure are now mature enough to address.",
      "Alké members work with Alké and peer institutions to imagine new products, improve workflows, prototype solutions, test emerging technology, and measure business value before committing to it.",
    ],
    value: "Innovation · Efficiency · New services · Market readiness",
  },
  {
    num: "03",
    label: "Adopt safely and build toward sovereignty",
    hook: "Experiment before committing critical systems, data, or capital.",
    body: [
      "The Alké Institutional Sandbox gives technical, legal, compliance, operational, and leadership teams a controlled environment in which to evaluate AI and distributed-ledger use cases together, before any of them touch production systems.",
      "Where appropriate, members develop governance, technical capacity, and internal knowledge around institution-controlled data, open-weight AI, local deployment, shared infrastructure, and interoperability — building the capability to adopt on their own terms.",
    ],
    value: "Lower risk · Greater control · Long-term sovereignty",
  },
];

export default function WhyJoin() {
  return (
    <section id="why-join">
      <div className="wrap">
        <div className="reveal">
          <span className="eyebrow"><span className="idx">03 —</span> Why Alké</span>
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
                      FIG. A — Institutions of any type or region join a governed perimeter, not a
                      centralized platform.
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
