import { Link } from "react-router-dom";

export default function AuthStub({ title, description }) {
  return (
    <div className="auth-screen">
      <div className="auth-form-side" style={{ width: "100%", background: "var(--bg)" }}>
        <div className="auth-form">
          <div className="brand">
            <span className="mark">A</span>alké <span className="sub">Network</span>
          </div>
          <h1>{title}</h1>
          <p className="lede">{description}</p>
          <Link to="/login" className="textlink">
            ← Back to sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
