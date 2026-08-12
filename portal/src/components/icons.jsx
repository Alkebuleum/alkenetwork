// Minimal line-icon set — 24x24, single stroke weight, no fills. Keeps the
// same restrained "technical drawing" language as the marketing site, scaled
// down for dense app chrome instead of illustration.
const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export const HomeIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M4 11.5 12 4l8 7.5" />
    <path d="M6 10v9h12v-9" />
    <path d="M10 19v-5h4v5" />
  </svg>
);

export const IntelligenceIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
    <circle cx="12" cy="12" r="5.5" />
    <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
  </svg>
);

export const NetworkIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="6" r="2.4" />
    <circle cx="5.5" cy="18" r="2.4" />
    <circle cx="18.5" cy="18" r="2.4" />
    <path d="M12 8.4v4M10 14 7 16M14 14l3 2" />
  </svg>
);

export const GroupsIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="9" cy="8" r="3" />
    <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
    <circle cx="17" cy="8.5" r="2.2" />
    <path d="M15.5 5.2c1-.6 2.4-.4 3.2.5" />
    <path d="M15.5 14.5c2.4.3 4.2 2 4.5 4.5" />
  </svg>
);

export const SandboxIcon = (p) => (
  <svg {...base} {...p}>
    <rect x="4" y="4" width="16" height="16" rx="2" strokeDasharray="3 3" />
    <path d="M9 15l3-6 3 6" />
    <path d="M10.4 12.2h3.2" />
  </svg>
);

export const StudioIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3a5 5 0 0 1 5 5c0 2.4-1.4 3.6-2.2 4.6-.6.7-.8 1.2-.8 2.4H10c0-1.2-.2-1.7-.8-2.4C8.4 11.6 7 10.4 7 8a5 5 0 0 1 5-5Z" />
    <path d="M9.8 18h4.4M10.5 20.5h3" />
  </svg>
);

export const LearningIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M3 6.5 12 3l9 3.5-9 3.5-9-3.5Z" />
    <path d="M7 9.2V15c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5V9.2" />
    <path d="M20 7.5V14" />
  </svg>
);

export const LibraryIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M5 4h9a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2V4Z" />
    <path d="M16 8h3v12h-1.5" />
    <path d="M8 8h5M8 11h5M8 14h3" />
  </svg>
);

export const SovereigntyIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3 5 6v5c0 4.2 2.8 7.5 7 9 4.2-1.5 7-4.8 7-9V6l-7-3Z" />
    <path d="M9 12l2 2 4-4.2" />
  </svg>
);

export const EventsIcon = (p) => (
  <svg {...base} {...p}>
    <rect x="4" y="5.5" width="16" height="14.5" rx="2" />
    <path d="M4 9.5h16M8 3.5v3.5M16 3.5v3.5" />
    <circle cx="9" cy="13.5" r="1" fill="currentColor" stroke="none" />
    <circle cx="13" cy="13.5" r="1" fill="currentColor" stroke="none" />
    <circle cx="9" cy="17" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const MessagesIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M4 5.5h16v10H9l-4 3.5v-3.5H4z" />
    <path d="M8 9.5h8M8 12.5h5" />
  </svg>
);

export const InstitutionIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M4 10 12 4l8 6" />
    <path d="M5.5 10v9M9.2 10v9M14.8 10v9M18.5 10v9" />
    <path d="M4 19h16" />
  </svg>
);

export const TeamIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="8.5" cy="8" r="2.6" />
    <circle cx="16" cy="9" r="2.1" />
    <path d="M3.5 19c0-2.9 2.2-5 5-5s5 2.1 5 5" />
    <path d="M14.3 14.3c2.2.2 3.9 1.9 4.2 4.7" />
  </svg>
);

export const MembershipIcon = (p) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="6" width="17" height="12" rx="2" />
    <circle cx="8.5" cy="12" r="2" />
    <path d="M13.5 10.5h4M13.5 13.5h4" />
  </svg>
);

export const SettingsIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="2.8" />
    <path d="M12 4v2.2M12 17.8V20M4 12h2.2M17.8 12H20M6.3 6.3l1.6 1.6M16.1 16.1l1.6 1.6M17.7 6.3l-1.6 1.6M7.9 16.1l-1.6 1.6" />
  </svg>
);

export const SearchIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="M19 19l-4.3-4.3" />
  </svg>
);

export const BellIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M6 10a6 6 0 0 1 12 0c0 4 1.5 5.5 1.5 5.5H4.5S6 14 6 10Z" />
    <path d="M10 18.5a2 2 0 0 0 4 0" />
  </svg>
);

export const MenuIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M4 6.5h16M4 12h16M4 17.5h16" />
  </svg>
);

export const ChevronDownIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export const ArrowRightIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M4 12h16M14 6l6 6-6 6" />
  </svg>
);

export const PlusIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const InboxIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M4 12h4.5l1.5 3h4l1.5-3H20" />
    <path d="M4 12 6 5h12l2 7v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6Z" />
  </svg>
);
