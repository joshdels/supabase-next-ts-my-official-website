import Image from "next/image";
import { experiences } from "@/src/data/experience";

export default function WorkExperience() {
  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold mb-5 text-gray-900">Experience</h2>

      <div className="flex flex-col gap-8">
        {experiences.map((e, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
      
              <div className="flex items-center gap-4">
                {/* LOGO */}
                <div className="w-12 h-12 relative shrink-0">
                  <Image
                    src={e.logo}
                    alt={e.company}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* COMPANY + ROLE */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {e.company}
                  </h3>
                  <p className="text-gray-600">{e.role}</p>
                </div>
              </div>

              {/* RIGHT SIDE */}
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
