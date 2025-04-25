
import { Link } from "react-router-dom";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";

interface MainLayoutProps {
  children: ReactNode;
  showBackButton?: boolean;
}

const MainLayout = ({ children, showBackButton = true }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary/90 text-primary-foreground p-4 flex justify-between items-center shadow-lg backdrop-blur-sm sticky top-0 z-10">
        <div className="flex gap-2 items-center">
          {showBackButton && (
            <Link to="/">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/80 rounded-full">
                <HomeIcon className="h-5 w-5" />
              </Button>
            </Link>
          )}
          <h1 className="text-xl font-bold">Мото Меню</h1>
        </div>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="p-4 text-center text-sm text-gray-300 bg-black/50 backdrop-blur-sm">
        © {new Date().getFullYear()} Мото Меню
      </footer>
    </div>
  );
};

export default MainLayout;
