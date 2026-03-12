"use client";

import ContactModal from "../ui/modals/Contact";
import { useContactStore } from "@/src/store/useContactStore";
import Image from "next/image";

interface HeroProps {
  scrollToHighlight: () => void;
}

export default function Hero({ scrollToHighlight }: HeroProps) {
  const { showContact, setShowContact } = useContactStore();

  return (
    <>
      <div className="relative flex flex-col items-center text-center gap-8 py-30 lg:py-80 px-6 overflow-hidden">
        <Image
          src="/urban_trans.png"
          alt="Background Urban"
          fill
          className="absolute inset-0 object-cover -z-10"
        />

        <div className="max-w-7xl">
          <p className="text-xl font-medium text-blue-600">
            Geospatial Systems Engineer & Data Automation Specialist
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-3 leading-tight">
            Building Smart Geospatial Systems for Real-World Impact
          </h1>

          <p className="max-w-6xl mt-3 text-gray-600 italic text-base md:text-lg">
            GIS-powered dashboards • Big data & scalable systems •
            Cost-efficient, high-performance mapping
          </p>

          <p className="mt-5 text-gray-700 leading-relaxed text-lg md:text-xl">
            I build geospatial systems, dashboards, and automation pipelines
            that help organizations turn complex location and spatial data into
            actionable insights. My work spans spatial and web analytics, mobile GIS,
            scalable mapping platforms, and cost-efficient automation solutions.
          </p>

          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setShowContact(true)}
              className="text-lg px-6 py-3 rounded-lg bg-blue-600 text-white font-black tracking-widest shadow-md hover:bg-blue-700 transition cursor-pointer"
            >
              Work with Me
            </button>
          </div>
        </div>
      </div>

      {showContact && <ContactModal />}
    </>
  );
}
