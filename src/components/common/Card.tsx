interface ProjectCardProps {
  title: string;
  logo: string;
  description: string;
  tech: string[];
  features: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  logo,
  description,
  tech = [],
  features = [],
  link,
}: ProjectCardProps) {
  return (
    <div
      className="border border-gray-300 rounded-xl p-8 
                 flex flex-row gap-10 bg-white
                 hover:shadow-lg hover:shadow-gray-300 
                 transition-shadow duration-300 mt-5"
    >
      {/* LEFT SIDE */}
      <div className="flex-1">
        <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide mb-2">
          Highlighted / 01
        </p>

        <img src={logo} alt={title} className="h-20 w-auto mb-4" />

        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        <p className="text-gray-700 leading-relaxed mb-5">{description}</p>

        {link && (
          <a
            href={link}
            className="text-indigo-600 font-medium hover:underline mt-4 block"
          >
            Visit →
          </a>
        )}
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1">
        <div className="mb-6">
          <p className="text-sm font-semibold text-gray-600 mb-2">Technology</p>

          <ul className="flex flex-wrap gap-3">
            {tech.map((t) => (
            <li key={t} className="px-3 py-1 bg-gray-100 rounded-lg text-sm text-gray-700">
              {t}
            </li>
            ))} 
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-600 mb-2">
            Key Features
          </p>

          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            {features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
