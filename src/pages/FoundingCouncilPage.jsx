import { Link } from "react-router-dom";
import InnerHero from "../components/InnerHero";
import PathDiagram from "../components/PathDiagram";
import ArrowIcon from "../components/icons/ArrowIcon";

export default function FoundingCouncilPage() {
  return (
    <div className="inner-page">
      <InnerHero
        eyebrow="Founding Council"
        title="Where founding participation leads"
        lede="The Founding Council is the governance body a subset of Founding Participants will go on to form as Alké Network matures. This is what it is, who it's built for, and how today's participation leads there — it is not a separate application track."
      />

      <section>
        <div className="wrap">
          <span className="eyebrow"><span className="idx">01 —</span> Two stages, not one</span>
          <h2>Founding Participation comes first</h2>
          <p className="section-lede">
            There is one open door today: joining as a Founding Participant. The Council forms
            later, drawn from that same cohort.
          </p>
          <PathDiagram steps={["Founding Participant — open now", "Founding Council — as the network matures"]} />
          <div className="tier-list">
            <div className="tier">
              <span className="num">Now</span>
              <div>
                <h3>Founding Participant</h3>
                <p>
                  Open today. Institutions get early access to the governed sandbox, help inform
                  participation standards, and put real use cases into practice.
                </p>
              </div>
            </div>
            <div className="tier">
              <span className="num">Later</span>
              <div>
                <h3>Founding Council</h3>
                <p>
                  Forms as the network matures. A subset of Founding Participants take on
                  governance responsibility — setting standards, accrediting validators, and
                  guiding the network's direction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <span className="eyebrow"><span className="idx">02 —</span> What the Council is</span>
          <h2>Governance built by the institutions it serves</h2>
          <div className="section-body">
            <p>
              The Founding Council is modeled on the same multi-stakeholder principles used by
              public-interest technical bodies and industry governing councils worldwide:
              named, accountable institutions holding real governance influence — not anonymous
              voting weight.
            </p>
            <p>
              Council composition is expected to draw on a wide range of institution types, since
              no single sector can responsibly govern shared trust infrastructure alone.
            </p>
          </div>
          <div className="card-grid">
            <div className="card">
              <div className="k">Sector</div>
              <h3>Banks &amp; fintechs</h3>
              <p>Payments, settlement, and financial-access expertise.</p>
            </div>
            <div className="card">
              <div className="k">Sector</div>
              <h3>Regulators &amp; ministries</h3>
              <p>Oversight, compliance access, and audit participation.</p>
            </div>
            <div className="card">
              <div className="k">Sector</div>
              <h3>Universities &amp; research bodies</h3>
              <p>Technical standards work and independent evaluation.</p>
            </div>
            <div className="card">
              <div className="k">Sector</div>
              <h3>Civic &amp; diaspora institutions</h3>
              <p>Representation for the communities the network serves.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <span className="eyebrow"><span className="idx">03 —</span> What membership means</span>
          <h2>Influence, not exposure</h2>
          <div className="spec-rows">
            <div className="spec-row">
              <span className="k">Gains</span>
              <span className="v">
                A voice in governance, public visibility as a founding institution, and early
                access to standards before they're fixed.
              </span>
            </div>
            <div className="spec-row">
              <span className="k">Not required</span>
              <span className="v">
                Council standing does not carry blanket liability, a requirement to promote any
                token, or an exclusive commitment away from other initiatives.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap" style={{ textAlign: "center" }}>
          <h2 style={{ maxWidth: "20ch", margin: "0 auto 18px" }}>
            The way in is Founding Participation, today.
          </h2>
          <p className="section-lede" style={{ margin: "0 auto 32px" }}>
            There is no separate Council application. Institutions join as Founding Participants
            first.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <Link className="btn btn-primary" to="/apply">
              Apply as a Founding Participant
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
