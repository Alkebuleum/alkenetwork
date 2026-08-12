import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function AppShell() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="app-shell">
      <Topbar onMenuClick={() => setMobileOpen((v) => !v)} />
      <div className="shell-body">
        <Sidebar open={mobileOpen} onNavigate={() => setMobileOpen(false)} />
        <div
          className={mobileOpen ? "scrim open" : "scrim"}
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
        <main className="main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
