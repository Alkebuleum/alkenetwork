import { Link } from "react-router-dom";
import InnerHero from "../components/InnerHero";
import ArrowIcon from "../components/icons/ArrowIcon";

export default function GlobalInfrastructure() {
  return (
    <div className="inner-page">
      <InnerHero
        eyebrow="Global infrastructure shift"
        title="Institutions everywhere are already building shared digital rails"
        lede="Central banks, market infrastructures, and consortia of banks are already testing shared, governed ledgers for settlement, identity, and cross-border transactions. Alké Network exists so member institutions can evaluate and participate in that shift, rather than adopt what others have already decided for them."
      />

      <section>
        <div className="wrap">
          <span className="eyebrow"><span className="idx">01 —</span> Who else is building this</span>
          <h2>A handful of examples, not an exhaustive list</h2>
          <p className="section-lede">
            These are independent initiatives, unaffiliated with Alké Network. They illustrate a
            pattern: institutions choosing to govern shared infrastructure together rather than
            depend on any single provider.
          </p>
          <div className="card-grid">
            <div className="card">
              <div className="k">Central banks</div>
              <h3>Project Agorá</h3>
              <p>
                A central-bank-convened initiative exploring tokenized deposits and wholesale
                settlement on shared ledger infrastructure.
              </p>
            </div>
            <div className="card">
              <div className="k">Messaging network</div>
              <h3>Swift</h3>
              <p>
                The interbank messaging network running experiments in linking tokenized assets
                and central bank digital currencies across existing financial infrastructure.
              </p>
            </div>
            <div className="card">
              <div className="k">Bank consortium</div>
              <h3>Partior</h3>
              <p>
                A settlement network founded by a group of commercial banks to move value across
                institutions on shared ledger rails.
              </p>
            </div>
            <div className="card">
              <div className="k">Capital markets</div>
              <h3>Canton Network</h3>
              <p>
                An interoperable, privacy-preserving network used by a range of capital-markets
                institutions to synchronize records while keeping data confidential.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <span className="eyebrow"><span className="idx">02 —</span> The common thread</span>
          <h2>Institutions, not platforms, hold the governance</h2>
          <div className="section-body">
            <p>
              Each of these initiatives is governed by the institutions that use it, not by a
              single vendor. That is the same principle Alké Network runs on: participating
              institutions set standards and shape the sandbox before any use case reaches
              production.
            </p>
            <p>
              Alké Network exists so member institutions — wherever they are — get a direct seat
              at that table, rather than adopting standards decided entirely without them. That
              matters everywhere, and it is a founding concern for institutions in Africa and
              other historically underrepresented markets in particular.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap" style={{ textAlign: "center" }}>
          <h2 style={{ maxWidth: "22ch", margin: "0 auto 18px" }}>
            The next digital rails should not be built without your institution at the table.
          </h2>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap", marginTop: 32 }}>
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
