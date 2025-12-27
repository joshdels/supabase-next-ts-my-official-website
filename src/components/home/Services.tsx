"use client";

import {
  Building2,
  Workflow,
  Layers3,
  Database,
  BarChart3,
  Gauge,
} from "lucide-react";

export default function Services() {
  return (
    <section className="py-24">
      <div className="">
        <div className="mb-16">
          <h2 className="text-3xl font-semibold">
            Urban GIS & Automation Services
          </h2>
          <p className="mt-4 text-gray-600 mx-auto">
            I help organizations increase revenue opportunities, reduce
            operational costs, and improve efficiency by modernizing mapping and
            spatial data workflows through scalable, database-driven Web GIS
            systems.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-gray-400 shadow-sm bg-white p-6 hover:shadow-lg transition">
            <Building2 className="w-8 h-8 mb-4 text-gray-800" />
            <h3 className="font-medium text-lg mb-2">
              City-Scale Mapping & Visualization
            </h3>
            <p className="text-sm text-gray-600">
              Delivering clear, interactive maps of buildings, land use, and
              infrastructure at city scale supporting planning, monitoring, and
              communication across teams.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-400 shadow-sm bg-white p-6 hover:shadow-lg transition">
            <Workflow className="w-8 h-8 mb-4 text-gray-800" />
            <h3 className="font-medium text-lg mb-2">
              GIS Workflow Automation
            </h3>
            <p className="text-sm text-gray-600">
              Automating repetitive GIS processes such as data collection,
              updates, validation, and filtering reducing operational cost,
              manual errors, and turnaround time.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-400 shadow-sm bg-white p-6 hover:shadow-lg transition">
            <Layers3 className="w-8 h-8 mb-4 text-gray-800" />
            <h3 className="font-medium text-lg mb-2">
              Paper & CAD Maps to Web GIS
            </h3>
            <p className="text-sm text-gray-600">
              Transforming paper maps and AutoCAD files into secure,
              database-driven Web GIS platforms enabling real-time access,
              collaboration, and public-facing transparency.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-400 shadow-sm bg-white p-6 hover:shadow-lg transition">
            <Database className="w-8 h-8 mb-4 text-gray-800" />
            <h3 className="font-medium text-lg mb-2">
              Scalable Spatial Data Systems
            </h3>
            <p className="text-sm text-gray-600">
              Replacing scattered files with centralized spatial databases that
              support growth, analysis, and long-term data governance.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-400 shadow-sm bg-white p-6 hover:shadow-lg transition">
            <BarChart3 className="w-8 h-8 mb-4 text-gray-800" />
            <h3 className="font-medium text-lg mb-2">
              Spatial Analysis & Decision Support
            </h3>
            <p className="text-sm text-gray-600">
              Turning complex geospatial data into actionable insights,
              indicators, and visual tools that support executive and policy
              decisions.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-400 shadow-sm bg-white p-6 hover:shadow-lg transition">
            <Gauge className="w-8 h-8 mb-4 text-gray-800" />
            <h3 className="font-medium text-lg mb-2">
              Cost-Efficient & Sustainable Solutions
            </h3>
            <p className="text-sm text-gray-600">
              Leveraging open-source technologies to reduce licensing costs,
              ensure long-term maintainability, and deliver fast, reliable, and
              future-proof GIS systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
