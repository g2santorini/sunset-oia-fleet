import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import { findVessel } from "../data/vessels";
export default function VesselPage() {
  const {slug}=useParams(); const vessel=findVessel(slug);
  if(!vessel) return <><Header/><main className="vessel-page vessel-page--missing"><p>Vessel not found.</p><Link to="/">Return to fleet index</Link></main></>;
  return <><Header/><main className="vessel-page"><Link className="back-link" to="/">← Fleet index</Link><section className="vessel-hero"><div className="vessel-hero-copy"><span className="card-model">{vessel.model}</span><h1>{vessel.name}</h1><p>This is the first working vessel-profile template. Gallery, itineraries, inclusions, seasonal pricing, calculator, videos, brochures and original media downloads will be added in the next batches.</p><dl className="vessel-summary"><div><dt>Available for</dt><dd>{vessel.availableFor}</dd></div><div><dt>{vessel.categoryLabel}</dt><dd>{vessel.category}</dd></div><div><dt>Max capacity</dt><dd>{vessel.capacity}</dd></div></dl></div><img className="vessel-hero-image" src={vessel.image} alt={`${vessel.model} ${vessel.name}`}/></section></main></>;
}
