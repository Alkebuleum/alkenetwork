import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import StubPage from "./components/StubPage";

const STUBS = [
  {
    path: "/network",
    title: "How the Network Works",
    description:
      "Technical detail on PORA, validators, the ALKE token and network architecture is being finalized as a dedicated inner page.",
  },
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
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          {STUBS.map(({ path, title, description }) => (
            <Route key={path} path={path} element={<StubPage title={title} description={description} />} />
          ))}
          <Route path="*" element={<StubPage title="Page not found" description="The page you're looking for doesn't exist." />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
