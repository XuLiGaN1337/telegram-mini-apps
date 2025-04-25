
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/MainLayout";

const Index = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="container py-8 mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Мото Меню</h1>
        
        <div className="grid gap-4 max-w-md mx-auto">
          <Button 
            variant="default" 
            className="h-16 text-lg bg-[#8B5CF6] hover:bg-[#7E69AB]"
            onClick={() => navigate("/shops")}
          >
            Магазин
          </Button>
          
          <Button 
            variant="default" 
            className="h-16 text-lg bg-[#0EA5E9] hover:bg-[#33C3F0]"
            onClick={() => navigate("/media-content")}
          >
            МедиаКонтент
          </Button>
          
          <Button 
            variant="default" 
            className="h-16 text-lg bg-[#F97316] hover:bg-[#FEC6A1]"
            onClick={() => navigate("/service-centers")}
          >
            Сервисные центры
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
