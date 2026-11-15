import { Chip } from "../components/Brand";

const STAGES = [
  {
    when: "NOW",
    title: "Mining is open",
    text: "The network is live, with the explorer, JollofSwap and Nuru. 300,000,000 ALKE is allocated for community mining, and the ALKE app is open in Nuru and on the web.",
    now: true,
  },
  {
    when: "NEXT",
    title: "iPhone and Android apps",
    text: "The ALKE app arrives on the App Store and Google Play: daily sessions, ALKÉ Hex and ALKÉ Rush, and invites and games that warm cold ALKE.",
  },
  { when: "THEN", title: "Post-quantum Mainnet", text: "The network moves to the post-quantum L1, the goal this roadmap builds toward." },
  { when: "THEN", title: "Claiming opens", text: "Members claim their warm ALKE in the Nuru app. Claimed ALKE starts locked and is released over time. A milestone, not a date." },
];

export default function Roadmap() {
  return (
    <section className="band alt" id="roadmap" aria-labelledby="roadTitle">
      <div className="wrap">
        <div className="band-head">
          <p className="eyebrow">// Roadmap</p>
          <h2 className="display" id="roadTitle">
            The road to <span className="glow">post-quantum Mainnet.</span>
          </h2>
          <p className="lede">The goal is a Mainnet secured with post-quantum cryptography, built for the era of quantum computing. These are the stages, in order.</p>
        </div>
        <ol className="road">
          {STAGES.map((s) => (
            <li className={s.now ? "stage now" : "stage"} key={s.title}>
              <span className="when">{s.when}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              {s.now && <Chip gold>We're here</Chip>}
            </li>
          ))}
        </ol>
        <p className="road-foot">No dates until they're confirmed. Every stage is a milestone.</p>
      </div>
    </section>
  );
}
