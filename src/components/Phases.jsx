const PHASES = [
  { num: "01", title: "Experiment", desc: "Simulate tokenized assets, stablecoins, and settlement models with no live funds at risk." },
  { num: "02", title: "Pilot", desc: "Test real institutional use cases end-to-end inside the sandbox environment." },
  { num: "03", title: "Prepare", desc: "Build the technical, compliance, and policy readiness live deployment requires." },
  { num: "04", title: "Govern", desc: "Help set the standards the network runs on, before production opens to others." },
];

export default function Phases() {
  return (
    <section id="phases">
      <div className="wrap">
        <div className="reveal">
          <span className="eyebrow">Why join now</span>
          <h2>Four phases, before anything is live</h2>
          <p className="section-lede">
            Each phase narrows from open experimentation to binding standards. Institutions that
            join earlier shape more of what phase four looks like.
          </p>
        </div>
        <div className="phases reveal">
          {PHASES.map((p) => (
            <div className="phase" key={p.num}>
              <div className="num">{p.num}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
