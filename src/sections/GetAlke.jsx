import { Chip, CoinMark, Ext, Mark } from "../components/Brand";
import { LINKS } from "../data/links";

const USES = ["Transaction fees", "Smart contracts", "Validator staking", "Governance", "Network access"];
const PAIRS = ["USDC", "cNGN"];

export default function GetAlke() {
  return (
    <section className="band" id="get-alke" aria-labelledby="getTitle">
      <div className="wrap split">
        <div>
          <p className="eyebrow gold">// Get hot ALKE</p>
          <h2 className="display" id="getTitle">
            Live on JollofSwap, <span className="glow">inside Nuru.</span>
          </h2>
          <p className="lede">JollofSwap is the ecosystem exchange. Open it in the Nuru app to find hot ALKE in two pairs: ALKE/USDC and ALKE/cNGN.</p>
          <ul className="uses" aria-label="What hot ALKE is used for">
            {USES.map((u) => (
              <li key={u}>{u}</li>
            ))}
          </ul>
          <div className="pairs" aria-label="Hot ALKE pairs on JollofSwap">
            <div className="pairs-head">
              <b>JollofSwap</b>
              <Chip gold>Inside Nuru</Chip>
            </div>
            {PAIRS.map((quote) => (
              <div className="pair" key={quote}>
                <span className="tok" aria-hidden="true">
                  <span className="a">
                    <Mark size={18} />
                  </span>
                  <span className="b">{quote}</span>
                </span>
                <div>
                  <b>ALKE / {quote}</b>
                  <small>Trading pair on JollofSwap</small>
                </div>
              </div>
            ))}
          </div>
          <div className="btns">
            <Ext className="btn primary" href={LINKS.nuru}>
              Open JollofSwap in Nuru
            </Ext>
          </div>
          <p className="nfa">Not financial advice — for education only.</p>
        </div>
        <div className="coin-wrap" aria-hidden="true">
          <div className="coin">
            <span>
              <CoinMark size={96} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
