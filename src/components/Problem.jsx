import ProblemDiagram from "./ProblemDiagram";

export default function Problem() {
  return (
    <section id="problem">
      <div className="wrap narrative-grid">
        <div className="reveal">
          <span className="eyebrow">The problem</span>
          <h2>Africa's digital sovereignty is at risk.</h2>
          <div className="section-body">
            <p>
              Critical identity systems, credentials, institutional records, payment
              infrastructure, and public data increasingly depend on fragmented platforms
              controlled outside the institutions and communities they serve.
            </p>
            <p>
              This creates long-term risks around data ownership, verification, system
              resilience, interoperability, and institutional control. Organizations remain
              isolated in separate systems, while trusted information is difficult to verify
              across borders and sectors.
            </p>
          </div>
        </div>
        <div className="narrative-figure reveal d1">
          <ProblemDiagram />
          <p className="figure-caption">
            Each institution locked into its own externally controlled platform — with no shared
            way to verify records or credentials between them.
          </p>
        </div>
      </div>
    </section>
  );
}
