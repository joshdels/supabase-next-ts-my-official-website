"use client";

import { useState } from "react";
import {
  Building2,
  Workflow,
  Layers3,
  Database,
  BarChart3,
  Gauge,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Services() {
  const cards = [
    {
      icon: <Building2 className="w-8 h-8 mb-4 text-gray-800" />,
      title: "City-Scale Mapping & Visualization",
      desc: "Delivering clear, interactive maps of buildings, land use, and infrastructure at city scale supporting planning, monitoring, and communication across teams.",
    },
    {
      icon: <Workflow className="w-8 h-8 mb-4 text-gray-800" />,
      title: "GIS Workflow Automation",
      desc: "Automating repetitive GIS processes such as data collection, updates, validation, and filtering reducing operational cost, manual errors, and turnaround time.",
    },
    {
      icon: <Layers3 className="w-8 h-8 mb-4 text-gray-800" />,
      title: "Paper & CAD Maps to Web GIS",
      desc: "Transforming paper maps and AutoCAD files into secure, database-driven Web GIS platforms enabling real-time access, collaboration, and public-facing transparency.",
    },
    {
      icon: <Database className="w-8 h-8 mb-4 text-gray-800" />,
      title: "Scalable Spatial Data Systems",
      desc: "Replacing scattered files with centralized spatial databases that support growth, analysis, and long-term data governance.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 mb-4 text-gray-800" />,
      title: "Spatial Analysis & Decision Support",
      desc: "Turning complex geospatial data into actionable insights, indicators, and visual tools that support executive and policy decisions.",
    },
    {
      icon: <Gauge className="w-8 h-8 mb-4 text-gray-800" />,
      title: "Cost-Efficient & Sustainable Solutions",
      desc: "Leveraging open-source technologies to reduce licensing costs, ensure long-term maintainability, and deliver fast, reliable, and future-proof GIS systems.",
    },
  ];

  const [index, setIndex] = useState(0);
  const total = cards.length;

  const prev = () => setIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  const next = () => setIndex((prev) => (prev === total - 1 ? 0 : prev + 1));

  return (
    <section className="pt-10 pb-20">
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-3xl font-semibold">
          Urban GIS & Automation Services
        </h2>
        <p className="mt-4 text-gray-600 sm:mx-0 text-justify">
          I help organizations increase revenue opportunities, reduce
          operational costs, and improve efficiency by modernizing mapping and
          spatial data workflows through scalable, database-driven Web GIS
          systems.
        </p>
      </div>

      {/* Mobile Carousel */}
      <div className="relative sm:hidden mx-6 overflow-visible">
        <div className="p-6 bg-white border border-gray-300 rounded-2xl shadow-md">
          {cards[index].icon}
          <h3 className="font-medium text-lg mb-2">{cards[index].title}</h3>
          <p className="text-sm text-gray-600">{cards[index].desc}</p>
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
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-gray-300 bg-white p-6 hover:shadow-lg transition"
          >
            {card.icon}
            <h3 className="font-medium text-lg mb-2">{card.title}</h3>
            <p className="text-sm text-gray-600">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
