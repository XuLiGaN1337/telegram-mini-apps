import React, { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { 
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calendar, MapPin, Clock, Users, Filter, AlertTriangle
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

// Типы событий
type EventCategory = "rides" | "competitions" | "meetings" | "training";

// Интерфейс события
interface MotoEvent {
  id: number;
  title: string;
  description: string;
  date: Date;
  location: string;
  time: string;
  participants: number;
  maxParticipants?: number;
  category: EventCategory;
  image: string;
  isRegistrationOpen: boolean;
}

// Данные о событиях
const MOTO_EVENTS: MotoEvent[] = [
  {
    id: 1,
    title: "Открытие мото-сезона 2025",
    description: "Традиционное открытие мотосезона в Тюмени с парадом мотоциклов по центральным улицам города",
    date: new Date(2025, 4, 5), // 5 мая 2025
    location: "Центральная площадь, Тюмень",
    time: "12:00",
    participants: 187,
    maxParticipants: 300,
    category: "meetings",
    image: "https://images.unsplash.com/photo-1558979158-65a1eaa08691?q=80&w=600",
    isRegistrationOpen: true
  },
  {
    id: 2,
    title: "Мотопробег Тюмень-Тобольск",
    description: "Однодневный мотопробег по историческому маршруту с посещением достопримечательностей",
    date: new Date(2025, 5, 12), // 12 июня 2025
    location: "Старт: Памятник Ермаку, Тюмень",
    time: "09:00",
    participants: 42,
    maxParticipants: 50,
    category: "rides",
    image: "https://images.unsplash.com/photo-1519750783826-e2420f4d687f?q=80&w=600",
    isRegistrationOpen: true
  },
  {
    id: 3,
    title: "Кубок Урала по мотокроссу",
    description: "Региональные соревнования по мотокроссу. Участие только для профессионалов с лицензией",
    date: new Date(2025, 6, 25), // 25 июля 2025
    location: "Мототрасса «Восточная», Тюмень",
    time: "10:00",
    participants: 28,
    maxParticipants: 40,
    category: "competitions",
    image: "https://images.unsplash.com/photo-1614977985607-d8419ce7b0dd?q=80&w=600",
    isRegistrationOpen: false
  },
  {
    id: 4,
    title: "Тренировка по мотоджимхане",
    description: "Тренировка навыков маневрирования на мотоцикле на специально оборудованной площадке",
    date: new Date(2025, 7, 8), // 8 августа 2025
    location: "Парковка ТЦ «Мегамолл»",
    time: "18:00",
    participants: 15,
    maxParticipants: 25,
    category: "training",
    image: "https://images.unsplash.com/photo-1571683173060-c9b4666ba55e?q=80&w=600",
    isRegistrationOpen: true
  },
  {
    id: 5,
    title: "Закрытие мотосезона 2025",
    description: "Торжественное закрытие мотосезона с конкурсами, выставкой мототехники и концертом",
    date: new Date(2025, 9, 3), // 3 октября 2025
    location: "Набережная реки Туры",
    time: "16:00",
    participants: 112,
    maxParticipants: 400,
    category: "meetings",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=600",
    isRegistrationOpen: true
  }
];

const MotoEvents: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  
  // Фильтрация событий по категории и поисковому запросу
  const filteredEvents = MOTO_EVENTS.filter(event => {
    const matchesCategory = selectedTab === "all" || event.category === selectedTab;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           event.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  // Сортировка событий по дате (ближайшие первыми)
  const sortedEvents = [...filteredEvents].sort((a, b) => a.date.getTime() - b.date.getTime());
  
  // Функция форматирования даты в русской локали
  const formatDate = (date: Date) => {
    return format(date, "d MMMM yyyy", { locale: ru });
  };
  
  // Получение цвета значка категории
  const getCategoryColor = (category: EventCategory): string => {
    switch (category) {
      case "rides": return "bg-green-500";
      case "competitions": return "bg-red-500";
      case "meetings": return "bg-blue-500";
      case "training": return "bg-amber-500";
      default: return "bg-gray-500";
    }
  };
  
  // Получение названия категории на русском
  const getCategoryName = (category: EventCategory): string => {
    switch (category) {
      case "rides": return "Поездка";
      case "competitions": return "Соревнования";
      case "meetings": return "Встреча";
      case "training": return "Тренировка";
      default: return "Другое";
    }
  };
  
  // Проверка, является ли событие предстоящим
  const isUpcomingEvent = (date: Date): boolean => {
    return date >= new Date();
  };

  return (
    <MainLayout>
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
          Мото-события
        </h1>
        
        <p className="text-center text-gray-400 mb-8">
          Календарь мотособытий в Тюмени и области
        </p>
        
        {/* Предупреждение о регистрации */}
        <div className="bg-amber-600/20 border border-amber-500/30 rounded-lg p-4 mb-8 max-w-4xl mx-auto">
          <div className="flex">
            <AlertTriangle className="h-6 w-6 text-amber-500 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-amber-400 mb-1">Внимание!</h3>
              <p className="text-gray-300 text-sm">
                Для участия в большинстве событий необходима предварительная регистрация. 
                Количество мест может быть ограничено. Рекомендуем регистрироваться заранее.
              </p>
            </div>
          </div>
        </div>
        
        {/* Фильтры */}
        <div className="mb-8">
          <Card className="border-primary/20 bg-black/60 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Filter className="h-5 w-5 text-blue-400" />
                  <h3 className="font-medium text-white">Фильтры</h3>
                </div>
                
                <div>
                  <Input
                    placeholder="Поиск по названию, описанию или месту..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-transparent border-cyan-500/30"
                  />
                </div>
                
                <Tabs value={selectedTab} onValueChange={setSelectedTab}>
                  <TabsList className="bg-black/80">
                    <TabsTrigger value="all">Все</TabsTrigger>
                    <TabsTrigger value="rides">Поездки</TabsTrigger>
                    <TabsTrigger value="competitions">Соревнования</TabsTrigger>
                    <TabsTrigger value="meetings">Встречи</TabsTrigger>
                    <TabsTrigger value="training">Тренировки</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Список событий */}
        {sortedEvents.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-400">
              События не найдены. Попробуйте изменить параметры поиска.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedEvents.map(event => (
              <Card 
                key={event.id} 
                className={`border-primary/20 bg-black/60 backdrop-blur-sm overflow-hidden transition-all hover:shadow-[0_0_15px_rgba(56,182,255,0.3)] ${!isUpcomingEvent(event.date) ? 'opacity-60' : ''}`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge 
                    className={`absolute top-2 right-2 ${getCategoryColor(event.category)}`}
                  >
                    {getCategoryName(event.category)}
                  </Badge>
                  
                  {!isUpcomingEvent(event.date) && (
                    <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                      <span className="text-white font-bold text-lg transform -rotate-12 border-2 border-white px-3 py-1">
                        Событие прошло
                      </span>
                    </div>
                  )}
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl text-white">{event.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-400">Дата:</p>
                      <p className="text-white">{formatDate(event.date)}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-400">Время:</p>
                      <p className="text-white">{event.time}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-400">Место проведения:</p>
                      <p className="text-white">{event.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-400">Участники:</p>
                      <p className="text-white">
                        {event.participants} 
                        {event.maxParticipants ? ` / ${event.maxParticipants}` : ''}
                      </p>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Button 
                    className="w-full" 
                    disabled={!event.isRegistrationOpen || !isUpcomingEvent(event.date)}
                  >
                    {!isUpcomingEvent(event.date) 
                      ? "Событие завершено"
                      : event.isRegistrationOpen 
                        ? "Зарегистрироваться" 
                        : "Регистрация закрыта"
                    }
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
        
        <div className="mt-10 text-center">
          <p className="text-gray-400 text-sm italic">
            Календарь событий регулярно обновляется. Следите за изменениями.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default MotoEvents;
