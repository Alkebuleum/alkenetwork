import SolutionDiagram from "./SolutionDiagram";

export default function Solution() {
  return (
    <section id="solution">
      <div className="wrap narrative-grid">
        <div className="reveal">
          <span className="eyebrow">The solution</span>
          <h2>Shared infrastructure governed by trusted institutions.</h2>
          <div className="section-body">
            <p>
              Alké Network provides a common trust layer that institutions can collectively
              govern while retaining control of their own data, systems, and operations.
            </p>
            <p>
              Through shared standards and verifiable records, institutions can issue and verify
              identities, credentials, critical documents, tokenized assets, and digital
              transactions across organizational and national boundaries — without depending on a
              single company, platform, or foreign-controlled infrastructure.
            </p>
          </div>
        </div>
        <div className="narrative-figure reveal d1">
          <SolutionDiagram />
          <p className="figure-caption">
            One shared, institutionally governed layer — verifiable across every institution and
            border on it.
          </p>
        </div>
      </div>
    </section>
  );
}
