
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
import IndexPage from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import ShopsPage from "@/pages/Shops";
import MotoEquipmentPage from "@/pages/MotoEquipment";
import MotoSalonsPage from "@/pages/MotoSalons";
import MediaContentPage from "@/pages/MediaContent";
import EducationalMaterialsPage from "@/pages/EducationalMaterials";
import EntertainmentContentPage from "@/pages/EntertainmentContent";
import TechnicalInfoPage from "@/pages/TechnicalInfo";
import MotoTravelPage from "@/pages/MotoTravel";
import ServiceCentersPage from "@/pages/ServiceCenters";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/shops" element={<ShopsPage />} />
        <Route path="/moto-equipment" element={<MotoEquipmentPage />} />
        <Route path="/moto-salons" element={<MotoSalonsPage />} />
        <Route path="/media-content" element={<MediaContentPage />} />
        <Route path="/educational-materials" element={<EducationalMaterialsPage />} />
        <Route path="/entertainment-content" element={<EntertainmentContentPage />} />
        <Route path="/technical-info" element={<TechnicalInfoPage />} />
        <Route path="/moto-travel" element={<MotoTravelPage />} />
        <Route path="/service-centers" element={<ServiceCentersPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
