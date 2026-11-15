/* ALKÉ brand marks and small shared UI bits. The mascot, Puvv, is in Puvv.jsx. */

const GOLD = "#FFC94A";

/* The ALKE mark (app icon): solid white hexagon with the spine and chevrons cut in violet. */
export function Mark({ size = 24, hex = "#fff", cut = "#4A27D6" }) {
  return (
    <svg width={size} height={Math.round(size * 1.12)} viewBox="0 0 100 112" aria-hidden="true">
      <path d="M50 4 L94 29 L94 83 L50 108 L6 83 L6 29 Z" fill={hex} stroke={hex} strokeWidth="6" strokeLinejoin="round" />
      <path d="M50 27 L50 85 M24 44 L38 56 L24 68 M76 44 L62 56 L76 68" fill="none" stroke={cut} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* The app icon tile: violet square with the mark. */
export function AppTile({ size = 38 }) {
  return (
    <span className="tile" style={{ width: size, height: size }}>
      <Mark size={Math.round(size * 0.62)} />
    </span>
  );
}

/* The mark as an outline, struck on a gold coin. */
export function CoinMark({ size = 110, color = "#3A1DB8" }) {
  return (
    <svg width={size} height={Math.round(size * 1.12)} viewBox="0 0 100 112" aria-hidden="true">
      <path d="M50 4 L94 29 L94 83 L50 108 L6 83 L6 29 Z" fill="none" stroke={color} strokeWidth="6" strokeLinejoin="round" />
      <path d="M50 27 L50 85 M24 44 L38 56 L24 68 M76 44 L62 56 L76 68" fill="none" stroke={color} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
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
