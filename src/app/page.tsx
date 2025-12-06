import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/HeroSection";
import Projects from "../components/layout/Project";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
    <div className="">
      <Navbar />
      <div className="p-20 bg-gray-50">
        <Hero />
        <Projects />
        <Footer />
      </div>
    </div>
    </>
  );
}
