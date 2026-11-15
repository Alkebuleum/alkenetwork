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
      "When claiming opens, you claim your warm ALKE in the Nuru app, where you have a wallet, after a personhood check: one person, one account. Cold ALKE that isn't warm yet stays cold until it is.",
      "Claimed ALKE starts locked in your Nuru wallet and is released over time, like vesting. The release terms are published before claiming opens. Claiming is a mechanism, not a promise of value.",
    ],
  },
  {
    q: "How do I warm my cold ALKE?",
    a: [
      "Contribute. Each active invite warms 1% of your cold ALKE a day; an invite becomes active once the person you invited completes 3 sessions. Daily game XP in ALKÉ Hex and ALKÉ Rush adds 0.1% per 30 XP, up to 0.3% a day. Lessons (up to 0.3% a day) and discussions (up to 0.2% a day) are coming soon.",
      <>
        With 3 active invites and games maxed you warm 3.3% a day, so your cold ALKE is fully warm in about a month. Your own mining sessions don't warm your coins. <a href="#warming">See how warming works</a>.
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
  { q: "When does ALKE list?", a: ["There is no listing date, and nothing here promises one. No listing, release date or price is promised. Claiming your warm ALKE in Nuru is a milestone on the roadmap, not a date."] },
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
