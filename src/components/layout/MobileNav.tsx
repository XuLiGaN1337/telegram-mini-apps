import { useState } from 'react';
import { Menu, ShoppingCart } from 'lucide-react';
import { Sheet, SheetTrigger } from '@/components/ui/sheet';
import { MobileNavContent } from './mobile-nav/MobileNavContent';
import { useCart } from '@/components/ui/cart-context';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

/**
 * Mobile navigation component with slide-out drawer
 */
export const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const { getItemCount } = useCart();
  const itemCount = getItemCount();
  
  return (
    <div className="flex items-center space-x-4 md:hidden">
      {/* Cart Button */}
      <Link to="/cart" className="relative">
        <ShoppingCart className="h-6 w-6 text-cyan-300" />
        {itemCount > 0 && (
          <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-red-500">
            {itemCount}
          </Badge>
        )}
      </Link>
      
      {/* Mobile Menu Trigger */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button className="text-cyan-300 p-1">
            <Menu className="h-6 w-6" />
          </button>
        </SheetTrigger>
        
        <MobileNavContent open={open} onOpenChange={setOpen} />
      </Sheet>
    </div>
  );
};
