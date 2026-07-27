import InnerHero from "../components/InnerHero";
import PathDiagram from "../components/PathDiagram";
import ApplyForm from "../components/ApplyForm";

export default function Apply() {
  return (
    <div className="inner-page">
      <InnerHero
        eyebrow="Apply as a Founding Participant"
        title="Join the network's founding phase"
        lede="Founding Participants get early access to the governed sandbox, help inform participation standards, and put real institutional use cases into practice from the start. A subset will go on to form the Founding Council as the network matures."
      />

      <section>
        <div className="wrap">
          <span className="eyebrow"><span className="idx">01 —</span> Who this is for</span>
          <h2>Institutions evaluating shared trust infrastructure</h2>
          <p className="section-lede">
            Founding Participants tend to come from a wide range of institution types — no single
            sector can responsibly shape shared infrastructure alone.
          </p>
          <div className="card-grid">
            <div className="card">
              <div className="k">Type</div>
              <h3>Banks &amp; payments</h3>
              <p>Commercial banks, fintechs, and payment networks.</p>
            </div>
            <div className="card">
              <div className="k">Type</div>
              <h3>Regulators &amp; ministries</h3>
              <p>Central banks, regulators, and government agencies.</p>
            </div>
            <div className="card">
              <div className="k">Type</div>
              <h3>Universities</h3>
              <p>Research institutions evaluating real-world use cases.</p>
            </div>
            <div className="card">
              <div className="k">Type</div>
              <h3>Civic &amp; diaspora bodies</h3>
              <p>Institutions serving Africa and the diaspora directly.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <span className="eyebrow"><span className="idx">02 —</span> How it works</span>
          <h2>Three steps, no immediate commitment</h2>
          <div className="apply-panel apply-panel--standalone">
            <PathDiagram />
            <ApplyForm />
            <p className="micro">
              Applications begin an introductory conversation and do not create an immediate
              commitment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
