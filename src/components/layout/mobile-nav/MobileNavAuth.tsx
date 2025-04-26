import { User } from '@/hooks/use-auth';
import { MobileNavSection } from './MobileNavSection';
import { NavLink } from './NavLink';
import { User as UserIcon, LogOut, AlertTriangle, ShoppingBag } from 'lucide-react';

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
    <MobileNavSection 
      title="Аккаунт" 
      className="border-t border-primary/20 pt-4 mt-4"
    >
      {user ? (
        <>
          <div className="px-4 py-2 mb-2 bg-primary/10 rounded-md">
            <p className="text-sm font-semibold">{user.name}</p>
            <p className="text-xs text-gray-400">{user.email}</p>
          </div>
          
          <NavLink 
            to="/profile" 
            icon={<UserIcon className="h-4 w-4 mr-3" />}
            onClick={onLinkClick}
          >
            Мой профиль
          </NavLink>
          
          <NavLink 
            to="/cart" 
            icon={<ShoppingBag className="h-4 w-4 mr-3" />}
            onClick={onLinkClick}
          >
            Моя корзина
          </NavLink>
          
          <button 
            className="flex items-center w-full px-4 py-2 text-sm hover:bg-primary/10 rounded-md"
            onClick={onLogout}
          >
            <LogOut className="h-4 w-4 mr-3" />
            Выйти
          </button>
        </>
      ) : (
        <NavLink 
          to="/login" 
          icon={<AlertTriangle className="h-4 w-4 mr-3" />}
          onClick={onLinkClick}
        >
          Войти / Регистрация
        </NavLink>
      )}
    </MobileNavSection>
  );
};
