const USES = [
  { title: "Experiment", body: "Simulate tokenized assets, stablecoins and settlement models.", d: "" },
  { title: "Pilot", body: "Test institutional use cases without live customer funds.", d: "d1" },
  { title: "Prepare", body: "Build technical, compliance and policy readiness.", d: "d2" },
  { title: "Govern", body: "Help shape standards before production deployment.", d: "d3" },
];

export default function WhyJoinNow() {
  return (
    <section>
      <div className="wrap">
        <div className="reveal">
          <span className="eyebrow">Why join now</span>
          <h2>Built for experimentation, before live deployment</h2>
        </div>
        <div className="uses">
          {USES.map(({ title, body, d }) => (
            <div className={`use reveal ${d}`.trim()} key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
