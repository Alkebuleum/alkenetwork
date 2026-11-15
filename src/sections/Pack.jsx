import { Hex } from "../components/Brand";
import Puvv from "../components/Puvv";

/* Mirrors the app's contribution table (app.alke.network src/lib/contribution.js)
   and the server's daily warming (functions/genesis.js WARMING, ACTIVE_AFTER).
   Change the weights there first, then here. */
// [kind, rule, what it adds a day, live in the app today?]
const WAYS = [
  ["Invites", "1% a day per active invite", "1% each", true],
  ["Games", "0.1% per 30 XP", "max 0.3%", true],
  ["Lessons", "0.1% per lesson", "max 0.3%", false],
  ["Discussions", "0.1% per approved post", "max 0.2%", false],
];

// [active invites, daily game XP maxed?, % a day, fully warm in]
const EXAMPLES = [
  ["0", "Yes", "0.3%", "334 days"],
  ["1", "No", "1%", "100 days"],
  ["3", "Yes", "3.3%", "31 days"],
  ["5", "No", "5%", "20 days"],
  ["10", "Yes", "10.3%", "10 days"],
];

const RULES = [
  "An invite becomes active once the person you invited completes 3 sessions.",
  "Your own mining sessions and practice runs don't warm your coins.",
  "Game XP only counts toward warming. The XP itself never becomes ALKE.",
  "Only warm ALKE can be claimed. Cold ALKE stays cold until it's warmed.",
];

export default function Pack() {
  return (
    <section className="band" id="warming" aria-labelledby="packTitle">
      <div className="wrap pack-grid">
        <div>
          <p className="eyebrow">// The pack</p>
          <h2 className="display" id="packTitle">
            Your pack <span className="glow">warms your ALKE.</span>
          </h2>
          <p className="lede">
            The African wild dog is one of the continent's most successful hunters, because it never hunts alone. ALKE works the same way: each day your contributions warm a
            share of your cold ALKE, and your pack counts most. Each active invite warms 1% a day, and daily game XP adds up to 0.3% more.
          </p>
          <Puvv className="pack-dog" mood="listening" />
        </div>
        <div className="panel">
          <div className="formula">
            <small>The formula</small>
            <p>Warmed each day = active invites × 1% + games + lessons + discussions</p>
          </div>
          <ul className="ways" aria-label="What warms cold ALKE">
            {WAYS.map(([kind, rule, adds, live]) => (
              <li key={kind} className={live ? "way" : "way soon"}>
                <span className="way-tx">
                  <b>{kind}</b>
                  <span>{rule}</span>
                </span>
                <span className="way-end">
                  <b>{adds}</b>
                  {!live && <i>Soon</i>}
                </span>
              </li>
            ))}
          </ul>
          <div className="tbl-box">
            <table className="warm-ex">
              <caption>Examples, with what's live today</caption>
              <thead>
                <tr>
                  <th scope="col">Active invites</th>
                  <th scope="col">Games maxed</th>
                  <th scope="col">A day</th>
                  <th scope="col">Fully warm in</th>
                </tr>
              </thead>
              <tbody>
                {EXAMPLES.map(([invites, games, rate, days]) => (
                  <tr key={invites + games}>
                    <td>{invites}</td>
                    <td>{games}</td>
                    <td>{rate}</td>
                    <td>{days}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="warm-sum">Warming is a share of your balance, so it works the same for any amount: more active invites means your cold ALKE is fully warm sooner.</p>
          <ul className="rules">
            {RULES.map((r) => (
              <li key={r}>
                <Hex size={14} stroke={12} color="#3DF5FF" />
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
