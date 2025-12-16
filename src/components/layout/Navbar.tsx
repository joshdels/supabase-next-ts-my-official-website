export default function Navbar() {
  return (
    <>
      <div
        className="
          flex bg-white/80 backdrop-blur-sm text-gray-800 items-center justify-between
          text-md border-b border-gray-200
          px-6 sm:px-10 md:px-20 lg:px-40 2xl:px-80
          py-4 fixed top-0 left-0 w-full z-50 shadow-2xs
        "
      >
        {/* Logo / Name */}
        <h1 className="font-bold text-xl md:text-xl tracking-wide cursor-pointer hover:text-gray-900 transition-colors duration-300">
          Joshdels
        </h1>

        {/* Menu items */}
        <div className="flex flex-row gap-2 sm:gap-2 md:gap-4 lg:gap-6 text-sm lg:text-md  text-gray-700">
          <p className="cursor-pointer hover:text-gray-900 transition-colors duration-200">Home</p>
          <p className="cursor-pointer hover:text-gray-900 transition-colors duration-200">Services</p>
          <p className="cursor-pointer hover:text-gray-900 transition-colors duration-200">Demo</p>
          <p className="cursor-pointer hover:text-gray-900 transition-colors duration-200">Project</p>
          <p className="cursor-pointer hover:text-gray-900 transition-colors duration-200">About</p>
        </div>
      </div>
    </>
  );
}
