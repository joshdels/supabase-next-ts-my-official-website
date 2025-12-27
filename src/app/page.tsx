import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Body from "../components/layout/Body";
import Hero from "../components/home/HeroSection";

export default function Home() {
  return (
    <>
    <div className="">
      <Navbar />
      <Hero/>
      <Body />
      <Footer />
    </div>
    </>
  );
}
