
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/hooks/use-auth';
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
import MotoEvacuation from '@/pages/MotoEvacuation';
import ProfessionalCare from '@/pages/ProfessionalCare';
import MotoRent from '@/pages/MotoRent';
import MotoSchools from '@/pages/MotoSchools';
import Shop from '@/pages/Shop';
import Cart from '@/pages/Cart';
import Login from '@/pages/Login';
import Profile from '@/pages/Profile';
import Admin from '@/pages/Admin';
import './App.css';

function App() {
  return (
    <AuthProvider>
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
          <Route path="/moto-evacuation" element={<MotoEvacuation />} />
          <Route path="/professional-care" element={<ProfessionalCare />} />
          <Route path="/moto-rent" element={<MotoRent />} />
          <Route path="/moto-schools" element={<MotoSchools />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
