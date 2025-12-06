import ProjectCard from "../common/Card";

export default function Projects() {

  return (
    <>
      <ProjectCard 
        title="MapEngine"
        logo="/images.png"
        description="A mapping engine built for large-scale spatial analysis."
        tech={["React", "Leaflet", "Supabase"]}
        features={["Heatmaps", "Cluster rendering", "Tile server integration"]}
        link="asdfasdf"
      />
      <ProjectCard 
        title="MapEngine"
        logo="/images.png"
        description="A mapping engine built for large-scale spatial analysis."
        tech={["React", "Leaflet", "Supabase"]}
        features={["Heatmaps", "Cluster rendering", "Tile server integration"]}
        link="asdfasdf"
      />
    </>
  )
}