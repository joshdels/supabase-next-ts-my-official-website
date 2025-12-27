import Project from "@/src/features/projects/Project";
import About from "../home/About";
import Highlight from "../home/Highlight";
import Services from "../home/Services";
import CallToAction from "../home/CallToAction";

export default function Body() {
  return (
    <>
      <div className="px-5 sm:px-5 md:px-20 lg:px-20 2xl:px-40 bg-gray-50 py-20">
        <Highlight />
        <About />
        <Services />
        <CallToAction />
        <Project />
      </div>
    </>
  );
}
