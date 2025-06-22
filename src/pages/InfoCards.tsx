import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ShoppingBag,
  Radio,
  Wrench,
  TruckIcon,
  Sparkles,
  Car,
  GraduationCap,
  ShoppingCart,
  AlertTriangle,
} from "lucide-react";

export const InfoCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Link
        to="/shops"
        className="transform transition duration-300 hover:scale-105"
      >
        <Card className="h-full border-2 border-primary/20 bg-black/60 backdrop-blur-sm text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]">
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

      <Link
        to="/media-content"
        className="transform transition duration-300 hover:scale-105"
      >
        <Card className="h-full border-2 border-primary/20 bg-black/60 backdrop-blur-sm text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]">
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

      <Link
        to="/service-centers"
        className="transform transition duration-300 hover:scale-105"
      >
        <Card className="h-full border-2 border-primary/20 bg-black/60 backdrop-blur-sm text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]">
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

      <Link
        to="/moto-evacuation"
        className="transform transition duration-300 hover:scale-105"
      >
        <Card className="h-full border-2 border-primary/20 bg-black/60 backdrop-blur-sm text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]">
          <CardHeader className="bg-gradient-to-r from-primary/20 to-transparent pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">МотоЭвакуатор</CardTitle>
              <TruckIcon className="h-6 w-6 text-primary animate-pulse" />
            </div>
            <CardDescription className="text-gray-300">
              Эвакуация мотоциклов
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <p>Надежные службы эвакуации мототехники в любое время суток.</p>
          </CardContent>
        </Card>
      </Link>

      <Link
        to="/professional-care"
        className="transform transition duration-300 hover:scale-105"
      >
        <Card className="h-full border-2 border-primary/20 bg-black/60 backdrop-blur-sm text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]">
          <CardHeader className="bg-gradient-to-r from-secondary/20 to-transparent pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Профессиональный уход</CardTitle>
              <Sparkles className="h-6 w-6 text-secondary animate-pulse" />
            </div>
            <CardDescription className="text-gray-300">
              Уход за мототехникой
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <p>Профессиональные услуги по детейлингу и уходу за мотоциклом.</p>
          </CardContent>
        </Card>
      </Link>

      <Link
        to="/moto-rent"
        className="transform transition duration-300 hover:scale-105"
      >
        <Card className="h-full border-2 border-primary/20 bg-black/60 backdrop-blur-sm text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]">
          <CardHeader className="bg-gradient-to-r from-accent/20 to-transparent pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Аренда мото</CardTitle>
              <Car className="h-6 w-6 text-accent animate-pulse" />
            </div>
            <CardDescription className="text-gray-300">
              Аренда мототехники
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <p>Широкий выбор мотоциклов для аренды на любой срок.</p>
          </CardContent>
        </Card>
      </Link>

      <Link
        to="/moto-schools"
        className="transform transition duration-300 hover:scale-105"
      >
        <Card className="h-full border-2 border-primary/20 bg-black/60 backdrop-blur-sm text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]">
          <CardHeader className="bg-gradient-to-r from-primary/20 to-transparent pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">МотоШколы</CardTitle>
              <GraduationCap className="h-6 w-6 text-primary animate-pulse" />
            </div>
            <CardDescription className="text-gray-300">
              Обучение вождению мотоцикла
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <p>Лучшие школы для начинающих и опытных мотоциклистов.</p>
          </CardContent>
        </Card>
      </Link>

      <Link
        to="/shop"
        className="transform transition duration-300 hover:scale-105"
      >
        <Card className="h-full border-2 border-primary/20 bg-black/60 backdrop-blur-sm text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]">
          <CardHeader className="bg-gradient-to-r from-secondary/20 to-transparent pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Магазин</CardTitle>
              <ShoppingCart className="h-6 w-6 text-secondary animate-pulse" />
            </div>
            <CardDescription className="text-gray-300">
              Товары для мотоциклистов
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <p>Эксклюзивные товары и аксессуары для вашего мотоцикла.</p>
          </CardContent>
        </Card>
      </Link>

      <Link
        to="/moto-events"
        className="transform transition duration-300 hover:scale-105"
      >
        <Card className="h-full border-2 border-primary/20 bg-black/60 backdrop-blur-sm text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]">
          <CardHeader className="bg-gradient-to-r from-accent/20 to-transparent pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Мото События</CardTitle>
              <AlertTriangle className="h-6 w-6 text-accent animate-pulse" />
            </div>
            <CardDescription className="text-gray-300">
              Календарь мото событий
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <p>Актуальная информация о предстоящих мотособытиях в регионе.</p>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default InfoCards;
