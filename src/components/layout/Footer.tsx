import About from "../home/About";
import Contact from "../Contact";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col mt-10">
        <div className="flex flex-row gap-4">
          <About />
          <Contact />
        </div>
        <div className="mt-6">
          <div className="text-center text-gray-500">
            <p>© 2025 Joshua De Leon. Making Geospatial Easy.</p>
          </div>
        </div>
      </div>
    </>
  );
}
