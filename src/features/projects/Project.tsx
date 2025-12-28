import { OtherProject, MainProject } from "@/src/components/ui/Card";

interface ProjectProps {
  title: string;
  logo: string;
  description: string;
  tech: string[];
  features: string[];
  link?: string;
  isMain?: boolean;
  dateCreated: string;
}

const Projects: ProjectProps[] = [
  {
    title: "Homify",
    logo: "/project/logo_homify.svg",
    description:
      "Find, show, or rent your dream home effortlessly. I transform messy spatial data into clear insights for smarter property decisions.",
    tech: ["django", "leaflet", "docker", "postgres", "bootstrap"],
    features: [
      "Mark and manage home locations",
      "Organize and list your home details",
      "Control visibility: public or private",
    ],
    link: "https://homify.topmapsolutions.com/",
    isMain: true,
    dateCreated: "2025-09-10",
  },
  {
    title: "Airports",
    logo: "/project/airplane.png",
    description:
      "Never get lost in Philippine airports again! I cluster and visualize airport locations by type for quick reference.",
    tech: ["vanilla js", "arcgis sdk"],
    features: [
      "OpenStreetMap integration",
      "Cluster-based rendering",
      "Pinpoint airplane locations",
    ],
    link: "https://joshdels.github.io/WebGIS-Projects-2025/03-Airport-overview/",
    dateCreated: "2025-07-10",
  },
  {
    title: "City Land Cover",
    logo: "/project/landcover.png",
    description:
      "Discover what dominates your city’s landscape. I process land cover data and generate automated, insightful statistics.",
    tech: ["geoserver", "docker", "leaflet", "vanilla js", "chart js"],
    features: ["City land cover mapping", "Interactive bar chart stats", "Clear map boundaries"],
    link: "https://landuseandlandcover.vercel.app/",
    dateCreated: "2025-08-10",
  },
];

export default function Project() {
  const main = Projects.find((p) => p.isMain);
  const others = Projects
    .filter((p) => !p.isMain)
    .sort((a, b) => new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime());

  return (
    <div className="py-20">
      <h1 className="font-bold text-3xl mb-3">Projects</h1>
      <p className="mb-8 text-gray-700">
        A showcase of projects I built, turning ideas into functional solutions.
      </p>

      {main && <MainProject {...main} />}

      <div className="flex flex-wrap gap-5 justify-center">
        {others.map((p, index) => (
          <OtherProject
            key={p.title}
            index={index}
            total={others.length}
            {...p}
          />
        ))}
      </div>
    </div>
  );
}
