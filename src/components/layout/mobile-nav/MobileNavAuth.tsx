import { User } from '@/types/admin';
import { NavLink } from './NavLink';
import { Button } from '@/components/ui/button';
import { LogIn, LogOut, User as UserIcon, Wrench } from 'lucide-react';

interface MobileNavAuthProps {
  user: User | null;
  onLogout: () => void;
  onLinkClick: () => void;
}

/**
 * Authentication section for mobile navigation
 */
export const MobileNavAuth = ({ user, onLogout, onLinkClick }: MobileNavAuthProps) => {
  return (
    <div className="pt-6 border-t border-primary/20">
      {user ? (
        <>
          <NavLink 
            to="/profile" 
            icon={<UserIcon className="h-5 w-5 mr-3" />}
            onClick={onLinkClick}
          >
            Профиль
          </NavLink>
          {user.isAdmin && (
            <NavLink 
              to="/admin" 
              icon={<Wrench className="h-5 w-5 mr-3" />}
              onClick={onLinkClick}
            >
              Админ панель
            </NavLink>
          )}
          <Button 
            variant="ghost" 
            className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-950/30 py-2 px-3"
            onClick={onLogout}
          >
            <LogOut className="h-5 w-5 mr-3" />
            Выйти
          </Button>
        </>
      ) : (
        <NavLink 
          to="/login" 
          icon={<LogIn className="h-5 w-5 mr-3" />}
          onClick={onLinkClick}
        >
          Войти
        </NavLink>
      )}
    </div>
  );
};
