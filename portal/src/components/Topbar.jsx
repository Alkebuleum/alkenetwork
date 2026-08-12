import { MenuIcon, SearchIcon, BellIcon, ChevronDownIcon } from "./icons";
import { CURRENT_USER } from "../data/mock";

export default function Topbar({ onMenuClick }) {
  return (
    <header className="topbar">
      <button className="topbar-menu-btn icon-btn" aria-label="Open navigation" onClick={onMenuClick}>
        <MenuIcon />
      </button>

      <label className="topbar-search">
        <SearchIcon />
        <input type="search" placeholder="Search institutions, briefs, working groups…" />
        <kbd>/</kbd>
      </label>

      <div className="topbar-spacer" />

      <div className="topbar-actions">
        <button className="icon-btn" aria-label="Notifications">
          <BellIcon />
          <span className="dot" aria-hidden="true" />
        </button>
        <button className="topbar-profile">
          <div className="avatar avatar--sm">{CURRENT_USER.initials}</div>
          <span>
            <span className="topbar-profile-name">{CURRENT_USER.name}</span>
            <br />
            <span className="topbar-profile-org">{CURRENT_USER.institution}</span>
          </span>
          <ChevronDownIcon style={{ width: 14, height: 14, color: "var(--ink-3)" }} />
        </button>
      </div>
    </header>
  );
}
