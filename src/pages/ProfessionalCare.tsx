
import MainLayout from "@/components/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, MapPin } from "lucide-react";

const ProfessionalCare = () => {
  return (
    <MainLayout>
      <div className="container mx-auto py-8 px-4 relative">
        <div className="moto-logo"></div>
        
        <div className="flex items-center gap-3 mb-8 justify-center">
          <Sparkles className="h-8 w-8 text-secondary" />
          <h1 className="text-3xl font-bold text-center text-white">Профессиональный уход за мототехникой</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="card-translucent border-secondary/20 shadow-neon">
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold text-cyan-300 mb-4">MotoClean</h2>
              <p className="mb-3">Профессиональная мойка, детейлинг, полировка и защитные покрытия для мотоциклов всех типов.</p>
              <div className="flex items-center gap-2 text-cyan-200 mt-4">
                <MapPin className="h-4 w-4" />
                <span>ул. Республики, 157А</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-translucent border-secondary/20 shadow-neon">
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold text-cyan-300 mb-4">BikeDetailing</h2>
              <p className="mb-3">Керамическое покрытие, антикоррозийная обработка, подготовка к сезону и консервация на зиму.</p>
              <div className="flex items-center gap-2 text-cyan-200 mt-4">
                <MapPin className="h-4 w-4" />
                <span>ул. Максима Горького, 44</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-translucent border-secondary/20 shadow-neon">
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold text-cyan-300 mb-4">MotoCare</h2>
              <p className="mb-3">Полный комплекс услуг по уходу за мотоциклом, химчистка экипировки, восстановление сидений.</p>
              <div className="flex items-center gap-2 text-cyan-200 mt-4">
                <MapPin className="h-4 w-4" />
                <span>ул. Федюнинского, 32</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProfessionalCare;
