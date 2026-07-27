import { Link } from "react-router-dom";
import InnerHero from "../components/InnerHero";
import ArrowIcon from "../components/icons/ArrowIcon";

export default function Technology() {
  return (
    <div className="inner-page">
      <InnerHero
        eyebrow="Technology"
        title="A permissioned ledger built for institutional trust"
        lede="Alké Network runs on a permissioned, institutionally governed ledger — consensus held by named, accredited institutions rather than anonymous validators, with finality and throughput suited to real institutional workloads."
      />

      <section>
        <div className="wrap">
          <span className="eyebrow"><span className="idx">01 —</span> Base ledger</span>
          <h2>Consensus by accredited institutions</h2>
          <div className="spec-rows">
            <div className="spec-row">
              <span className="k">Architecture</span>
              <span className="v">Permissioned, EVM-compatible distributed ledger.</span>
            </div>
            <div className="spec-row">
              <span className="k">Consensus</span>
              <span className="v">
                <b>Reputable-authority consensus</b> — validators are named, accredited
                institutions rather than anonymous stakers.
              </span>
            </div>
            <div className="spec-row">
              <span className="k">Finality</span>
              <span className="v">Fast soft finality, with hard finality shortly after.</span>
            </div>
            <div className="spec-row">
              <span className="k">Accreditation</span>
              <span className="v">
                Validators are accredited in tiers by institution type, and voted in under
                published governance policy.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <span className="eyebrow"><span className="idx">02 —</span> Validator tiers</span>
          <h2>Who holds consensus</h2>
          <p className="section-lede">
            Validator seats are organized by institution type, so consensus reflects a broad,
            accountable institutional base rather than any single sector.
          </p>
          <div className="tier-list">
            <div className="tier">
              <span className="num">Tier 01</span>
              <div>
                <h3>Sovereign &amp; monetary authorities</h3>
                <p>Central banks, governments, and regulators.</p>
              </div>
            </div>
            <div className="tier">
              <span className="num">Tier 02</span>
              <div>
                <h3>Academic &amp; financial institutions</h3>
                <p>Universities and financial institutions with technical or research capacity.</p>
              </div>
            </div>
            <div className="tier">
              <span className="num">Tier 03</span>
              <div>
                <h3>Civic &amp; diaspora bodies</h3>
                <p>Institutions representing the communities the network is built to serve.</p>
              </div>
            </div>
            <div className="tier">
              <span className="num">Steward</span>
              <div>
                <h3>Alkebuleum Foundation</h3>
                <p>
                  Accredits validators and stewards the network today, transitioning
                  responsibility to the validator institutions as the network matures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <span className="eyebrow"><span className="idx">03 —</span> Functional layers</span>
          <h2>What institutions build on it</h2>
          <div className="card-grid">
            <div className="card">
              <div className="k">Layer</div>
              <h3>Identity &amp; credentials</h3>
              <p>Trusted identity and verifiable credentials for people and institutions.</p>
            </div>
            <div className="card">
              <div className="k">Layer</div>
              <h3>Institutional records</h3>
              <p>Document registries and signing for critical institutional records.</p>
            </div>
            <div className="card">
              <div className="k">Layer</div>
              <h3>Assets &amp; settlement</h3>
              <p>Tokenized assets and cross-border settlement between institutions.</p>
            </div>
            <div className="card">
              <div className="k">Layer</div>
              <h3>Governance &amp; coordination</h3>
              <p>Tooling for accredited, multi-institutional governance decisions.</p>
            </div>
          </div>
          <p className="figure-caption" style={{ marginTop: 28 }}>
            The network is Foundation-stewarded today while the institutional validator set is
            formally constituted — see{" "}
            <Link className="textlink" to="/foundation">
              the Alkebuleum Foundation
            </Link>
            .
          </p>
        </div>
      </section>

      <section>
        <div className="wrap" style={{ textAlign: "center" }}>
          <h2 style={{ maxWidth: "20ch", margin: "0 auto 18px" }}>
            Test it before you commit to it.
          </h2>
          <p className="section-lede" style={{ margin: "0 auto 32px" }}>
            The governed sandbox lets institutions evaluate these layers with synthetic data
            before any production use case.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <Link className="btn btn-primary" to="/apply">
              Apply as a Founding Participant
              <ArrowIcon />
            </Link>
            <Link className="btn btn-secondary" to="/institutional-brief">
              Read the Institutional Brief
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
