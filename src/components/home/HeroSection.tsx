"use client";

import Map from "@/src/features/map/Map";
import { useState } from "react";
import { usePathname } from "next/navigation";
import ContactModal from "../ui/modals/Contact";

export default function Hero() {
  const pathname = usePathname();
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-20 xl:gap-20 pb-20 xl:pb-50">
        <div className="lg:flex-1">
          <p className="text-lg font-medium">Geospatial Web Developer</p>

          <h1 className="text-3xl font-bold mt-2">
            Helping organizations grow through powerful geospatial technology
          </h1>

          <p className="mt-4 text-gray-700 leading-relaxed">
            Hi! I'm a developer specializing in modern geospatial solutions that
            turn your data into real operational advantages. I help businesses
            and organizations improve planning, decision-making, and day-to-day
            operations through mapping, analytics, and location-driven insights.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => setShowContact(true)}
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium shadow-md
                       hover:bg-blue-700 transition duration-200 ease-in-out
                       cursor-pointer
                       "
            >
              Let's Talk
            </button>

            <button
              className="px-6 py-3 rounded-lg bg-gray-600 border-gray-300 dark:border-gray-600
                       font-medium text-white
                       hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-200 ease-in-out
                       cursor-pointer
                       "
            >
              View My Work
            </button>
          </div>
        </div>

        <div className="lg:flex-1">
          <Map key={pathname} />
        </div>
      </div>

      {showContact && <ContactModal />}
    </>
  );
}
