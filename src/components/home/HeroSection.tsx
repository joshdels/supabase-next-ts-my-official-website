"use client";

import ContactModal from "../ui/modals/Contact";
import { useContactStore } from "@/src/store/useContactStore";
import Image from "next/image";

export default function Hero() {
  const { showContact, setShowContact } = useContactStore();

  return (
    <>
      <div className="relative flex flex-col items-center text-center gap-8 py-50 lg:py-80 px-6 overflow-hidden">
        <Image
          src="/urban_trans.png"
          alt="Background Urban"
          fill
          className="absolute inset-0 object-cover -z-10"
        />

        <div className="max-w-6xl">
          <p className="text-lg font-medium text-blue-600">
            Urban GIS & Location Intelligence
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-3 leading-tight">
            Turning Urban Data into Clear, Scalable Insights
          </h1>

          <p className="mt-3 text-gray-600 italic text-base md:text-lg">
            GIS-powered urban dashboards • Big data & scalable systems •
            Cost-efficient, high-performance mapping
          </p>

          <p className="mt-5 text-gray-700 leading-relaxed text-lg md:text-xl">
            I design geospatial systems that help organizations understand
            cities from land and housing to infrastructure and accessibility. My
            work turns complex urban data into practical insights for planning,
            investment, and operations.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setShowContact(true)}
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 transition"
            >
              Discuss a Location
            </button>

            <button className="px-6 py-3 rounded-lg bg-gray-600 text-white hover:bg-gray-700 transition">
              View Case Studies
            </button>
          </div>
        </div>
      </div>

      {showContact && <ContactModal />}
    </>
  );
}
