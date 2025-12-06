import { OtherProject, MainProject, SkillCard } from "./common/Card";

export default function Projects() {

  return (
    <>
      <div className="mt-15">
        <h1 className="font-bold text-3xl mb-3">Projects</h1>
        <p>How I solved different problems in each projects </p>
        <MainProject 
          title="MapEngine"
          logo="/images.png"
          description="A mapping engine built for large-scale spatial analysis."
          tech={["React", "Leaflet", "Supabase"]}
          features={["Heatmaps", "Cluster rendering", "Tile server integration"]}
          link="asdfasdf"
        />
        <div className="flex gap-5">
          <OtherProject 
            title="MapEngine"
            logo="/images.png"
            description="A mapping engine built for large-scale spatial analysis."
            tech={["React", "Leaflet", "Supabase"]}
            features={["Heatmaps", "Cluster rendering", "Tile server integration"]}
            link="asdfasdf"
          />
          <OtherProject 
            title="MapEngine"
            logo="/images.png"
            description="A mapping engine built for large-scale spatial analysis."
            tech={["React", "Leaflet", "Supabase"]}
            features={["Heatmaps", "Cluster rendering", "Tile server integration"]}
            link="asdfasdf"
          />
          <OtherProject 
            title="MapEngine"
            logo="/images.png"
            description="A mapping engine built for large-scale spatial analysis."
            tech={["React", "Leaflet", "Supabase"]}
            features={["Heatmaps", "Cluster rendering", "Tile server integration"]}
            link="asdfasdf"
          />
        </div>
      </div>
    </>
  )
}