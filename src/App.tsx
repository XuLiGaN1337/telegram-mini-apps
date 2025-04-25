
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Shops from "./pages/Shops";
import MotoEquipment from "./pages/MotoEquipment";
import MotoSalons from "./pages/MotoSalons";
import MediaContent from "./pages/MediaContent";
import EducationalMaterials from "./pages/EducationalMaterials";
import EntertainmentContent from "./pages/EntertainmentContent";
import TechnicalInfo from "./pages/TechnicalInfo";
import MotoTravel from "./pages/MotoTravel";
import ServiceCenters from "./pages/ServiceCenters";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/moto-equipment" element={<MotoEquipment />} />
          <Route path="/moto-salons" element={<MotoSalons />} />
          <Route path="/media-content" element={<MediaContent />} />
          <Route path="/educational-materials" element={<EducationalMaterials />} />
          <Route path="/entertainment-content" element={<EntertainmentContent />} />
          <Route path="/technical-info" element={<TechnicalInfo />} />
          <Route path="/moto-travel" element={<MotoTravel />} />
          <Route path="/service-centers" element={<ServiceCenters />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
