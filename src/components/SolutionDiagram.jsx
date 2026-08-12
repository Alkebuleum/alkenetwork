import Mark from "./Mark";

const HUB = { x: 100, y: 100 };

const NODES = [
  { x: 100, y: 40, label: "University" },
  { x: 157.1, y: 81.5, label: "Bank" },
  { x: 135.3, y: 148.5, label: "Regulator" },
  { x: 64.7, y: 148.5, label: "Registry" },
  { x: 42.9, y: 81.5, label: "NGO" },
];

const JOIN_NODE = { x: 172, y: 24 };

export default function SolutionDiagram() {
  return (
    <svg
      viewBox="0 0 210 190"
      role="img"
      aria-label="Concentric governance rings around a shared network hub, with institutions of different types joining as member nodes"
    >
      {/* governance perimeter */}
      <circle cx={HUB.x} cy={HUB.y} r="46" className="boundary" />
      <circle cx={HUB.x} cy={HUB.y} r="74" className="boundary" style={{ strokeOpacity: 0.18 }} />

      {NODES.map((n) => (
        <line key={n.label} className="link" x1={HUB.x} y1={HUB.y} x2={n.x} y2={n.y} />
      ))}
      <circle className="hub" cx={HUB.x} cy={HUB.y} r="11" />
      <Mark className="hub-mark" x={HUB.x - 8} y={HUB.y - 8} width="16" height="16" />
      {NODES.map((n) => (
        <g key={n.label}>
          <circle className="dot-accent" cx={n.x} cy={n.y} r="4.5" />
          <text x={n.x} y={n.y + 15} textAnchor="middle">
            {n.label}
          </text>
        </g>
      ))}

      {/* a new institution joining the ratified perimeter, from anywhere */}
      <line className="link-out" x1={JOIN_NODE.x} y1={JOIN_NODE.y} x2={HUB.x + 45} y2={HUB.y - 15} />
      <circle className="ext-node" cx={JOIN_NODE.x} cy={JOIN_NODE.y} r="5.5" />
      <text x={JOIN_NODE.x} y={JOIN_NODE.y - 11} textAnchor="middle" className="label-accent">NEW</text>

      <circle cx={HUB.x} cy={HUB.y - 74} r="8" className="boundary" style={{ strokeDasharray: "none" }} />
      <text x={HUB.x} y={HUB.y - 71} textAnchor="middle" className="label-accent">A</text>
    </svg>
  );
}
