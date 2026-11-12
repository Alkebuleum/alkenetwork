import { Ext, RingMark } from "../components/Brand";
import { LINKS, X_URL } from "../data/links";

export default function Alkers() {
  return (
    <section className="band alkers" id="alkers" aria-labelledby="alkersTitle">
      <div className="wrap alkers-grid">
        <div>
          <p className="eyebrow">Become an Alker</p>
          <h2 className="display" id="alkersTitle">
            Founding Alkers are <span className="goldtext">the first ones in.</span>
          </h2>
          <p className="lede">gm, Alkers. Join the community in Nuru, follow the build and help shape what comes next.</p>
          <div className="btns">
            <Ext className="btn primary" href={LINKS.nuru}>
              Get in through Nuru
            </Ext>
            <Ext className="btn" href={X_URL}>
              Follow @alkenetwork
            </Ext>
          </div>
        </div>
        <RingMark className="alkers-mark" ringWidth={2.6} hexWidth={4.4} inkWidth={3.8} dash="7 6" />
      </div>
    </section>
  );
}
