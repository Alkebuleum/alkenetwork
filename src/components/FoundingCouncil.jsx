import { Link } from "react-router-dom";
import ApplyForm from "./ApplyForm";
import PathDiagram from "./PathDiagram";

export default function FoundingCouncil() {
  return (
    <section id="council">
      <div className="wrap">
        <div className="council-panel reveal">
          <div>
            <span className="eyebrow"><span className="idx">10 —</span> Founding Network</span>
            <h2>Help shape a new global institutional network</h2>
            <p className="section-lede">
              The Founding Phase brings together institutions willing to learn with peers, join
              working groups, and explore practical use cases before the permanent membership
              model is finalized — globally open to qualifying institutions, with no initial
              financial commitment.
            </p>
            <div className="council-ctas">
              <Link className="textlink" to="/founding-council">
                Explore Founding Council details →
              </Link>
            </div>
          </div>
          <ul>
            <li>Join institutional briefings and working groups from day one</li>
            <li>Access sandbox opportunities and contribute practical requirements</li>
            <li>Help shape membership services and build peer-institution relationships</li>
          </ul>
        </div>

        <div className="apply-panel reveal d1">
          <span className="eyebrow">Apply as a Founding Participant</span>
          <PathDiagram />
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
