import { Ext } from "../components/Brand";
import Puvv from "../components/Puvv";
import { LINKS } from "../data/links";

const STATS = [
  ["300M", "ALKE to mine", "gold"],
  ["30%", "Of genesis supply"],
  ["5.0s", "Block time, live today"],
  ["Mining open", "Current stage", "cyan"],
];

export default function Hero() {
  return (
    <>
      <section className="hero" id="top" aria-labelledby="heroTitle">
        <div className="hero-sun" aria-hidden="true" />
        <div className="hero-floor" aria-hidden="true" />
        <div className="wrap hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">// Play · Mine · Grow</p>
            <h1 className="display" id="heroTitle">
              Run with
              <br />
              the pack.
              <br />
              <span className="glow">Mine ALKE.</span>
            </h1>
            <p className="lede">
              Tap the core, build your pack and mine ALKE every day. A free mining game from Alkebulan, the oldest name for Africa, built for phones everywhere.
            </p>
            <div className="btns">
              <a className="btn primary" href="#get-app">
                Start mining
              </a>
              <Ext className="btn" href={LINKS.whitepaper}>
                Read the whitepaper
              </Ext>
            </div>
            <div className="hero-ticks">
              <span>● Free to play</span>
              <span>● Mobile first</span>
              <span>● One session a day</span>
            </div>
          </div>

          <div className="hero-art">
            <div className="ring dash" aria-hidden="true" />
            <div className="ring orbit" aria-hidden="true" />
            <div className="puvv-stage">
              <Puvv live />
            </div>
            <span className="hud gold" aria-hidden="true">+12 ALKE</span>
            <span className="hud cyan" aria-hidden="true">COMBO ×5</span>
            <span className="coin-dot c1" aria-hidden="true" />
            <span className="coin-dot c2" aria-hidden="true" />
          </div>
        </div>
      </section>

      <div className="wrap">
        <div className="stats" role="list" aria-label="ALKÉ Network at a glance">
          {STATS.map(([value, label, tone]) => (
            <div className="stat" role="listitem" key={label}>
              <b style={tone === "gold" ? { color: "var(--gold)" } : tone === "cyan" ? { color: "var(--cyan)" } : undefined}>{value}</b>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
