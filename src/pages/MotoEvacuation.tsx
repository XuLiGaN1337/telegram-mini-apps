import React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Phone, MapPin, Clock, AlertTriangle, Car, Star
} from "lucide-react";

const evacuationServices = [
  {
    name: "Мото-Эвакуатор 24",
    address: "ул. Республики, 157",
    phone: "+7 (345) 277-45-66",
    workingHours: "Круглосуточно",
    rating: 4.8,
    reviews: 124,
    services: ["Эвакуация мотоциклов любого типа", "Срочный выезд", "Погрузка/разгрузка", "Безопасная транспортировка"],
    description: "Специализированная служба эвакуации для мототехники. Имеем все необходимое оборудование для безопасной транспортировки."
  },
  {
    name: "БайкПомощь",
    address: "ул. Московский тракт, 120/3",
    phone: "+7 (345) 299-33-22",
    workingHours: "08:00 - 23:00",
    rating: 4.6,
    reviews: 87,
    services: ["Эвакуация мотоциклов", "Техническая помощь на месте", "Запуск двигателя", "Выезд за город"],
    description: "Служба помощи мотоциклистам. Оказываем полный спектр услуг по эвакуации и дорожной помощи."
  },
  {
    name: "МотоСпас",
    address: "ул. Широтная, 45",
    phone: "+7 (345) 255-77-99",
    workingHours: "Круглосуточно",
    rating: 4.9,
    reviews: 156,
    services: ["Эвакуация мотоциклов", "Выезд техника на место", "Помощь при ДТП", "Оперативный выезд по городу и области"],
    description: "Профессиональная служба эвакуации мототехники. Бережная транспортировка любых типов мотоциклов."
  }
];

const MotoEvacuation: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
          Мото-эвакуация
        </h1>
        
        <p className="text-center text-gray-400 mb-8">
          Службы эвакуации мототехники в Тюмени
        </p>
        
        {/* Форма экстренного вызова */}
        <div className="max-w-3xl mx-auto mb-10">
          <Card className="border-red-500/30 bg-gradient-to-b from-red-950/30 to-black backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-xl text-red-400 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Экстренный вызов эвакуатора
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                Заполните форму для быстрого вызова ближайшего эвакуатора. 
                В экстренных случаях рекомендуем позвонить напрямую по телефону.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-sm text-gray-400 mb-1 block">Ваше местоположение</label>
                  <Input placeholder="Адрес или координаты" className="bg-black/50 border-red-500/30" />
                </div>
                
                <div>
                  <label className="text-sm text-gray-400 mb-1 block">Ваш телефон</label>
                  <Input placeholder="+7 (___) ___-__-__" className="bg-black/50 border-red-500/30" />
                </div>
                
                <div className="md:col-span-2">
                  <label className="text-sm text-gray-400 mb-1 block">Опишите проблему</label>
                  <Input placeholder="Кратко опишите что случилось" className="bg-black/50 border-red-500/30" />
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <p className="text-xs text-gray-400">
                  Среднее время ожидания: 30-50 минут
                </p>
                
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  Вызвать эвакуатор
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Предупреждение */}
        <div className="bg-amber-600/20 border border-amber-500/30 rounded-lg p-4 mb-8 max-w-4xl mx-auto">
          <div className="flex">
            <AlertTriangle className="h-6 w-6 text-amber-500 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-amber-400 mb-1">Внимание!</h3>
              <p className="text-gray-300 text-sm">
                В случае ДТП сначала вызовите экстренные службы по номеру 112. 
                Не перемещайте мотоцикл до приезда ГИБДД, если произошло ДТП с пострадавшими 
                или значительным материальным ущербом.
              </p>
            </div>
          </div>
        </div>
        
        {/* Список служб эвакуации */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {evacuationServices.map((service, index) => (
            <Card 
              key={index} 
              className="border-primary/20 bg-black/60 backdrop-blur-sm overflow-hidden transition-all hover:shadow-[0_0_15px_rgba(56,182,255,0.3)]"
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-white flex items-center gap-2">
                  <Car className="h-5 w-5 text-blue-400" />
                  {service.name}
                </CardTitle>
                
                <div className="flex items-center mt-1 text-sm">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span className="text-white font-medium">{service.rating}</span>
                  <span className="text-gray-400 ml-1">({service.reviews} отзывов)</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-300 text-sm">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-400">Адрес:</p>
                      <p className="text-white">{service.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-400">Телефон:</p>
                      <p className="text-white">{service.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-400">Режим работы:</p>
                      <p className="text-white">{service.workingHours}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-gray-400 mb-2">Услуги:</p>
                  <ul className="text-sm text-white space-y-1">
                    {service.services.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-2">
                  <Button className="w-full">
                    Позвонить
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default MotoEvacuation;
