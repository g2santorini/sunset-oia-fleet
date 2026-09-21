import { Route, Routes } from "react-router-dom";
import FleetPage from "./pages/FleetPage";
import VesselPage from "./pages/VesselPage";
import SectionPlaceholderPage from "./pages/SectionPlaceholderPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<FleetPage />} />
      <Route path="/fleet/:slug" element={<VesselPage />} />
      <Route
        path="/cruises"
        element={
          <SectionPlaceholderPage
            eyebrow="Cruise collections"
            title="Cruises"
            description="Diamond, Platinum, Santorini Gems, Red and Private cruise collections will live here."
          />
        }
      />
      <Route
        path="/rates-availability"
        element={
          <SectionPlaceholderPage
            eyebrow="Plan your cruise"
            title="Rates & Availability"
            description="The live rates and availability tool will be integrated directly into the Showcase."
          />
        }
      />
      <Route
        path="/thirasia"
        element={
          <SectionPlaceholderPage
            eyebrow="Beyond Santorini"
            title="Thirasia Experiences"
            description="Special tours and curated experiences on Thirasia will be presented here."
          />
        }
      />
      <Route
        path="/nearby-islands"
        element={
          <SectionPlaceholderPage
            eyebrow="Sail further"
            title="Nearby Islands"
            description="Day trips and private escapes to nearby Cycladic islands will be presented here."
          />
        }
      />
    </Routes>
  );
}
