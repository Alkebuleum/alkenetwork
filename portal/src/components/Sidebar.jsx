import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  IntelligenceIcon,
  NetworkIcon,
  GroupsIcon,
  SandboxIcon,
  StudioIcon,
  LearningIcon,
  LibraryIcon,
  SovereigntyIcon,
  EventsIcon,
  MessagesIcon,
  InstitutionIcon,
  TeamIcon,
  MembershipIcon,
  SettingsIcon,
} from "./icons";

const NETWORK_LINKS = [
  { to: "/", label: "Home", icon: HomeIcon, end: true },
  { to: "/intelligence", label: "Intelligence", icon: IntelligenceIcon },
  { to: "/network", label: "Network", icon: NetworkIcon },
  { to: "/groups", label: "Working Groups", icon: GroupsIcon },
  { to: "/sandbox", label: "Sandbox", icon: SandboxIcon },
  { to: "/studio", label: "Innovation Studio", icon: StudioIcon },
  { to: "/learn", label: "Learning", icon: LearningIcon },
  { to: "/library", label: "Policy Library", icon: LibraryIcon },
  { to: "/sovereignty", label: "Sovereignty", icon: SovereigntyIcon },
  { to: "/events", label: "Events", icon: EventsIcon },
  { to: "/messages", label: "Messages", icon: MessagesIcon, badge: 3 },
];

const INSTITUTION_LINKS = [
  { to: "/organization", label: "Our Institution", icon: InstitutionIcon, end: true },
  { to: "/organization/team", label: "Team", icon: TeamIcon },
  { to: "/membership", label: "Membership", icon: MembershipIcon },
  { to: "/settings", label: "Settings", icon: SettingsIcon },
];

function NavGroup({ title, links, onNavigate }) {
  return (
    <>
      <div className="group">{title}</div>
      {links.map((l) => (
        <NavLink
          key={l.to}
          to={l.to}
          end={l.end}
          onClick={onNavigate}
          className={({ isActive }) => "item" + (isActive ? " active" : "")}
        >
          <l.icon />
          {l.label}
          {l.badge ? <span className="badge">{l.badge}</span> : null}
        </NavLink>
      ))}
    </>
  );
}

export default function Sidebar({ open, onNavigate }) {
  return (
    <nav className={open ? "nav open" : "nav"} aria-label="Portal navigation">
      <NavGroup title="Network" links={NETWORK_LINKS} onNavigate={onNavigate} />
      <NavGroup title="Institution" links={INSTITUTION_LINKS} onNavigate={onNavigate} />
      <div className="foot">
        <span className="pip" />
        Founding phase · Member since 2026
      </div>
    </nav>
  );
}
