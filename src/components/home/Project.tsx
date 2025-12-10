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
    logo: "/project/homify_logo.svg",
    description:
      "Struggling to find, show, rent your ideal home? I turn messy spatial information into clear insights for better property and home decisions.",
    tech: ["django","leaflet", "postgres" ],
    features: ["Home location markdown", "List and manage your home details", "Show private and public your house location"],
    link: "https://homify.topmapsolutions.com/",
    isMain: true,
    dateCreated: "2025-01-10"
  },
  {
    title: "MapEngine",
    logo: "/images.png",
    description: "A mapping engine built for large-scale spatial analysis.",
    tech: ["React", "Leaflet", "Supabase"],
    features: ["Heatmaps", "Cluster rendering", "Tile server integration"],
    link: "asdfasdf",
    dateCreated: "2025-02-10"
  },
  {
    title: "ParcelDropper",
    logo: "/images.png",
    description: "Automated package drop-off system for couriers.",
    tech: ["C++", "ESP32", "PostgreSQL"],
    features: ["Barcode scanning", "PIN access", "Solenoid controls"],
    link: "",
    dateCreated: "2025-01-10"
  },
  {
    title: "asdrt",
    logo: "/images.png",
    description: "Automated package drop-off system for couriers.",
    tech: ["C++", "ESP32", "PostgreSQL"],
    features: ["Barcode scanning", "PIN access", "Solenoid controls"],
    link: "asdfasdf",
    dateCreated: "2026-01-10"
  },
];

export default function Project() {
  const main = Projects.find(p => p.isMain);
  const others = Projects.filter(p => !p.isMain)
    .sort((a, b) => new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime());

  return (
    <>
      <div className="mt-15">
        <h1 className="font-bold text-3xl mb-3">Projects</h1>
        <p>How I solved different problems in each projects </p>
        
        {main && <MainProject {...main} />}

        <div className="flex gap-5 flex-wrap">
          {others.map((p) => (
            <OtherProject key={p.title} {...p} />
          ))}
        </div>
      </div>
    </>
  )
}