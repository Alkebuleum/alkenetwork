import HeroNetwork from "./HeroNetwork";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">The Founding Council is now forming</p>
          <h1>Africa's institutional network for the digital-asset economy.</h1>
          <p className="lede">
            Alké Network is a shared, institutionally governed distributed ledger for trusted
            identity, tokenized assets, stablecoins and cross-border digital transactions.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="#council">
              Apply to Participate
            </a>
            <a className="btn-ghost" href="#solution">
              View Institutional Brief
            </a>
          </div>
        </div>
        <HeroNetwork />
      </div>
    </section>
  );
}
