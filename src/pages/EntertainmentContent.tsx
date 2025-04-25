
import MainLayout from "@/components/MainLayout";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const contentData = [
  {
    name: "МотоТок",
    description: "Канал с обзорами новых моделей мотоциклов и тест-драйвами",
    website: "https://youtube.com/mototok",
    category: "YouTube"
  },
  {
    name: "БайкерФМ",
    description: "Подкасты о мотоциклах, байкерской культуре и путешествиях",
    website: "https://bikerfm.ru",
    category: "Подкасты"
  },
  {
    name: "МотоБлог",
    description: "Сообщество мотоблогеров с историями и фотографиями путешествий",
    website: "https://motoblog.ru",
    category: "Блог"
  }
];

const EntertainmentContent = () => {
  return (
    <MainLayout>
      <div className="container py-8 mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Развлекательный контент</h1>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {contentData.map((content, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{content.name}</CardTitle>
                <CardDescription>{content.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-purple-500 rounded-full">
                  {content.category}
                </span>
              </CardContent>
              <CardFooter>
                <a href={content.website} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="w-full flex items-center gap-2">
                    Перейти на сайт <ExternalLink size={16} />
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default EntertainmentContent;
