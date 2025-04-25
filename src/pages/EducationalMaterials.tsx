
import MainLayout from "@/components/MainLayout";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const resourceData = [
  {
    name: "МотоАкадемия",
    description: "Курсы вождения мотоцикла для начинающих и опытных",
    website: "https://motoacademy.ru",
    category: "Обучение"
  },
  {
    name: "MotoGym",
    description: "Видеоуроки по безопасному вождению и техникам экстремального вождения",
    website: "https://motogym.ru",
    category: "Видеоуроки"
  },
  {
    name: "МотоШкола",
    description: "Подготовка к экзаменам на категорию А, учебные материалы",
    website: "https://motoschool.ru",
    category: "ПДД и теория"
  }
];

const EducationalMaterials = () => {
  return (
    <MainLayout>
      <div className="container py-8 mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Обучающие материалы</h1>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resourceData.map((resource, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{resource.name}</CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full">
                  {resource.category}
                </span>
              </CardContent>
              <CardFooter>
                <a href={resource.website} target="_blank" rel="noopener noreferrer" className="w-full">
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

export default EducationalMaterials;
