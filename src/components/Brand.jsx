/* ALKÉ brand marks and small shared UI bits. */

const GOLD = "#F5B84D";
const CREAM = "#F7F2E8";

/* The ALKÉ mark: a gold hexagon around a spine flanked by chevrons. */
export function Mark({ width = 30, height = 34 }) {
  return (
    <svg width={width} height={height} viewBox="0 0 100 112" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M50 6 L93.3 31 L93.3 81 L50 106 L6.7 81 L6.7 31 Z" stroke={GOLD} strokeWidth="7.5" />
      <g stroke={CREAM} strokeWidth="6">
        <line x1="50" y1="27" x2="50" y2="85" />
        <path d="M29 44 L42 56 L29 68" />
        <path d="M19 44 L32 56 L19 68" />
        <path d="M71 44 L58 56 L71 68" />
        <path d="M81 44 L68 56 L81 68" />
      </g>
    </svg>
  );
}

/* The mark with its dashed outer ring (footer, Alkers band). */
export function RingMark({ className, width, height, ringWidth = 4, hexWidth = 7, inkWidth = 6, dash = "9 8" }) {
  return (
    <svg className={className} width={width} height={height} viewBox="-70 -76 140 152" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M0 -65 L56.3 -32.5 L56.3 32.5 L0 65 L-56.3 32.5 L-56.3 -32.5 Z" stroke={GOLD} strokeWidth={ringWidth} strokeDasharray={dash} opacity=".8" />
      <path d="M0 -50 L43.3 -25 L43.3 25 L0 50 L-43.3 25 L-43.3 -25 Z" stroke={GOLD} strokeWidth={hexWidth} />
      <g stroke={CREAM} strokeWidth={inkWidth}>
        <line x1="0" y1="-30" x2="0" y2="30" />
        <path d="M-21 -12 L-8 0 L-21 12" />
        <path d="M-31 -12 L-18 0 L-31 12" />
        <path d="M21 -12 L8 0 L21 12" />
        <path d="M31 -12 L18 0 L31 12" />
      </g>
    </svg>
  );
}

/* Token badge used in the JollofSwap pairs. */
export function TokenMark() {
  return (
    <svg width="20" height="22" viewBox="0 0 100 112" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M50 6 L93.3 31 L93.3 81 L50 106 L6.7 81 L6.7 31 Z" stroke={GOLD} strokeWidth="9" />
      <g stroke={CREAM} strokeWidth="8">
        <line x1="50" y1="30" x2="50" y2="82" />
        <path d="M27 46 L38 56 L27 66" />
        <path d="M73 46 L62 56 L73 66" />
      </g>
    </svg>
  );
}

/* Hexagon outline used as a bullet throughout. */
export function Hex({ size = 26, color = GOLD, stroke = 8 }) {
  return (
    <svg width={size} height={Math.round(size * 1.12)} viewBox="0 0 100 112" fill="none" aria-hidden="true">
      <path d="M50 8 L91 32 L91 80 L50 104 L9 80 L9 32 Z" stroke={color} strokeWidth={stroke} strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowDown() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 5v14M6 13l6 6 6-6" />
    </svg>
  );
}

/* External link that always opens in a new tab. */
export function Ext({ href, className, children, ...rest }) {
  return (
    <a className={className} href={href} target="_blank" rel="noopener" {...rest}>
      {children}
    </a>
  );
}

export function Chip({ gold, children }) {
  return (
    <span className={gold ? "chip goldchip" : "chip"}>
      <i />
      {children}
    </span>
  );
}
