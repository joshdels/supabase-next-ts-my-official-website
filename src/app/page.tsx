"use client";

import { useRef } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Body from "../components/layout/Body";
import Hero from "../features/home/HeroSection";

export default function Home() {
  const highlightRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <div className="">
        <Navbar />
        <Hero />
        <Body/>
        <Footer />
      </div>
    </>
  );
}
