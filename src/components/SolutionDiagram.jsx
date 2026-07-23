const NODES = [
  { x: 60, y: 56, label: "Bank" },
  { x: 232, y: 48, label: "Registry" },
  { x: 262, y: 152, label: "Ministry" },
  { x: 150, y: 196, label: "University" },
  { x: 44, y: 150, label: "Agency" },
];

const HUB = { x: 160, y: 112 };

export default function SolutionDiagram() {
  return (
    <svg viewBox="0 0 320 220" role="img" aria-label="The same five institutions connected through one shared, governed network hub">
      <circle className="boundary" cx={HUB.x} cy={HUB.y} r="112" />
      {NODES.map((n) => (
        <line key={n.label} className="link" x1={HUB.x} y1={HUB.y} x2={n.x} y2={n.y - 6} />
      ))}
      <circle className="hub" cx={HUB.x} cy={HUB.y} r="13" />
      <circle className="hub-dot" cx={HUB.x} cy={HUB.y} r="4" />
      {NODES.map((n) => (
        <g key={n.label}>
          <circle className="dot-accent" cx={n.x} cy={n.y - 6} r="5" />
          <text x={n.x} y={n.y + 18} textAnchor="middle">
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
