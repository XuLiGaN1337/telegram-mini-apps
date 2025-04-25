
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { 
  HomeIcon, 
  Bike, 
  ChevronLeft, 
  Users, 
  Share2, 
  ShoppingCart, 
  Menu, 
  X,
  User,
  Bell
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useAuth } from "@/hooks/use-auth";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/components/ui/cart-context";

interface MainLayoutProps {
  children: ReactNode;
  showBackButton?: boolean;
}

const MainLayout = ({ children, showBackButton = true }: MainLayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, isAdmin, logout } = useAuth();
  const { getItemCount } = useCart();
  
  return (
    <div className="min-h-screen flex flex-col bg-carbon-pattern">
      <header className="bg-black/30 text-cyan-300 p-4 flex justify-between items-center shadow-lg backdrop-blur-[2px] sticky top-0 z-10 border-b border-cyan-500/30">
        <div className="flex gap-3 items-center">
          <div className="flex items-center">
            <Bike className="h-6 w-6 text-cyan-400" />
            
            {location.pathname !== "/" && (
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
        <div className="hidden md:flex gap-3">
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
          
          <Link to="/shop">
            <Button 
              variant="ghost" 
              className="text-cyan-300 hover:bg-cyan-950/30 hover:text-cyan-200 px-3 py-1 h-9 shadow-neon-sm relative"
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              Магазин
              {getItemCount() > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-destructive text-xs">
                  {getItemCount()}
                </Badge>
              )}
            </Button>
          </Link>
          
          {user ? (
            <Link to={isAdmin ? "/admin" : "/profile"}>
              <Button 
                variant="ghost" 
                className="text-cyan-300 hover:bg-cyan-950/30 hover:text-cyan-200 px-3 py-1 h-9 shadow-neon-sm"
              >
                <User className="h-4 w-4 mr-1" />
                {isAdmin ? "Админ панель" : "Профиль"}
              </Button>
            </Link>
          ) : (
            <Link to="/login">
              <Button 
                variant="ghost" 
                className="text-cyan-300 hover:bg-cyan-950/30 hover:text-cyan-200 px-3 py-1 h-9 shadow-neon-sm"
              >
                <User className="h-4 w-4 mr-1" />
                Войти
              </Button>
            </Link>
          )}
        </div>
        
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-cyan-300 hover:bg-cyan-950/30"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-black/90 border-cyan-500/30 text-white">
              <SheetHeader>
                <SheetTitle className="text-cyan-300">Меню</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-6">
                <Link to="/" className="flex items-center gap-2 p-2 hover:bg-cyan-950/30 rounded-md">
                  <HomeIcon className="h-5 w-5 text-cyan-300" />
                  <span>Главная</span>
                </Link>
                
                <Link to="/contacts" className="flex items-center gap-2 p-2 hover:bg-cyan-950/30 rounded-md">
                  <Users className="h-5 w-5 text-cyan-300" />
                  <span>Контакты</span>
                </Link>
                
                <Link to="/social" className="flex items-center gap-2 p-2 hover:bg-cyan-950/30 rounded-md">
                  <Share2 className="h-5 w-5 text-cyan-300" />
                  <span>Мы в соц. сетях</span>
                </Link>
                
                <Link to="/shop" className="flex items-center gap-2 p-2 hover:bg-cyan-950/30 rounded-md">
                  <ShoppingCart className="h-5 w-5 text-cyan-300" />
                  <span>Магазин</span>
                  {getItemCount() > 0 && (
                    <Badge className="bg-destructive text-xs">
                      {getItemCount()}
                    </Badge>
                  )}
                </Link>
                
                {user ? (
                  <>
                    <Link to={isAdmin ? "/admin" : "/profile"} className="flex items-center gap-2 p-2 hover:bg-cyan-950/30 rounded-md">
                      <User className="h-5 w-5 text-cyan-300" />
                      <span>{isAdmin ? "Админ панель" : "Профиль"}</span>
                    </Link>
                    <div 
                      className="flex items-center gap-2 p-2 hover:bg-cyan-950/30 rounded-md cursor-pointer"
                      onClick={() => logout()}
                    >
                      <X className="h-5 w-5 text-cyan-300" />
                      <span>Выйти</span>
                    </div>
                  </>
                ) : (
                  <Link to="/login" className="flex items-center gap-2 p-2 hover:bg-cyan-950/30 rounded-md">
                    <User className="h-5 w-5 text-cyan-300" />
                    <span>Войти</span>
                  </Link>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      
      <main className="flex-grow relative">
        <div className="moto-logo-new"></div>
        {children}
      </main>
      
      <footer className="p-4 text-center text-sm text-cyan-400/80 bg-black/50 backdrop-blur-sm border-t border-cyan-500/20">
        © {new Date().getFullYear()} MOTOTyumen FREE RIDERS
      </footer>
    </div>
  );
};

export default MainLayout;
