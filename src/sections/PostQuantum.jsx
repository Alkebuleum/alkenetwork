import { Ext } from "../components/Brand";
import { LINKS } from "../data/links";

const STATUS = [
  { k: "Now · Live network", v: "Mining open", tone: "live" },
  { k: "Goal · Post-quantum Mainnet", v: "Not built yet" },
  { k: "Open · The plan", v: "Being written in public", tone: "gold" },
];

/* A hexagon with a padlock: post-quantum security. */
function HexLock() {
  return (
    <svg className="pq-lock" width="64" height="72" viewBox="0 0 100 112" role="img" aria-label="A hexagon lock, for post-quantum security">
      <path d="M50 4 L94 29 L94 83 L50 108 L6 83 L6 29 Z" fill="none" stroke="#3DF5FF" strokeWidth="5" strokeLinejoin="round" />
      <rect x="32" y="52" width="36" height="30" rx="4" fill="none" stroke="#FFC94A" strokeWidth="5" />
      <path d="M38 52 L38 42 C38 34 44 30 50 30 C56 30 62 34 62 42 L62 52" fill="none" stroke="#FFC94A" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

export default function PostQuantum() {
  return (
    <section className="band" id="post-quantum" aria-labelledby="pqTitle">
      <div className="wrap">
        <div className="pq panel">
          <div className="pq-copy">
            <p className="eyebrow">// Post-quantum</p>
            <h2 className="display" id="pqTitle">
              Built to outlast <span className="cyanglow">quantum computers.</span>
            </h2>
            <p className="lede">
              Today's wallets use signatures a large quantum computer could one day break. ALKÉ's goal is a Mainnet secured with post-quantum cryptography, so your ALKE stays
              yours. It isn't built yet, so we're publishing the plan in the open: what's decided, and what's still open.
            </p>
            {/* The plan page isn't public yet. Set LINKS.pqPlan and the button appears. */}
            {LINKS.pqPlan && (
              <div className="btns">
                <Ext className="btn cyanfill" href={LINKS.pqPlan}>
                  Read the post-quantum plan
                </Ext>
              </div>
            )}
          </div>
          <div className="pq-status">
            <HexLock />
            <ul className="pq-rows" aria-label="Where post-quantum stands">
              {STATUS.map((s) => (
                <li key={s.k} className={s.tone === "live" ? "pq-row live" : "pq-row"}>
                  <b>{s.k}</b>
                  <span className={s.tone ? `pq-v ${s.tone}` : "pq-v"}>{s.v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
