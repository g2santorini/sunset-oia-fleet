import Header from "../components/Header";
import IntroCard from "../components/IntroCard";
import VesselCard from "../components/VesselCard";
import { vessels } from "../data/vessels";

export default function FleetPage() {
  return (
    <>
      <Header />
      <main className="page-shell">
        <div className="fleet-grid">
          <IntroCard />
          {vessels.map((vessel) => (
            <VesselCard key={vessel.slug} vessel={vessel} />
          ))}
        </div>
      </main>
    </>
  );
}
