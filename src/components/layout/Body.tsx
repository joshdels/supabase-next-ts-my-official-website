import Project from "@/src/features/projects/Project";
import About from "../home/About";
import Highlight from "../home/Highlight";
import Services from "../../features/services/Services";
import CallToAction from "../home/CallToAction";

interface BodyProps {
  highlightRef: React.RefObject<HTMLDivElement | null>;
}

export default function Body({ highlightRef }: BodyProps) {
  return (
    <>
      <div className="px-5 sm:px-5 md:px-20 lg:px-20 2xl:px-40 bg-gray-50 pt-20">
        <div ref={highlightRef}>
          <Highlight />
        </div>
        <About />
        <Services />
        <CallToAction />
        <Project />
      </div>
    </>
  );
}
