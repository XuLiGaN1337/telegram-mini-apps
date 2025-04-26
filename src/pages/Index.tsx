
import MainLayout from "@/components/MainLayout";
import { InfoCards } from "@/pages/InfoCards";

const Index = () => {
  return (
    <MainLayout showBackButton={false}>
      <div className="container mx-auto py-8 px-4 relative z-10">        
        <h1 className="text-3xl font-bold text-center mb-8 text-white">Добро пожаловать в MOTOTyumen</h1>
        <InfoCards />
      </div>
    </MainLayout>
  );
};

export default Index;
