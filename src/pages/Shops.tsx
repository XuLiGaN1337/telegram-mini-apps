
import { Link } from "react-router-dom";
import MainLayout from "@/components/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HardHat, Store } from "lucide-react";

const ShopsPage = () => {
  const categories = [
    {
      title: "МотоЭкипировка",
      icon: <HardHat className="h-6 w-6" />,
      path: "/moto-equipment",
      description: "Магазины мотоэкипировки"
    },
    {
      title: "МотоСалоны",
      icon: <Store className="h-6 w-6" />,
      path: "/moto-salons",
      description: "Салоны мототехники"
    }
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 text-primary">Магазины</h1>
        
        <div className="grid gap-4 md:grid-cols-2">
          {categories.map((category, index) => (
            <Link to={category.path} key={index}>
              <Card className="h-full transition-all hover:shadow-md hover:translate-y-[-2px] border-2 border-gray-100">
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4 text-white">
                    {category.icon}
                  </div>
                  <h2 className="text-xl font-semibold mb-2 text-primary">{category.title}</h2>
                  <p className="text-center text-gray-600">{category.description}</p>
                  <Button className="mt-4 w-full bg-secondary hover:bg-secondary/90">
                    Перейти
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default ShopsPage;
