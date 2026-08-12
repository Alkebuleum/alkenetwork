const BENEFITS = [
  { name: "Executive Intelligence", desc: "Sector-specific frontier-tech briefings." },
  { name: "Peer Network", desc: "Connect with institutions facing similar challenges." },
  { name: "Working Groups", desc: "Collaborate around shared institutional priorities." },
  { name: "Institutional Sandbox", desc: "Test practical AI and DLT use cases." },
  { name: "Innovation Studio", desc: "Turn institutional problems into prototypes and pilots." },
  {
    name: "Learning Academy",
    desc: "Role-specific learning for executives, technical teams, legal, compliance, and operations.",
  },
  {
    name: "Policy & Governance Library",
    desc: "Institution-ready frameworks, templates, and checklists.",
  },
  {
    name: "Sovereignty Center",
    desc: "Assess institutional dependency and build toward greater control.",
  },
  {
    name: "Events & Roundtables",
    desc: "Executive briefings, technical workshops, member demonstrations.",
  },
];

export default function MemberBenefits() {
  return (
    <section id="member-benefits">
      <div className="wrap">
        <div className="reveal">
          <span className="eyebrow"><span className="idx">07 —</span> Member benefits</span>
          <h2>A network designed to build institutional capability.</h2>
        </div>
        <div className="card-grid card-grid--3col reveal">
          {BENEFITS.map((b, i) => (
            <div className="card" key={b.name}>
              <div className="k">{String(i + 1).padStart(2, "0")}</div>
              <h3>{b.name}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
