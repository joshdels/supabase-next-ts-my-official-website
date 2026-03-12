import { OtherProject, MainProject } from "@/src/components/ui/Card";
import { Projects } from "@/src/data/projects";

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
