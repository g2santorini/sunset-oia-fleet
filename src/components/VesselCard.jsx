import { Link } from "react-router-dom";

function GuestsIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="8" cy="8" r="3" />
      <circle cx="16.5" cy="9" r="2.5" />
      <path d="M2.5 19c.6-4 2.8-6 5.5-6s5 2 5.5 6" />
      <path d="M13.5 14.2c.8-.7 1.8-1.2 3-1.2 2.5 0 4.3 1.8 5 5" />
    </svg>
  );
}

function DiamondIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 4h14l3 5-10 11L2 9l3-5Z" />
      <path d="M2 9h20M8 4 6 9l6 11 6-11-2-5" />
    </svg>
  );
}

function VesselMedia({ vessel }) {
  if (vessel.mediaType === "video") {
    return (
      <video
        className="showcase-card-media"
        src={vessel.video}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    );
  }

  return (
    <img
      className="showcase-card-media"
      src={vessel.image}
      alt={`${vessel.model} ${vessel.name}`}
      loading="lazy"
      style={{
        objectPosition: vessel.imagePosition || "center center",
        "--image-scale": vessel.imageScale ?? 1
      }}
    />
  );
}

export default function VesselCard({ vessel }) {
  const titlePosition =
    vessel.titlePosition ||
    vessel.textPosition ||
    "bottom-left";

  const metaPosition =
    vessel.metaPosition ||
    vessel.textPosition ||
    "bottom-left";

  return (
    <article
      className={[
        "showcase-vessel-card",
        `showcase-vessel-card--${vessel.layout || "standard"}`,
        `showcase-vessel-card--${vessel.textPosition || "bottom-left"}`,
        `showcase-vessel-card--shade-${vessel.shade || "strong"}`
      ].join(" ")}
    >
      <Link
        className="showcase-card-surface"
        to={`/fleet/${vessel.slug}`}
        aria-label={`Explore ${vessel.model} ${vessel.name}`}
      >
        <VesselMedia vessel={vessel} />

        <div
          className={`showcase-card-title showcase-card-title--${titlePosition}`}
        >
          <span className="showcase-card-name">
            {vessel.name}
          </span>

          <h2 className="showcase-card-model">
            {vessel.modelLines
              ? vessel.modelLines.map((line) => (
                <span
                  className="showcase-card-model-line"
                  key={line}
                >
                  {line}
                </span>
              ))
              : vessel.model.toUpperCase()}
          </h2>
        </div>

        <div
          className={`showcase-card-meta showcase-card-meta--${metaPosition}`}
        >
          <span>
            <GuestsIcon />
            Max {vessel.capacity}
          </span>

          <span className="showcase-card-divider" />

          <span>
            <DiamondIcon />
            {vessel.category}
          </span>
        </div>

        <span
          className="showcase-card-explore"
          aria-hidden="true"
        >
          <span>Explore Vessel</span>

          <span className="showcase-card-explore-arrow">
            ↗
          </span>
        </span>
      </Link>
    </article>
  );
}