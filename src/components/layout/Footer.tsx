import About from "../home/About";
import Contact from "../home/Contact";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col px-20 pt-15 py-5 bg-gray-100 border-t border-gray-200">
        <div className="flex flex-row gap-4">
          <div className="flex-1">
            <About />
          </div>
          <div className="flex-1">
            <Contact />
          </div>
        </div>
        <div className="mt-6">
          <div className="text-center text-sm text-gray-400">
            <p>© 2025 Joshua De Leon. Making Geospatial Easy.</p>
          </div>
        </div>
      </div>
    </>
  );
}
