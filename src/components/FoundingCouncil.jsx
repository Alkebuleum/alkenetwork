import { Link } from "react-router-dom";

export default function FoundingCouncil() {
  return (
    <section id="council">
      <div className="wrap">
        <div className="council-panel reveal">
          <div>
            <span className="eyebrow">Founding Council</span>
            <h2>Help shape the network from the beginning</h2>
            <p className="section-lede">
              Founding Council members help inform governance, participation standards, and early
              institutional use cases across the network.
            </p>
            <div className="council-ctas">
              <Link className="btn btn-primary" to="/apply">
                Apply as a Founding Member
              </Link>
              <Link className="textlink" to="/founding-council">
                Explore Council details →
              </Link>
            </div>
            <p className="micro">
              Applications begin an introductory conversation and do not create an immediate
              commitment.
            </p>
          </div>
          <ul>
            <li>Shape governance and standards</li>
            <li>Join a trusted institutional cohort</li>
            <li>Participate in early network formation</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
