import { Link } from "react-router-dom";
import ApplyForm from "./ApplyForm";

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
              <Link className="textlink" to="/founding-council">
                Explore Council details →
              </Link>
            </div>
          </div>
          <ul>
            <li>Shape governance and standards</li>
            <li>Join a vetted institutional cohort</li>
            <li>Participate in early network formation</li>
          </ul>
        </div>

        <div className="apply-panel reveal d1">
          <span className="eyebrow">Apply as a Founding Member</span>
          <ApplyForm />
          <p className="micro">
            Applications begin an introductory conversation and do not create an immediate
            commitment.
          </p>
        </div>
      </div>
    </section>
  );
}
