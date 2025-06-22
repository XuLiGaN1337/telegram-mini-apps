import MainLayout from "@/components/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, ExternalLink } from "lucide-react";

const MotoSchools = () => {
  return (
    <MainLayout>
      <div className="container mx-auto py-8 px-4 relative">
        <div className="moto-logo"></div>

        <div className="flex items-center gap-3 mb-8 justify-center">
          <GraduationCap className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold text-center text-white">
            МотоШколы
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="h-full border-2 border-primary/20 bg-black/60 backdrop-blur-sm text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-white">
                  МотоАкадемия
                </h2>
                <GraduationCap className="h-6 w-6 text-primary animate-pulse" />
              </div>
              <p className="mb-3 text-gray-300">
                Обучение вождению мотоцикла с нуля. Подготовка к экзамену в
                ГИБДД. Курсы контраварийного вождения.
              </p>
              <div className="flex flex-col gap-2 text-gray-300 mt-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>ул. Одесская, 44</span>
                </div>
                <div className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  <a href="#" className="hover:text-cyan-100">
                    motoacademy72.ru
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="h-full border-2 border-primary/20 bg-black/60 backdrop-blur-sm text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-white">
                  RiderSchool
                </h2>
                <GraduationCap className="h-6 w-6 text-primary animate-pulse" />
              </div>
              <p className="mb-3 text-gray-300">
                Индивидуальные и групповые занятия для начинающих и опытных
                мотоциклистов. Трек-дни и мотоджимхана.
              </p>
              <div className="flex flex-col gap-2 text-gray-300 mt-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>ул. Энергетиков, 96</span>
                </div>
                <div className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  <a href="#" className="hover:text-cyan-100">
                    riderschool-tmn.ru
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="h-full border-2 border-primary/20 bg-black/60 backdrop-blur-sm text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-white">BikeSkills</h2>
                <GraduationCap className="h-6 w-6 text-primary animate-pulse" />
              </div>
              <p className="mb-3 text-gray-300">
                Курсы безопасного вождения, экстремальное вождение, проезд
                сложных участков и управление мотоциклом зимой.
              </p>
              <div className="flex flex-col gap-2 text-gray-300 mt-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>ул. Широтная, 157</span>
                </div>
                <div className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  <a href="#" className="hover:text-cyan-100">
                    bikeskills72.ru
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default MotoSchools;
