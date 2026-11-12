import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Mining from "./sections/Mining";
import HowItWorks from "./sections/HowItWorks";
import Roadmap from "./sections/Roadmap";
import GetAlke from "./sections/GetAlke";
import Builders from "./sections/Builders";
import Alkers from "./sections/Alkers";
import Community from "./sections/Community";
import Faq from "./sections/Faq";

/* Honour #section links on first load (the sections mount after the browser tries). */
function ScrollToHash() {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const raf = requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView({ block: "start" }));
    return () => cancelAnimationFrame(raf);
  }, [hash]);
  return null;
}

function Home() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Mining />
        <HowItWorks />
        <Roadmap />
        <GetAlke />
        <Builders />
        <Alkers />
        <Community />
        <Faq />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* The site is a single page now; old inner-page URLs land on the home page. */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
