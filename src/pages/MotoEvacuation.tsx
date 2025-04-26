import React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, AlertTriangle, MapPin, Clock } from "lucide-react";

const MotoEvacuation = () => {
  const evacuationServices = [
    {
      id: 1,
      name: "МотоЭвакуатор 72",
      phone: "+7 (345) 299-99-11",
      description: "Круглосуточная эвакуация мототехники в Тюмени и области",
      areas: ["Тюмень", "Тюменский район", "ХМАО", "ЯНАО"],
      workHours: "24/7",
      price: "от 1500 ₽",
      notes: "Бережная погрузка мототехники любого типа"
    },
    {
      id: 2,
      name: "БыстроТех",
      phone: "+7 (345) 277-77-22",
      description: "Срочная эвакуация мотоциклов, квадроциклов и другой мототехники",
      areas: ["Тюмень", "Тюменская область"],
      workHours: "8:00 - 23:00",
      price: "от 1800 ₽",
      notes: "Выезд в течение 30 минут после звонка"
    },
    {
      id: 3,
      name: "МотоПомощь",
      phone: "+7 (345) 255-88-33",
      description: "Профессиональная эвакуация мототехники с гарантией сохранности",
      areas: ["Тюмень", "пригород"],
      workHours: "9:00 - 21:00",
      price: "от 1600 ₽",
      notes: "Специализированное оборудование для безопасной транспортировки"
    }
  ];

  return (
    <MainLayout>
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            Мото-эвакуация
          </h1>
          
          <p className="text-center text-gray-400 mb-8">
            Сервисы эвакуации мототехники в Тюмени и области
          </p>
          
          <div className="bg-amber-600/20 border border-amber-500/30 rounded-lg p-4 mb-8">
            <div className="flex items-start">
              <AlertTriangle className="h-6 w-6 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-amber-400 mb-1">Важно знать!</h3>
                <p className="text-gray-300 text-sm">
                  При необходимости эвакуации мототехники, выбирайте сервисы, 
                  специализирующиеся именно на перевозке мотоциклов. 
                  Они используют специальное оборудование для бережной 
                  транспортировки вашей техники без риска повреждений.
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            {evacuationServices.map(service => (
              <Card key={service.id} className="border-primary/20 bg-black/60 backdrop-blur-sm overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-500/20 to-transparent">
                  <CardTitle className="text-xl text-white">{service.name}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 pt-5">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-400 mr-3" />
                    <div>
                      <p className="text-sm text-gray-400">Телефон:</p>
                      <p className="font-semibold text-white">{service.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-400 mr-3" />
                    <div>
                      <p className="text-sm text-gray-400">Зона обслуживания:</p>
                      <p className="text-white">{service.areas.join(", ")}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-blue-400 mr-3" />
                    <div>
                      <p className="text-sm text-gray-400">Время работы:</p>
                      <p className="text-white">{service.workHours}</p>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-700 pt-4 mt-2">
                    <p className="text-sm text-gray-400">Стоимость:</p>
                    <p className="text-xl font-bold text-white">{service.price}</p>
                    <p className="text-sm text-gray-300 mt-2">{service.notes}</p>
                  </div>
                  
                  <Button className="mt-2 w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    Позвонить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-gray-400 text-sm italic">
              Обратите внимание: цены и время работы могут измениться. 
              Рекомендуем уточнять актуальную информацию по телефону.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default MotoEvacuation;
