
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Bike, ChevronLeft, HomeIcon } from "lucide-react";
import { DesktopNav } from "@/components/layout/DesktopNav";
import { MobileNav } from "@/components/layout/MobileNav";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  
  return (
    <header className="bg-black/30 text-cyan-300 p-4 flex justify-between items-center shadow-lg backdrop-blur-[2px] sticky top-0 z-10 border-b border-cyan-500/30">
      <div className="flex gap-3 items-center">
        <div className="flex items-center">
          <Bike className="h-6 w-6 text-cyan-400" />
          
          {!isHomePage && (
            <>
              <button 
                className="nav-button mx-1 z-10"
                onClick={() => navigate(-1)}
              >
                <ChevronLeft className="h-4 w-4 text-cyan-300 z-20 relative" />
              </button>
              
              <Link to="/">
                <button className="nav-button mx-1 z-10">
                  <HomeIcon className="h-4 w-4 text-cyan-300 z-20 relative" />
                </button>
              </Link>
            </>
          )}
          
          <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent ml-2">
            Меню MOTOTyumen
          </h1>
        </div>
      </div>
      
      {/* Desktop Navigation */}
      <DesktopNav />
      
      {/* Mobile Navigation */}
      <MobileNav />
    </header>
  );
};
