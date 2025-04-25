
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Share2, ShoppingCart, User } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { useCart } from "@/components/ui/cart-context";

export const DesktopNav = () => {
  const { user, isAdmin } = useAuth();
  const { getItemCount } = useCart();
  
  return (
    <div className="hidden md:flex gap-3">
      <NavLink to="/contacts" icon={<Users className="h-4 w-4 mr-1" />} label="Контакты" />
      <NavLink to="/social" icon={<Share2 className="h-4 w-4 mr-1" />} label="Мы в соц. сетях" />
      
      <Link to="/shop">
        <Button 
          variant="ghost" 
          className="text-cyan-300 hover:bg-cyan-950/30 hover:text-cyan-200 px-3 py-1 h-9 shadow-neon-sm relative"
        >
          <ShoppingCart className="h-4 w-4 mr-1" />
          Магазин
          <CartBadge count={getItemCount()} />
        </Button>
      </Link>
      
      {user ? (
        <Link to={isAdmin ? "/admin" : "/profile"}>
          <Button 
            variant="ghost" 
            className="text-cyan-300 hover:bg-cyan-950/30 hover:text-cyan-200 px-3 py-1 h-9 shadow-neon-sm"
          >
            <User className="h-4 w-4 mr-1" />
            {isAdmin ? "Админ панель" : "Профиль"}
          </Button>
        </Link>
      ) : (
        <NavLink to="/login" icon={<User className="h-4 w-4 mr-1" />} label="Войти" />
      )}
    </div>
  );
};

interface NavLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

const NavLink = ({ to, icon, label }: NavLinkProps) => (
  <Link to={to}>
    <Button 
      variant="ghost" 
      className="text-cyan-300 hover:bg-cyan-950/30 hover:text-cyan-200 px-3 py-1 h-9 shadow-neon-sm"
    >
      {icon}
      {label}
    </Button>
  </Link>
);

interface CartBadgeProps {
  count: number;
}

const CartBadge = ({ count }: CartBadgeProps) => {
  if (count <= 0) return null;
  
  return (
    <Badge className="absolute -top-2 -right-2 bg-destructive text-xs">
      {count}
    </Badge>
  );
};
