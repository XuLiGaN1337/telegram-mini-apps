
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import MainLayout from "@/components/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ShoppingBag, LogOut, ShoppingCart } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { useCart } from "@/components/ui/cart-context";

const Profile = () => {
  const navigate = useNavigate();
  const { user, logout, isLoading } = useAuth();
  const { items, getCartTotal } = useCart();
  
  // Redirect if not logged in
  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/login');
    }
  }, [user, isLoading, navigate]);
  
  if (isLoading || !user) {
    return (
      <MainLayout>
        <div className="container mx-auto py-12 px-4 text-center">
          <p>Загрузка...</p>
        </div>
      </MainLayout>
    );
  }
  
  const handleLogout = () => {
    logout();
    navigate('/');
  };
  
  return (
    <MainLayout>
      <div className="container mx-auto py-8 px-4 relative z-10">
        <h1 className="text-3xl font-bold text-white mb-8">Личный кабинет</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <Card className="border-primary/20 bg-black/60 backdrop-blur-sm">
              <CardHeader>
                <div className="flex flex-col items-center">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src={user.avatarUrl} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl text-white">{user.name}</CardTitle>
                  <CardDescription className="text-gray-300">@{user.username}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between text-gray-300">
                    <span>ID пользователя:</span>
                    <span className="text-white">{user.id}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Статус:</span>
                    <span className="text-white">{user.isAdmin ? 'Администратор' : 'Пользователь'}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="destructive" 
                  className="w-full"
                  onClick={handleLogout}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Выйти из аккаунта
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 gap-6">
              <Card className="border-primary/20 bg-black/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Корзина</CardTitle>
                </CardHeader>
                <CardContent>
                  {items.length > 0 ? (
                    <div className="space-y-4">
                      {items.map(item => (
                        <div key={item.id} className="flex items-center gap-4 pb-3 border-b border-primary/10">
                          <div className="w-12 h-12 rounded overflow-hidden">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-grow">
                            <h3 className="text-white font-medium">{item.name}</h3>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-300">{item.quantity} шт.</span>
                              <span className="text-white">{(item.price * item.quantity).toLocaleString()} ₽</span>
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className="flex justify-between font-bold pt-2">
                        <span>Итого:</span>
                        <span>{getCartTotal().toLocaleString()} ₽</span>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-6">
                      <ShoppingCart className="mx-auto h-12 w-12 text-gray-400 mb-3" />
                      <p className="text-gray-300 mb-4">Ваша корзина пуста</p>
                      <Link to="/shop">
                        <Button>Перейти в магазин</Button>
                      </Link>
                    </div>
                  )}
                </CardContent>
                {items.length > 0 && (
                  <CardFooter>
                    <Link to="/cart" className="w-full">
                      <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                        Оформить заказ
                      </Button>
                    </Link>
                  </CardFooter>
                )}
              </Card>
              
              <Card className="border-primary/20 bg-black/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-white">История заказов</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-6">
                    <ShoppingBag className="mx-auto h-12 w-12 text-gray-400 mb-3" />
                    <p className="text-gray-300">У вас пока нет заказов</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
