
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/MainLayout";

const MediaContent = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="container py-8 mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">МедиаКонтент</h1>
        
        <div className="grid gap-4 max-w-md mx-auto">
          <Button 
            variant="default" 
            className="h-16 text-lg bg-[#0EA5E9] hover:bg-[#33C3F0]"
            onClick={() => navigate("/educational-materials")}
          >
            Обучающие материалы
          </Button>
          
          <Button 
            variant="default" 
            className="h-16 text-lg bg-[#0EA5E9] hover:bg-[#33C3F0]"
            onClick={() => navigate("/entertainment-content")}
          >
            Развлекательный контент
          </Button>
          
          <Button 
            variant="default" 
            className="h-16 text-lg bg-[#0EA5E9] hover:bg-[#33C3F0]"
            onClick={() => navigate("/technical-info")}
          >
            Техничка
          </Button>
          
          <Button 
            variant="default" 
            className="h-16 text-lg bg-[#0EA5E9] hover:bg-[#33C3F0]"
            onClick={() => navigate("/moto-travel")}
          >
            МотоПуть
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default MediaContent;
