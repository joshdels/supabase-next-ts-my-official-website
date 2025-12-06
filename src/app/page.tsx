import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/HeroSection";
import Projects from "../components/Project";
import Footer from "../components/layout/Footer";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <>
    <div className="">
      <Navbar />
      <div className="px-20 pt-15 pb-5 bg-gray-50">
        <Hero />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </div>
    </>
  );
}
