
import MainLayout from "@/components/MainLayout";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const shopData = [
  {
    name: "МотоЭкип",
    description: "Широкий выбор мотоэкипировки от ведущих производителей",
    website: "https://motoequip.ru",
    address: "г. Москва, ул. Мотоциклетная, 10"
  },
  {
    name: "Байкер Зона",
    description: "Качественная экипировка для мотоциклистов, шлемы, защита",
    website: "https://bikerzone.ru",
    address: "г. Санкт-Петербург, пр. Мотористов, 15"
  },
  {
    name: "МотоГрад",
    description: "Экипировка, аксессуары и запчасти для мотоциклов",
    website: "https://motograd.ru",
    address: "г. Казань, ул. Спортивная, 22"
  }
];

const MotoEquipment = () => {
  return (
    <MainLayout>
      <div className="container py-8 mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">МотоЭкипировка</h1>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shopData.map((shop, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{shop.name}</CardTitle>
                <CardDescription>{shop.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{shop.address}</p>
              </CardContent>
              <CardFooter>
                <a href={shop.website} target="_blank" rel="noopener noreferrer" className="w-full">
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

export default MotoEquipment;
