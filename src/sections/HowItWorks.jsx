import { Chip, Ext } from "../components/Brand";
import { LINKS } from "../data/links";

export default function HowItWorks() {
  return (
    <section className="band alt grain tone-light" id="how" aria-labelledby="howTitle">
      <div className="wrap">
        <div className="band-head">
          <p className="eyebrow">How mining works</p>
          <h2 className="display" id="howTitle">
            Three steps. <span className="goldtext">One tap a day.</span>
          </h2>
        </div>
        <ol className="steps" role="list" style={{ listStyle: "none", padding: 0 }}>
          <li className="step">
            <span className="step-n goldtext">1</span>
            <h3>Get Nuru</h3>
            <p>Nuru is live on iPhone and Android. It's where the community lives and where you'll reach the ALKÉ Network app.</p>
            <div className="btns">
              <Ext className="btn small" href={LINKS.nuruIos}>
                iPhone
              </Ext>
              <Ext className="btn small" href={LINKS.nuruAndroid}>
                Android
              </Ext>
            </div>
          </li>
          <li className="step">
            <span className="step-n goldtext">2</span>
            <h3>Open the ALKÉ Network app</h3>
            <p>One tap starts a 24-hour session. A countdown shows when your next session opens, so it's one session a day.</p>
            <Chip>Coming soon</Chip>
          </li>
          <li className="step">
            <span className="step-n goldtext">3</span>
            <h3>Warmed, then converted</h3>
            <p>Mined ALKE stays Locked. Each verified invite warms 10 of it a day, and only warmed ALKE converts to hot ALKE at listing.</p>
            <Chip gold>No listing date yet</Chip>
          </li>
        </ol>
        <div className="note">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5B84D" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 11v6M12 7.5h.01" />
          </svg>
          <p>
            <b>Today's amount is an estimate.</b> It shows as Pending until the day is verified, then it's set, and it depends on participation. Streaks count once a day is
            verified.
          </p>
        </div>
      </div>
    </section>
  );
}
