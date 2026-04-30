export default function DiscoverSection() {
  return (
    <>
      <div id="discover" className="container">
        <div className="container-content">
          <div className="container-context">
            <span className="font-orange">// projects & case-studies</span>
            <h2>
              Work that speaks <strong>for itself</strong>
            </h2>
            <p>
              Real projects across land planning, urban analysis, and real
              estate mapping — built with open source tools and a focus on
              clarity.
            </p>

            <div>
              <p>
                Project 1 Title: Land Use Classification — Davao Region Problem:
                A planning team needed to understand current land cover before
                proposing new zoning boundaries. What I built: A supervised
                classification map using Sentinel-2 imagery identifying urban,
                agricultural, forest, and water areas across the region. Tools:
                Python · QGIS · Sentinel-2 Link: View on GitHub →
              </p>
              <p>
                Project 3 Title: Flood Risk Web Map for Urban Expansion Problem:
                A local government unit needed to communicate flood prone areas
                to community stakeholders without technical GIS software. What I
                built: An interactive Leaflet web map showing flood risk zones,
                escape routes, and affected barangays — viewable on any browser.
                Tools: Leaflet · HTML/CSS · GeoJSON Link: View Live Map →
              </p>
              <p>
                Project 4 Title: Zoning Compliance Map for Property Review
                Problem: A real estate firm needed to quickly verify if target
                properties fell within compliant zoning classifications before
                acquisition. What I built: An interactive map with zoning
                layers, property boundaries, and color-coded compliance status
                for their review team. Tools: Leaflet · PostGIS · Python Link:
                View on GitHub →
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
