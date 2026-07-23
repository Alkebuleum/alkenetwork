import { useState } from "react";

export default function FoundingCouncil() {
  const [status, setStatus] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("Thank you — your interest has been recorded.");
    e.target.reset();
  }

  return (
    <section className="block" id="council">
      <div className="wrap">
        <div className="block-head">
          <p className="eyebrow">Founding Council</p>
          <h2>Help shape Africa's institutional digital rails.</h2>
        </div>

        <div className="council-grid">
          <div className="council-copy">
            <p>
              The Founding Council will bring together reputable banks, financial institutions,
              governments, universities and other trusted organizations to guide the network's
              governance and early applications.
            </p>
            <div className="council-note">
              Joining the discussion does not require immediate production deployment or
              financial commitment.
            </div>
          </div>

          <form className="council-form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="institution">Institution name</label>
              <input
                id="institution"
                name="institution"
                type="text"
                placeholder="e.g. First Continental Bank"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="country">Country</label>
              <input id="country" name="country" type="text" placeholder="e.g. Nigeria" required />
            </div>
            <div className="field">
              <label htmlFor="type">Institution type</label>
              <select id="type" name="type" defaultValue="" required>
                <option value="" disabled>
                  Select type
                </option>
                <option>Bank</option>
                <option>Financial institution</option>
                <option>Government</option>
                <option>University / research</option>
                <option>Regulator</option>
                <option>Other trusted organization</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="representative">Representative</label>
              <input
                id="representative"
                name="representative"
                type="text"
                placeholder="Full name and title"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="email">Official email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="name@institution.org"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="interest">Area of interest</label>
              <select id="interest" name="interest" defaultValue="">
                <option value="" disabled>
                  Select area
                </option>
                <option>Governance participation</option>
                <option>Stablecoin / tokenized assets pilot</option>
                <option>Identity infrastructure</option>
                <option>Compliance and risk</option>
                <option>General inquiry</option>
              </select>
            </div>
            <div className="field full">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your institution and what you'd like to explore."
              ></textarea>
            </div>
            <div className="submit-row">
              <button className="btn-submit" type="submit">
                Submit interest
              </button>
              <span className={`submit-status${status ? " success" : ""}`}>{status}</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
