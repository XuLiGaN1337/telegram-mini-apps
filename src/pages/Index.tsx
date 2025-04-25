
import { Link } from "react-router-dom";
import MainLayout from "@/components/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, Radio, Wrench } from "lucide-react";

const Index = () => {
  return (
    <MainLayout showBackButton={false}>
      <div className="container mx-auto py-8 px-4 relative">
        <div className="logo-background"></div>
        
        <h1 className="text-3xl font-bold text-center mb-8 text-white">Добро пожаловать в MOTOTyumen</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/shops" className="transform transition duration-300 hover:scale-105">
            <Card className="h-full border-2 border-primary/20 card-translucent text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <CardHeader className="bg-gradient-to-r from-primary/20 to-transparent pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Магазины</CardTitle>
                  <ShoppingBag className="h-6 w-6 text-primary animate-pulse" />
                </div>
                <CardDescription className="text-gray-300">
                  МотоЭкипировка и МотоСалоны
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <p>Ведущие магазины мотоэкипировки и салоны мототехники.</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/media-content" className="transform transition duration-300 hover:scale-105">
            <Card className="h-full border-2 border-secondary/20 card-translucent text-white shadow-[0_0_15px_rgba(96,165,250,0.5)]">
              <CardHeader className="bg-gradient-to-r from-secondary/20 to-transparent pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Медиа Контент</CardTitle>
                  <Radio className="h-6 w-6 text-secondary animate-pulse" />
                </div>
                <CardDescription className="text-gray-300">
                  Обучение, развлечения, техническая информация
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <p>Полезные материалы, блоги, руководства и многое другое.</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/service-centers" className="transform transition duration-300 hover:scale-105">
            <Card className="h-full border-2 border-accent/20 card-translucent text-white shadow-[0_0_15px_rgba(147,197,253,0.5)]">
              <CardHeader className="bg-gradient-to-r from-accent/20 to-transparent pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Сервисные центры</CardTitle>
                  <Wrench className="h-6 w-6 text-accent animate-pulse" />
                </div>
                <CardDescription className="text-gray-300">
                  Сервис и обслуживание мототехники
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <p>Лучшие сервисные центры для вашего мотоцикла.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
