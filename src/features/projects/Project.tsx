import { OtherProject, MainProject } from "@/src/components/ui/Card";
import { Projects } from "@/src/data/projects";

export default function Project() {
  const main = Projects.find((p) => p.isMain);
  const others = Projects
    .filter((p) => !p.isMain)
    .sort((a, b) => new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime());

  return (
    <div 
    id = "project-section"
    className="flex flex-col py-20 min-h-screen justify-center">
      <h1 className="font-bold text-3xl mb-3">Projects</h1>
      <p className="mb-8 text-gray-700">
        A showcase of projects I built, turning ideas into functional solutions.
      </p>

      {main && <MainProject {...main} />}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
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
