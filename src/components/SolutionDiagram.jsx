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

export default function SolutionDiagram() {
  return (
    <svg
      viewBox="356.9 425.7 182.9 205.5"
      role="img"
      aria-label="Map of Africa with institutions in five countries connected to each other through one shared network hub"
    >
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
    </svg>
  );
}
