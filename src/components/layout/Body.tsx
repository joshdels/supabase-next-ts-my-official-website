import Project from "@/src/features/projects/Project";
import About from "../../features/home/About";
import Highlight from "../../features/home/Highlight";
import Services from "../../features/home/services/Services";
import CallToAction from "../../features/home/CallToAction";

export default function Body() {
  return (
    <>
      <div className="px-5 sm:px-5 md:px-20 lg:px-20 2xl:px-40 bg-gray-50 pt-20">
        <Highlight />
        <About />
        <Services />
        <CallToAction />
        <Project />
      </div>
    </>
  );
}
