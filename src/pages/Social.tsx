
import MainLayout from "@/components/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Youtube, Twitter, MessageCircle } from "lucide-react";

const Social = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
          Мы в социальных сетях
        </h1>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <Card className="bg-black/40 border border-cyan-500/30 shadow-neon backdrop-blur-sm overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-cyan-300">Присоединяйтесь к нам</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-cyan-100 mb-6">
                Будьте в курсе последних новостей, акций и мероприятий. Делитесь впечатлениями и общайтесь с другими мотоциклистами.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <Button 
                  variant="outline" 
                  className="h-auto py-3 flex flex-col items-center gap-2 bg-gradient-to-b from-black/60 to-black/80 border-cyan-500/40 hover:bg-cyan-950/20 hover:border-cyan-400 text-cyan-300 hover:text-cyan-200 shadow-neon"
                >
                  <Instagram className="h-6 w-6 text-pink-400" />
                  Instagram
                </Button>
                
                <Button 
                  variant="outline" 
                  className="h-auto py-3 flex flex-col items-center gap-2 bg-gradient-to-b from-black/60 to-black/80 border-cyan-500/40 hover:bg-cyan-950/20 hover:border-cyan-400 text-cyan-300 hover:text-cyan-200 shadow-neon"
                >
                  <MessageCircle className="h-6 w-6 text-blue-400" />
                  Telegram
                </Button>
                
                <Button 
                  variant="outline" 
                  className="h-auto py-3 flex flex-col items-center gap-2 bg-gradient-to-b from-black/60 to-black/80 border-cyan-500/40 hover:bg-cyan-950/20 hover:border-cyan-400 text-cyan-300 hover:text-cyan-200 shadow-neon"
                >
                  <Youtube className="h-6 w-6 text-red-500" />
                  YouTube
                </Button>
                
                <Button 
                  variant="outline" 
                  className="h-auto py-3 flex flex-col items-center gap-2 bg-gradient-to-b from-black/60 to-black/80 border-cyan-500/40 hover:bg-cyan-950/20 hover:border-cyan-400 text-cyan-300 hover:text-cyan-200 shadow-neon"
                >
                  <Facebook className="h-6 w-6 text-blue-500" />
                  Facebook
                </Button>
                
                <Button 
                  variant="outline" 
                  className="h-auto py-3 flex flex-col items-center gap-2 bg-gradient-to-b from-black/60 to-black/80 border-cyan-500/40 hover:bg-cyan-950/20 hover:border-cyan-400 text-cyan-300 hover:text-cyan-200 shadow-neon"
                >
                  <Twitter className="h-6 w-6 text-sky-400" />
                  Twitter
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-black/40 border border-cyan-500/30 shadow-neon backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-cyan-300">Мото-сообщество Тюмени</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-cyan-100 mb-4">
                Участвуйте в наших онлайн-сообществах, где мотоциклисты Тюмени обсуждают маршруты, 
                делятся опытом и организуют совместные поездки.
              </p>
              
              <div className="mt-4 space-y-2">
                <p className="text-cyan-200 flex items-center gap-2">
                  <span className="bg-cyan-900/30 p-1 rounded-full">
                    <MessageCircle className="h-4 w-4 text-cyan-400" />
                  </span>
                  Группа в Telegram: t.me/mototyumen
                </p>
                <p className="text-cyan-200 flex items-center gap-2">
                  <span className="bg-cyan-900/30 p-1 rounded-full">
                    <Youtube className="h-4 w-4 text-red-400" />
                  </span>
                  Наш канал: youtube.com/mototyumen
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Social;
