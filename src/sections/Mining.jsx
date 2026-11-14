import PhoneCanvas from "../components/PhoneCanvas";
import { Chip, Ext, Hex } from "../components/Brand";
import { LINKS, X_URL } from "../data/links";

function Allocation() {
  return (
    <figure className="alloc" aria-labelledby="allocCap">
      <div className="alloc-fig">
        300,000,000<small>ALKE</small>
      </div>
      <figcaption id="allocCap">30% of the 1,000,000,000 ALKE genesis supply, held by the Community DAO for mining.</figcaption>
      <div className="meter" role="img" aria-label="Community mining allocation: 300,000,000 of 1,000,000,000 ALKE, which is 30% of the genesis supply">
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
      <p className="alloc-note">
        Full breakdown in the{" "}
        <Ext className="textlink" href={LINKS.tokenomics}>
          tokenomics paper (PDF)
        </Ext>
        .
      </p>
    </figure>
  );
}

export default function Mining() {
  return (
    <section className="band" id="mining" aria-labelledby="miningTitle">
      <div className="wrap mine-grid">
        <div>
          <p className="eyebrow">// Mining</p>
          <h2 className="display" id="miningTitle">
            The community share, <span className="glow">ready to mine.</span>
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
              <p>What members mine in the app. It stays Locked until contributions warm it: active invites and daily game XP. No release date yet.</p>
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

          <div className="convert">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3DF5FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 8h13l-3-3M20 16H7l3 3" />
            </svg>
            <p>
              At the first global listing, warmed ALKE converts to hot ALKE on the post-quantum L1. Unwarmed cold ALKE stays cold.{" "}
              <span>The listing is a milestone, not a date, and the conversion is a mechanism, not a promise of value.</span>
            </p>
          </div>

          <div className="btns">
            <Ext className="btn" href={X_URL}>
              Follow for launch updates
            </Ext>
            <Chip>iPhone &amp; Android apps coming soon</Chip>
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
