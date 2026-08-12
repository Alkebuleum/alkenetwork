import PathDiagram from "./PathDiagram";

const PROGRESSION = ["Use", "Understand", "Integrate", "Control", "Own"];

const EXAMPLES = [
  "Data control",
  "Model portability",
  "Open-weight AI",
  "Local or private deployment",
  "Vendor independence",
  "Infrastructure participation",
  "Institution-controlled identity",
  "Interoperability",
];

export default function Sovereignty() {
  return (
    <section id="sovereignty">
      <div className="wrap">
        <div className="reveal">
          <span className="eyebrow"><span className="idx">09 —</span> Sovereignty</span>
          <h2>Adopt globally. Preserve the ability to control what matters.</h2>
          <p className="section-lede">
            Digital sovereignty is the capacity of an institution to understand its technology
            dependencies, control critical data and capabilities, move between providers when
            necessary, participate in relevant standards and infrastructure, and make informed
            decisions about what it should own, share, outsource, or operate itself.
          </p>
        </div>

        <div className="reveal" style={{ marginTop: 48 }}>
          <PathDiagram steps={PROGRESSION} />
        </div>

        <div className="two-col reveal">
          <div>
            <p className="section-body">
              This applies to institutions everywhere, not only to a single region or bloc.
              Sovereignty is not isolation — it is the ability to participate in the global
              technology economy without becoming permanently dependent on infrastructure, data
              systems, models, or standards an institution cannot influence or control.
            </p>
            <p className="section-body" style={{ marginTop: 16 }}>
              <b style={{ color: "var(--ink-1)" }}>Participate globally without surrendering
              control of critical capabilities.</b>
            </p>
          </div>
          <ul className="dash-list">
            {EXAMPLES.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
