
import MainLayout from "@/components/MainLayout";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const salonData = [
  {
    name: "МотоМир",
    description: "Официальный дилер Honda, Yamaha, Suzuki, Kawasaki",
    website: "https://motomir.ru",
    address: "г. Москва, Мотопроспект, 55"
  },
  {
    name: "БайкЦентр",
    description: "Крупнейший салон мототехники в России",
    website: "https://bikecenter.ru",
    address: "г. Санкт-Петербург, Мотокольцо, 23"
  },
  {
    name: "МотоЛэнд",
    description: "Продажа новых и б/у мотоциклов, квадроциклов",
    website: "https://motoland.ru",
    address: "г. Екатеринбург, пр. Гонщиков, 88"
  }
];

const MotoSalons = () => {
  return (
    <MainLayout>
      <div className="container py-8 mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">МотоСалоны</h1>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {salonData.map((salon, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{salon.name}</CardTitle>
                <CardDescription>{salon.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{salon.address}</p>
              </CardContent>
              <CardFooter>
                <a href={salon.website} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="w-full flex items-center gap-2">
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
