import { Link } from "react-router-dom";
import Mark from "./Mark";

export default function StubPage({ title, description }) {
  return (
    <section className="stub">
      <div className="wrap stub-inner">
        <Mark />
        <p className="eyebrow">Coming soon</p>
        <h2>{title}</h2>
        <p>{description}</p>
        <Link className="btn-ghost" to="/">
          ← Back to Alké Network
        </Link>
      </div>
    </section>
  );
}
