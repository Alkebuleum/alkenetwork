import { AppTile, Ext } from "./Brand";
import { LINKS, SOCIALS } from "../data/links";

const SITE_LINKS = [
  [LINKS.app, "app.alke.network", "the ALKE app"],
  [LINKS.whitepaper, "Whitepaper", "on alkebuleum.org"],
  [LINKS.tokenomics, "Tokenomics paper", "PDF"],
  [LINKS.nuru, "nuru.si", "community hub"],
  [LINKS.explorer, "alkescan.com", "explorer"],
  [LINKS.jollofswap, "jollofswap.com", "exchange"],
  [LINKS.ecosystem, "alkebuleum.org", "ecosystem"],
  [LINKS.docs, "docs.alkebuleum.org", "developer docs"],
];

export function FinalCta() {
  return (
    <section className="final" aria-labelledby="finalTitle">
      <div className="wrap final-row">
        <h2 className="display" id="finalTitle">
          The hunt starts <span className="glow">today.</span>
        </h2>
        <div className="btns">
          <a className="btn primary" href="#get-app">
            Start mining
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <a className="lockup" href="#top" aria-label="Back to the top">
              <AppTile size={44} />
              <b>ALKÉ NETWORK</b>
            </a>
            <p className="slogan">The People's Network.</p>
            <p>Mine. Play. Invite. Grow.</p>
          </div>
          <div>
            <h4>Links</h4>
            <ul className="foot-list">
              {SITE_LINKS.map(([href, label, note]) => (
                <li key={href}>
                  <Ext href={href}>{label}</Ext>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Follow</h4>
            <ul className="foot-list">
              {SOCIALS.map((s) => (
                <li key={s.name}>
                  <Ext href={s.href}>{s.name}</Ext>
                  <span>{s.handle}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="legal">
          <p>
            <strong>Not financial advice — for education only.</strong>
          </p>
          <p>
            $ALKE is a native utility token used for transaction fees, smart contract execution, validator staking, governance and network access. It is not a security,
            investment contract or equity instrument, and holding it is not ownership of any company or project. There was no ICO or presale, and no return is guaranteed.
          </p>
          <p>
            Mining is participation in the network. The conversion of warmed cold ALKE to hot ALKE at the first global listing is a mechanism, not a promise of value, and no
            listing date has been set. Warming comes from contributions: active invites and daily game XP, up to a cap. ALKÉ Hex and ALKÉ Rush XP is never redeemable for ALKE. Nothing on this site is
            a recommendation.
          </p>
        </div>
        <div className="foot-bottom">
          <span>© 2026 ALKÉ Network</span>
          <span>alke.network</span>
        </div>
      </div>
    </footer>
  );
}
