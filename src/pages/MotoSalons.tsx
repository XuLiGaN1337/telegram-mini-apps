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
import { ExternalLink, Car } from "lucide-react";

const salonData = [
  {
    name: "МотоМир",
    description: "Официальный дилер Honda, Yamaha, Suzuki, Kawasaki",
    website: "https://motomir.ru",
    address: "г. Москва, Мотопроспект, 55",
  },
  {
    name: "БайкЦентр",
    description: "Крупнейший салон мототехники в России",
    website: "https://bikecenter.ru",
    address: "г. Санкт-Петербург, Мотокольцо, 23",
  },
  {
    name: "МотоЛэнд",
    description: "Продажа новых и б/у мотоциклов, квадроциклов",
    website: "https://motoland.ru",
    address: "г. Екатеринбург, пр. Гонщиков, 88",
  },
];

const MotoSalons = () => {
  return (
    <MainLayout>
      <div className="container py-8 mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">МотоСалоны</h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {salonData.map((salon, index) => (
            <Card
              key={index}
              className="h-full border-2 border-primary/20 bg-black/60 backdrop-blur-sm text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            >
              <CardHeader className="bg-gradient-to-r from-primary/20 to-transparent pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white">{salon.name}</CardTitle>
                  <Car className="h-6 w-6 text-primary animate-pulse" />
                </div>
                <CardDescription className="text-gray-300">
                  {salon.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-300">{salon.address}</p>
              </CardContent>
              <CardFooter>
                <a
                  href={salon.website}
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

export default MotoSalons;
