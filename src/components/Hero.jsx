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
              Founding Network <em>— Open</em>
            </div>
            <h1 className="stage s2">
              The institutional network for <i>frontier-technology</i>{" "}
              <span className="fade">adoption.</span>
            </h1>
            <p className="lede stage s3">
              Alké Network brings institutions together to understand, test, and safely adopt
              emerging technologies — beginning with <b>AI and distributed ledgers</b>. Learn from
              peers. Develop practical use cases. Experiment through governed sandboxes. Build the
              capability to adopt on your institution's own terms.
            </p>
            <div className="hero-ctas stage s4">
              <a className="btn btn-primary" href="#council">
                Join the Founding Network
                <ArrowIcon />
              </a>
              <a className="btn btn-secondary" href="#watch">
                <DocIcon />
                Watch the Explainer
              </a>
            </div>
            <p className="micro stage s4">
              Founding participation begins with an introductory conversation and carries no
              initial financial commitment. <Link to="/institutional-brief">Read the Institutional Brief →</Link>
            </p>
            <p className="micro stage s4">
              <a href="https://app.alke.network" target="_blank" rel="noopener noreferrer">
                Member Login →
              </a>
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
            <div className="v">Global — qualified institutions</div>
          </div>
          <div className="ledger-cell">
            <div className="k">Practice areas</div>
            <div className="v">Artificial Intelligence · Distributed Ledgers</div>
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
