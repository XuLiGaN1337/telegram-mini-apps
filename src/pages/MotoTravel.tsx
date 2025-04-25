
import MainLayout from "@/components/MainLayout";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const travelData = [
  {
    name: "МотоТрипс",
    description: "Планирование мотопутешествий, маршруты, советы",
    website: "https://mototrips.ru",
    category: "Маршруты"
  },
  {
    name: "BikeTraveller",
    description: "Сообщество мототуристов, отзывы о местах и маршрутах",
    website: "https://biketraveller.ru",
    category: "Сообщество"
  },
  {
    name: "МотоКарты",
    description: "Интерактивные карты с местами остановок, достопримечательностями",
    website: "https://motomaps.ru",
    category: "Карты"
  }
];

const MotoTravel = () => {
  return (
    <MainLayout>
      <div className="container py-8 mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">МотоПуть</h1>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {travelData.map((travel, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{travel.name}</CardTitle>
                <CardDescription>{travel.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-yellow-500 rounded-full">
                  {travel.category}
                </span>
              </CardContent>
              <CardFooter>
                <a href={travel.website} target="_blank" rel="noopener noreferrer" className="w-full">
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

export default MotoTravel;
