import Hero from "../home/HeroSection"
import Demo from "../home/Demo"
import Projects from "../home/Project"
import Results from "../home/Results"
import Testimonial from "../home/Testimonial"


export default function Body (){
  return (
    <>
    <div className="px-20 py-15 bg-gray-50">
      <Hero />
      <Results />
      <Demo />
      <Testimonial />
      <Projects />
    </div>
    </>
  )
}