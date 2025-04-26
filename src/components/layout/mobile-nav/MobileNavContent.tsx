import { ReactNode } from 'react';
import { SheetContent } from '@/components/ui/sheet';
import { MobileNavHeader } from './MobileNavHeader';
import { MobileNavSection } from './MobileNavSection';
import { NavLink } from './NavLink';
import { MobileNavAccordion } from './MobileNavAccordion';
import { MobileNavAuth } from './MobileNavAuth';
import { useAuth } from '@/hooks/use-auth';
import { 
  Home, ShoppingBag, Phone, MessageCircle, 
  BookOpen, Bike, Wrench, Map, Video, School, Heart, Truck
} from 'lucide-react';

interface MobileNavContentProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

/**
 * Content component for mobile navigation drawer
 */
export const MobileNavContent = ({ open, onOpenChange }: MobileNavContentProps) => {
  const { user, logout } = useAuth();
  
  const handleClose = () => {
    onOpenChange(false);
  };
  
  const handleLogout = () => {
    logout();
    handleClose();
  };
  
  const accordionSections = [
    {
      title: 'Информация',
      icon: <BookOpen className="h-4 w-4 mr-3" />,
      items: [
        { to: '/educational-materials', label: 'Обучающие материалы' },
        { to: '/technical-info', label: 'Техническая информация' },
        { to: '/media-content', label: 'Медиа контент' },
        { to: '/entertainment-content', label: 'Развлекательный контент' }
      ]
    },
    {
      title: 'Мотоциклы',
      icon: <Bike className="h-4 w-4 mr-3" />,
      items: [
        { to: '/moto-salons', label: 'Мотосалоны' },
        { to: '/moto-equipment', label: 'Мотоэкипировка' },
        { to: '/moto-rent', label: 'Аренда мотоциклов' },
        { to: '/moto-schools', label: 'Мотошколы' }
      ]
    },
    {
      title: 'Сервис',
      icon: <Wrench className="h-4 w-4 mr-3" />,
      items: [
        { to: '/service-centers', label: 'Сервисные центры' },
        { to: '/professional-care', label: 'Профессиональный уход' },
        { to: '/moto-evacuation', label: 'Мотоэвакуация' },
        { to: '/shops', label: 'Магазины запчастей' }
      ]
    },
    {
      title: 'Путешествия',
      icon: <Map className="h-4 w-4 mr-3" />,
      items: [
        { to: '/moto-travel', label: 'Мотопутешествия' }
      ]
    }
  ];
  
  return (
    <SheetContent 
      side="left" 
      className="w-[85vw] sm:w-[350px] bg-black/95 border-r-primary/30 text-white"
      open={open}
      onOpenChange={onOpenChange}
    >
      <MobileNavHeader onClose={handleClose} />
      
      {/* Main Navigation */}
      <MobileNavSection className="pb-6 border-b border-primary/20">
        <NavLink to="/" icon={<Home className="h-5 w-5 mr-3" />} onClick={handleClose}>
          Главная
        </NavLink>
        <NavLink to="/shop" icon={<ShoppingBag className="h-5 w-5 mr-3" />} onClick={handleClose}>
          Магазин
        </NavLink>
        <NavLink to="/contacts" icon={<Phone className="h-5 w-5 mr-3" />} onClick={handleClose}>
          Контакты
        </NavLink>
        <NavLink to="/social" icon={<MessageCircle className="h-5 w-5 mr-3" />} onClick={handleClose}>
          Мы в соц. сетях
        </NavLink>
      </MobileNavSection>
      
      {/* Secondary Navigation */}
      <MobileNavSection title="Мото разделы">
        <MobileNavAccordion 
          sections={accordionSections}
          onLinkClick={handleClose}
        />
      </MobileNavSection>
      
      {/* Auth Navigation */}
      <MobileNavAuth 
        user={user} 
        onLogout={handleLogout} 
        onLinkClick={handleClose} 
      />
    </SheetContent>
  );
};
