import { useEffect, useRef, useState } from "react";
import ArrowIcon from "./icons/ArrowIcon";

const SIGNALS = [
  {
    name: "Tata Communications",
    sector: "Telecommunications",
    category: "Governance influence",
    quote:
      "We joined…to have a seat at the table and help shape…next-generation public internet infrastructure.",
    proof:
      "Institutions join early so they can influence infrastructure before its standards and direction are fixed.",
    sourceUrl:
      "https://hedera.com/blog/tata-communications-why-we-joined-the-hedera-governing-council-our-node-infrastructure-setup-and-application-use-cases/",
  },
  {
    name: "Dell Technologies",
    sector: "Technology",
    category: "Learning through participation",
    quote:
      "By gaining hands-on experience with distributed ledger technology, we're able to serve as a rational, holistic voice for customers.",
    proof:
      "Operating infrastructure and testing applications gives an institution practical knowledge it cannot gain from reports alone.",
    sourceUrl:
      "https://hedera.com/blog/dell-technologies-joins-hedera-governing-council-to-help-automate-distributed-ledger-technology/",
  },
  {
    name: "DLA Piper",
    sector: "Law",
    category: "Strategic capability",
    quote:
      "Understand and learn more about public distributed ledger technology, but also participate in the decision-making processes.",
    proof:
      "Even nonfinancial institutions join to build internal expertise, influence governance, and prepare new services for clients.",
    sourceUrl:
      "https://hedera.com/blog/dla-piper-the-future-of-public-distributed-ledgers-in-law-and-why-we-joined-the-hedera-governing-council/",
  },
  {
    name: "Zain Group",
    sector: "Telecommunications",
    category: "Innovation and new services",
    quote: "Council membership provides Zain first-hand exposure to cutting-edge and secure technologies.",
    proof:
      "Participation can support product innovation, institutional collaboration, and the development of new digital services.",
    sourceUrl: "https://hedera.com/blog/a-mena-region-first-zain-group-joins-hedera-governing-council/",
  },
  {
    name: "FedEx",
    sector: "Logistics",
    category: "Trusted multiparty data",
    quote:
      "Trusted data must be shared and verified across many parties without increasing risk or centralizing control.",
    proof:
      "Shared ledgers can help organizations verify information across companies, systems, and jurisdictions without one party controlling everything.",
    sourceUrl:
      "https://hedera.com/blog/fedex-joins-hedera-council-to-support-the-future-of-digital-global-supply-chains/",
  },
  {
    name: "Standard Bank Group",
    sector: "Banking — Africa",
    category: "Cross-border efficiency",
    quote:
      "Blockchain technology can track and leapfrog legacy issues…which ultimately enables cost savings for all stakeholders.",
    proof:
      "African institutions are already evaluating DLT to reduce cross-border complexity, improve transparency, and lower operational costs.",
    sourceUrl:
      "https://www.prnewswire.com/news-releases/standard-bank-group-establishes-africas-first-hedera-network-node-to-enable-much-needed-digitisation-of-cross-border-trade-processes-301234395.html",
  },
  {
    name: "IBM",
    sector: "Technology",
    category: "Enterprise interoperability",
    quote: "Enhance and simplify the deployment of Hyperledger Fabric in the enterprise.",
    proof:
      "Institutions value infrastructure that connects existing enterprise systems rather than requiring them to abandon everything already in operation.",
    sourceUrl: "https://hedera.com/blog/ibm-and-tata-communications-join-hedera-governing-council/",
  },
  {
    name: "Shinhan Bank",
    sector: "Banking",
    category: "Institutional collaboration",
    quote: "Significantly accelerate our engagement with other global industry leaders.",
    proof:
      "Joining a shared network provides access to counterparties, technical partners, and institutions with which real use cases can be tested.",
    sourceUrl:
      "https://hedera.com/blog/shinhan-bank-to-conduct-stablecoin-international-remittance-poc-on-hedera-network-in-partnership-with-major-multinational-bank/",
  },
  {
    name: "Hashnote",
    sector: "Capital markets",
    category: "Privacy and capital efficiency",
    quote: "Reduce counterparty and settlement risks and optimize capital efficiency without sacrificing privacy.",
    proof: "Institutions do not want efficiency at the expense of confidentiality, control, or regulatory obligations.",
    sourceUrl: "https://www.canton.network/connect",
  },
  {
    name: "Broadridge",
    sector: "Capital markets",
    category: "Production-scale adoption",
    quote:
      "Institutions are moving beyond evaluating distributed ledger technology. They're incorporating it into their day-to-day market activity.",
    proof:
      "DLT is moving from isolated experimentation into production workflows where institutions can measure real operational value.",
    sourceUrl: "https://www.broadridge.com/de/press-release/2026/broadridges-dlr-processes-over-7-trillion-in-june",
  },
];

