export interface ProjectProps {
  title: string;
  logo: string;
  description: string;
  tech: string[];
  features: string[];
  link?: string;
  isMain?: boolean;
  dateCreated: string;
}

export const Projects: ProjectProps[] = [
  {
    title: "TopMap Solutions",
    logo: "/project/topmapsolutions.png",
    description:
      "Helps Enterprises manage spatial data, collect with teams and analyze the data in their operations",
    tech: ["django", "leaflet", "docker", "postgres", "bootstrap"],
    features: [
      "Manage Enterprise/Company GIS data",
      "Offline/Online Moblie Field Spatial Data Collection",
      "Visualize/Analyze Spatial Data to their needs",
    ],
    link: "https://topmapsolutions.com/",
    isMain: true,
    dateCreated: "2026-01-15",
  },
  {
    title: "Homify",
    logo: "/project/logo_homify.svg",
    description:
      "Find, show, or rent your dream home effortlessly. I transform messy spatial data into clear insights for smarter property decisions.",
    tech: [
      "django",
      "leaflet/maplibre",
      "docker",
      "postgis",
      "flutter",
      "nextjs",
    ],
    features: [
      "Mark and manage home locations",
      "Organize and list your home details",
      "Control visibility: public or private",
    ],
    link: "https://homify.topmapsolutions.com/",
    dateCreated: "2025-09-10",
  },

  {
    title: "Isle of Wight",
    logo: "/project/iow.jpeg",
    description:
      "Demonstrates how modern web-based GIS technologies can be used to engaging geographic information for the Isle of Wight.",
    tech: [
      "vanilla js",
      "arcgis sdk",
      "arcgis experience",
      "leaflet",
      "google api",
      "chartjs",
    ],
    features: [
      "Interactive Maps",
      "Multiple WebGIS Library",
      "Simple Analytics",
    ],
    link: "https://joshdels.github.io/webmaps-demonstration-uk/",
    dateCreated: "2026-03-01",
  },
  // {
  //   title: "Airports",
  //   logo: "/project/airplane.png",
  //   description:
  //     "Never get lost in Philippine airports again! I cluster and visualize airport locations by type for quick reference.",
  //   tech: ["vanilla js", "arcgis sdk"],
  //   features: [
  //     "OpenStreetMap integration",
  //     "Cluster-based rendering",
  //     "Pinpoint airplane locations",
  //   ],
  //   link: "https://joshdels.github.io/WebGIS-Projects-2025/03-Airport-overview/",
  //   dateCreated: "2025-07-10",
  // },
  // {
  //   title: "City Land Cover",
  //   logo: "/project/landcover.png",
  //   description:
  //     "Discover what dominates your city’s landscape. I process land cover data and generate automated, insightful statistics.",
  //   tech: ["geoserver", "docker", "leaflet", "vanilla js", "chart js"],
  //   features: [
  //     "City land cover mapping",
  //     "Interactive bar chart stats",
  //     "Clear map boundaries",
  //   ],
  //   link: "https://landuseandlandcover.vercel.app/",
  //   dateCreated: "2025-08-10",
  // },
];
