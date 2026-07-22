import { Link } from "react-router-dom";
import Mark from "./Mark";

export default function Stewardship() {
  return (
    <section className="steward" id="steward">
      <div className="wrap inner reveal">
        <Mark />
        <h2>Stewarded by the Alkebuleum Foundation</h2>
        <p>
          The Alkebuleum Foundation supports the formation of Alké Network as public-interest
          digital infrastructure for trusted institutions.
        </p>
        <Link className="textlink" to="/foundation">
          About the Foundation →
        </Link>
      </div>
    </section>
  );
}
