
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
    <div className="min-h-screen bg-gray-50">
      <header className="bg-primary text-primary-foreground p-4 flex justify-between items-center">
        <div className="flex gap-2 items-center">
          {showBackButton && (
            <Link to="/">
              <Button variant="ghost" size="icon" className="text-primary-foreground">
                <HomeIcon className="h-5 w-5" />
              </Button>
            </Link>
          )}
          <h1 className="text-xl font-bold">Мото Меню</h1>
        </div>
      </header>
      <main>
        {children}
      </main>
      <footer className="p-4 text-center text-sm text-gray-500 mt-8">
        © {new Date().getFullYear()} Мото Меню
      </footer>
    </div>
  );
};

export default MainLayout;
