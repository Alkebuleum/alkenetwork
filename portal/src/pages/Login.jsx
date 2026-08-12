import { Link, useNavigate } from "react-router-dom";
import Mark from "../components/Mark";

export default function Login() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // No auth backend yet — see services/auth for the contract this should call.
    navigate("/");
  }

  return (
    <div className="auth-screen">
      <div className="auth-aside">
        <div className="auth-aside-content">
          <div className="k">Founding Network — Open</div>
          <h2>Intelligence, peers, and a governed sandbox — in one institutional workspace.</h2>
          <p>
            Sign in to see what's changed, what your peers are testing, and what your institution
            should look at next.
          </p>
        </div>
        <div className="auth-aside-content" style={{ maxWidth: 420 }}>
          <p style={{ fontSize: 12.5, color: "var(--ink-3)" }}>
            Stewarded by the Alkebuleum Foundation. Membership is institutional — your access is
            tied to your institution's account, not just your inbox.
          </p>
        </div>
      </div>

      <div className="auth-form-side">
        <form className="auth-form" onSubmit={handleSubmit}>
          <a href="https://alke.network" className="brand">
            <Mark />
            <span className="word">alké</span>
          </a>
          <h1>Sign in to your workspace</h1>
          <p className="lede">Access your institution's Alké Network account.</p>

          <div className="stack">
            <div className="field">
              <label htmlFor="email">Work email</label>
              <input id="email" type="email" required placeholder="you@institution.org" autoComplete="username" />
            </div>
            <div className="field">
              <label htmlFor="password">Password</label>
              <input id="password" type="password" required placeholder="••••••••" autoComplete="current-password" />
            </div>
            <button type="submit" className="btn btn-primary btn--full">
              Sign in
            </button>
          </div>

          <div className="divider">or</div>

          <button type="button" className="btn btn-secondary btn--full" onClick={handleSubmit}>
            Continue with institutional SSO
          </button>

          <div className="foot-links">
            <Link to="/forgot-password" className="textlink">
              Forgot password?
            </Link>
            <Link to="/invite" className="textlink">
              New institution? Request an invite
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
