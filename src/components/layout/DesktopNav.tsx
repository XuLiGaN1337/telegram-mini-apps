import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ShoppingCart, User, AlertTriangle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/components/ui/cart-context';
import { useAuth } from '@/hooks/use-auth';
import { cn } from "@/lib/utils";

/**
 * Desktop navigation component
 */
export const DesktopNav = () => {
  const navigate = useNavigate();
  const { getItemCount } = useCart();
  const { user, logout } = useAuth();
  const itemCount = getItemCount();
  
  const [open, setOpen] = useState(false);
  
  const handleLogout = () => {
    logout();
    setOpen(false);
  };

  return (
    <div className="hidden md:flex items-center space-x-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/shop">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Магазин
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuTrigger>Информация</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <ListItem to="/educational-materials" title="Обучающие материалы" />
                <ListItem to="/technical-info" title="Техническая информация" />
                <ListItem to="/media-content" title="Медиа контент" />
                <ListItem to="/entertainment-content" title="Развлекательный контент" />
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuTrigger>Мотоциклы</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <ListItem to="/moto-salons" title="Мотосалоны" />
                <ListItem to="/moto-equipment" title="Мотоэкипировка" />
                <ListItem to="/moto-rent" title="Аренда мотоциклов" />
                <ListItem to="/moto-schools" title="Мотошколы" />
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuTrigger>Сервис</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <ListItem to="/service-centers" title="Сервисные центры" />
                <ListItem to="/professional-care" title="Профессиональный уход" />
                <ListItem to="/moto-evacuation" title="Мотоэвакуация" />
                <ListItem to="/shops" title="Магазины запчастей" />
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <Link to="/contacts">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Контакты
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <Link to="/social">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Соц. сети
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      
      <div className="flex items-center space-x-4">
        {/* Cart Button */}
        <Link to="/cart" className="relative">
          <ShoppingCart className="h-6 w-6 text-cyan-300" />
          {itemCount > 0 && (
            <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-red-500">
              {itemCount}
            </Badge>
          )}
        </Link>
        
        {/* User Menu */}
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger asChild>
            <button className="text-cyan-300 p-1">
              <User className="h-6 w-6" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            {user ? (
              <>
                <div className="px-2 py-1.5 text-sm font-medium">
                  Привет, {user.name || 'Пользователь'}
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => { setOpen(false); navigate('/profile'); }}>
                  Профиль
                </DropdownMenuItem>
                {user.isAdmin && (
                  <DropdownMenuItem onClick={() => { setOpen(false); navigate('/admin'); }}>
                    Админ панель
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem onClick={handleLogout}>
                  Выйти
                </DropdownMenuItem>
              </>
            ) : (
              <DropdownMenuItem onClick={() => { setOpen(false); navigate('/login'); }}>
                Войти
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

// Helper component for navigation items
const ListItem = ({ to, title, children }: { to: string; title: string; children?: React.ReactNode }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={to}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          )}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {children && <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>}
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
