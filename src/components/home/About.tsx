export default function About() {
  return(
    <>
      <div className="">
        <h1 className="text-2xl font-semibold mb-2">About me</h1>

        <p className="mb-2">
          I've always been fascinated by maps. Every time I look at one, it feels like the universe is guiding me toward this field—helping me see, analyze, and share how powerful geospatial data can be.
        </p>

        <p className="mb-4">
          Today, I focus on building modern geospatial solutions that help businesses grow, operate smarter, and make better decisions using accurate location intelligence.
        </p>

        <div className="flex items-center gap-4 mt-4">
          <img src="/images.png" alt="Technology logo 1" className="h-10 w-auto" />
          <img src="/images.png" alt="Technology logo 2" className="h-10 w-auto" />
        </div>
      </div>
    </>
  )
}