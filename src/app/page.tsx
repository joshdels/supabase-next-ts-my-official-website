import Navbar from "../components/Navbar";
import Hero from "../components/HeroSection";

export default function Home() {
  return (
    <>
    <div className="">
      <Navbar />
      <div className="p-5 bg-gray-50">
        <Hero />
      </div>
      <h1>Projecst</h1>
      <h1>About</h1>
      <h1>Contact</h1>
    </div>
    </>
  );
}
