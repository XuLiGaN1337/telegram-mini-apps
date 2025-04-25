import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import TelegramAuth from "@/components/TelegramAuth";

/**
 * Login page with Telegram authentication
 */
const Login = () => {
  const { user, isLoading, login } = useAuth();
  const navigate = useNavigate();
  
  // Redirect to profile if already logged in
  useEffect(() => {
    if (user && !isLoading) {
      navigate("/profile");
    }
  }, [user, isLoading, navigate]);

  // Demo login (to be used only for development)
  const handleDemoLogin = async () => {
    await login();
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: "url(https://images.unsplash.com/photo-1558979159-2b18a4070a87?q=80&w=1920)" }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      
      <Card className="w-full max-w-md border-primary/20 bg-black/80 backdrop-blur-md z-10">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            Войти в личный кабинет
          </CardTitle>
          <CardDescription className="text-center text-gray-400">
            Используйте аутентификацию через Telegram для входа
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="flex justify-center">
            <div className="rounded-lg overflow-hidden bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-[1px]">
              <div className="bg-black p-5 rounded-lg">
                <div className="text-center mb-4 text-sm text-gray-400">
                  Простой и безопасный вход без пароля
                </div>
                
                <div className="flex justify-center mb-4">
                  <TelegramAuth buttonSize="large" cornerRadius={8} usePic={true} requestAccess={false} />
                </div>
                
                <div className="text-xs text-gray-500 text-center">
                  Мы не запрашиваем личные данные пользователя
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-center text-gray-500">
            Нажимая "Войти через Telegram", вы соглашаетесь с нашими условиями использования
          </div>
          
          {process.env.NODE_ENV === 'development' && (
            <Button 
              variant="outline" 
              onClick={handleDemoLogin}
              className="w-full"
            >
              Демо вход (только для разработки)
            </Button>
          )}
          
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="w-full text-gray-400"
          >
            На главную
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
