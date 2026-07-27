import AfricaMap from "./AfricaMap";
import Mark from "./Mark";

const NODES = [
  { x: 374, y: 500, label: "Senegal" },
  { x: 472, y: 452, label: "Egypt" },
  { x: 417, y: 518, label: "Nigeria" },
  { x: 491, y: 521, label: "Kenya" },
  { x: 475, y: 590, label: "South Africa" },
];

const HUB = { x: 446, y: 518 };
const JOIN_NODE = { x: 512, y: 448 };

export default function SolutionDiagram() {
  return (
    <svg
      viewBox="352 421.7 195 213.5"
      role="img"
      aria-label="Concentric governance rings around a shared network hub, with African institutions joining as member nodes"
    >
      {/* governance perimeter */}
      <circle cx={HUB.x} cy={HUB.y} r="46" className="boundary" />
      <circle cx={HUB.x} cy={HUB.y} r="74" className="boundary" style={{ strokeOpacity: 0.18 }} />

      <AfricaMap />
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

      {/* a new institution joining the ratified perimeter */}
      <line className="link-out" x1={JOIN_NODE.x} y1={JOIN_NODE.y} x2={HUB.x + 45} y2={HUB.y - 15} />
      <circle className="ext-node" cx={JOIN_NODE.x} cy={JOIN_NODE.y} r="5.5" />
      <text x={JOIN_NODE.x} y={JOIN_NODE.y - 11} textAnchor="middle" className="label-accent">NEW</text>

      <circle cx={HUB.x} cy={HUB.y - 74} r="8" className="boundary" style={{ strokeDasharray: "none" }} />
      <text x={HUB.x} y={HUB.y - 71} textAnchor="middle" className="label-accent">A</text>
    </svg>
  );
}
