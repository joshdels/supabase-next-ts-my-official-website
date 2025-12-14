import { OtherProject, MainProject } from "../common/Card";

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
      "Struggling to find, show, rent your ideal home? I turn messy spatial information into clear insights for better property and home decisions.",
    tech: ["django","leaflet", "docker", "postgres", "bootstrap" ],
    features: ["Home location markdown", "List and manage your home details", "Show private and public your house location"],
    link: "https://homify.topmapsolutions.com/",
    isMain: true,
    dateCreated: "2025-09-10"
  },
  {
    title: "Airports",
    logo: "/project/airplane.png",
    description: "Getting Lost of the airports in the Philippines?, I collect and cluster the locations of airports by their class type",
    tech: ["vanilla js", "arcgis sdk"],
    features: ["Open Street Map", "Cluster rendering", "Airplanes location markdown"],
    link: "https://joshdels.github.io/WebGIS-Projects-2025/03-Airport-overview/",
    dateCreated: "2025-07-10"
  },
  {
    title: "City Land Cover",
    logo: "/project/landcover.png",
    description: "What land cover is the biggest?, I show how their land cover data and automatically create statistics of it",
    tech: ["geoserver", "docker", "leaflet", "vanilla js", "chart js"],
    features: ["city landcover", "bar chart statistics", "map boundaries"],
    link: "https://landuseandlandcover.vercel.app/",
    dateCreated: "2025-08-10"
  },
];

export default function Project() {
  const main = Projects.find(p => p.isMain);
  const others = Projects.filter(p => !p.isMain)
    .sort((a, b) => new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime());

  return (
    <div className="mt-16">
      <h1 className="font-bold text-3xl mb-3">Projects</h1>
      <p className="mb-8 text-gray-600">How I solved different problems in each project</p>
      
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
  )
}
