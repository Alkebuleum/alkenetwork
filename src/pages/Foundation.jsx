import { Link } from "react-router-dom";
import InnerHero from "../components/InnerHero";
import ArrowIcon from "../components/icons/ArrowIcon";

export default function Foundation() {
  return (
    <div className="inner-page">
      <InnerHero
        eyebrow="The Alkebuleum Foundation"
        title="Governance of Africa's sovereign trust layer"
        lede="The Alkebuleum Foundation is the institutional steward of the network Alké Network runs on — responsible for governance, technical integrity, and institutional coordination across Africa and the diaspora."
      />

      <section>
        <div className="wrap">
          <span className="eyebrow"><span className="idx">01 —</span> Mandate</span>
          <h2>It stewards the network. It does not control it.</h2>
          <div className="section-body">
            <p>
              The Foundation's remit is governance, technical integrity, and institutional
              coordination — not commercial control. It accredits validators, publishes
              governance policy, and maintains the standards that define who can participate in
              consensus and how the infrastructure is developed and maintained for public-interest
              use.
            </p>
            <p>Alké Network is not built for speculation. It is built to be trusted.</p>
          </div>
          <blockquote className="pull-quote">
            <p>A ledger of trust, built by Africa — for the institutions that serve her.</p>
            <cite>Alkebuleum Foundation</cite>
          </blockquote>
        </div>
      </section>

      <section>
        <div className="wrap">
          <span className="eyebrow"><span className="idx">02 —</span> Governance structure</span>
          <h2>Three bodies, one remit</h2>
          <p className="section-lede">
            The Foundation is structured so that no single office controls the network — strategic
            oversight, institutional advisory, and daily stewardship sit in separate hands.
          </p>
          <div className="tier-list">
            <div className="tier">
              <span className="num">Board of Trustees</span>
              <div>
                <h3>Fiduciary and strategic oversight</h3>
                <p>
                  Serves staggered terms and approves the Foundation's annual governance agenda,
                  keeping long-term stewardship independent of any single term or administration.
                </p>
              </div>
            </div>
            <div className="tier">
              <span className="num">Advisory Council</span>
              <div>
                <h3>Institutional and technical direction</h3>
                <p>
                  African and diaspora policy, technical, and institutional leaders advise the
                  Foundation on protocol direction and priorities as the network matures.
                </p>
              </div>
            </div>
            <div className="tier">
              <span className="num">Executive Office</span>
              <div>
                <h3>Operational stewardship</h3>
                <p>
                  Accountable to the Board for day-to-day operations, and responsible for
                  publishing an annual report and the validator accreditation registry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <span className="eyebrow"><span className="idx">03 —</span> Focus areas</span>
          <h2>What the Foundation stewards</h2>
          <div className="card-grid card-grid--3col">
            <div className="card">
              <div className="k">Focus 01</div>
              <h3>Digital identity &amp; credentials</h3>
              <p>Sovereign identity and verifiable credentials for people and institutions.</p>
            </div>
            <div className="card">
              <div className="k">Focus 02</div>
              <h3>Institutional records</h3>
              <p>Document registries and institutional signing for critical records.</p>
            </div>
            <div className="card">
              <div className="k">Focus 03</div>
              <h3>Payments &amp; financial access</h3>
              <p>Digital-asset rails for settlement and broader financial access.</p>
            </div>
            <div className="card">
              <div className="k">Focus 04</div>
              <h3>Public records &amp; civil administration</h3>
              <p>Infrastructure institutions can integrate with existing civil systems.</p>
            </div>
            <div className="card">
              <div className="k">Focus 05</div>
              <h3>Governance infrastructure</h3>
              <p>Coordination tooling for accredited, multi-institutional governance.</p>
            </div>
            <div className="card">
              <div className="k">Focus 06</div>
              <h3>Sovereign AI &amp; assistive systems</h3>
              <p>Assistive infrastructure aligned with the same governance standards.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap" style={{ textAlign: "center" }}>
          <h2 style={{ maxWidth: "20ch", margin: "0 auto 18px" }}>
            Alké Network is the Founding Phase of this stewardship in practice.
          </h2>
          <p className="section-lede" style={{ margin: "0 auto 32px" }}>
            Institutions joining today help shape the standards the Foundation stewards tomorrow.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <Link className="btn btn-primary" to="/founding-council">
              Explore the Founding Council
              <ArrowIcon />
            </Link>
            <Link className="btn btn-secondary" to="/">
              Back to Alké Network
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
