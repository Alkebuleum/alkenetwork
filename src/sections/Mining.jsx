import PhoneCanvas from "../components/PhoneCanvas";
import { Chip, Ext, Hex } from "../components/Brand";
import { X_URL } from "../data/links";

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
];

function Allocation() {
  return (
    <figure className="alloc" aria-labelledby="allocCap">
      <div className="alloc-fig">
        300,000,000<small>ALKE</small>
      </div>
      <figcaption id="allocCap">30% of the 1,000,000,000 ALKE genesis supply, held by the Community DAO for mining.</figcaption>
      <div
        className="meter"
        role="img"
        aria-label="Community mining allocation: 300,000,000 of 1,000,000,000 ALKE, which is 30% of the genesis supply"
        title="Community mining allocation: 300,000,000 ALKE (30%) of 1,000,000,000 ALKE"
      >
        <span className="meter-fill">
          <b>30%</b>
        </span>
      </div>
      <div className="meter-scale" aria-hidden="true">
        <span>0</span>
        <span>1,000,000,000 ALKE</span>
      </div>
      <ul className="legend">
        <li>
          <i className="sw gold" />
          Community mining allocation
        </li>
        <li>
          <i className="sw track" />
          Rest of the genesis supply
        </li>
      </ul>
      <p className="alloc-note">The Initial Community Usage bucket, 15% (150,000,000 ALKE), is set aside for faucets, grants, education and adoption.</p>
    </figure>
  );
}

function Warming() {
  return (
    <div className="warm" id="warming">
      <h3>
        <Hex size={20} stroke={10} />
        How warming works
      </h3>
      <p>Cold ALKE is warmed only by real, verified people you invite. Each verified invite warms 10 of your cold ALKE per day.</p>
      <div className="warm-formula">
        <small>The formula</small>
        <p>Warming time = your cold ALKE ÷ (verified invites × 10 per day)</p>
      </div>
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
      <p className="warm-sum">Few coins and few invites warm quickly. Lots of coins need more invites to warm quickly; otherwise they warm slowly.</p>
      <ul className="warm-rules">
        {RULES.map((r) => (
          <li key={r}>
            <Hex size={14} stroke={12} />
            {r}
          </li>
        ))}
        <li className="verify">
          <Hex size={14} stroke={12} />
          <span>The full invite verification steps are published in the app at launch.</span>
        </li>
      </ul>
    </div>
  );
}

export default function Mining() {
  return (
    <section className="band" id="mining" aria-labelledby="miningTitle">
      <div className="wrap mine-grid">
        <div>
          <p className="eyebrow">Mining</p>
          <h2 className="display" id="miningTitle">
            <span className="goldtext">300,000,000 ALKE</span> to mine.
          </h2>
          <p className="lede">
            The Community DAO holds 30% of the genesis supply for community mining. Members mine cold ALKE in the ALKÉ Network app, one tap a day, each tap starting a 24-hour
            session.
          </p>

          <Allocation />

          <div className="coldhot">
            <div className="ch">
              <h3>
                <Hex size={20} stroke={10} color="#A58BFF" />
                Cold ALKE
              </h3>
              <p>What members mine in the app. It stays Locked, and only verified invites warm it. No release date yet.</p>
              <span className="tag">Mined · Locked</span>
            </div>
            <div className="ch hot">
              <h3>
                <Hex size={20} stroke={10} />
                Hot ALKE
              </h3>
              <p>The live token on the network today. It pays gas, runs smart contracts, secures validator staking, carries governance and opens network access.</p>
              <span className="tag">Live · on the network</span>
            </div>
          </div>

          <Warming />

          <div className="convert">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A58BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 8h13l-3-3M20 16H7l3 3" />
            </svg>
            <p>
              At the first global listing, warmed ALKE converts to hot ALKE on the post-quantum L1. Unwarmed cold ALKE stays cold.{" "}
              <span>The listing is a milestone, not a date, and the conversion is a mechanism, not a promise of value.</span>
            </p>
          </div>

          <div className="btns">
            <Ext className="btn primary" href={X_URL}>
              Follow for launch updates
            </Ext>
            <Chip>App coming soon</Chip>
          </div>
          <p className="nfa">Not financial advice — for education only.</p>
        </div>
        <div className="phone-col">
          <PhoneCanvas scene="mining" label="The ALKÉ Network app's mining screen: session active, a countdown to the next session, and today's estimate marked Pending" />
        </div>
      </div>
    </section>
  );
}
