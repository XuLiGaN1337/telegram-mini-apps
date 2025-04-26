
import { Link } from 'react-router-dom';
import { ShoppingCart, User, AlertTriangle } from 'lucide-react';
import { useCart } from '@/components/ui/cart-context';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/hooks/use-auth';

/**
 * Desktop navigation component
 */
export const DesktopNav = () => {
  const { getItemCount } = useCart();
  const { user } = useAuth();
  const itemCount = getItemCount();
  
  return (
    <nav className="hidden md:flex items-center space-x-6">
      <div className="flex items-center space-x-4">
        {/* Main Navigation */}
        <Link to="/" className="nav-link">Главная</Link>
        <Link to="/shop" className="nav-link">Магазин</Link>
        <Link to="/contacts" className="nav-link">Контакты</Link>
        
        {/* Cart Button */}
        <Link to="/cart" className="nav-button relative">
          <ShoppingCart className="h-5 w-5" />
          {itemCount > 0 && (
            <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-red-500">
              {itemCount}
            </Badge>
          )}
        </Link>
        
        {/* User Menu */}
        {user ? (
          <Link to="/profile" className="nav-button">
            <User className="h-5 w-5" />
          </Link>
        ) : (
          <Link to="/login" className="nav-button">
            <AlertTriangle className="h-5 w-5" />
          </Link>
        )}
      </div>
    </nav>
  );
};
