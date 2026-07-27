import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import StubPage from "./components/StubPage";

const STUBS = [
  { path: "/institutional-brief", title: "Institutional Brief", description: "A detailed brief on Alké Network's governance model, technical architecture and participation pathway for institutions is being finalized." },
  { path: "/apply", title: "Apply as a Founding Member", description: "The Founding Council application is being prepared. Reach out to the Alkebuleum Foundation in the meantime to start an introductory conversation." },
  { path: "/founding-council", title: "Founding Council", description: "Full details on Founding Council structure, responsibilities and selection criteria are coming soon." },
  { path: "/global-infrastructure", title: "The Global Infrastructure Shift", description: "An overview of how institutions worldwide — via Project Agorá, Swift, Partior and Canton Network — are building shared digital rails is coming soon." },
  { path: "/technology", title: "Technology", description: "Technical documentation on the Alké Network ledger, identity and settlement layers is coming soon." },
  { path: "/foundation", title: "The Alkebuleum Foundation", description: "More on the Alkebuleum Foundation's mission and stewardship of Alké Network is coming soon." },
];

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <div className="atmos" aria-hidden="true"></div>
      <div className="grain" aria-hidden="true"></div>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        {STUBS.map(({ path, title, description }) => (
          <Route key={path} path={path} element={<StubPage title={title} description={description} />} />
        ))}
        <Route path="*" element={<StubPage title="Page not found" description="The page you're looking for doesn't exist." />} />
      </Routes>
      <Footer />
    </>
  );
}
