import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

interface AccordionNavLinkProps {
  to: string;
  children: ReactNode;
  onClick?: () => void;
}

/**
 * Accordion navigation link component for mobile menu
 */
export const AccordionNavLink = ({ to, children, onClick }: AccordionNavLinkProps) => (
  <Link
    to={to}
    className="text-gray-300 hover:text-cyan-300 py-1 transition-colors"
    onClick={onClick}
  >
    {children}
  </Link>
);
