/* ALKÉ brand marks, the mascot and small shared UI bits. */

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

/* The pack leader: an African wild dog. */
export function Mascot({ className, eyes = "#3DF5FF", innerEar = "#8A6CFF", label }) {
  return (
    <svg className={className} viewBox="0 0 200 200" role={label ? "img" : undefined} aria-label={label} aria-hidden={label ? undefined : "true"}>
      <path d="M70 70 C50 60 30 40 34 18 C36 8 50 6 60 14 C76 28 84 50 84 66 Z" fill="#24160E" />
      <path d="M130 70 C150 60 170 40 166 18 C164 8 150 6 140 14 C124 28 116 50 116 66 Z" fill="#24160E" />
      <path d="M70 62 C56 54 44 38 46 24 C48 18 56 18 62 24 C72 34 78 48 78 60 Z" fill={innerEar} />
      <path d="M130 62 C144 54 156 38 154 24 C152 18 144 18 138 24 C128 34 122 48 122 60 Z" fill={innerEar} />
      <path d="M100 52 C130 52 152 68 156 96 C160 122 146 140 132 154 C122 166 112 178 100 182 C88 178 78 166 68 154 C54 140 40 122 44 96 C48 68 70 52 100 52 Z" fill="#C98A3D" />
      <path d="M60 72 C70 70 78 78 74 88 C68 92 58 86 60 72Z" fill="#3A2516" />
      <path d="M136 76 C146 78 148 90 140 94 C132 92 130 82 136 76Z" fill="#3A2516" />
      <path d="M48 104 C56 118 70 128 78 146 C68 150 56 140 50 128 C46 120 45 110 48 104Z" fill="#F2E2C4" />
      <path d="M152 104 C144 118 130 128 122 146 C132 150 144 140 150 128 C154 120 155 110 152 104Z" fill="#F2E2C4" />
      <path d="M100 54 C106 54 108 70 107 96 L104 140 L96 140 L93 96 C92 70 94 54 100 54Z" fill="#24160E" />
      <path d="M84 134 C90 128 110 128 116 134 C122 148 116 172 100 180 C84 172 78 148 84 134Z" fill="#24160E" />
      <path d="M92 150 C96 146 104 146 108 150 C108 156 104 159 100 159 C96 159 92 156 92 150Z" fill="#000" />
      <path d="M68 108 C74 102 84 102 88 110 C82 114 72 114 68 108Z" fill={eyes} />
      <path d="M132 108 C126 102 116 102 112 110 C118 114 128 114 132 108Z" fill={eyes} />
      <path d="M100 159 L100 166 M92 170 C96 172 104 172 108 170" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" />
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
