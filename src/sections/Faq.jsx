const FAQS = [
  {
    q: "What is $ALKE?",
    a: [
      "$ALKE is the native utility token of the network. It pays transaction fees, runs smart contracts, secures validator staking, carries governance and opens network access.",
      "It is not a security, an investment contract or equity.",
    ],
  },
  {
    q: "What is cold ALKE, and what is hot ALKE?",
    a: [
      "Cold ALKE is what members mine in the ALKÉ Network app. It stays Locked. Hot ALKE is the live token on the network today.",
      "At the first global listing, only warmed ALKE converts to hot ALKE on the post-quantum L1; unwarmed cold ALKE stays cold. That conversion is a mechanism, not a promise of value.",
    ],
  },
  {
    q: "How do I warm my cold ALKE?",
    a: [
      "Invite real people. Each verified invite warms 10 of your cold ALKE per day, so warming time = your cold ALKE ÷ (verified invites × 10 per day). 100 cold ALKE with 1 verified invite warms in 10 days, and with 5 invites in 2 days. 1,000 cold ALKE with 1 invite takes 100 days, and with 10 invites 10 days.",
      <>
        Unverified invites warm nothing, and your own mining does not warm your coins. The full verification steps are published in the app at launch. <a href="#warming">See how warming works</a>.
      </>,
    ],
  },
  {
    q: "How do I get the ALKE app?",
    a: [
      "The ALKE app is open now in two ways. Recommended: get the Nuru app, tap Apps and open the ALKE App listed there. Or open app.alke.network in any browser.",
      "Native iPhone and Android apps are coming soon. Follow @alkenetwork for updates.",
    ],
  },
  { q: "When does ALKE list?", a: ["There is no listing date. The first global listing is a milestone on the roadmap, not a date, and nothing here promises one."] },
  {
    q: "Is ALKE an investment?",
    a: [
      "No. $ALKE is a utility token for using the network: gas, staking, governance and network access. There was no ICO or presale, and no return is guaranteed.",
      "Nothing on this site is financial advice.",
    ],
  },
  { q: "How do I start?", a: ["Get Nuru on iPhone or Android, tap Apps and open the ALKE App. Join the community in Nuru too, and follow @alkenetwork for updates."] },
];

function Plus() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3DF5FF" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export default function Faq() {
  return (
    <section className="band alt" id="faq" aria-labelledby="faqTitle">
      <div className="wrap">
        <div className="band-head">
          <p className="eyebrow">// FAQ</p>
          <h2 className="display" id="faqTitle">
            Questions, <span className="glow">answered.</span>
          </h2>
        </div>
        <div className="faq">
          {FAQS.map(({ q, a }, i) => (
            <details key={q} open={i === 0}>
              <summary>
                {q}
                <Plus />
              </summary>
              <div>
                {a.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
