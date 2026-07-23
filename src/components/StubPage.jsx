import { Link } from "react-router-dom";
import Mark from "./Mark";

export default function StubPage({ title, description }) {
  return (
    <section className="steward stub-page">
      <div className="wrap inner reveal in">
        <Mark />
        <span className="eyebrow">Coming soon</span>
        <h2>{title}</h2>
        <p>{description}</p>
        <Link className="textlink" to="/">
          ← Back to Alké Network
        </Link>
      </div>
    </section>
  );
}
