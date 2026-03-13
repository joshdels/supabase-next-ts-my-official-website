interface ExperiencesProps {
  logo: string;
  company: string;
  role: string;
  date: string;
  duties: string[];
  location: string;
}

export const experiences: ExperiencesProps[] = [
  {
    logo: "/resume/experience/tms.png",
    company: "TopMap Solutions",
    role: "Technical Co-Founder (Hybrid)",
    location: "Philippines",
    date: "Aug 2025 - Present",
    duties: [
      "Co-founded and led the technical architecture of a modern enterprise GIS platform, building a backend-first Django/PostGIS system for secure storage, processing, and management of large-scale spatial datasets.",
      "Developed automated spatial ETL pipelines and cloud-native deployment workflows using Python, GDAL, and Docker to support scalable and cost-efficient geospatial operations.",
      "Built GIS integrations including a custom QGIS plugin and a Flutter mobile application enabling offline/online data synchronization and field-to-cloud GIS workflows.",
    ],
  },
  {
    logo: "/resume/experience/lht.png",
    company: "Land Homes Texas Real Estate",
    role: "Geospatial Web Developer (Remote)",
    location: "Texas, USA",
    date: "Nov 2025 - Feb 2026",
    duties: [
      "Designed and executed automated spatial ETL pipelines to ingest and manage over 10M GIS parcel records using PostGIS and Dockerized Supabase.",
      "Improved web mapping performance by implementing vector tile workflows using Mapbox.",
      "Developed custom geospatial editing and spatial analysis tools using Geoman and Turf.js for construction-related spatial calculations.",
    ],
  },
  {
    logo: "/resume/experience/ceres.png",
    company: "Ceres AI ",
    role: "GIS and Remote Sensing Analyst  (Remote)",
    location: "San Francisco, California",
    date: "April 2024 - Nov 2025",
    duties: [
      "Increased SEA team processing speed and accuracy by 40% through optimized GIS and remote sensing workflows.",
      "Georeferenced 50+ drone mosaic datasets daily with 95% spatial accuracy.",
      "Digitized and maintained 100+ agricultural field shapefiles per month within the geospatial database.",
    ],
  },
  {
    logo: "/resume/experience/DA.png",
    company: "Department of Agriculture XI",
    role: "RSBSA Enumerator/Georeferencer (On Site)",
    location: "Davao del Norte, Philippines",
    date: "April 2024 - Nov 2025",
    duties: [
      "Identified and registered 2,000 local farmers into the regional database by hand",
      "Validated 500 hectares of farmland using field GPS surveys",
    ],
  },
];
