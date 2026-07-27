import { Link } from "react-router-dom";

export default function InnerHero({ eyebrow, title, lede }) {
  return (
    <section>
      <div className="wrap">
        <Link className="back-link" to="/">
          ← Alké Network
        </Link>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="page-title">{title}</h2>
        {lede && <p className="section-lede">{lede}</p>}
      </div>
    </section>
  );
}
