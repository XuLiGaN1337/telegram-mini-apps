
import MainLayout from "@/components/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contacts = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
          Контакты
        </h1>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="bg-black/40 border border-cyan-500/30 shadow-neon backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-cyan-300 flex items-center gap-2">
                <Phone className="h-5 w-5 text-cyan-400" />
                Телефоны
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-cyan-100">
              <p>Основной: +7 (345) 255-55-55</p>
              <p>Мотосалон: +7 (345) 255-55-56</p>
              <p>Сервис: +7 (345) 255-55-57</p>
            </CardContent>
          </Card>
          
          <Card className="bg-black/40 border border-cyan-500/30 shadow-neon backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-cyan-300 flex items-center gap-2">
                <Mail className="h-5 w-5 text-cyan-400" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-cyan-100">
              <p>Общие вопросы: info@mototyumen.ru</p>
              <p>Сервисный центр: service@mototyumen.ru</p>
              <p>Сотрудничество: partners@mototyumen.ru</p>
            </CardContent>
          </Card>
          
          <Card className="bg-black/40 border border-cyan-500/30 shadow-neon backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-cyan-300 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-cyan-400" />
                Адрес
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-cyan-100">
              <p>г. Тюмень, ул. Мотоциклистов, 42</p>
              <p>Индекс: 625000</p>
              <p>Ориентир: ТЦ "Мотодром"</p>
            </CardContent>
          </Card>
          
          <Card className="bg-black/40 border border-cyan-500/30 shadow-neon backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-cyan-300 flex items-center gap-2">
                <Clock className="h-5 w-5 text-cyan-400" />
                Время работы
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-cyan-100">
              <p>Пн-Пт: 10:00 - 19:00</p>
              <p>Сб: 10:00 - 17:00</p>
              <p>Вс: выходной</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contacts;
