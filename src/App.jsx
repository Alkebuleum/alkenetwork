import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import StubPage from "./components/StubPage";
import InstitutionalBrief from "./pages/InstitutionalBrief";
import Apply from "./pages/Apply";
import FoundingCouncilPage from "./pages/FoundingCouncilPage";
import GlobalInfrastructure from "./pages/GlobalInfrastructure";
import Technology from "./pages/Technology";
import Foundation from "./pages/Foundation";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const id = hash.slice(1);
    const scrollToHash = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    // Wait a tick so the target route/section has mounted before measuring it.
    const raf = requestAnimationFrame(scrollToHash);
    return () => cancelAnimationFrame(raf);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/institutional-brief" element={<InstitutionalBrief />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/founding-council" element={<FoundingCouncilPage />} />
        <Route path="/global-infrastructure" element={<GlobalInfrastructure />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/foundation" element={<Foundation />} />
        <Route
          path="*"
          element={<StubPage title="Page not found" description="The page you're looking for doesn't exist." />}
        />
      </Routes>
      <Footer />
    </>
  );
}
