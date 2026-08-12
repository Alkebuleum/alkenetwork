import { Link } from "react-router-dom";
import InnerHero from "../components/InnerHero";
import ArrowIcon from "../components/icons/ArrowIcon";

export default function InstitutionalBrief() {
  return (
    <div className="inner-page">
      <InnerHero
        eyebrow="Institutional Brief"
        title="The institutional network for frontier-technology adoption"
        lede="Alké Network brings institutions together to understand, test, and safely adopt emerging technologies — beginning with AI and distributed ledgers. This brief summarizes what it is, how it works, and how institutions take part."
      />

      <section>
        <div className="wrap">
          <span className="eyebrow"><span className="idx">01 —</span> What it is</span>
          <h2>An institutional membership and adoption network</h2>
          <div className="section-body">
            <p>
              Alké Network is not a technology vendor, and not a blockchain in its own right. It is
              a membership network: institutions join to learn from peers, develop practical use
              cases, and experiment through governed sandboxes before committing critical systems,
              data, or capital.
            </p>
            <p>
              AI and distributed-ledger technology are its first two practice areas — run on the
              same model of intelligence, peer learning, and a governed sandbox, but not every
              institution needs both. It is stewarded by the Alkebuleum Foundation and globally
              open to qualifying institutions.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <span className="eyebrow"><span className="idx">02 —</span> How it works</span>
          <h2>Intelligence, peers, and a governed sandbox</h2>
          <div className="spec-rows">
            <div className="spec-row">
              <span className="k">Intelligence</span>
              <span className="v">
                Curated, sector-specific briefings on how AI and distributed ledgers are changing
                institutional workflows, risk, and governance.
              </span>
            </div>
            <div className="spec-row">
              <span className="k">Peer network</span>
              <span className="v">
                Sector and regional circles connect institutions facing the same decisions, so
                members learn from peers rather than starting from zero.
              </span>
            </div>
            <div className="spec-row">
              <span className="k">Sandbox</span>
              <span className="v">
                A controlled environment to test emerging technologies with synthetic data before
                production adoption — with no assumption a pilot must succeed.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <span className="eyebrow"><span className="idx">03 —</span> Practice areas</span>
          <h2>What institutions work on</h2>
          <div className="card-grid">
            <div className="card">
              <div className="k">AI Practice</div>
              <h3>Responsible and sovereign AI</h3>
              <p>Institutional agents, workflow automation, governance, and local deployment.</p>
            </div>
            <div className="card">
              <div className="k">DLT Practice</div>
              <h3>Shared trust and digital infrastructure</h3>
              <p>Verifiable identity, credentials, trusted records, and digital-asset readiness.</p>
            </div>
          </div>
          <p className="figure-caption" style={{ marginTop: 28 }}>
            Full practice-area detail: <Link className="textlink" to="/technology">Practice Areas →</Link>
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <span className="eyebrow"><span className="idx">04 —</span> Participation pathway</span>
          <h2>How institutions take part</h2>
          <p className="section-lede">
            Participation opens with the Founding Phase — no initial financial commitment, starting
            with an introductory conversation — and, for some institutions, leads toward the
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
