import Hero from "../components/Hero";
import Problem from "../components/Problem";
import Solution from "../components/Solution";
import Phases from "../components/Phases";
import Proof from "../components/Proof";
import FoundingCouncil from "../components/FoundingCouncil";
import Stewardship from "../components/Stewardship";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Landing() {
  useScrollReveal();

  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <Phases />
      <Proof />
      <FoundingCouncil />
      <Stewardship />
    </>
  );
}
