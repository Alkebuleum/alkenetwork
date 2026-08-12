import { Routes, Route } from "react-router-dom";
import AppShell from "./components/AppShell";
import StubPage from "./components/StubPage";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AuthStub from "./pages/AuthStub";

const MODULES = [
  {
    path: "/intelligence",
    eyebrow: "Intelligence",
    title: "Intelligence",
    description: "Curated, sector-specific briefings on AI, DLT, policy, and sovereignty will appear here.",
  },
  {
    path: "/network",
    eyebrow: "Network",
    title: "Peer network",
    description: "A vetted directory of member institutions, filterable by sector, region, and interest.",
  },
  {
    path: "/groups",
    eyebrow: "Working Groups",
    title: "Working groups",
    description: "Institutional AI Governance, Higher Education & Credentials, and more — discussion, meetings, and documents live here.",
  },
  {
    path: "/sandbox",
    eyebrow: "The Sandbox",
    title: "Sandbox",
    description: "Every institutional sandbox project, its phase, team, and findings.",
  },
  {
    path: "/studio",
    eyebrow: "Innovation Studio",
    title: "Innovation Studio",
    description: "Turn an institutional problem into an idea, then a sandbox candidate.",
  },
  {
    path: "/learn",
    eyebrow: "Learning",
    title: "Learning Academy",
    description: "Role-specific tracks for executives, technical teams, legal, compliance, and operations.",
  },
  {
    path: "/library",
    eyebrow: "Policy Library",
    title: "Policy & Governance Library",
    description: "Institution-ready frameworks, templates, and checklists across AI and DLT readiness.",
  },
  {
    path: "/sovereignty",
    eyebrow: "Sovereignty",
    title: "Sovereignty Center",
    description: "Assess your institution's technology dependency and get a recommended roadmap.",
  },
  {
    path: "/events",
    eyebrow: "Events",
    title: "Events",
    description: "Executive roundtables, technical workshops, and member demonstrations.",
  },
  {
    path: "/messages",
    eyebrow: "Messages",
    title: "Messages",
    description: "Direct messages, working-group threads, and introduction requests.",
  },
  {
    path: "/notifications",
    eyebrow: "Notifications",
    title: "Notifications",
    description: "Working-group updates, new briefs, sandbox milestones, and invitations.",
  },
  {
    path: "/organization",
    eyebrow: "Our Institution",
    title: "Our institution",
    description: "Membership status, sectors, interests, teams, and sandboxes for your institution.",
  },
  {
    path: "/organization/team",
    eyebrow: "Our Institution",
    title: "Team",
    description: "Manage who from your institution has access, and their role.",
  },
  {
    path: "/membership",
    eyebrow: "Membership",
    title: "Membership",
    description: "Founding Participant status — no annual fee during the Founding Phase.",
  },
  {
    path: "/profile",
    eyebrow: "Profile",
    title: "Your profile",
    description: "Name, title, department, areas of expertise, and interests.",
  },
  {
    path: "/settings",
    eyebrow: "Settings",
    title: "Settings",
    description: "Notifications, privacy, security, and appearance preferences.",
  },
];

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<AuthStub title="Reset your password" description="Enter your work email and we'll send a reset link." />} />
      <Route path="/verify" element={<AuthStub title="Verify your account" description="Check your inbox for a verification link." />} />
      <Route path="/invite" element={<AuthStub title="Request an invite" description="Tell us about your institution and we'll follow up to get you set up." />} />
      <Route path="/onboarding" element={<AuthStub title="Set up your institution" description="Institution details, your profile, and areas of interest — a few short steps." />} />

      <Route element={<AppShell />}>
        <Route path="/" element={<Dashboard />} />
        {MODULES.map((m) => (
          <Route
            key={m.path}
            path={m.path}
            element={<StubPage eyebrow={m.eyebrow} title={m.title} description={m.description} />}
          />
        ))}
        <Route
          path="*"
          element={<StubPage eyebrow="Not found" title="Page not found" description="That page doesn't exist in the portal yet." />}
        />
      </Route>
    </Routes>
  );
}
