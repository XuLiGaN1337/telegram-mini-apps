
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/MainLayout";

const Shops = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="container py-8 mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Магазин</h1>
        
        <div className="grid gap-4 max-w-md mx-auto">
          <Button 
            variant="default" 
            className="h-16 text-lg bg-[#8B5CF6] hover:bg-[#7E69AB]"
            onClick={() => navigate("/moto-equipment")}
          >
            МотоЭкипировка
          </Button>
          
          <Button 
            variant="default" 
            className="h-16 text-lg bg-[#9b87f5] hover:bg-[#7E69AB]"
            onClick={() => navigate("/moto-salons")}
          >
            МотоСалоны
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Shops;
