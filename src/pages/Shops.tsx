import { Link } from "react-router-dom";
import MainLayout from "@/components/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HardHat, Bike } from "lucide-react";

const Shops = () => {
  return (
    <MainLayout>
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-white">Магазины</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/moto-equipment" className="transform transition duration-300 hover:scale-105">
            <Card className="h-full border-2 border-primary/20 bg-black/60 backdrop-blur-sm text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <CardHeader className="bg-gradient-to-r from-primary/20 to-transparent pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">МотоЭкипировка</CardTitle>
                  <HardHat className="h-6 w-6 text-primary animate-pulse" />
                </div>
                <CardDescription className="text-gray-300">
                  Шлемы, экипировка, аксессуары
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <p>Лучшие магазины мотоэкипировки с широким ассортиментом и доставкой.</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/moto-salons" className="transform transition duration-300 hover:scale-105">
            <Card className="h-full border-2 border-secondary/20 bg-black/60 backdrop-blur-sm text-white shadow-[0_0_15px_rgba(96,165,250,0.5)]">
              <CardHeader className="bg-gradient-to-r from-secondary/20 to-transparent pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">МотоСалоны</CardTitle>
                  <Bike className="h-6 w-6 text-secondary animate-pulse" />
                </div>
                <CardDescription className="text-gray-300">
                  Мотоциклы, скутеры, квадроциклы
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <p>Официальные дилерские центры и мотосалоны с новой и б/у техникой.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default Shops;