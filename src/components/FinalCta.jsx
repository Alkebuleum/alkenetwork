import ArrowIcon from "./icons/ArrowIcon";

export default function FinalCta() {
  return (
    <section id="final-cta">
      <div className="wrap" style={{ textAlign: "center" }}>
        <div className="reveal">
          <h2 style={{ maxWidth: "18ch", margin: "0 auto 18px" }}>
            Prepare your institution for what comes next.
          </h2>
          <p className="section-lede" style={{ margin: "0 auto 32px" }}>
            Join a network of institutions learning, testing, and building the capability to adopt
            frontier technologies on their own terms.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <a className="btn btn-primary" href="#council">
              Join the Founding Network
              <ArrowIcon />
            </a>
            <a className="btn btn-secondary" href="mailto:council@alkebuleum.org?subject=Request%20an%20Institutional%20Briefing">
              Request a Briefing
            </a>
          </div>
          <p className="micro" style={{ marginTop: 24 }}>
            Already a member?{" "}
            <a href="https://app.alke.network" target="_blank" rel="noopener noreferrer">
              Sign in →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
