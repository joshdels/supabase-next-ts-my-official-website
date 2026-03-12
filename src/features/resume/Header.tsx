export default function Header() {
  return (
    <header className="mb-8 mt-20 bg-white shadow-md rounded-xl p-6 border border-gray-200 text-center">
      {/* Name */}
      <h1 className="text-4xl font-extrabold text-gray-900">Joshua De Leon</h1>

      {/* Contact Info */}
      <div className="mt-2 flex flex-wrap justify-center gap-2 text-gray-600 text-sm">
        <span>Philippines, Davao</span>
        <span>|</span>
        <a
          href="mailto:assistantgisjosh@gmail.com"
          className="underline hover:text-blue-600"
        >
          assistantgisjosh@gmail.com
        </a>
        <span>|</span>
        <span>+639927311219</span>
        <span>|</span>
        <a
          href="https://www.linkedin.com/in/assistantgisjosh"
          target="_blank"
          className="underline hover:text-blue-600"
        >
          LinkedIn
        </a>
        <span>|</span>
        <a
          href="https://github.com/joshdels"
          target="_blank"
          className="underline hover:text-gray-900"
        >
          Github
        </a>
        <span>|</span>
        <a
          href="https://joshdels.topmapsolutions.com/"
          target="_blank"
          className="underline hover:text-blue-600"
        >
          Website
        </a>
      </div>

      {/* Divider */}
      <hr className="my-4 border-gray-300" />

      {/* Summary */}
      <p className="text-gray-800 text-base leading-relaxed">
        GIS System Engineer with 2+ years of experience in large-scale spatial
        data processing, automated spatial ETL pipelines (Python/Shell), modern
        web mapping, and applied remote sensing. Specialized in interactive
        mapping, enterprise GIS systems, PostGIS, and cloud-deployed custom GIS
        platforms such as mobile and QGIS Plugins.
      </p>
    </header>
  );
}
