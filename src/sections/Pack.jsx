import { Hex, Mascot } from "../components/Brand";

// [active invites, daily game XP maxed?, % a day, fully warm in]
const EXAMPLES = [
  ["1", "No", "1%", "100 days"],
  ["3", "Yes", "3.3%", "31 days"],
  ["5", "No", "5%", "20 days"],
  ["10", "Yes", "10.3%", "10 days"],
];

const RULES = [
  "An invite becomes active once the person you invited completes 3 sessions.",
  "Your own mining sessions don't warm your coins.",
  "Game XP warms up to 0.3% a day. The XP itself is never redeemable for ALKE.",
  "Only warm ALKE can be claimed. Cold ALKE stays cold until it's warmed.",
  "Lessons and discussions will add more ways to warm soon.",
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
            The African wild dog is one of the continent's most successful hunters, because it never hunts alone. ALKE works the same way: your contributions warm your cold
            ALKE, and your pack counts most. Each active invite warms 1% of your cold ALKE a day, and daily game XP adds up to 0.3% more.
          </p>
          <Mascot className="pack-dog" />
        </div>
        <div className="panel">
          <div className="formula">
            <small>The formula</small>
            <p>Warmed each day = active invites × 1% + game XP (0.1% per 30 XP, up to 0.3%)</p>
          </div>
          <div className="tbl-box">
            <table className="warm-ex">
              <caption>Examples</caption>
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
