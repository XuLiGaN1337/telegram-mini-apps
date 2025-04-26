
import { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

interface MainLayoutProps {
  children: ReactNode;
  showBackButton?: boolean;
}

/**
 * Main layout component for the application
 * Provides a consistent layout with header, main content area, and footer
 */
export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-carbon-pattern">
      <Header />
      
      <main className="flex-grow relative">
        <div className="moto-logo-new"></div>
        {children}
      </main>
      
      <Footer />
    </div>
  );
}

export default MainLayout;
