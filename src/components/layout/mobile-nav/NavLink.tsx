import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

interface NavLinkProps {
  to: string;
  icon?: ReactNode;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

/**
 * Navigation link component for mobile menu
 */
export const NavLink = ({ 
  to, 
  icon, 
  children, 
  onClick, 
  className = "text-gray-200 hover:text-cyan-300" 
}: NavLinkProps) => (
  <Link
    to={to}
    className={`flex items-center ${className} py-2 px-3 rounded-md transition-colors`}
    onClick={onClick}
  >
    {icon}
    {children}
  </Link>
);
