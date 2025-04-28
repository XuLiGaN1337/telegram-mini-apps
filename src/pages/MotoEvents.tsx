import React, { useState, useMemo } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { MOTO_EVENTS } from "@/components/events/EventTypes";
import EventFilters from "@/components/events/EventFilters";
import EventWarning from "@/components/events/EventWarning";
import EventsGrid from "@/components/events/EventsGrid";

const MotoEvents: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  
  // Фильтрация и сортировка событий с использованием useMemo для оптимизации
  const filteredAndSortedEvents = useMemo(() => {
    // Фильтрация событий по категории и поисковому запросу
    const filtered = MOTO_EVENTS.filter(event => {
      const matchesCategory = selectedTab === "all" || event.category === selectedTab;
      const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           event.location.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    
    // Сортировка событий по дате (ближайшие первыми)
    return [...filtered].sort((a, b) => a.date.getTime() - b.date.getTime());
  }, [selectedTab, searchTerm]);

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
        <EventWarning />
        
        {/* Фильтры */}
        <div className="mb-8">
          <EventFilters 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        </div>
        
        {/* Список событий */}
        <EventsGrid events={filteredAndSortedEvents} />
        
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
