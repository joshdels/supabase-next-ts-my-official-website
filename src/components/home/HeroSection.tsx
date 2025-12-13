import Map from "../map/Map";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-10 xl:gap-20 pt-10 pb-5">
        <div className="lg:flex-1">
          <p className="text-lg font-medium">Geospatial Web Developer</p>

          <h1 className="text-3xl font-bold mt-2">
            Helping organizations grow through powerful geospatial technology
          </h1>

          <p className="mt-4 text-gray-700 leading-relaxed">
            Hi! I’m a developer specializing in modern geospatial solutions that
            turn your data into real operational advantages. I help businesses and
            organizations improve planning, decision-making, and day-to-day
            operations through mapping, analytics, and location-driven insights.
          </p>
        </div>

        <div className="lg:flex-1">
          <Map />
        </div>
      </div>
    </>
  );
}
