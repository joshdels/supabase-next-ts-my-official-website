export default function Navbar() {
  return (
    <>
      <div 
        className="
          flex bg-white/80 backdrop-blur-lg text-gray-700 items-center justify-between
          text-md border-b border-gray-200
          px-10 sm:px-10 md:px-20 lg:px-40 2xl:px-80
          py-5 fixed top-0 left-0 w-full z-1000
          mb-10
        "
        >
        <h1>Joshua De Leon</h1>
        <div className="flex flex-row gap-4">
          <p>Work</p>
          <p>Skill</p>
          <p>Project</p>
          <p>About</p>
        </div>
      </div>
    </>
  );
}
