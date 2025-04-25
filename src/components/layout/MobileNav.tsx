
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HomeIcon, Users, Share2, ShoppingCart, Menu, X, User } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { useCart } from "@/components/ui/cart-context";

export const MobileNav = () => {
  const { user, isAdmin, logout } = useAuth();
  const { getItemCount } = useCart();
  
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-cyan-300 hover:bg-cyan-950/30"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent className="bg-black/90 border-cyan-500/30 text-white">
          <SheetHeader>
            <SheetTitle className="text-cyan-300">Меню</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-4 mt-6">
            <MobileNavLink 
              to="/" 
              icon={<HomeIcon className="h-5 w-5 text-cyan-300" />} 
              label="Главная" 
            />
            
            <MobileNavLink 
              to="/contacts" 
              icon={<Users className="h-5 w-5 text-cyan-300" />} 
              label="Контакты" 
            />
            
            <MobileNavLink 
              to="/social" 
              icon={<Share2 className="h-5 w-5 text-cyan-300" />} 
              label="Мы в соц. сетях" 
            />
            
            <Link to="/shop" className="flex items-center gap-2 p-2 hover:bg-cyan-950/30 rounded-md">
              <ShoppingCart className="h-5 w-5 text-cyan-300" />
              <span>Магазин</span>
              {getItemCount() > 0 && (
                <Badge className="bg-destructive text-xs">
                  {getItemCount()}
                </Badge>
              )}
            </Link>
            
            {user ? (
              <>
                <MobileNavLink 
                  to={isAdmin ? "/admin" : "/profile"} 
                  icon={<User className="h-5 w-5 text-cyan-300" />} 
                  label={isAdmin ? "Админ панель" : "Профиль"} 
                />
                <div 
                  className="flex items-center gap-2 p-2 hover:bg-cyan-950/30 rounded-md cursor-pointer"
                  onClick={() => logout()}
                >
                  <X className="h-5 w-5 text-cyan-300" />
                  <span>Выйти</span>
                </div>
              </>
            ) : (
              <MobileNavLink 
                to="/login" 
                icon={<User className="h-5 w-5 text-cyan-300" />} 
                label="Войти" 
              />
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

interface MobileNavLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

const MobileNavLink = ({ to, icon, label }: MobileNavLinkProps) => (
  <Link to={to} className="flex items-center gap-2 p-2 hover:bg-cyan-950/30 rounded-md">
    {icon}
    <span>{label}</span>
  </Link>
);
