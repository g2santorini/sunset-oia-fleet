import { Route, Routes } from "react-router-dom";
import FleetPage from "./pages/FleetPage";
import VesselPage from "./pages/VesselPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<FleetPage />} />
      <Route path="/fleet/:slug" element={<VesselPage />} />
    </Routes>
  );
}
