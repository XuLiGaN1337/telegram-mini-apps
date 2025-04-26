import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface MobileNavHeaderProps {
  onClose: () => void;
}

/**
 * Header component for mobile navigation drawer
 */
export const MobileNavHeader = ({ onClose }: MobileNavHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-8">
      <Link to="/" onClick={onClose} className="flex items-center">
        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
          MOTOTyumen
        </span>
      </Link>
      <Button variant="ghost" size="icon" onClick={onClose}>
        <X className="h-5 w-5" />
      </Button>
    </div>
  );
};
