
import { Link } from "react-router-dom";
import MainLayout from "@/components/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, FileText, Settings, Tv } from "lucide-react";

const IndexPage = () => {
  const menuItems = [
    {
      title: "Магазины",
      icon: <ShoppingBag className="h-6 w-6" />,
      path: "/shops",
      description: "Магазины мотоэкипировки и мотосалоны"
    },
    {
      title: "МедиаКонтент",
      icon: <Tv className="h-6 w-6" />,
      path: "/media-content",
      description: "Обучающие материалы, развлекательный контент и многое другое"
    },
    {
      title: "Сервисные центры",
      icon: <Settings className="h-6 w-6" />,
      path: "/service-centers",
      description: "Ремонт и обслуживание мототехники"
    }
  ];

  return (
    <MainLayout showBackButton={false}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center mb-8">
          <div className="relative w-24 h-24 overflow-hidden rounded-full bg-primary flex items-center justify-center">
            <FileText className="h-12 w-12 text-white" />
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-center mb-8 text-primary">Мото Навигатор</h1>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item, index) => (
            <Link to={item.path} key={index}>
              <Card className="h-full transition-all hover:shadow-md hover:translate-y-[-2px] border-2 border-gray-100">
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h2 className="text-xl font-semibold mb-2 text-primary">{item.title}</h2>
                  <p className="text-center text-gray-600">{item.description}</p>
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

export default IndexPage;
