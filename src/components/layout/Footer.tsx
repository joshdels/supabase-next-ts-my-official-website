import Contact from "../home/Contact";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col px-5 sm:px-5 md:px-20 lg:px-20 1xl:px-20 2xl:px-40 pb-5 pt-15 bg-gray-100 border-t border-gray-200">
        <Contact />
        <div className="mt-6">
          <div className="text-center text-sm text-gray-500">
            <p>
              © 2025 JoshDels. Making Geospatial Simple, Usable and Impactful.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
