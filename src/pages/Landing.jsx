import Hero from "../components/Hero";
import Explainer from "../components/Explainer";
import WhyJoin from "../components/WhyJoin";
import InstitutionalSignal from "../components/InstitutionalSignal";
import FoundingCouncil from "../components/FoundingCouncil";
import Stewardship from "../components/Stewardship";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Landing() {
  useScrollReveal();

  return (
    <>
      <Hero />
      <Explainer />
      <WhyJoin />
      <InstitutionalSignal />
      <FoundingCouncil />
      <Stewardship />
    </>
  );
}
