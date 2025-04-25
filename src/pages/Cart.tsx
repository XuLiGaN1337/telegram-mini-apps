
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/MainLayout";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/components/ui/cart-context";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { MinusCircle, PlusCircle, Trash2, ShoppingBag, Send } from "lucide-react";

interface OrderFormData {
  name: string;
  phone: string;
  telegram: string;
}

const Cart = () => {
  const navigate = useNavigate();
  const { items, removeItem, updateQuantity, clearCart, getCartTotal } = useCart();
  const [formData, setFormData] = useState<OrderFormData>({
    name: "",
    phone: "",
    telegram: ""
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmitOrder = async () => {
    // Simple validation
    if (!formData.name || !formData.phone || !formData.telegram) {
      alert("Пожалуйста, заполните все поля");
      return;
    }
    
    // Prepare order data
    const orderData = {
      customer: formData,
      items: items,
      total: getCartTotal(),
      date: new Date().toISOString()
    };
    
    // Here you would typically send this data to your backend
    console.log("Order submitted:", orderData);
    
    // Simulating order success
    setOrderSuccess(true);
    
    // Clear cart after successful order
    setTimeout(() => {
      clearCart();
      setIsDialogOpen(false);
      setOrderSuccess(false);
      navigate("/");
    }, 3000);
  };
  
  if (items.length === 0) {
    return (
      <MainLayout>
        <div className="container mx-auto py-16 px-4 text-center">
          <ShoppingBag className="mx-auto h-16 w-16 text-primary/50 mb-4" />
          <h1 className="text-3xl font-bold text-white mb-4">Ваша корзина пуста</h1>
          <p className="text-gray-300 mb-8">Добавьте товары из нашего магазина в корзину</p>
          <Button 
            onClick={() => navigate("/shop")}
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80"
          >
            Перейти в магазин
          </Button>
        </div>
      </MainLayout>
    );
  }
  
  return (
    <MainLayout>
      <div className="container mx-auto py-8 px-4 relative z-10">
        <h1 className="text-3xl font-bold text-white mb-8">Корзина</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border-primary/20 bg-black/60 backdrop-blur-sm mb-6">
              <CardHeader>
                <CardTitle className="text-xl text-white">Ваши товары</CardTitle>
              </CardHeader>
              <CardContent>
                {items.map(item => (
                  <div key={item.id} className="flex items-center mb-6 pb-6 border-b border-primary/20">
                    <div className="w-20 h-20 rounded overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-grow px-4">
                      <h3 className="text-white text-lg font-medium">{item.name}</h3>
                      <p className="text-gray-300">{item.price.toLocaleString()} ₽</p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="w-8 h-8 border-cyan-500/30 rounded-full"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <MinusCircle className="h-4 w-4 text-primary" />
                      </Button>
                      
                      <span className="w-8 text-center text-white">{item.quantity}</span>
                      
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="w-8 h-8 border-cyan-500/30 rounded-full"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <PlusCircle className="h-4 w-4 text-primary" />
                      </Button>
                      
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="ml-4 text-red-400 hover:text-red-300 hover:bg-red-950/30"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="border-primary/20 bg-black/60 backdrop-blur-sm sticky top-24">
              <CardHeader>
                <CardTitle className="text-xl text-white">Ваш заказ</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {items.map(item => (
                    <div key={item.id} className="flex justify-between text-gray-300">
                      <span>{item.name} x {item.quantity}</span>
                      <span>{(item.price * item.quantity).toLocaleString()} ₽</span>
                    </div>
                  ))}
                  
                  <div className="pt-4 border-t border-primary/20 flex justify-between">
                    <span className="font-bold text-white">Итого:</span>
                    <span className="font-bold text-white">{getCartTotal().toLocaleString()} ₽</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80"
                  onClick={() => setIsDialogOpen(true)}
                >
                  Оформить заказ
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="bg-black/90 border-primary/30 text-white">
            <DialogHeader>
              <DialogTitle className="text-xl text-white">Оформление заказа</DialogTitle>
              <DialogDescription className="text-gray-300">
                Заполните данные для оформления заказа
              </DialogDescription>
            </DialogHeader>
            
            {orderSuccess ? (
              <div className="py-8 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-xl font-medium text-white mb-2">Заказ успешно оформлен!</h3>
                <p className="text-gray-300 mb-4">Менеджер свяжется с вами для подтверждения заказа</p>
              </div>
            ) : (
              <>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-transparent border-cyan-500/30"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Номер телефона</Label>
                    <Input 
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-transparent border-cyan-500/30"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="telegram">Имя пользователя в Telegram</Label>
                    <Input 
                      id="telegram"
                      name="telegram"
                      value={formData.telegram}
                      onChange={handleInputChange}
                      className="bg-transparent border-cyan-500/30"
                      placeholder="@username"
                    />
                  </div>
                </div>
                
                <DialogFooter>
                  <Button 
                    variant="outline" 
                    onClick={() => setIsDialogOpen(false)}
                    className="border-cyan-500/30"
                  >
                    Отмена
                  </Button>
                  <Button 
                    onClick={handleSubmitOrder}
                    className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80"
                  >
                    Отправить заказ
                  </Button>
                </DialogFooter>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </MainLayout>
  );
};

export default Cart;
