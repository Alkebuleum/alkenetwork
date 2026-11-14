import { AppTile, Chip, Ext } from "../components/Brand";
import { LINKS } from "../data/links";

export default function GetApp() {
  return (
    <section className="band alt" id="get-app" aria-labelledby="getAppTitle">
      <div className="wrap">
        <div className="band-head">
          <p className="eyebrow">// Get the app</p>
          <h2 className="display" id="getAppTitle">
            Two ways in. <span className="glow">Start today.</span>
          </h2>
          <p className="lede">The ALKE app is open now inside Nuru and on the web. Native iPhone and Android apps are coming soon.</p>
        </div>

        <div className="ways">
          <div className="way panel rec">
            <div className="way-head">
              <span className="way-tag">Option 1 · Recommended</span>
              <h3>Open ALKE inside Nuru</h3>
            </div>
            <ol className="way-steps">
              <li>
                <b>Get the Nuru app</b>
                <span>Free on iPhone and Android.</span>
              </li>
              <li>
                <b>Go to Apps</b>
                <span>Open Nuru and tap Apps.</span>
              </li>
              <li>
                <b>Open the ALKE App</b>
                <span>
                  Find <AppTile size={22} /> ALKE in the list of apps and tap it to start mining.
                </span>
              </li>
            </ol>
            <div className="btns">
              <Ext className="btn primary" href={LINKS.nuruIos}>
                Get Nuru for iPhone
              </Ext>
              <Ext className="btn" href={LINKS.nuruAndroid}>
                Get Nuru for Android
              </Ext>
            </div>
          </div>

          <div className="way panel">
            <div className="way-head">
              <span className="way-tag cyan">Option 2</span>
              <h3>Open ALKE on the web</h3>
            </div>
            <ol className="way-steps">
              <li>
                <b>Go to app.alke.network</b>
                <span>In any browser, on your phone or computer.</span>
              </li>
              <li>
                <b>Add it to your home screen</b>
                <span>It opens like an app, with the ALKE icon.</span>
              </li>
            </ol>
            <div className="btns">
              <Ext className="btn cyanfill" href={LINKS.app}>
                Open app.alke.network
              </Ext>
            </div>
          </div>
        </div>

        <div className="soon">
          <Chip>iPhone app · coming soon</Chip>
          <Chip>Android app · coming soon</Chip>
        </div>
      </div>
    </section>
  );
}
