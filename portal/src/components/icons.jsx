// 16x16 line-icon set, transcribed from the alke-portal-fluent.html reference
// so the built app matches it exactly rather than approximating it.
const base = { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", "aria-hidden": true };
const s = { stroke: "currentColor", strokeWidth: 1.3 };
const sr = { ...s, strokeLinecap: "round" };
const srj = { ...s, strokeLinecap: "round", strokeLinejoin: "round" };
const sj = { ...s, strokeLinejoin: "round" };

export const WaffleIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

export const SearchIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.4" />
    <path d="M10.5 10.5 14 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

export const HelpIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="8" cy="8" r="6.3" {...s} />
    <path d="M6.3 6.2c.2-1 1-1.6 1.9-1.5.9 0 1.7.7 1.7 1.6 0 1.2-1.7 1.4-1.7 2.6" {...sr} />
    <circle cx="8.1" cy="11.3" r=".8" fill="currentColor" />
  </svg>
);

export const BellIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M8 2a4 4 0 0 0-4 4v2.5L2.8 11h10.4L12 8.5V6a4 4 0 0 0-4-4Z" {...sj} />
    <path d="M6.5 13a1.6 1.6 0 0 0 3 0" {...sr} />
  </svg>
);

export const ArrowRightIcon = (p) => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" {...p}>
    <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const HomeIcon = (p) => (
  <svg {...base} {...p}>
    <path d="m2.5 7 5.5-4.5L13.5 7v6a1 1 0 0 1-1 1H10v-4H6v4H3.5a1 1 0 0 1-1-1V7Z" {...sj} />
  </svg>
);

export const IntelligenceIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M8 1.8v2.4M8 11.8v2.4M1.8 8h2.4M11.8 8h2.4M8 5.5A2.5 2.5 0 1 0 8 10.5 2.5 2.5 0 0 0 8 5.5Z" {...sr} />
  </svg>
);

export const NetworkIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="8" cy="3.2" r="1.7" {...s} />
    <circle cx="3.2" cy="12" r="1.7" {...s} />
    <circle cx="12.8" cy="12" r="1.7" {...s} />
    <path d="M7 4.6 4 10.4M9 4.6l3 5.8M4.9 12h6.2" {...s} />
  </svg>
);

export const GroupsIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="5.5" cy="5.5" r="2" {...s} />
    <circle cx="10.5" cy="5.5" r="2" {...s} />
    <path d="M2 13c.4-2 1.8-3.2 3.5-3.2S8.6 11 9 13M8.7 10.1c.55-.2 1.2-.3 1.8-.3 1.7 0 3.1 1.2 3.5 3.2" {...sr} />
  </svg>
);

export const SandboxIcon = (p) => (
  <svg {...base} {...p}>
    <rect x="2.5" y="2.5" width="11" height="11" rx="1.5" {...s} />
    <path d="M5.5 8.2 7.2 10l3.3-4" {...srj} />
  </svg>
);

export const StudioIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M6 12.5h4M6.8 14.2h2.4M8 1.8a4.2 4.2 0 0 0-2.4 7.6c.6.5.9 1 .9 1.6h3c0-.6.3-1.1.9-1.6A4.2 4.2 0 0 0 8 1.8Z" {...srj} />
  </svg>
);

export const LearningIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M8 3.5 1.8 6.2 8 8.9l6.2-2.7L8 3.5Z" {...sj} />
    <path d="M4 7.8v3.2c0 .9 1.8 1.8 4 1.8s4-.9 4-1.8V7.8M14.2 6.5v3.7" {...sr} />
  </svg>
);

export const LibraryIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M3.5 2.5h7l2 2v9h-9v-11Z" {...sj} />
    <path d="M5.5 6.5h5M5.5 9h5M5.5 11.5h3" {...sr} />
  </svg>
);

export const SovereigntyIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M8 1.8 13.5 4v4c0 3.2-2.3 5.5-5.5 6.5C4.8 13.5 2.5 11.2 2.5 8V4L8 1.8Z" {...sj} />
    <path d="m5.8 8 1.6 1.6 3-3.2" {...srj} />
  </svg>
);

export const EventsIcon = (p) => (
  <svg {...base} {...p}>
    <rect x="2.5" y="3.5" width="11" height="10" rx="1.5" {...s} />
    <path d="M2.5 6.8h11M5.5 2v2.6M10.5 2v2.6" {...sr} />
  </svg>
);

export const MessagesIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M2.5 4.5A1.5 1.5 0 0 1 4 3h8a1.5 1.5 0 0 1 1.5 1.5v5A1.5 1.5 0 0 1 12 11H7l-3 2.8V11H4a1.5 1.5 0 0 1-1.5-1.5v-5Z" {...sj} />
  </svg>
);

export const InstitutionIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M2 13.5h12M3.5 13.5V6h9v7.5M8 2 2.8 6h10.4L8 2Z" {...sj} />
    <path d="M6 13.5v-3h4v3" {...s} />
  </svg>
);

export const TeamIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="8" cy="5" r="2.2" {...s} />
    <path d="M3.5 13.5c.5-2.5 2.3-4 4.5-4s4 1.5 4.5 4" {...sr} />
  </svg>
);

export const MembershipIcon = (p) => (
  <svg {...base} {...p}>
    <rect x="2" y="4" width="12" height="8.5" rx="1.5" {...s} />
    <path d="M2 7h12" {...s} />
  </svg>
);

export const SettingsIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="8" cy="8" r="2" {...s} />
    <path d="M13 8a5 5 0 0 0-.1-1l1.4-1.1-1.3-2.2-1.7.6a5 5 0 0 0-1.6-.9L9.3 1.6H6.7l-.4 1.8a5 5 0 0 0-1.6.9L3 3.7 1.7 5.9 3.1 7a5 5 0 0 0 0 2l-1.4 1.1L3 12.3l1.7-.6c.5.4 1 .7 1.6.9l.4 1.8h2.6l.4-1.8c.6-.2 1.1-.5 1.6-.9l1.7.6 1.3-2.2L12.9 9c.07-.33.1-.66.1-1Z" {...sj} />
  </svg>
);

export const InboxIcon = (p) => (
  <svg width="34" height="34" viewBox="0 0 16 16" fill="none" aria-hidden="true" {...p}>
    <path d="M2 8h3l1.5 2.5h3L11 8h3" {...sj} />
    <path d="M2 8 3.5 3h9L14 8v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8Z" {...sj} />
  </svg>
);
