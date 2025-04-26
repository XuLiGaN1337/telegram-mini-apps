import { useState } from 'react';
import { Sheet, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { MobileNavContent } from './mobile-nav/MobileNavContent';

interface MobileNavProps {
  className?: string;
}

/**
 * Mobile navigation component with slide-out drawer
 * Refactored for better modularity and maintainability
 */
export const MobileNav = ({ className }: MobileNavProps) => {
  const [open, setOpen] = useState(false);
  
  return (
    <div className={className}>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="relative">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        
        <MobileNavContent 
          open={open} 
          onOpenChange={setOpen}
        />
      </Sheet>
    </div>
  );
};
