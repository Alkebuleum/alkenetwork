import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function AppShell() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="app-shell">
      <Sidebar open={mobileOpen} onNavigate={() => setMobileOpen(false)} />
      <div
        className={mobileOpen ? "mobile-scrim open" : "mobile-scrim"}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />
      <div className="content">
        <Topbar onMenuClick={() => setMobileOpen((v) => !v)} />
        <Outlet />
      </div>
    </div>
  );
}
