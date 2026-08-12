import Hero from "../components/Hero";
import WhyNow from "../components/WhyNow";
import Explainer from "../components/Explainer";
import WhyJoin from "../components/WhyJoin";
import PracticeAreas from "../components/PracticeAreas";
import SectorCircles from "../components/SectorCircles";
import Sandbox from "../components/Sandbox";
import MemberBenefits from "../components/MemberBenefits";
import InstitutionalSignal from "../components/InstitutionalSignal";
import Sovereignty from "../components/Sovereignty";
import FoundingCouncil from "../components/FoundingCouncil";
import Stewardship from "../components/Stewardship";
import FinalCta from "../components/FinalCta";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Landing() {
  useScrollReveal();

  return (
    <>
      <Hero />
      <WhyNow />
      <Explainer />
      <WhyJoin />
      <PracticeAreas />
      <SectorCircles />
      <Sandbox />
      <MemberBenefits />
      <InstitutionalSignal />
      <Sovereignty />
      <FoundingCouncil />
      <Stewardship />
      <FinalCta />
    </>
  );
}
