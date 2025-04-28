// Типы событий
export type EventCategory = "rides" | "competitions" | "meetings" | "training";

// Интерфейс события
export interface MotoEvent {
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
export const MOTO_EVENTS: MotoEvent[] = [
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
