const STEPS = [
  { x: 78, label: "Intro conversation" },
  { x: 250, label: "Technical review" },
  { x: 422, label: "Ratification" },
];
const Y = 26;

export default function PathDiagram() {
  return (
    <div className="path-diagram" aria-hidden="true">
      <svg viewBox="0 0 500 70" fill="none">
        <path
          d={`M${STEPS[0].x} ${Y} H${STEPS[STEPS.length - 1].x}`}
          className="track"
        />
        {STEPS.map((s, i) => (
          <g key={s.label}>
            <circle cx={s.x} cy={Y} r="9" className="node-ring" strokeWidth={i === 0 ? 1.4 : 1} />
            {i === 0 ? (
              <circle cx={s.x} cy={Y} r="3" className="node-dot" />
            ) : (
              <text x={s.x} y={Y + 3.5} textAnchor="middle" style={{ fontSize: 8.5 }}>
                {i + 1}
              </text>
            )}
            <text x={s.x} y={Y + 26} textAnchor="middle" className="step-label">
              {s.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
