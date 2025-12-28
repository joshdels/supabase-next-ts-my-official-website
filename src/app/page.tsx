"use client";

import { useRef } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Body from "../components/layout/Body";
import Hero from "../components/home/HeroSection";

export default function Home() {
  const highlightRef = useRef<HTMLDivElement | null>(null);

  const scrollToHighlight = () => {
    if (highlightRef.current) {
      const navbarHeight = 180;
      const y =
        highlightRef.current.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="">
        <Navbar />
        <Hero scrollToHighlight={scrollToHighlight} />
        <Body highlightRef={highlightRef} />
        <Footer />
      </div>
    </>
  );
}
