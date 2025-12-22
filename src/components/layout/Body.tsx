import Hero from "../home/HeroSection"
import Demo from "../home/Demo"
import Project from "@/src/features/projects/Project"
import Results from "../home/Results"
import Testimonial from "../home/Testimonial"


export default function Body (){
  return (
    <>
    <div className="px-5 sm:px-5 md:px-20 lg:px-20 2xl:px-40 pt-15 pb-25 mt-15 bg-gray-50">
      <Hero />
      <Results />
      <Demo />
      <Testimonial />
      <Project />
    </div>
    </>
  )
}