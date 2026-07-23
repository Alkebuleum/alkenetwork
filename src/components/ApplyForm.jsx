import { useState } from "react";

const COUNCIL_EMAIL = "council@alkebuleum.org";

const INSTITUTION_TYPES = [
  "Central bank / regulator",
  "Commercial bank",
  "Payments / fintech",
  "Government agency",
  "Other",
];

const INTERESTS = [
  "Identity & credentials",
  "Tokenized assets & stablecoins",
  "Cross-border settlement",
  "Not sure yet",
];

export default function ApplyForm() {
  const [institution, setInstitution] = useState("");
  const [institutionType, setInstitutionType] = useState(INSTITUTION_TYPES[0]);
  const [interest, setInterest] = useState(INTERESTS[0]);

  function handleSubmit(e) {
    e.preventDefault();
    const subject = `Founding Council inquiry — ${institution}`;
    const body = [
      `Institution: ${institution}`,
      `Institution type: ${institutionType}`,
      `Primary interest: ${interest}`,
    ].join("\n");
    window.location.href = `mailto:${COUNCIL_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="apply-form" onSubmit={handleSubmit}>
      <div className="apply-field">
        <label htmlFor="af-institution">Institution name</label>
        <input
          id="af-institution"
          type="text"
          required
          value={institution}
          onChange={(e) => setInstitution(e.target.value)}
          placeholder="e.g. Central Bank of…"
        />
      </div>
      <div className="apply-field">
        <label htmlFor="af-type">Institution type</label>
        <select
          id="af-type"
          value={institutionType}
          onChange={(e) => setInstitutionType(e.target.value)}
        >
          {INSTITUTION_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div className="apply-field">
        <label htmlFor="af-interest">Primary interest</label>
        <select id="af-interest" value={interest} onChange={(e) => setInterest(e.target.value)}>
          {INTERESTS.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Send introduction request
      </button>
    </form>
  );
}
