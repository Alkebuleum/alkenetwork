import PhoneCanvas from "../components/PhoneCanvas";
import { ArrowDown, ArrowRight, Ext, Hex } from "../components/Brand";
import { LINKS } from "../data/links";

const PILLARS = [
  ["Mine", "A 24-hour session, one tap a day."],
  ["Play", "ALKÉ Hex and ALKÉ Rush. Game XP is play-only and never redeemable for ALKE."],
  ["Invite", "Each verified invite warms 10 of your cold ALKE a day."],
  ["Grow", "Learn, contribute and grow with the Founding Alkers."],
];

export default function Hero() {
  return (
    <section className="hero grain" id="top" aria-labelledby="heroTitle">
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">gm, Alkers · Founding Alkers welcome</p>
            <h1 className="display hero-h1" id="heroTitle">
              <span className="l1">ALKÉ Network</span>
              <span className="l2 goldtext">The People's Network.</span>
            </h1>
            <p className="lede">A community network that runs on $ALKE, the token behind fees, smart contracts, staking, governance and network access.</p>
            <div className="btns">
              <Ext className="btn primary" href={LINKS.nuru}>
                Get in through Nuru
                <ArrowRight />
              </Ext>
              <a className="btn" href="#mining">
                300M ALKE to mine
                <ArrowDown />
              </a>
            </div>
            <p className="early">
              <Hex size={18} stroke={10} />
              We're early. ALKE is not on major exchanges yet.
            </p>
          </div>
          <div className="hero-art">
            <PhoneCanvas scene="hero" label="Two phones showing the ALKÉ Network app: the welcome screen in front and an active mining session behind it" />
          </div>
        </div>
        <div className="pillars">
          <p className="eyebrow">Mine. Play. Invite. Grow. · In the ALKÉ Network app, coming soon</p>
          <div className="pillar-row">
            {PILLARS.map(([title, text]) => (
              <div className="pillar" key={title}>
                <Hex size={26} />
                <b>{title}</b>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
