import { Education } from "@/src/data/education";

export default function EducationSection() {
  return (
    <section className="max-w-5xl mx-auto py-5">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-5 text-gray-900">Education</h2>

      {/* Cards */}
      <div className="flex flex-col gap-6">
        {Education.map((edu, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-start gap-4">
              {/* Logo */}
              {edu.logo && (
                <img
                  src={edu.logo}
                  alt={edu.school}
                  className="w-10 h-10 object-contain mt-1"
                />
              )}

              {/* Content */}
              <div className="flex flex-col flex-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-1">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {edu.school}
                    </h3>

                    <p className="text-gray-700">{edu.program}</p>
                  </div>

                  <div className="text-sm text-gray-500 md:text-right">
                    <p>{edu.location}</p>
                    <p>{edu.date}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
