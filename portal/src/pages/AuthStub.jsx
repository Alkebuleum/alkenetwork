import { Link } from "react-router-dom";
import Mark from "../components/Mark";

export default function AuthStub({ title, description }) {
  return (
    <div className="auth-screen">
      <div className="auth-form-side" style={{ width: "100%" }}>
        <div className="auth-form">
          <div className="brand">
            <Mark />
            <span className="word">alké</span>
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
