const CIRCLES = [
  {
    num: "01",
    name: "Trusted Records & Institutions",
    forWhom: "Universities, archives, registries, licensing authorities, identity agencies, ministries, certification bodies.",
    topics: "AI workflows, credentials, trusted records, document proofing, data governance.",
  },
  {
    num: "02",
    name: "Financial & Digital Value",
    forWhom: "Banks, fintechs, payment companies, insurers, capital-market institutions, remittance providers.",
    topics: "AI operations, settlement, stablecoins, digital assets, reconciliation, compliance.",
  },
  {
    num: "03",
    name: "Development & Accountability",
    forWhom: "NGOs, donors, foundations, development organizations, implementing partners.",
    topics: "AI project intelligence, fund accountability, reporting, milestone verification, donor transparency.",
  },
];

export default function SectorCircles() {
  return (
    <section id="sector-circles">
      <div className="wrap">
        <div className="reveal">
          <span className="eyebrow"><span className="idx">05 —</span> Sector circles</span>
          <h2>Learn with institutions facing the same decisions.</h2>
        </div>
        <div className="card-grid card-grid--3col reveal">
          {CIRCLES.map((c) => (
            <div className="card" key={c.num}>
              <div className="k">Circle {c.num}</div>
              <h3>{c.name}</h3>
              <p>
                <b style={{ color: "var(--ink-1)" }}>For:</b> {c.forWhom}
              </p>
              <p style={{ marginTop: 12 }}>
                <b style={{ color: "var(--ink-1)" }}>Topics:</b> {c.topics}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
