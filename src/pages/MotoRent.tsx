
import MainLayout from "@/components/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Car, MapPin, Phone } from "lucide-react";

const MotoRent = () => {
  return (
    <MainLayout>
      <div className="container mx-auto py-8 px-4 relative">
        <div className="moto-logo"></div>
        
        <div className="flex items-center gap-3 mb-8 justify-center">
          <Car className="h-8 w-8 text-accent" />
          <h1 className="text-3xl font-bold text-center text-white">Аренда мототехники</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="card-translucent border-accent/20 shadow-neon">
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold text-cyan-300 mb-4">MotoRentTyumen</h2>
              <p className="mb-3">Прокат спортивных и туристических мотоциклов. Широкий выбор от 250 до 1200 кубов.</p>
              <div className="flex flex-col gap-2 text-cyan-200 mt-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>ул. Пермякова, 28</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+7 (345) 277-55-22</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-translucent border-accent/20 shadow-neon">
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold text-cyan-300 mb-4">Ride & Drive</h2>
              <p className="mb-3">Аренда мотоциклов и квадроциклов. Почасовая и суточная оплата. Экипировка включена.</p>
              <div className="flex flex-col gap-2 text-cyan-200 mt-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>ул. 50 лет Октября, 14</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+7 (345) 299-83-75</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-translucent border-accent/20 shadow-neon">
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold text-cyan-300 mb-4">RentBike72</h2>
              <p className="mb-3">Аренда мотоциклов для фотосессий, мероприятий и поездок выходного дня. Доставка по городу.</p>
              <div className="flex flex-col gap-2 text-cyan-200 mt-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>ул. Мельникайте, 98</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+7 (345) 260-19-78</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default MotoRent;
