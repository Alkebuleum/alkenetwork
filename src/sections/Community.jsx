import { Ext } from "../components/Brand";
import { LINKS, SOCIALS, X_URL } from "../data/links";

export default function Community() {
  return (
    <section className="band" id="community" aria-labelledby="commTitle">
      <div className="wrap">
        <div className="join">
          <div>
            <p className="eyebrow">// Join the pack · Become an Alker</p>
            <h2 className="display" id="commTitle">
              Founding Alkers are <span className="glow">the first ones in.</span>
            </h2>
            <p className="lede">
              gm, Alkers. The ALKÉ community lives in Nuru's in-app Communities. Say gm, ask questions, follow the build and help shape what comes next.
            </p>
            <div className="btns">
              <Ext className="btn primary" href={LINKS.nuru}>
                Get in through Nuru
              </Ext>
              <Ext className="btn" href={X_URL}>
                Follow @alkenetwork
              </Ext>
            </div>
          </div>
          <div className="nuru-card">
            <h3>Nuru. Your AI. Your Network.</h3>
            <p>Live now on the App Store and Google Play. Communities, JollofSwap and, soon, the ALKÉ Network app all open from Nuru.</p>
            <div className="btns">
              <Ext className="btn small" href={LINKS.nuruIos}>
                iPhone
              </Ext>
              <Ext className="btn small" href={LINKS.nuruAndroid}>
                Android
              </Ext>
            </div>
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
