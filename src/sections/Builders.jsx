import { Ext, Hex } from "../components/Brand";
import { LINKS } from "../data/links";

const FACTS = [
  ["Chain ID", "237422", true],
  ["Block time", "5.0s"],
  ["Gas", "1,000 wei"],
  ["Blocks", "6.0M+"],
];

const GETS = [
  ["A live chain", "A new block about every 5 seconds."],
  ["An explorer", "Every block in the open on alkescan.com."],
  ["An exchange", "JollofSwap, with ALKE/USDC and ALKE/cNGN pairs."],
  ["A wallet", "Through the Nuru app on iPhone and Android."],
];

export default function Builders() {
  return (
    <section className="band alt" id="builders" aria-labelledby="buildTitle">
      <div className="wrap split" style={{ alignItems: "start" }}>
        <div>
          <p className="eyebrow">// Builders</p>
          <h2 className="display" id="buildTitle">
            The network is live. <span className="glow">Build on it.</span>
          </h2>
          <p className="lede">The chain is running today, with an explorer, an exchange and a wallet through Nuru.</p>
          <div className="facts">
            {FACTS.map(([label, value, mono]) => (
              <div className="fact" key={label}>
                <span>{label}</span>
                <b className={mono ? "mono" : undefined}>{value}</b>
              </div>
            ))}
          </div>
          <p className="facts-src">Source: alkescan.com, November 2026.</p>
          <ul className="gets">
            {GETS.map(([title, text]) => (
              <li key={title}>
                <Hex size={22} stroke={10} color="#3DF5FF" />
                <b>{title}</b>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="code" role="group" aria-label="Network settings for builders">
            <div className="code-bar">
              <span>
                <i />
                <i />
                <i />
              </span>
              <span>alkebuleum.network.js</span>
            </div>
            <pre>
              <span className="k">const</span> network = {"{"}
              {"\n  "}chainId: <span className="n">237422</span>,{"\n  "}blockTime: <span className="s">"5.0s"</span>,{"\n  "}gas: <span className="s">"1,000 wei"</span>,
              {"\n  "}explorer: <span className="s">"https://alkescan.com"</span>,{"\n  "}rpcUrl: <span className="s">"https://rpc.alkebuleum.com"</span>,{"\n  "}docs: <span className="s">"https://docs.alkebuleum.org"</span>,{"\n"}
              {"};"}
            </pre>
          </div>
          <div className="res">
            <div className="res-row">
              <b>Explorer</b>
              <Ext className="textlink" href={LINKS.explorer}>
                alkescan.com
              </Ext>
            </div>
            <div className="res-row">
              <b>Docs</b>
              <Ext className="textlink" href={LINKS.docs}>
                docs.alkebuleum.org
              </Ext>
            </div>
            <div className="res-row">
              <b>RPC endpoint</b>
              <Ext className="textlink" href={LINKS.rpc}>
                rpc.alkebuleum.com
              </Ext>
            </div>
            <div className="res-row">
              <b>Developer tooling</b>
              <span>
                <Ext className="textlink" href={LINKS.github}>
                  GitHub
                </Ext>
                {" · "}
                <Ext className="textlink" href={LINKS.faucet}>
                  Faucet
                </Ext>
              </span>
            </div>
          </div>
          <div className="btns">
            <Ext className="btn primary" href={LINKS.docs}>
              Read the docs
            </Ext>
            <Ext className="btn" href={LINKS.explorer}>
              Open the explorer
            </Ext>
          </div>
        </div>
      </div>
    </section>
  );
}
