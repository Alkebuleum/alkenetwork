import { Ext } from "../components/Brand";
import { LINKS, SOCIALS } from "../data/links";

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true">
      <path d="M22 3 L2 11 L9 13.5 L11.5 21 L15 15.5 L22 3 Z" />
      <path d="M9 13.5 L22 3" />
    </svg>
  );
}

export default function Community() {
  return (
    <section className="band" id="join" aria-labelledby="commTitle">
      <div className="wrap">
        <div className="join">
          <div className="join-copy">
            <p className="eyebrow gold">// Join the pack</p>
            <h2 className="display" id="commTitle">
              Join the pack. <span className="glow">No install needed.</span>
            </h2>
            <p className="lede">Say gm in the public ALKÉ Telegram, follow the build every Friday and apply to be one of the first Founding Alkers.</p>
            <p className="join-nuru">
              Already on Nuru?{" "}
              <Ext className="textlink" href={LINKS.nuru}>
                Find us in Communities.
              </Ext>
            </p>
          </div>
          <div className="join-ctas">
            <Ext className="btn primary" href={LINKS.telegram}>
              <TelegramIcon />
              Join on Telegram
            </Ext>
            {/* No sign-up exists yet. Set LINKS.foundingAlkers and the button appears. */}
            {LINKS.foundingAlkers && (
              <Ext className="btn" href={LINKS.foundingAlkers}>
                Become a Founding Alker
              </Ext>
            )}
          </div>
        </div>
        <ul className="socials" aria-label="Follow for launch updates">
          {SOCIALS.map((s) => (
            <li key={s.name}>
              <Ext href={s.href}>
                <b>{s.name}</b>
                <span>{s.handle}</span>
              </Ext>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
