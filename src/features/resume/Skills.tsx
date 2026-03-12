"use client";

export default function Skills() {
  const skills = [
    {
      category: "Geospatial & GIS",
      tools: ["QGIS", "ArcGIS", "GeoServer", "GDAL/OGR", "pyQGIS", "ArcPy", "Geopandas", "QSWAT", "HECHMS/HECRAS"],
    },
    {
      category: "Web Mapping",
      tools: ["Mapbox", "MapLibre", "Leaflet", "OpenLayers", "Deck.gl", "Turf.js", "ArcGIS SDK", "Google Map API", "GeoServers"],
    },
    {
      category: "Backend & ETL",
      tools: ["Python", "Django", "FastAPI", "Supabase", "Docker", "Bash/Shell", "DuckDB", "PostGIS", "SQLite"],
    },
    {
      category: "Frontend",
      tools: ["React", "Next.js", "TypeScript", "Alpine.js", "DaisyUI", "Tailwind"],
    },
    {
      category: "Remote Sensing",
      tools: ["Google Earth Engine", "SAGA GIS"],
    },
    {
      category: "Mobile and Custom GIS",
      tools: ["PyQT5", "PyQGIS", "Flutter", "Dart"],
    },
    {
      category: "Cloud and Deployment",
      tools: ["Vulter", "Digial Ocean", "Vercel", "BackBlaze"],
    },
  ];

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skills.map((skill) => (
          <div key={skill.category} className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
            <h3 className="font-semibold text-gray-800 mb-2">{skill.category}</h3>
            <ul className="flex flex-wrap gap-2">
              {skill.tools.map((tool) => (
                <li
                  key={tool}
                  className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}