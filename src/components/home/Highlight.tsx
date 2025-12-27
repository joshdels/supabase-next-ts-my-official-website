"use client";

import Map from "@/src/features/map/Map";
import {
  Database,
  Scissors,
  Map as MapIcon,
  Layers3,
  Gauge,
} from "lucide-react";

export default function Highlight() {
  return (
    <section className="flex flex-col lg:flex-row gap-20">
      <div className="flex-1 space-y-8">
        <h1 className="text-3xl font-semibold">
          How I Solved the Urban Problems
        </h1>

        <p>
          Handling millions of building records can slow down systems and make
          maps hard to use. The original workflow relied on manual digitization
          in desktop GIS accurate, but slow and not scalable.
        </p>
        <div className="space-y-6 text-justify">
          <div className="flex gap-4 items-start">
            <Database className="w-6 h-6 mt-1 text-gray-700" />
            <div>
              <h4 className="font-medium">Step 1: Use Existing Open Data</h4>
              <p className="text-sm text-gray-600">
                Instead of manually digitizing buildings, I sourced data
                directly from <strong>OpenStreetMap</strong> using the{" "}
                <strong>Overpass API</strong> saving time and leveraging a
                maintained global dataset.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <Scissors className="w-6 h-6 mt-1 text-gray-700" />
            <div>
              <h4 className="font-medium">Step 2: Reduce Data Size</h4>
              <p className="text-sm text-gray-600">
                I applied <strong>bounding boxes</strong> to load only buildings
                within the user's area of interest, reducing payload size and
                improving load speed.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <MapIcon className="w-6 h-6 mt-1 text-gray-700" />
            <div>
              <h4 className="font-medium">Step 3: Modern Web Mapping</h4>
              <p className="text-sm text-gray-600">
                I used <strong>MapLibre</strong> for its lightweight
                architecture, smooth rendering, and open-source flexibility
                which is ideal for large spatial datasets.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <Layers3 className="w-6 h-6 mt-1 text-gray-700" />
            <div>
              <h4 className="font-medium">Step 4: Improve User Interaction</h4>
              <p className="text-sm text-gray-600">
                The map supports <strong>2D and 3D views, geolocation</strong>,
                and search, allowing users to explore building data intuitively.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <Gauge className="w-6 h-6 mt-1 text-gray-700" />
            <div>
              <h4 className="font-medium">Step 5: Optimize Performance</h4>
              <p className="text-sm text-gray-600">
                By combining automated data, filtering, and modern rendering,
                the final system loads faster, scales better, and replaces
                manual GIS workflows.
              </p>
            </div>
          </div>
        </div>

        <p className="pt-4">
          This approach delivers a faster, cleaner, and more scalable solution
          compared to traditional desktop GIS digitization saving time and cost
          while improving usability.
        </p>
      </div>

      <div className="flex-1 w-full">
        <Map />
      </div>
    </section>
  );
}
