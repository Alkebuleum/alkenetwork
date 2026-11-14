import { Hex, Mascot } from "../components/Brand";

const EXAMPLES = [
  ["100", "1", "10 days"],
  ["100", "5", "2 days"],
  ["1,000", "1", "100 days"],
  ["1,000", "10", "10 days"],
];

const RULES = [
  "Unverified invites warm nothing.",
  "Your own mining does not warm your coins.",
  "Only warmed ALKE converts to hot ALKE at listing. Unwarmed cold ALKE stays cold.",
  "The full invite verification steps are published in the app at launch.",
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
            The African wild dog is one of the continent's most successful hunters, because it never hunts alone. ALKE works the same way: cold ALKE is warmed only by real,
            verified people you invite. Each verified invite warms 10 of your cold ALKE per day.
          </p>
          <Mascot className="pack-dog" />
        </div>
        <div className="panel">
          <div className="formula">
            <small>The formula</small>
            <p>Warming time = your cold ALKE ÷ (verified invites × 10 per day)</p>
          </div>
          <div className="tbl-box">
            <table className="warm-ex">
              <caption>Examples</caption>
              <thead>
                <tr>
                  <th scope="col">Cold ALKE</th>
                  <th scope="col">Verified invites</th>
                  <th scope="col">Warms in</th>
                </tr>
              </thead>
              <tbody>
                {EXAMPLES.map(([cold, invites, days]) => (
                  <tr key={cold + invites}>
                    <td>{cold}</td>
                    <td>{invites}</td>
                    <td>{days}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="warm-sum">Few coins and few invites warm quickly. Lots of coins need more invites to warm quickly; otherwise they warm slowly.</p>
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
