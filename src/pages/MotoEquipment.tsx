import MainLayout from "@/components/MainLayout";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, HardHat, Shirt } from "lucide-react";

const shopData = [
  {
    name: "МотоЭкип",
    description: "Широкий выбор мотоэкипировки от ведущих производителей",
    website: "https://motoequip.ru",
    address: "г. Москва, ул. Мотоциклетная, 10",
  },
  {
    name: "Байкер Зона",
    description: "Качественная экипировка для мотоциклистов, шлемы, защита",
    website: "https://bikerzone.ru",
    address: "г. Санкт-Петербург, пр. Мотористов, 15",
  },
  {
    name: "МотоГрад",
    description: "Экипировка, аксессуары и запчасти для мотоциклов",
    website: "https://motograd.ru",
    address: "г. Казань, ул. Спортивная, 22",
  },
];

const MotoEquipment = () => {
  return (
    <MainLayout>
      <div className="container py-8 mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
          <HardHat className="h-6 w-6" />
          МотоЭкипировка
        </h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shopData.map((shop, index) => (
            <Card
              key={index}
              className="h-full border-2 border-primary/20 bg-black/60 backdrop-blur-sm text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            >
              <CardHeader className="bg-gradient-to-r from-primary/20 to-transparent pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white">{shop.name}</CardTitle>
                  <Shirt className="h-6 w-6 text-primary animate-pulse" />
                </div>
                <CardDescription className="text-gray-300">
                  {shop.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-300">{shop.address}</p>
              </CardContent>
              <CardFooter>
                <a
                  href={shop.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full flex items-center gap-2 bg-primary hover:bg-primary/80">
                    Перейти на сайт <ExternalLink size={16} />
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default MotoEquipment;
