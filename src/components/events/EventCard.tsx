import React from "react";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { 
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MotoEvent } from "./EventTypes";
import { getCategoryColor, getCategoryName, formatDate, isUpcomingEvent } from "./EventUtils";

interface EventCardProps {
  event: MotoEvent;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const upcoming = isUpcomingEvent(event.date);
  
  return (
    <Card 
      className={`border-primary/20 bg-black/60 backdrop-blur-sm overflow-hidden transition-all hover:shadow-[0_0_15px_rgba(56,182,255,0.3)] ${!upcoming ? 'opacity-60' : ''}`}
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
        
        {!upcoming && (
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
          disabled={!event.isRegistrationOpen || !upcoming}
        >
          {!upcoming 
            ? "Событие завершено"
            : event.isRegistrationOpen 
              ? "Зарегистрироваться" 
              : "Регистрация закрыта"
          }
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
