import IllustrationDefs from "./illustrations/IllustrationDefs";

const UID = "hero";
const g = (id) => `url(#${UID}-${id})`;

export default function HeroIllustration() {
  return (
    <div className="hero-illustration" aria-hidden="true">
      <div className="hero-illustration__halo" />
      <svg viewBox="0 0 900 820" fill="none" xmlns="http://www.w3.org/2000/svg">
        <IllustrationDefs uid={UID} />

        {/* ============ GRID BED ============ */}
        <g mask={g("m-fade")}>
          <g mask={g("m-left")}>
            <rect width="900" height="820" fill={g("g-fine")} />
            <rect width="900" height="820" fill={g("g-major")} />
          </g>
        </g>

        <g mask={g("m-left")}>
          {/* ============ MEASUREMENT RAIL (left) ============ */}
          <g stroke="#6FC5A0" strokeOpacity=".3">
            <path d="M150 250v340" strokeWidth="1" />
            <path d="M144 250h12M144 590h12M147 335h6M147 420h6M147 505h6" strokeWidth="1" />
          </g>
          <text x="132" y="424" fill="#6FC5A0" fillOpacity=".45" fontFamily="IBM Plex Mono, monospace" fontSize="9.5" letterSpacing="1.6" textAnchor="end">18.0 M</text>

          {/* ============ INSTITUTION ============ */}
          <g>
            <ellipse cx="380" cy="700" rx="185" ry="12" fill="#6FC5A0" fillOpacity=".05" />

            <path d="M380 292 226 396h308L380 292Z" stroke={g("stone")} strokeWidth="1.6" strokeLinejoin="round" fill="#6FC5A0" fillOpacity=".045" />
            <path d="M380 316 262 396h236L380 316Z" stroke="#6FC5A0" strokeOpacity=".28" strokeWidth="1" />
            <path d="m300 372 42-28M330 372l42-28M360 372l42-28M390 372l42-28" stroke="#6FC5A0" strokeOpacity=".2" strokeWidth="1" />

            <rect x="218" y="396" width="324" height="20" stroke={g("stone")} strokeWidth="1.4" fill="#6FC5A0" fillOpacity=".05" />
            <path d="M218 406h324" stroke="#6FC5A0" strokeOpacity=".16" strokeWidth="1" />

            <g stroke="#6FC5A0" strokeOpacity=".62" strokeWidth="1.3" fill="#6FC5A0" fillOpacity=".035">
              <rect x="248" y="416" width="30" height="222" />
              <rect x="316" y="416" width="30" height="222" />
              <rect x="414" y="416" width="30" height="222" />
              <rect x="482" y="416" width="30" height="222" />
            </g>
            <g stroke="#6FC5A0" strokeOpacity=".2" strokeWidth="1">
              <path d="M258 424v206M268 424v206M326 424v206M336 424v206M424 424v206M434 424v206M492 424v206M502 424v206" />
            </g>
            <path d="M354 638V500a26 26 0 0 1 52 0v138" stroke="#9BDCBF" strokeOpacity=".5" strokeWidth="1.3" fill="#6FC5A0" fillOpacity=".05" />
            <circle cx="380" cy="548" r="6" fill="#9BDCBF" fillOpacity=".8" filter={g("glow")} className="blink" />

            <rect x="234" y="638" width="292" height="18" stroke={g("stone")} strokeWidth="1.3" fill="#6FC5A0" fillOpacity=".05" />
            <rect x="212" y="656" width="336" height="20" stroke="#6FC5A0" strokeOpacity=".45" strokeWidth="1.3" fill="#6FC5A0" fillOpacity=".03" />
            <path d="M196 676h368" stroke="#6FC5A0" strokeOpacity=".5" strokeWidth="1.5" />
            <path d="M196 676 186 686M564 676l10 10" stroke="#6FC5A0" strokeOpacity=".28" strokeWidth="1" />

            <circle cx="446" cy="284" r="10" stroke="#6FC5A0" strokeOpacity=".4" strokeWidth="1" />
            <text x="446" y="288" fill="#9BDCBF" fillOpacity=".72" fontFamily="IBM Plex Mono, monospace" fontSize="9.5" textAnchor="middle">A</text>
            <path d="M446 296v22" stroke="#6FC5A0" strokeOpacity=".25" strokeWidth="1" strokeDasharray="3 4" />
          </g>
        </g>

        {/* ============ LEDGER PLANES (top right) ============ */}
        <g>
          <g stroke="#6FC5A0" strokeWidth="1.2">
            <path d="M596 168 856 122l84 34-260 46-84-34Z" strokeOpacity=".55" fill={g("plane")} />
            <path d="M596 214 856 168l84 34-260 46-84-34Z" strokeOpacity=".42" fill={g("plane")} />
            <path d="M596 260 856 214l84 34-260 46-84-34Z" strokeOpacity=".3" fill={g("plane")} />
            <path d="M596 306 856 260l84 34-260 46-84-34Z" strokeOpacity=".18" fill={g("plane")} />
          </g>
          <g fontFamily="IBM Plex Mono, monospace" fontSize="9.5" letterSpacing="1.5" fill="#9BDCBF">
            <text x="700" y="152" fillOpacity=".78">ASSET</text>
            <text x="700" y="198" fillOpacity=".62">RECORD</text>
            <text x="700" y="244" fillOpacity=".5">CREDENTIAL</text>
            <text x="700" y="290" fillOpacity=".36">IDENTITY</text>
          </g>
          <path d="M948 160v146M942 160h12M942 306h12" stroke="#6FC5A0" strokeOpacity=".22" strokeWidth="1" />
        </g>

        {/* ============ GOVERNED SANDBOX ============ */}
        <g>
          <rect x="640" y="452" width="248" height="252" rx="4"
            stroke="#6FC5A0" strokeOpacity=".3" strokeWidth="1" strokeDasharray="4 5"
            fill="#6FC5A0" fillOpacity=".016" />
          <text x="640" y="440" fill="#9BDCBF" fillOpacity=".55" fontFamily="IBM Plex Mono, monospace" fontSize="9.5" letterSpacing="1.6">GOVERNED SANDBOX</text>

          <g stroke="#6FC5A0" strokeOpacity=".45" strokeWidth="1.2">
            <path d="M640 468v-16h16M872 452h16v16M888 688v16h-16M656 704h-16v-16" />
          </g>

          <g>
            <path d="m852 486 13 7.5v15l-13 7.5-13-7.5v-15l13-7.5Z" stroke="#6FC5A0" strokeOpacity=".6" strokeWidth="1.2" fill="#6FC5A0" fillOpacity=".07" />
            <path d="m862 592 13 7.5v15l-13 7.5-13-7.5v-15l13-7.5Z" stroke="#6FC5A0" strokeOpacity=".5" strokeWidth="1.2" fill="#6FC5A0" fillOpacity=".05" />
            <rect x="742" y="654" width="24" height="24" stroke="#6FC5A0" strokeOpacity=".5" strokeWidth="1.2" fill="#6FC5A0" fillOpacity=".05" />
          </g>
          <g fontFamily="IBM Plex Mono, monospace" fontSize="9" letterSpacing="1.4" fill="#6FC5A0" fillOpacity=".55">
            <text x="812" y="530">ID-014</text>
            <text x="822" y="640">CRD-009</text>
            <text x="722" y="696">AST-031</text>
          </g>
        </g>

        {/* ============ CONNECTIVE TISSUE ============ */}
        <g stroke="#6FC5A0" strokeWidth="1">
          <circle cx="596" cy="530" r="4.5" fill="#9BDCBF" stroke="none" filter={g("glow")} />
          <circle cx="596" cy="530" r="13" strokeOpacity=".3" />

          <path d="M548 560h30l18-18v-12" strokeOpacity=".42" className="flow" />
          <path d="M596 517V300l58-24" strokeOpacity=".42" className="flow" />
          <path d="M609 534l243-40" strokeOpacity=".3" className="flow" />
          <path d="M604 541l258 58" strokeOpacity=".26" className="flow" />
          <path d="M600 543l154 122" strokeOpacity=".24" className="flow" />
        </g>

        <circle cx="662" cy="404" r="10" stroke="#6FC5A0" strokeOpacity=".4" strokeWidth="1" />
        <text x="662" y="408" fill="#9BDCBF" fillOpacity=".72" fontFamily="IBM Plex Mono, monospace" fontSize="9.5" textAnchor="middle">C</text>

        <circle r="3" fill="#9BDCBF" filter={g("glow")}>
          <animateMotion dur="5.5s" repeatCount="indefinite" path="M596 517V300l58-24" />
          <animate attributeName="opacity" values="0;1;1;0" dur="5.5s" repeatCount="indefinite" />
        </circle>
        <circle r="2.6" fill="#9BDCBF" filter={g("glow")}>
          <animateMotion dur="6.5s" begin="1.2s" repeatCount="indefinite" path="M609 534l243-40" />
          <animate attributeName="opacity" values="0;1;1;0" dur="6.5s" begin="1.2s" repeatCount="indefinite" />
        </circle>
        <circle r="2.6" fill="#9BDCBF" filter={g("glow")}>
          <animateMotion dur="7s" begin="2.6s" repeatCount="indefinite" path="M600 543l154 122" />
          <animate attributeName="opacity" values="0;1;1;0" dur="7s" begin="2.6s" repeatCount="indefinite" />
        </circle>

        <g mask={g("m-left")}>
          <path d="M196 762h84M196 757v10M280 757v10M238 759v6" stroke="#6FC5A0" strokeOpacity=".28" strokeWidth="1" />
          <text x="196" y="784" fill="#6FC5A0" fillOpacity=".4" fontFamily="IBM Plex Mono, monospace" fontSize="9" letterSpacing="1.6">SCALE</text>
        </g>
      </svg>
    </div>
  );
}
