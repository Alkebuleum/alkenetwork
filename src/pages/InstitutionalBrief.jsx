import { Link } from "react-router-dom";
import InnerHero from "../components/InnerHero";
import ArrowIcon from "../components/icons/ArrowIcon";

export default function InstitutionalBrief() {
  return (
    <div className="inner-page">
      <InnerHero
        eyebrow="Institutional Brief"
        title="A shared trust layer, governed by the institutions that use it"
        lede="Alké Network turns institutional trust into shared, verifiable infrastructure — for identity, institutional records, credentials, and digital assets. This brief summarizes what it is, how it is governed, and how institutions take part."
      />

      <section>
        <div className="wrap">
          <span className="eyebrow"><span className="idx">01 —</span> What it is</span>
          <h2>An institutionally governed distributed ledger</h2>
          <div className="section-body">
            <p>
              Alké Network is a permissioned distributed ledger for trusted identity, verifiable
              credentials, critical institutional records, digital assets, and cross-border
              transactions — built for Africa and the diaspora, and connected to the wider global
              digital economy.
            </p>
            <p>
              It is stewarded by the Alkebuleum Foundation and, as it matures, governed by a
              Founding Council drawn from participating institutions — not controlled by any
              single company or government.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <span className="eyebrow"><span className="idx">02 —</span> Governance model</span>
          <h2>Stewardship now, institutional governance as it matures</h2>
          <div className="spec-rows">
            <div className="spec-row">
              <span className="k">Today</span>
              <span className="v">
                The <b>Alkebuleum Foundation</b> stewards the network: accrediting validators,
                publishing governance policy, and maintaining participation standards.
              </span>
            </div>
            <div className="spec-row">
              <span className="k">As it matures</span>
              <span className="v">
                A <b>Founding Council</b>, drawn from Founding Participants, takes on governance
                responsibility for standards and validator accreditation.
              </span>
            </div>
            <div className="spec-row">
              <span className="k">Consensus</span>
              <span className="v">
                Held by named, accredited institutions rather than anonymous validators.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <span className="eyebrow"><span className="idx">03 —</span> Technical architecture</span>
          <h2>What institutions build on</h2>
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
          </div>
          <p className="figure-caption" style={{ marginTop: 28 }}>
            Full architecture detail: <Link className="textlink" to="/technology">Technology →</Link>
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <span className="eyebrow"><span className="idx">04 —</span> Participation pathway</span>
          <h2>How institutions take part</h2>
          <p className="section-lede">
            Participation opens with the Founding Phase — a governed sandbox for evaluation
            before any production use case — and, for some institutions, leads toward the
            Founding Council as the network matures.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 8 }}>
            <Link className="btn btn-primary" to="/apply">
              Apply as a Founding Participant
              <ArrowIcon />
            </Link>
            <Link className="btn btn-secondary" to="/founding-council">
              Explore the Founding Council
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
