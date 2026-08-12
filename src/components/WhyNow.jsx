const QUESTIONS = [
  { k: "Relevance", v: "What is actually relevant to our institution?" },
  { k: "Focus", v: "What should we ignore, for now?" },
  { k: "Value", v: "Where is the real business value?" },
  { k: "Risk", v: "What risks must we manage?" },
  { k: "Build", v: "What should we build internally?" },
  { k: "Buy", v: "What should we buy instead?" },
  { k: "Control", v: "What should remain under our control?" },
];

export default function WhyNow() {
  return (
    <section id="why-now">
      <div className="wrap">
        <div className="reveal two-col">
          <div>
            <span className="eyebrow"><span className="idx">01 —</span> A new institutional era</span>
            <h2>Frontier technologies are moving from experimentation into institutional infrastructure.</h2>
            <p className="section-body">
              AI is reshaping institutional workflows, knowledge systems, decision support, and
              automation. Distributed ledgers are being applied to shared verification, trusted
              records, credentials, digital assets, and settlement.
            </p>
            <p className="section-body" style={{ marginTop: 16 }}>
              Most institutions know these shifts matter but still face the same difficult
              questions. Alké exists to help institutions answer them together.
            </p>
          </div>
          <div className="spec-rows" style={{ marginTop: 0 }}>
            {QUESTIONS.map((q) => (
              <div className="spec-row" key={q.k}>
                <div className="k">{q.k}</div>
                <div className="v">{q.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
