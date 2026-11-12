import { Ext } from "../components/Brand";
import { LINKS, SOCIALS } from "../data/links";

export default function Community() {
  return (
    <section className="band tone-light" id="community" aria-labelledby="commTitle">
      <div className="wrap">
        <div className="band-head">
          <p className="eyebrow">Community</p>
          <h2 className="display" id="commTitle">
            Join the chat <span className="goldtext">in Nuru.</span>
          </h2>
          <p className="lede">The ALKÉ community lives in Nuru's in-app Communities. Say gm, ask questions and meet the Founding Alkers.</p>
        </div>
        <div className="nuru">
          <div>
            <h3>Nuru. Your AI. Your Network.</h3>
            <p>Live now on the App Store and Google Play. Communities, JollofSwap and, soon, the ALKÉ Network app all open from Nuru.</p>
          </div>
          <div className="btns">
            <Ext className="btn primary" href={LINKS.nuruIos}>
              Get Nuru for iPhone
            </Ext>
            <Ext className="btn" href={LINKS.nuruAndroid}>
              Get Nuru for Android
            </Ext>
          </div>
        </div>
        <p className="small" style={{ marginTop: 34 }}>
          Follow for launch updates
        </p>
        <ul className="socials">
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
