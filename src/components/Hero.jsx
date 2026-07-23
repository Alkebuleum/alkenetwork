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
            The digital-asset rail African institutions govern together.
          </h1>
          <p className="lede stage s3">
            Alké Network is an institutionally governed ledger for identity, verifiable
            credentials, tokenized assets, and cross-border settlement — built and tested with
            the institutions that will run it, before it carries a single live transaction.
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
          <div className="k">Why now</div>
          <p>
            Central banks and commercial institutions are already piloting shared ledgers for
            settlement — Project Agorá, Partior, Canton Network. The Founding Phase is where
            Alké Network's standards get written, before deployment, by the institutions that
            will depend on them.
          </p>
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
