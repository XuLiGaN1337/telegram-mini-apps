import { Link } from "react-router-dom";
import MainLayout from "@/components/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HardHat, Bike, Wrench, MapPin, Tool, Clock, Shirt, School, CalendarDays } from "lucide-react";

const Shops = () => {
  return (
    <MainLayout>
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-white">Магазины</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <Card className="h-full border-2 border-primary/20 bg-black/60 backdrop-blur-sm text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <CardHeader className="bg-gradient-to-r from-primary/20 to-transparent pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">МотоСалоны</CardTitle>
                  <Bike className="h-6 w-6 text-primary animate-pulse" />
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

          <Link to="/service-centers" className="transform transition duration-300 hover:scale-105">
            <Card className="h-full border-2 border-primary/20 bg-black/60 backdrop-blur-sm text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <CardHeader className="bg-gradient-to-r from-primary/20 to-transparent pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Сервис-центры</CardTitle>
                  <Wrench className="h-6 w-6 text-primary animate-pulse" />
                </div>
                <CardDescription className="text-gray-300">
                  Ремонт и обслуживание мототехники
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <p>Профессиональный ремонт, диагностика и техническое обслуживание.</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/moto-evacuation" className="transform transition duration-300 hover:scale-105">
            <Card className="h-full border-2 border-primary/20 bg-black/60 backdrop-blur-sm text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <CardHeader className="bg-gradient-to-r from-primary/20 to-transparent pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">МотоЭвакуация</CardTitle>
                  <MapPin className="h-6 w-6 text-primary animate-pulse" />
                </div>
                <CardDescription className="text-gray-300">
                  Экстренная помощь и транспортировка
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <p>Срочная эвакуация мототехники при поломках и ДТП в любое время суток.</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/professional-care" className="transform transition duration-300 hover:scale-105">
            <Card className="h-full border-2 border-primary/20 bg-black/60 backdrop-blur-sm text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <CardHeader className="bg-gradient-to-r from-primary/20 to-transparent pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Профессиональный уход</CardTitle>
                  <Tool className="h-6 w-6 text-primary animate-pulse" />
                </div>
                <CardDescription className="text-gray-300">
                  Детейлинг, мойка, консервация
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <p>Детейлинг-студии и автомойки, специализирующиеся на уходе за мототехникой.</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/moto-rent" className="transform transition duration-300 hover:scale-105">
            <Card className="h-full border-2 border-primary/20 bg-black/60 backdrop-blur-sm text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <CardHeader className="bg-gradient-to-r from-primary/20 to-transparent pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">МотоПрокат</CardTitle>
                  <Clock className="h-6 w-6 text-primary animate-pulse" />
                </div>
                <CardDescription className="text-gray-300">
                  Аренда мотоциклов и экипировки
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <p>Прокат мотоциклов различных классов и мощности для туризма и тест-драйва.</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/moto-schools" className="transform transition duration-300 hover:scale-105">
            <Card className="h-full border-2 border-primary/20 bg-black/60 backdrop-blur-sm text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <CardHeader className="bg-gradient-to-r from-primary/20 to-transparent pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">МотоШколы</CardTitle>
                  <School className="h-6 w-6 text-primary animate-pulse" />
                </div>
                <CardDescription className="text-gray-300">
                  Обучение вождению и права категории А
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <p>Автошколы с программой обучения для получения прав категории А и А1.</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/shop" className="transform transition duration-300 hover:scale-105">
            <Card className="h-full border-2 border-primary/20 bg-black/60 backdrop-blur-sm text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <CardHeader className="bg-gradient-to-r from-primary/20 to-transparent pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Онлайн-магазин</CardTitle>
                  <Shirt className="h-6 w-6 text-primary animate-pulse" />
                </div>
                <CardDescription className="text-gray-300">
                  Аксессуары, сувениры, атрибутика
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <p>Фирменная одежда, аксессуары и сувениры с мотоциклетной тематикой.</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/moto-events" className="transform transition duration-300 hover:scale-105">
            <Card className="h-full border-2 border-primary/20 bg-black/60 backdrop-blur-sm text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <CardHeader className="bg-gradient-to-r from-primary/20 to-transparent pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">МотоМероприятия</CardTitle>
                  <CalendarDays className="h-6 w-6 text-primary animate-pulse" />
                </div>
                <CardDescription className="text-gray-300">
                  Фестивали, выставки, мотозаезды
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <p>Календарь мотособытий и встреч байкеров в Тюмени и области.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default Shops;