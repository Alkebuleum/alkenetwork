import { Link } from "react-router-dom";
import {
  CURRENT_USER,
  INTELLIGENCE_ITEMS,
  PEER_ACTIVITY,
  SANDBOX_PROJECTS,
  WORKING_GROUPS,
  RECOMMENDED_ACTION,
  PHASES,
  phaseIndex,
} from "../data/mock";
import { ArrowRightIcon } from "../components/icons";

function firstName(name) {
  return name.split(" ")[0];
}

export default function Dashboard() {
  return (
    <div className="page">
      <div className="welcome-banner">
        <div>
          <h1>Good morning, {firstName(CURRENT_USER.name)}.</h1>
          <p>Here's what matters to {CURRENT_USER.institution} this week.</p>
        </div>
        <div style={{ maxWidth: 340 }}>
          <div className="card-eyebrow" style={{ marginBottom: 6 }}>
            Recommended next step
          </div>
          <p style={{ fontSize: 13, color: "var(--ink-1)", marginBottom: 12 }}>
            {RECOMMENDED_ACTION.title}
          </p>
          <Link className="btn btn-primary btn--sm" to="/sovereignty">
            {RECOMMENDED_ACTION.cta}
            <ArrowRightIcon />
          </Link>
        </div>
      </div>

      <div className="grid grid-2">
        <div className="stack">
          <div className="section-title">
            What's changing
            <Link className="textlink" to="/intelligence">
              View all intelligence →
            </Link>
          </div>
          <div className="stack">
            {INTELLIGENCE_ITEMS.map((item) => (
              <div className="card card--interactive" key={item.id}>
                <div className="card-head">
                  <span className="badge badge--acc">{item.category}</span>
                  <span className="card-eyebrow">{item.sector}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.why}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="stack">
          <div className="section-title">
            What peers are doing
            <Link className="textlink" to="/network">
              View network →
            </Link>
          </div>
          <div className="card">
            {PEER_ACTIVITY.map((p, i) => (
              <div
                key={p.id}
                style={{
                  display: "flex",
                  gap: 12,
                  padding: "12px 0",
                  borderTop: i === 0 ? "none" : "1px solid var(--line)",
                }}
              >
                <div className="avatar avatar--institution avatar--sm">
                  {p.institution.charAt(0)}
                </div>
                <div style={{ fontSize: 13 }}>
                  <span style={{ color: "var(--ink-0)", fontWeight: 500 }}>{p.institution}</span>{" "}
                  <span style={{ color: "var(--ink-2)" }}>{p.action}</span>
                  <div className="card-eyebrow" style={{ marginTop: 4 }}>
                    {p.sector} · {p.country}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="section-title" style={{ marginTop: 8 }}>
            Working groups
            <Link className="textlink" to="/groups">
              View all →
            </Link>
          </div>
          <div className="card">
            {WORKING_GROUPS.map((g, i) => (
              <div
                key={g.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px 0",
                  borderTop: i === 0 ? "none" : "1px solid var(--line)",
                  fontSize: 13,
                }}
              >
                <span style={{ color: "var(--ink-0)" }}>{g.name}</span>
                <span className="card-eyebrow">Meets {g.meetsNext}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-title" style={{ marginTop: 28 }}>
        What we're working on
        <Link className="textlink" to="/sandbox">
          Open sandbox →
        </Link>
      </div>
      <div className="grid grid-2">
        {SANDBOX_PROJECTS.map((proj) => (
          <div className="card" key={proj.id}>
            <div className="card-head">
              <div>
                <span className="card-eyebrow">{proj.practice}</span>
                <h3 style={{ marginTop: 4 }}>{proj.name}</h3>
              </div>
              <span className="badge badge--warn">{proj.phase}</span>
            </div>
            <div className="phase-track" aria-hidden="true">
              {PHASES.map((ph, i) => (
                <span
                  key={ph}
                  className={
                    i < phaseIndex(proj.phase) ? "done" : i === phaseIndex(proj.phase) ? "current" : ""
                  }
                />
              ))}
            </div>
            <div className="progress" style={{ marginBottom: 14 }}>
              <i style={{ width: `${proj.progress}%` }} />
            </div>
            <div className="card-foot" style={{ flexDirection: "column", alignItems: "flex-start", gap: 6 }}>
              <span style={{ fontSize: 12.5, color: "var(--ink-3)" }}>Team: {proj.team}</span>
              <span style={{ fontSize: 12.5, color: "var(--ink-2)" }}>
                Next: {proj.nextMilestone}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
