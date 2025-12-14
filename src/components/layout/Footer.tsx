import About from "../home/About";
import Contact from "../home/Contact";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col px-5 sm:px-5 md:px-20 lg:px-40 1xl:px-40 2xl:px-80 pb-5 pt-15 bg-gray-100 border-t border-gray-200">
        <div className="flex flex-col lg:flex-row gap-4">
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
