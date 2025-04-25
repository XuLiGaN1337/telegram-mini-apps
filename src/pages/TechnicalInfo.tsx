
import MainLayout from "@/components/MainLayout";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const techData = [
  {
    name: "МотоТехника",
    description: "Техническая документация, руководства по ремонту, схемы",
    website: "https://mototechnika.ru",
    category: "Документация"
  },
  {
    name: "MotoFAQ",
    description: "Ответы на частые вопросы по обслуживанию и ремонту мотоциклов",
    website: "https://motofaq.ru",
    category: "FAQ"
  },
  {
    name: "МотоГараж",
    description: "Видеоинструкции по ремонту и тюнингу мотоциклов своими руками",
    website: "https://motogarage.ru",
    category: "Видеоуроки"
  }
];

const TechnicalInfo = () => {
  return (
    <MainLayout>
      <div className="container py-8 mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Техничка</h1>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {techData.map((tech, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{tech.name}</CardTitle>
                <CardDescription>{tech.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-green-500 rounded-full">
                  {tech.category}
                </span>
              </CardContent>
              <CardFooter>
                <a href={tech.website} target="_blank" rel="noopener noreferrer" className="w-full">
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

export default TechnicalInfo;
