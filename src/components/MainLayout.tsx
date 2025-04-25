
import { Link, useNavigate } from "react-router-dom";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { HomeIcon, Bike, ChevronLeft, Users, Share2 } from "lucide-react";

interface MainLayoutProps {
  children: ReactNode;
  showBackButton?: boolean;
}

const MainLayout = ({ children, showBackButton = true }: MainLayoutProps) => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col bg-carbon-pattern">
      <header className="bg-black/40 text-cyan-300 p-4 flex justify-between items-center shadow-lg backdrop-blur-sm sticky top-0 z-10 border-b border-cyan-500/30">
        <div className="flex gap-3 items-center">
          {showBackButton && (
            <>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-cyan-300 hover:bg-cyan-950/30 hover:text-cyan-200 rounded-full shadow-neon"
                onClick={() => navigate(-1)}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              <Link to="/">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-cyan-300 hover:bg-cyan-950/30 hover:text-cyan-200 rounded-full shadow-neon"
                >
                  <HomeIcon className="h-5 w-5" />
                </Button>
              </Link>
            </>
          )}
          
          <div className="flex items-center gap-2">
            <Bike className="h-6 w-6 text-cyan-400 animate-pulse" />
            <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Меню MOTOTyumen
            </h1>
          </div>
        </div>
        
        <div className="flex gap-3">
          <Link to="/contacts">
            <Button 
              variant="ghost" 
              className="text-cyan-300 hover:bg-cyan-950/30 hover:text-cyan-200 px-3 py-1 h-9 shadow-neon-sm"
            >
              <Users className="h-4 w-4 mr-1" />
              Контакты
            </Button>
          </Link>
          
          <Link to="/social">
            <Button 
              variant="ghost" 
              className="text-cyan-300 hover:bg-cyan-950/30 hover:text-cyan-200 px-3 py-1 h-9 shadow-neon-sm"
            >
              <Share2 className="h-4 w-4 mr-1" />
              Мы в соц. сетях
            </Button>
          </Link>
        </div>
      </header>
      
      <main className="flex-grow">
        {children}
      </main>
      
      <footer className="p-4 text-center text-sm text-cyan-400/80 bg-black/50 backdrop-blur-sm border-t border-cyan-500/20">
        © {new Date().getFullYear()} Меню MOTOTyumen
      </footer>
    </div>
  );
};

export default MainLayout;