const AUTOPLAY_MS = 7000;
const SWIPE_THRESHOLD = 50;

export default function InstitutionalSignal() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);

  const count = SIGNALS.length;
  const goTo = (i) => setIndex((i + count) % count);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  useEffect(() => {
    if (paused) return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, count]);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > SWIPE_THRESHOLD) prev();
    else if (delta < -SWIPE_THRESHOLD) next();
    touchStartX.current = null;
  };

  return (
    <section id="institutional-signal">
      <div className="wrap">
        <div className="reveal">
          <span className="eyebrow"><span className="idx">03 —</span> Global institutional signal</span>
          <h2>Institutions worldwide are already building shared digital rails.</h2>
          <p className="section-lede">
            Across banking, technology, law, telecommunications, logistics, and capital markets,
            institutions are participating for practical reasons: to shape governance, gain
            first-hand knowledge, reduce operational friction, protect privacy, improve capital
            efficiency, and develop new services.
          </p>
        </div>

        <div
          className="signal-carousel reveal"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div
            className="signal-viewport"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            role="group"
            aria-roledescription="carousel"
            aria-label="Institutions building shared digital-ledger infrastructure"
          >
            <div className="signal-track" style={{ transform: `translateX(-${index * 100}%)` }}>
              {SIGNALS.map((s) => (
                <div className="signal-slide" key={s.name} aria-hidden={SIGNALS[index] !== s}>
                  <div className="signal-card">
                    <div className="signal-card-head">
                      <div className="signal-mark">{s.name.charAt(0)}</div>
                      <div>
                        <div className="signal-wordmark">{s.name}</div>
                        <div className="signal-sector">{s.sector}</div>
                      </div>
                      <span className="signal-tag">{s.category}</span>
                    </div>
                    <blockquote className="signal-quote">
                      <span className="signal-quotemark" aria-hidden="true">
                        "
                      </span>
                      {s.quote}
                    </blockquote>
                    <p className="signal-proof">
                      <span className="k">What it proves</span> {s.proof}
                    </p>
                    <a className="textlink" href={s.sourceUrl} target="_blank" rel="noopener noreferrer">
                      Read original source →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="signal-arrow prev" onClick={prev} aria-label="Previous institution">
            ←
          </button>
          <button className="signal-arrow next" onClick={next} aria-label="Next institution">
            →
          </button>

          <div className="signal-dots" role="tablist" aria-label="Select institution">
            {SIGNALS.map((s, i) => (
              <button
                key={s.name}
                className={i === index ? "signal-dot active" : "signal-dot"}
                onClick={() => goTo(i)}
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to ${s.name}`}
              />
            ))}
          </div>
        </div>

        <p className="signal-disclaimer">
          Organizations shown are independent global examples of institutional DLT participation.
          They are not members, partners, or endorsers of Alké Network unless expressly identified
          as such.
        </p>

        <div className="signal-close reveal">
          <h3>Different sectors. The same institutional logic.</h3>
          <p>
            Institutions are not participating because blockchain is fashionable. They are
            participating to learn early, shape the standards, improve real workflows, connect
            with new counterparties, and prepare before the infrastructure becomes unavoidable.
          </p>
          <p className="signal-callout">
            Alké gives African institutions the same opportunity — through infrastructure they help
            govern.
          </p>
          <a className="btn btn-primary" href="#council">
            Explore the Alké Institutional Sandbox
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
