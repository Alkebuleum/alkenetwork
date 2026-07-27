// Shared <defs> for every technical-drawing illustration on the site.
// `uid` namespaces ids so multiple illustrations can coexist on one page.
export default function IllustrationDefs({ uid }) {
  return (
    <defs>
      <pattern id={`${uid}-g-fine`} width="36" height="36" patternUnits="userSpaceOnUse">
        <path d="M36 0H0V36" stroke="#6FC5A0" strokeOpacity=".13" strokeWidth="1" />
      </pattern>
      <pattern id={`${uid}-g-major`} width="180" height="180" patternUnits="userSpaceOnUse">
        <path d="M180 0H0V180" stroke="#6FC5A0" strokeOpacity=".2" strokeWidth="1" />
      </pattern>

      <radialGradient id={`${uid}-fade`} cx="46%" cy="48%" r="58%">
        <stop offset="0%" stopColor="#fff" stopOpacity="1" />
        <stop offset="55%" stopColor="#fff" stopOpacity=".72" />
        <stop offset="100%" stopColor="#fff" stopOpacity="0" />
      </radialGradient>
      <mask id={`${uid}-m-fade`}>
        <rect width="100%" height="100%" fill={`url(#${uid}-fade)`} />
      </mask>

      <linearGradient id={`${uid}-edge-l`} x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#fff" stopOpacity="0" />
        <stop offset="24%" stopColor="#fff" stopOpacity="1" />
        <stop offset="100%" stopColor="#fff" stopOpacity="1" />
      </linearGradient>
      <mask id={`${uid}-m-left`}>
        <rect width="100%" height="100%" fill={`url(#${uid}-edge-l)`} />
      </mask>

      <linearGradient id={`${uid}-stone`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#9BDCBF" stopOpacity=".95" />
        <stop offset="70%" stopColor="#6FC5A0" stopOpacity=".55" />
        <stop offset="100%" stopColor="#6FC5A0" stopOpacity=".18" />
      </linearGradient>
      <linearGradient id={`${uid}-plane`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#9BDCBF" stopOpacity=".22" />
        <stop offset="100%" stopColor="#6FC5A0" stopOpacity=".03" />
      </linearGradient>

      <filter id={`${uid}-glow`} x="-60%" y="-60%" width="220%" height="220%">
        <feGaussianBlur stdDeviation="5" result="b" />
        <feMerge>
          <feMergeNode in="b" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  );
}
