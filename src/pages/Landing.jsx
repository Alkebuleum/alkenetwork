import Hero from "../components/Hero";
import FoundingPhase from "../components/FoundingPhase";
import WhyJoinNow from "../components/WhyJoinNow";
import ProofStrip from "../components/ProofStrip";
import FoundingCouncil from "../components/FoundingCouncil";
import Stewardship from "../components/Stewardship";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Landing() {
  useScrollReveal();

  return (
    <>
      <Hero />
      <FoundingPhase />
      <WhyJoinNow />
      <ProofStrip />
      <FoundingCouncil />
      <Stewardship />
    </>
  );
}
