import { experiences } from "@/src/data/experience";

export default function WorkExperience() {
  return (
    <section className="max-w-5xl mx-auto py-5">
      <h2 className="text-3xl font-bold mb-5 text-gray-900">Experience</h2>

      <div className="flex flex-col gap-8">
        {experiences.map((e, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {e.company}
                </h3>

                <p className="text-gray-600">{e.role}</p>
              </div>

              <div className="text-sm text-gray-500 md:text-right">
                <p>{e.location}</p>
                <p>{e.date}</p>
              </div>
            </div>

            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm leading-relaxed">
              {e.duties.map((duty, i) => (
                <li key={i}>{duty}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
