import { WaffleIcon, SearchIcon, HelpIcon, BellIcon } from "./icons";
import { CURRENT_USER } from "../data/mock";

export default function Topbar({ onMenuClick }) {
  return (
    <header className="appbar">
      <button className="waffle" title="Menu" aria-label="Open navigation" onClick={onMenuClick}>
        <WaffleIcon />
      </button>
      <div className="brand">
        <span className="mark">A</span>alké <span className="sub">Network</span>
      </div>
      <label className="search">
        <SearchIcon />
        <input type="search" placeholder="Search institutions, briefs, working groups" />
      </label>
      <div className="right">
        <button className="iconbtn" title="Help" aria-label="Help">
          <HelpIcon />
        </button>
        <button className="iconbtn" title="Notifications" aria-label="Notifications">
          <BellIcon />
          <span className="dot" aria-hidden="true" />
        </button>
        <div className="me">
          <div className="who">
            <div className="n">{CURRENT_USER.name}</div>
            <div className="o">{CURRENT_USER.institution}</div>
          </div>
          <div className="avatar">{CURRENT_USER.initials}</div>
        </div>
      </div>
    </header>
  );
}
