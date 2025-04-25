
import MainLayout from "@/components/MainLayout";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, MapPin, Phone } from "lucide-react";

const serviceData = [
  {
    name: "МотоСервис Премиум",
    description: "Профессиональное обслуживание мотоциклов всех марок",
    website: "https://motoservice-premium.ru",
    address: "г. Москва, Сервисный проезд, 12",
    phone: "+7 (495) 123-45-67"
  },
  {
    name: "МотоДоктор",
    description: "Срочный ремонт мотоциклов, эвакуация, запчасти",
    website: "https://motodoctor.ru",
    address: "г. Санкт-Петербург, ул. Мотосервисная, 34",
    phone: "+7 (812) 987-65-43"
  },
  {
    name: "ПрофиМото",
    description: "Тюнинг, кастомизация, плановое ТО мотоциклов",
    website: "https://profimoto.ru",
    address: "г. Новосибирск, пр. Мастеров, 56",
    phone: "+7 (383) 765-43-21"
  }
];

const ServiceCenters = () => {
  return (
    <MainLayout>
      <div className="container py-8 mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Сервисные центры</h1>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceData.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{service.name}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-gray-500 mt-0.5" />
                  <p className="text-sm text-gray-600">{service.address}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <p className="text-sm text-gray-600">{service.phone}</p>
                </div>
              </CardContent>
              <CardFooter>
                <a href={service.website} target="_blank" rel="noopener noreferrer" className="w-full">
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

export default ServiceCenters;
