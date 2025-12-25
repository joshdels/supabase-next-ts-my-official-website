import Hero from "../home/HeroSection"
import Project from "@/src/features/projects/Project"
import Testimonial from "../home/Testimonial"
import About from "../home/About"


export default function Body (){
  return (
    <>
    <div className="px-5 sm:px-5 md:px-20 lg:px-20 2xl:px-40 pt-40 bg-gray-50">
      <div><Hero /></div>
      <div><About /></div>
      <div><Testimonial /></div>
      <div><Project /></div>
    </div>
    </>
  )
}