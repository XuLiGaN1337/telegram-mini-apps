import React from "react";
import { Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface EventFiltersProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  selectedTab: string;
  setSelectedTab: (value: string) => void;
}

const EventFilters: React.FC<EventFiltersProps> = ({
  searchTerm,
  setSearchTerm,
  selectedTab,
  setSelectedTab
}) => {
  return (
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
  );
};

export default EventFilters;
