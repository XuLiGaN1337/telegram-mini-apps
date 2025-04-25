
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from '@/pages/Index';
import NotFound from '@/pages/NotFound';
import EducationalMaterials from '@/pages/EducationalMaterials';
import EntertainmentContent from '@/pages/EntertainmentContent';
import MediaContent from '@/pages/MediaContent';
import MotoEquipment from '@/pages/MotoEquipment';
import MotoSalons from '@/pages/MotoSalons';
import MotoTravel from '@/pages/MotoTravel';
import ServiceCenters from '@/pages/ServiceCenters';
import Shops from '@/pages/Shops';
import TechnicalInfo from '@/pages/TechnicalInfo';
import Contacts from '@/pages/Contacts';
import Social from '@/pages/Social';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/educational-materials" element={<EducationalMaterials />} />
        <Route path="/entertainment-content" element={<EntertainmentContent />} />
        <Route path="/media-content" element={<MediaContent />} />
        <Route path="/moto-equipment" element={<MotoEquipment />} />
        <Route path="/moto-salons" element={<MotoSalons />} />
        <Route path="/moto-travel" element={<MotoTravel />} />
        <Route path="/service-centers" element={<ServiceCenters />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/technical-info" element={<TechnicalInfo />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/social" element={<Social />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
