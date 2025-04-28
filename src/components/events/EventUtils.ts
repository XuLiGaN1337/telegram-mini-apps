import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { EventCategory } from "./EventTypes";

// Функция форматирования даты в русской локали
export const formatDate = (date: Date): string => {
  return format(date, "d MMMM yyyy", { locale: ru });
};

// Получение цвета значка категории
export const getCategoryColor = (category: EventCategory): string => {
  switch (category) {
    case "rides": return "bg-green-500";
    case "competitions": return "bg-red-500";
    case "meetings": return "bg-blue-500";
    case "training": return "bg-amber-500";
    default: return "bg-gray-500";
  }
};

// Получение названия категории на русском
export const getCategoryName = (category: EventCategory): string => {
  switch (category) {
    case "rides": return "Поездка";
    case "competitions": return "Соревнования";
    case "meetings": return "Встреча";
    case "training": return "Тренировка";
    default: return "Другое";
  }
};

// Проверка, является ли событие предстоящим
export const isUpcomingEvent = (date: Date): boolean => {
  return date >= new Date();
};
