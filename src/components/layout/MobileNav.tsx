import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/use-auth';
import { 
  Menu, X, Home, ShoppingBag, User, LogIn, LogOut, 
  Phone, MessageCircle, BookOpen, Video, Motorcycle,
  Map, Tools, School, Wrench, Truck, Heart
} from 'lucide-react';

interface MobileNavProps {
  className?: string;
}

/**
 * Mobile navigation component with slide-out drawer
 */
export const MobileNav = ({ className }: MobileNavProps) => {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();
  
  const handleLogout = () => {
    logout();
    setOpen(false);
  };
  
  const handleLinkClick = () => {
    setOpen(false);
  };
  
  return (
    <div className={className}>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="relative">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent 
          side="left" 
          className="w-[85vw] sm:w-[350px] bg-black/95 border-r-primary/30 text-white"
        >
          <div className="flex items-center justify-between mb-8">
            <Link to="/" onClick={handleLinkClick} className="flex items-center">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                MOTOTyumen
              </span>
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Main Navigation */}
          <div className="pb-6 border-b border-primary/20">
            <NavLink to="/" icon={<Home className="h-5 w-5 mr-3" />} onClick={handleLinkClick}>
              Главная
            </NavLink>
            <NavLink to="/shop" icon={<ShoppingBag className="h-5 w-5 mr-3" />} onClick={handleLinkClick}>
              Магазин
            </NavLink>
            <NavLink to="/contacts" icon={<Phone className="h-5 w-5 mr-3" />} onClick={handleLinkClick}>
              Контакты
            </NavLink>
            <NavLink to="/social" icon={<MessageCircle className="h-5 w-5 mr-3" />} onClick={handleLinkClick}>
              Мы в соц. сетях
            </NavLink>
          </div>
          
          {/* Secondary Navigation */}
          <div className="py-6">
            <h3 className="text-sm font-medium text-gray-400 mb-3">Мото разделы</h3>
            
            <Accordion type="multiple" className="space-y-2 w-full">
              <AccordionItem value="item-1" className="border-b-0">
                <AccordionTrigger className="py-2 text-base hover:no-underline hover:text-cyan-300">
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-3" />
                    <span>Информация</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-7">
                  <div className="flex flex-col space-y-2 pt-2">
                    <AccordionNavLink to="/educational-materials" onClick={handleLinkClick}>
                      Обучающие материалы
                    </AccordionNavLink>
                    <AccordionNavLink to="/technical-info" onClick={handleLinkClick}>
                      Техническая информация
                    </AccordionNavLink>
                    <AccordionNavLink to="/media-content" onClick={handleLinkClick}>
                      Медиа контент
                    </AccordionNavLink>
                    <AccordionNavLink to="/entertainment-content" onClick={handleLinkClick}>
                      Развлекательный контент
                    </AccordionNavLink>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border-b-0">
                <AccordionTrigger className="py-2 text-base hover:no-underline hover:text-cyan-300">
                  <div className="flex items-center">
                    <Motorcycle className="h-4 w-4 mr-3" />
                    <span>Мотоциклы</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-7">
                  <div className="flex flex-col space-y-2 pt-2">
                    <AccordionNavLink to="/moto-salons" onClick={handleLinkClick}>
                      Мотосалоны
                    </AccordionNavLink>
                    <AccordionNavLink to="/moto-equipment" onClick={handleLinkClick}>
                      Мотоэкипировка
                    </AccordionNavLink>
                    <AccordionNavLink to="/moto-rent" onClick={handleLinkClick}>
                      Аренда мотоциклов
                    </AccordionNavLink>
                    <AccordionNavLink to="/moto-schools" onClick={handleLinkClick}>
                      Мотошколы
                    </AccordionNavLink>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border-b-0">
                <AccordionTrigger className="py-2 text-base hover:no-underline hover:text-cyan-300">
                  <div className="flex items-center">
                    <Tools className="h-4 w-4 mr-3" />
                    <span>Сервис</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-7">
                  <div className="flex flex-col space-y-2 pt-2">
                    <AccordionNavLink to="/service-centers" onClick={handleLinkClick}>
                      Сервисные центры
                    </AccordionNavLink>
                    <AccordionNavLink to="/professional-care" onClick={handleLinkClick}>
                      Профессиональный уход
                    </AccordionNavLink>
                    <AccordionNavLink to="/moto-evacuation" onClick={handleLinkClick}>
                      Мотоэвакуация
                    </AccordionNavLink>
                    <AccordionNavLink to="/shops" onClick={handleLinkClick}>
                      Магазины запчастей
                    </AccordionNavLink>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border-b-0">
                <AccordionTrigger className="py-2 text-base hover:no-underline hover:text-cyan-300">
                  <div className="flex items-center">
                    <Map className="h-4 w-4 mr-3" />
                    <span>Путешествия</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-7">
                  <div className="flex flex-col space-y-2 pt-2">
                    <AccordionNavLink to="/moto-travel" onClick={handleLinkClick}>
                      Мотопутешествия
                    </AccordionNavLink>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          {/* Auth Navigation */}
          <div className="pt-6 border-t border-primary/20">
            {user ? (
              <>
                <NavLink 
                  to="/profile" 
                  icon={<User className="h-5 w-5 mr-3" />}
                  onClick={handleLinkClick}
                >
                  Профиль
                </NavLink>
                {user.isAdmin && (
                  <NavLink 
                    to="/admin" 
                    icon={<Wrench className="h-5 w-5 mr-3" />}
                    onClick={handleLinkClick}
                  >
                    Админ панель
                  </NavLink>
                )}
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-950/30 py-2 px-3"
                  onClick={handleLogout}
                >
                  <LogOut className="h-5 w-5 mr-3" />
                  Выйти
                </Button>
              </>
            ) : (
              <NavLink 
                to="/login" 
                icon={<LogIn className="h-5 w-5 mr-3" />}
                onClick={handleLinkClick}
              >
                Войти
              </NavLink>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

interface NavLinkProps {
  to: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
}

/**
 * Navigation link component
 */
const NavLink = ({ to, icon, children, onClick }: NavLinkProps) => (
  <Link
    to={to}
    className="flex items-center text-gray-200 hover:text-cyan-300 py-2 px-3 rounded-md transition-colors"
    onClick={onClick}
  >
    {icon}
    {children}
  </Link>
);

interface AccordionNavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}

/**
 * Accordion navigation link component
 */
const AccordionNavLink = ({ to, children, onClick }: AccordionNavLinkProps) => (
  <Link
    to={to}
    className="text-gray-300 hover:text-cyan-300 py-1 transition-colors"
    onClick={onClick}
  >
    {children}
  </Link>
);
