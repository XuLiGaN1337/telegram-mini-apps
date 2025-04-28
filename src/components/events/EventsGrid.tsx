import React from "react";
import { MotoEvent } from "./EventTypes";
import EventCard from "./EventCard";

interface EventsGridProps {
  events: MotoEvent[];
}

const EventsGrid: React.FC<EventsGridProps> = ({ events }) => {
  if (events.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-gray-400">
          События не найдены. Попробуйте изменить параметры поиска.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventsGrid;
