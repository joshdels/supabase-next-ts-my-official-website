"use client";

import Image from "next/image";
import ContactModal from "./contact/modal/ContactModal";
import { useContactStore } from "@/src/store/useContactStore";

export default function CallToAction() {
  const { showContact, setShowContact } = useContactStore();

  return (
    <>
      <div className="relative -mx-5 sm:-mx-5 md:-mx-10 2xl:-mx-40 z-0 text-center text-gray-800 px-20 py-20">
        <Image
          src="/urban_trans.png"
          alt="Background Urban"
          fill
          className="absolute inset-0 object-cover z-0"
        />

        <h2 className="relative z-10 text-4xl font-bold text-gray-900">
          Turn Complex Geospatial Data into Actionable Solutions
        </h2>
        <p className="relative z-10 text-gray-600 mt-4 text-lg">
          I help organizations simplify spatial systems, automate workflows, and
          build scalable GIS solutions.
        </p>

        <div className="relative z-10 mt-8 flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => setShowContact(true)}
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 transition cursor-pointer"
          >
            Work with Me
          </button>
        </div>
      </div>

      {showContact && <ContactModal />}
    </>
  );
}
