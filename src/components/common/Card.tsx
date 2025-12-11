interface CardProps {
  title: string;
  logo: string;
  description: string;
  result?: string;
  tech: string[];
  features: string[];
  link?: string;
  index?: number;
  total?: number;
}

export function MainProject({
  title,
  logo,
  description,
  tech = [],
  features = [],
  link,
  index,
}: CardProps) {
  return (
    <div
      className="border border-gray-300 rounded-xl p-8 
                 flex flex-row gap-10 bg-white
                 hover:shadow-md hover:shadow-gray-300 
                 transition-shadow duration-300 mt-5"
    >
      <div className="flex-1">
        <p className="text-sm font-semibold text-gray-800 uppercase tracking-wide mb-2">
          Highlight / 01
        </p>

        <img src={logo} alt={title} className="h-20 w-auto mb-4" />

        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        <p className="text-gray-700 leading-relaxed mb-5">{description}</p>

        {link && (
          <a
            href={link}
            className="text-gray-400 font-medium hover:text-gray-700 mt-4 block"
            target="_blank"
          >
            Visit →
          </a>
        )}
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1">
        <div className="mb-6">
          <p className="text-sm font-semibold text-gray-600 mb-2">
            Technology
          </p>

          <ul className="flex flex-wrap gap-3">
            {tech.map((t) => (
              <li
                key={t}
                className="px-3 py-1 bg-gray-100 rounded-lg text-sm text-gray-700"
              >
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

export function OtherProject({
  title,
  logo,
  description,
  tech = [],
  link,
  index,
  total,
}: CardProps) {
  return (
    <div
      className="border border-gray-300 rounded-xl p-8 
                 flex gap-10 bg-white
                 hover:shadow-md hover:shadow-gray-300 
                 transition-shadow duration-300 mt-5 flex-1"
    >
      <div className="flex flex-col flex-1">
        <div className="flex justify-between">
          <img src={logo} alt={title} className="h-12 w-auto mb-4" />
          <p className="text-sm text-gray-400">
            {(index ?? 0) + 1}/{total ?? 1}
          </p>
        </div>
        <h1 className="text-2xl font-bold mb-4">{title}</h1>

        <p className="text-gray-700 leading-relaxed mb-5 text-sm">
          {description}
        </p>

        <div className="mb-6">
          <p className="text-sm font-semibold text-gray-600 mb-2">Technology</p>

          <ul className="flex flex-wrap gap-3">
            {tech.map((t) => (
              <li
                key={t}
                className="px-3 py-1 bg-gray-100 rounded-lg text-sm text-gray-700"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>

        {link && (
          <a
            href={link}
            className="mt-4 block border border-gray-300 rounded-md p-2 hover:bg-gray-50"
            target="_blank"
          >
            Explore Project
          </a>
        )}
      </div>
    </div>
  );
}

type SkillCardProps = {
  logo?: string,
  skillName?: string,
  className?: string,
}


export function SkillCard({
  logo,
  skillName,
  className,
}: SkillCardProps) {
  return (
    <>
      <div className={`border rounded-xl border-gray-300 p-4 flex items-center gap-4 hover:shadow-md transition-shadow duration-300 ${className}`}>
        <img src={logo} alt={skillName || "logo"} className="h-8 w-auto" />
        <p className="text-lg font-medium">{skillName}</p>
      </div>
    </>
  )
}
