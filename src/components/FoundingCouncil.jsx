import { Link } from "react-router-dom";
import ApplyForm from "./ApplyForm";
import PathDiagram from "./PathDiagram";

export default function FoundingCouncil() {
  return (
    <section id="council">
      <div className="wrap">
        <div className="council-panel reveal">
          <div>
            <span className="eyebrow"><span className="idx">04 —</span> Founding Participant</span>
            <h2>Become a Founding Participant, shape what comes next</h2>
            <p className="section-lede">
              Founding Participants get early access to the network's governed sandbox, help
              inform participation standards, and put institutional use cases into practice from
              the start. A subset of Founding Participants will go on to form the Founding
              Council, guiding governance as the network matures.
            </p>
            <div className="council-ctas">
              <Link className="textlink" to="/founding-council">
                Explore Founding Council details →
              </Link>
            </div>
          </div>
          <ul>
            <li>Join a vetted institutional cohort from day one</li>
            <li>Put real use cases through the governed sandbox early</li>
            <li>Progress toward the Founding Council as the network matures</li>
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
