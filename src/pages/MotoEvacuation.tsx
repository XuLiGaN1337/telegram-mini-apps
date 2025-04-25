
import MainLayout from "@/components/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { TruckIcon, Phone } from "lucide-react";

const MotoEvacuation = () => {
  return (
    <MainLayout>
      <div className="container mx-auto py-8 px-4 relative">
        <div className="moto-logo"></div>
        
        <div className="flex items-center gap-3 mb-8 justify-center">
          <TruckIcon className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold text-center text-white">МотоЭвакуатор</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="card-translucent border-primary/20 shadow-neon">
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold text-cyan-300 mb-4">МотоТранс Тюмень</h2>
              <p className="mb-3">Круглосуточная служба эвакуации мототехники. Аккуратная погрузка и разгрузка любых видов мотоциклов.</p>
              <div className="flex items-center gap-2 text-cyan-200 mt-4">
                <Phone className="h-4 w-4" />
                <span>+7 (345) 267-88-91</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-translucent border-primary/20 shadow-neon">
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold text-cyan-300 mb-4">БайкЭвакуатор</h2>
              <p className="mb-3">Специализированная эвакуация мотоциклов и квадроциклов. Опытные специалисты с мотобэкграундом.</p>
              <div className="flex items-center gap-2 text-cyan-200 mt-4">
                <Phone className="h-4 w-4" />
                <span>+7 (345) 299-63-33</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-translucent border-primary/20 shadow-neon">
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold text-cyan-300 mb-4">СпецМотоПомощь</h2>
              <p className="mb-3">Техническая помощь и эвакуация мототехники на месте ДТП или поломки. Быстрый выезд по городу и области.</p>
              <div className="flex items-center gap-2 text-cyan-200 mt-4">
                <Phone className="h-4 w-4" />
                <span>+7 (345) 255-10-44</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default MotoEvacuation;
