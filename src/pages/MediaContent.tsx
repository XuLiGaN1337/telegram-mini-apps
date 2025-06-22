import { Link } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, Film, FileText, Compass } from "lucide-react";

const MediaContent = () => {
  return (
    <MainLayout>
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-white">
          МедиаКонтент
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Link
            to="/educational-materials"
            className="transform transition duration-300 hover:scale-105"
          >
            <Card className="h-full border-2 border-primary/20 bg-black/60 backdrop-blur-sm text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <CardHeader className="bg-gradient-to-r from-primary/20 to-transparent pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Обучающие материалы</CardTitle>
                  <BookOpen className="h-6 w-6 text-primary animate-pulse" />
                </div>
                <CardDescription className="text-gray-300">
                  Учебные материалы и руководства
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <p>Полезные статьи и видео для обучения мотоциклистов.</p>
              </CardContent>
            </Card>
          </Link>

          <Link
            to="/entertainment-content"
            className="transform transition duration-300 hover:scale-105"
          >
            <Card className="h-full border-2 border-primary/20 bg-black/60 backdrop-blur-sm text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <CardHeader className="bg-gradient-to-r from-secondary/20 to-transparent pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">
                    Развлекательный контент
                  </CardTitle>
                  <Film className="h-6 w-6 text-secondary animate-pulse" />
                </div>
                <CardDescription className="text-gray-300">
                  Развлечения и досуг
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <p>Увлекательные видео, блоги и контент для мотоциклистов.</p>
              </CardContent>
            </Card>
          </Link>

          <Link
            to="/technical-info"
            className="transform transition duration-300 hover:scale-105"
          >
            <Card className="h-full border-2 border-primary/20 bg-black/60 backdrop-blur-sm text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <CardHeader className="bg-gradient-to-r from-accent/20 to-transparent pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Техничка</CardTitle>
                  <FileText className="h-6 w-6 text-accent animate-pulse" />
                </div>
                <CardDescription className="text-gray-300">
                  Техническая информация
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <p>Документация, руководства и технические характеристики.</p>
              </CardContent>
            </Card>
          </Link>

          <Link
            to="/moto-travel"
            className="transform transition duration-300 hover:scale-105"
          >
            <Card className="h-full border-2 border-primary/20 bg-black/60 backdrop-blur-sm text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <CardHeader className="bg-gradient-to-r from-primary/20 to-transparent pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">МотоПуть</CardTitle>
                  <Compass className="h-6 w-6 text-primary animate-pulse" />
                </div>
                <CardDescription className="text-gray-300">
                  Путешествия и маршруты
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <p>
                  Популярные маршруты, советы путешественникам и приключения.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default MediaContent;
