
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";

declare global {
  interface Window {
    Telegram?: {
      Login: {
        auth: (options: any, callback: (data: any) => void) => void;
      };
    };
  }
}

const Login = () => {
  const navigate = useNavigate();
  const { user, login, isLoading } = useAuth();
  
  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate(user.isAdmin ? '/admin' : '/profile');
    }
  }, [user, navigate]);
  
  // Script for Telegram widget
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  
  const handleDemoLogin = async () => {
    await login();
  };
  
  const handleTelegramLogin = (telegramData: any) => {
    login(telegramData);
  };

  return (
    <MainLayout>
      <div className="container mx-auto py-12 px-4 relative z-10">
        <div className="max-w-md mx-auto">
          <Card className="border-primary/20 bg-black/60 backdrop-blur-sm shadow-neon">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-white">Вход в аккаунт</CardTitle>
              <CardDescription className="text-center text-gray-300">
                Войдите через Telegram для доступа к личному кабинету
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* This would be the real Telegram login widget */}
              <div className="flex justify-center">
                <div 
                  id="telegram-login-mototyumen_bot"
                  data-onauth="handleTelegramLogin(user)"
                  data-request-access="write"
                  data-radius="10"
                  data-size="large"
                  data-userpic="false"
                  data-lang="ru"
                >
                  {/* Telegram widget will be rendered here */}
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-primary/20"></span>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-black px-2 text-gray-300">Или</span>
                </div>
              </div>
              
              {/* Demo button for testing without real Telegram login */}
              <Button 
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80"
                onClick={handleDemoLogin}
                disabled={isLoading}
              >
                {isLoading ? "Загрузка..." : "Демо вход (для тестирования)"}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;
