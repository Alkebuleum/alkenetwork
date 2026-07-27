import { Link } from "react-router-dom";
import ArrowIcon from "./icons/ArrowIcon";
import DocIcon from "./icons/DocIcon";
import HeroIllustration from "./HeroIllustration";

export default function Hero() {
  return (
    <div className="hero" id="top">
      <div className="hero-main">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow--status stage s1">
              <span className="pulse">
                <i></i>
              </span>
              Founding Phase <em>— Open</em>
            </div>
            <h1 className="stage s2">
              Shared institutional <i>trust</i> infrastructure{" "}
              <span className="fade">for the digital economy.</span>
            </h1>
            <p className="lede stage s3">
              Alké Network is an <b>institutionally governed distributed ledger</b> for trusted
              identity, verifiable credentials, critical records, digital assets, and cross-border
              transactions.
            </p>
            <div className="hero-ctas stage s4">
              <a className="btn btn-primary" href="#council">
                Apply as a Founding Participant
                <ArrowIcon />
              </a>
              <Link className="btn btn-secondary" to="/institutional-brief">
                <DocIcon />
                Read the Institutional Brief
              </Link>
            </div>
            <p className="micro stage s4">
              Applications begin an introductory conversation — no immediate commitment.
            </p>
          </div>

          <HeroIllustration />
        </div>
      </div>

      <div className="ledger" id="network">
        <div className="ledger-row">
          <div className="ledger-cell">
            <div className="k">Current stage</div>
            <div className="v">Founding Network formation</div>
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
  );
}
