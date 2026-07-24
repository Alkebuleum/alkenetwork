import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <div className="status-line stage s1">
            <span className="pulse"></span>
            <span className="tag">Founding Phase — Open</span>
          </div>
          <h1 className="stage s2">
            Shared institutional trust infrastructure for the digital economy.
          </h1>
          <p className="lede stage s3">
            Alké Network is an institutionally governed distributed ledger for trusted identity,
            verifiable credentials, critical records, digital assets, and cross-border
            transactions.
          </p>
          <div className="hero-ctas stage s4">
            <a className="btn btn-primary" href="#council">
              Apply to the Founding Council
            </a>
            <Link className="btn btn-secondary" to="/institutional-brief">
              Read the Institutional Brief
            </Link>
          </div>
          <p className="micro stage s4">
            Applications open an introductory conversation — no commitment.
          </p>
        </div>
        <div className="hero-aside stage s4">
          <div className="k">The on-ramp</div>
          <p>
            Participating institutions begin through a governed sandbox where they can learn,
            test practical use cases, and measure value before committing sensitive data,
            critical systems, or real transactions.
          </p>
          <p className="tagline">Learn together. Prove the value. Adopt with confidence.</p>
        </div>
      </div>

      <div className="ledger" id="network">
        <div className="wrap" style={{ padding: 0 }}>
          <div className="ledger-row">
            <div className="ledger-cell">
              <div className="k">Current stage</div>
              <div className="v">Founding Council formation</div>
            </div>
            <div className="ledger-cell">
              <div className="k">Participation</div>
              <div className="v">Africa &amp; the Diaspora</div>
            </div>
            <div className="ledger-cell">
              <div className="k">Institutional focus</div>
              <div className="v">Identity · Records · Settlement</div>
            </div>
            <div className="ledger-cell">
              <div className="k">Stewardship</div>
              <div className="v">Alkebuleum Foundation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
