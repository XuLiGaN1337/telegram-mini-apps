import { ReactNode } from 'react';

interface MobileNavSectionProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

/**
 * Section component for mobile navigation
 */
export const MobileNavSection = ({ 
  children, 
  title, 
  className = "py-6" 
}: MobileNavSectionProps) => {
  return (
    <div className={className}>
      {title && (
        <h3 className="text-sm font-medium text-gray-400 mb-3">{title}</h3>
      )}
      {children}
    </div>
  );
};
