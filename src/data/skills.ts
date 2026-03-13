interface SkillsProps {
  category: string;
  tools: string[];
}

export const skills: SkillsProps[] = [
  {
    category: "Geospatial & GIS",
    tools: [
      "QGIS",
      "ArcGIS",
      "GeoServer",
      "GDAL/OGR",
      "pyQGIS",
      "ArcPy",
      "Geopandas",
      "QSWAT",
      "HECHMS/HECRAS",
    ],
  },
  {
    category: "Web Mapping",
    tools: [
      "Mapbox",
      "MapLibre",
      "Leaflet",
      "OpenLayers",
      "Deck.gl",
      "Turf.js",
      "ArcGIS SDK",
      "Google Map API",
      "GeoServers",
    ],
  },
  {
    category: "Backend & ETL",
    tools: [
      "Python",
      "Django",
      "FastAPI",
      "Supabase",
      "Docker",
      "Bash/Shell",
      "DuckDB",
      "PostGIS",
      "SQLite",
    ],
  },
  {
    category: "Frontend",
    tools: [
      "React",
      "Next.js",
      "TypeScript",
      "Alpine.js",
      "DaisyUI",
      "Tailwind",
    ],
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
