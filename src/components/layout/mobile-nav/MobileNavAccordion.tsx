import { ReactNode } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { AccordionNavLink } from './AccordionNavLink';

interface AccordionSection {
  title: string;
  icon: ReactNode;
  items: Array<{
    to: string;
    label: string;
  }>;
}

interface MobileNavAccordionProps {
  sections: AccordionSection[];
  onLinkClick: () => void;
}

/**
 * Accordion navigation component for mobile menu
 */
export const MobileNavAccordion = ({ sections, onLinkClick }: MobileNavAccordionProps) => {
  return (
    <Accordion type="multiple" className="space-y-2 w-full">
      {sections.map((section, index) => (
        <AccordionItem 
          key={`accordion-item-${index}`} 
          value={`item-${index + 1}`} 
          className="border-b-0"
        >
          <AccordionTrigger className="py-2 text-base hover:no-underline hover:text-cyan-300">
            <div className="flex items-center">
              {section.icon}
              <span>{section.title}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pl-7">
            <div className="flex flex-col space-y-2 pt-2">
              {section.items.map((item, itemIndex) => (
                <AccordionNavLink 
                  key={`accordion-link-${index}-${itemIndex}`}
                  to={item.to} 
                  onClick={onLinkClick}
                >
                  {item.label}
                </AccordionNavLink>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
