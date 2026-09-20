import { Link } from "react-router-dom";

function VesselTitle({ vessel }) {
  const sameTitle =
    vessel.model?.trim().toLowerCase() ===
    vessel.name?.trim().toLowerCase();

  return (
    <>
      <span>{vessel.model}</span>

      {!sameTitle && vessel.name && (
        <>
          <span className="card-title-dot">·</span>
          <span>{vessel.name}</span>
        </>
      )}
    </>
  );
}

export default function VesselCard({ vessel }) {
  const featured = vessel.size === "large";

  if (featured) {
    return (
      <article
        className={`vessel-card vessel-card--large grid-area-${vessel.area}`}
      >
        <Link
          className="featured-card-link"
          to={`/fleet/${vessel.slug}`}
        >
          <div className="featured-image-wrap">
            <img
              src={vessel.image}
              alt={`${vessel.model} ${vessel.name}`}
              loading="lazy"
            />
          </div>

          <div className="featured-content">
            <div>
              <span className="featured-eyebrow">
                Featured vessel
              </span>

              <h2>
                <VesselTitle vessel={vessel} />
              </h2>
            </div>

            <div className="featured-middle">
              <strong>{vessel.category}</strong>

              <div className="featured-details">
                <span>{vessel.availableFor}</span>
                <span>{vessel.capacity}</span>
              </div>
            </div>

            <div className="featured-cta">
              <span>View vessel</span>

              <span className="featured-arrow">
                ↗
              </span>
            </div>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article
      className={`vessel-card vessel-card--small grid-area-${vessel.area}`}
    >
      <Link
        className="card-link"
        to={`/fleet/${vessel.slug}`}
      >
        <header className="card-top">
          <h2>
            <VesselTitle vessel={vessel} />
          </h2>
        </header>

        <div className="card-image-wrap">
          <img
            className="card-image"
            src={vessel.image}
            alt={`${vessel.model} ${vessel.name}`}
            loading="lazy"
          />
        </div>

        <footer className="card-editorial">
          <div className="card-editorial-copy">
            <strong className="card-category">
              {vessel.category}
            </strong>

            <div className="card-secondary">
              <span>{vessel.availableFor}</span>
              <span>{vessel.capacity}</span>
            </div>
          </div>

          <span className="card-open">
            ↗
          </span>
        </footer>
      </Link>
    </article>
  );
}
