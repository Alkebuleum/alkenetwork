const NODES = [
  { x: 60, y: 56, label: "Bank" },
  { x: 232, y: 48, label: "Registry" },
  { x: 262, y: 152, label: "Ministry" },
  { x: 150, y: 196, label: "University" },
  { x: 44, y: 150, label: "Agency" },
];

export default function ProblemDiagram() {
  return (
    <svg viewBox="0 0 320 220" role="img" aria-label="Five institutions, each locked inside its own separate platform with no connections between them">
      {NODES.map((n) => (
        <rect key={n.label} className="box" x={n.x - 46} y={n.y - 30} width="92" height="60" rx="10" />
      ))}
      {NODES.map((n) => (
        <g key={n.label}>
          <circle className="dot" cx={n.x} cy={n.y - 6} r="5" />
          <text x={n.x} y={n.y + 18} textAnchor="middle">
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
