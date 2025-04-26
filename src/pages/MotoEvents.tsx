import { useState } from "react";
import MainLayout from "@/components/MainLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Calendar, MapPin, Clock, Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  time: string;
  attendees: number;
  image: string;
  category: "upcoming" | "past" | "all";
}

const MotoEvents = () => {
  const [activeTab, setActiveTab] = useState<string>("upcoming");
  
  const events: Event[] = [
    {
      id: 1,
      title: "Открытие мотосезона 2025",
      description: "Традиционное открытие мотосезона в Тюмени. Сбор мотоциклистов, парад по городу и праздничный концерт.",
      date: "15 мая 2025",
      location: "Центральная площадь, Тюмень",
      time: "12:00",
      attendees: 320,
      image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      category: "upcoming"
    },
    {
      id: 2,
      title: "Мото-фестиваль «Свобода на колёсах»",
      description: "Двухдневный фестиваль с музыкой, конкурсами, выставкой кастомных мотоциклов и многим другим.",
      date: "5-6 июня 2025",
      location: "Загородный клуб «Сосновый Бор»",
      time: "10:00 - 22:00",
      attendees: 500,
      image: "https://images.unsplash.com/photo-1573395444255-81668d768915?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      category: "upcoming"
    },
    {
      id: 3,
      title: "Мото-пробег «Памяти героев»",
      description: "Патриотический мото-пробег по местам боевой славы Тюменской области.",
      date: "22 июня 2025",
      location: "Старт: Вечный огонь, Тюмень",
      time: "09:00",
      attendees: 150,
      image: "https://images.unsplash.com/photo-1593599926484-52bbae85b733?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      category: "upcoming"
    },
    {
      id: 4,
      title: "Мото-тренировка на треке",
      description: "Тренировочный день на треке для повышения мастерства и безопасности вождения мотоцикла.",
      date: "10 июля 2025",
      location: "Трек «Спидвей», Боровский",
      time: "11:00 - 17:00",
      attendees: 80,
      image: "https://images.unsplash.com/photo-1621954809975-882df7fcaec5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      category: "upcoming"
    },
    {
      id: 5,
      title: "Закрытие мотосезона 2024",
      description: "Официальное закрытие мотосезона с парадом мотоциклистов и праздничным ужином.",
      date: "28 сентября 2024",
      location: "Центральная площадь, Тюмень",
      time: "15:00",
      attendees: 290,
      image: "https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
      category: "past"
    },
    {
      id: 6,
      title: "Мото-выставка «Легенды на колёсах»",
      description: "Выставка ретро и кастомных мотоциклов от коллекционеров и энтузиастов.",
      date: "15 августа 2024",
      location: "ТРЦ «Кристалл», Тюмень",
      time: "10:00 - 20:00",
      attendees: 450,
      image: "https://images.unsplash.com/photo-1563396983906-b3795482a59a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80",
      category: "past"
    },
  ];

  // Функция для фильтрации событий по категории
  const filterEvents = (category: string) => {
    if (category === "all") {
      return events;
    }
    return events.filter(event => event.category === category);
  };

  const displayEvents = filterEvents(activeTab);

  return (
    <MainLayout>
      <div className="container mx-auto py-8 px-4 relative z-10">
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="h-8 w-8 text-yellow-400" />
            <h1 className="text-3xl font-bold text-white">Мото События</h1>
          </div>
          <p className="text-center text-gray-300 max-w-2xl">
            Актуальная информация о предстоящих и прошедших мотособытиях в Тюменской области. 
            Присоединяйтесь к сообществу мотоциклистов и будьте в курсе всех мероприятий!
          </p>
        </div>

        <Tabs defaultValue="upcoming" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-6">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="upcoming">Предстоящие</TabsTrigger>
              <TabsTrigger value="past">Прошедшие</TabsTrigger>
              <TabsTrigger value="all">Все события</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="upcoming">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="past">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  const isPast = event.category === "past";

  return (
    <Card className={`overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 ${isPast ? 'opacity-80 grayscale' : ''}`}>
      <div 
        className="h-48 bg-cover bg-center" 
        style={{ backgroundImage: `url(${event.image})` }}
      >
        {isPast && (
          <div className="bg-black/70 text-white font-bold py-1 px-4 absolute rotate-45 translate-x-8 -translate-y-2">
            Прошедшее
          </div>
        )}
      </div>
      <CardHeader className="pb-2">
        <CardTitle>{event.title}</CardTitle>
        <CardDescription className="flex items-center gap-1">
          <Calendar className="h-4 w-4" /> {event.date}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2 pb-2">
        <p className="text-sm line-clamp-2">{event.description}</p>
        <div className="text-sm flex items-center gap-1 text-muted-foreground">
          <MapPin className="h-4 w-4" /> {event.location}
        </div>
        <div className="flex justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" /> {event.time}
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" /> {event.attendees} участников
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          variant={isPast ? "outline" : "default"} 
          className="w-full"
          disabled={isPast}
        >
          {isPast ? "Событие завершено" : "Подробнее"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MotoEvents;