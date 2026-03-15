"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { services } from "@/src/data/services";

export default function Services() {
  const [index, setIndex] = useState(0);
  const total = services.length;

  const prev = () => setIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  const next = () => setIndex((prev) => (prev === total - 1 ? 0 : prev + 1));

  return (
    <section id="services-section" className="flex flex-col pt-10 pb-20 min-h-screen justify-center">
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-3xl font-semibold">
          Geospatial Systems & Automation Services
        </h2>
        <p className="mt-4 text-gray-600 sm:mx-0 text-justify">
          I help organizations modernize spatial workflows, reduce operational
          costs, and improve decision-making by implementing scalable,
          automated, and database-driven GIS platforms.
        </p>
      </div>

      {/* Mobile Carousel */}
      <div className="relative sm:hidden mx-6 overflow-visible">
        <div className="p-6 bg-white rounded-2xl shadow-sm hower:shadow-lg transition">
          {services[index].icon}
          <h3 className="font-medium text-lg mb-2">{services[index].title}</h3>
          <p className="text-sm text-gray-600">{services[index].desc}</p>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prev}
          className="absolute top-1/2 -left-10 -translate-y-1/2 p-2 z-10 text-gray-400 hover:text-gray-500"
        >
          <ChevronLeft size={30} />
        </button>
        <button
          onClick={next}
          className="absolute top-1/2 -right-10 -translate-y-1/2 p-2 z-10 text-gray-400 hover:text-gray-500"
        >
          <ChevronRight size={30} />
        </button>
      </div>

      {/* Desktop / Tablet Grid */}
      <div className="hidden sm:grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-10">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-lg transition"
          >
            {service.icon}
            <h3 className="font-medium text-lg mb-2">{service.title}</h3>
            <p className="text-sm text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
