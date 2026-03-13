import { skills } from "@/src/data/skills";

export default function Skills() {
  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold mb-5 text-gray-900">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.category}
            className="bg-white hover:shadow-md transition rounded-2xl p-4 border border-gray-200"
          >
            <h3 className="font-semibold text-gray-800 mb-2">
              {skill.category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {skill.tools.map((tool) => (
                <li
                  key={tool}
                  className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
