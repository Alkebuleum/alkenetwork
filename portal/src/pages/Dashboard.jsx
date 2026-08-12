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

const AVATAR_COLORS = ["g", "p", "t", "a"];

function firstName(name) {
  return name.split(" ")[0];
}

export default function Dashboard() {
  return (
    <>
      <div className="crumbs">
        Alké Network &rsaquo; <b>Home</b>
      </div>

      <section className="hero">
        <div className="l">
          <h1>Good morning, {firstName(CURRENT_USER.name)}</h1>
          <p>Here's what matters to {CURRENT_USER.institution} this week.</p>
        </div>
        <div className="cta">
          <div className="k">Recommended next step</div>
          <div className="t">{RECOMMENDED_ACTION.title}</div>
          <Link className="btn primary" to="/sovereignty">
            {RECOMMENDED_ACTION.cta}
            <ArrowRightIcon />
          </Link>
        </div>
      </section>

      <div className="grid">
        {/* What's changing */}
        <div>
          <div className="sectionhead">
            <h2>What's changing</h2>
            <Link to="/intelligence">View all intelligence</Link>
          </div>
          <div className="card intel">
            {INTELLIGENCE_ITEMS.map((item) => (
              <Link className="row" to="/intelligence" key={item.id}>
                <div className="meta">
                  <span className={`tag ${item.category.toLowerCase() === "ai" ? "ai" : item.category.toLowerCase() === "dlt" ? "dlt" : "sov"}`}>
                    {item.category}
                  </span>
                  <span className="sector">{item.sector}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.why}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Right rail */}
        <aside className="rail">
          <section>
            <div className="sectionhead">
              <h2>What peers are doing</h2>
              <Link to="/network">View network</Link>
            </div>
            <div className="card">
              {PEER_ACTIVITY.map((p, i) => (
                <div className="peer" key={p.id}>
                  <div className={`pav ${AVATAR_COLORS[i % AVATAR_COLORS.length]}`}>
                    {p.institution
                      .split(" ")
                      .slice(0, 2)
                      .map((w) => w.charAt(0))
                      .join("")}
                  </div>
                  <div className="body">
                    <b>{p.institution}</b> {p.action}
                    <div className="sub">
                      {p.sector} · {p.country}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="sectionhead">
              <h2>Working groups</h2>
              <Link to="/groups">View all</Link>
            </div>
            <div className="card">
              {WORKING_GROUPS.map((g, i) => (
                <div className="wg" key={g.id}>
                  <div className="t">{g.name}</div>
                  {i === 0 && <span className="chip">Member</span>}
                  <div className="d">Meets {g.meetsNext}</div>
                </div>
              ))}
            </div>
          </section>
        </aside>
      </div>

      <div className="sectionhead" style={{ marginTop: 24 }}>
        <h2>What we're working on</h2>
        <Link to="/sandbox">Open sandbox</Link>
      </div>
      <div className="card">
        {SANDBOX_PROJECTS.map((proj) => (
          <div className="proj" key={proj.id}>
            <div className="proj-head">
              <div>
                <span className="proj-eyebrow">{proj.practice}</span>
                <h3>{proj.name}</h3>
              </div>
              <span className="badge-pill badge-pill--amber">
                <span className="badge-dot" />
                {proj.phase}
              </span>
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
            <div className="progress">
              <i style={{ width: `${proj.progress}%` }} />
            </div>
            <div className="proj-foot">
              <span>
                <span className="k">Team: </span>
                {proj.team}
              </span>
              <span>
                <span className="k">Next: </span>
                {proj.nextMilestone}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
