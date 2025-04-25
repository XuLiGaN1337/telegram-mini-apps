import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useCart } from "@/components/ui/cart-context";
import { useAuth } from "@/hooks/use-auth";
import { ordersService } from "@/lib/db-service";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Minus, Plus, ShoppingCart, Trash, Warning, ArrowLeft } from "lucide-react";

/**
 * Shopping cart page
 */
const Cart = () => {
  const { items, updateQuantity, removeItem, getCartTotal, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [contactInfo, setContactInfo] = useState({
    name: user ? user.name : "",
    phone: "",
    email: "",
    address: "",
    comment: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactInfo(prev => ({ ...prev, [name]: value }));
  };
  
  const isEmpty = items.length === 0;
  
  const placeOrder = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isEmpty) return;
    
    // Create order from cart
    const order = {
      userId: user?.id || "guest",
      userName: contactInfo.name,
      items: items.map(item => ({
        productId: item.id,
        name: item.name,
        quantity: item.quantity,
        price: item.price
      })),
      total: getCartTotal(),
      status: "pending" as const
    };
    
    // Save order to local storage
    ordersService.add(order);
    
    // Clear cart
    clearCart();
    
    // Show success message
    setOrderPlaced(true);
  };
  
  if (orderPlaced) {
    return (
      <MainLayout>
        <div className="container mx-auto py-12 px-4">
          <Card className="max-w-2xl mx-auto border-primary/20 bg-black/70 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-white flex justify-center items-center gap-2">
                <CheckCircle className="text-green-500 h-8 w-8" />
                Заказ успешно оформлен
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4 pb-8">
              <p className="text-gray-300">
                Спасибо за заказ! Наш менеджер свяжется с вами в ближайшее время для подтверждения.
              </p>
              <Button
                onClick={() => navigate("/")}
                className="mt-4"
              >
                На главную
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate("/shop")}
                className="mt-2"
              >
                Вернуться в магазин
              </Button>
            </CardContent>
          </Card>
        </div>
      </MainLayout>
    );
  }
  
  return (
    <MainLayout>
      <div className="container mx-auto py-8 px-4">
        <Button 
          variant="ghost"
          onClick={() => navigate("/shop")}
          className="mb-6 text-gray-400 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Вернуться в магазин
        </Button>
        
        <h1 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
          Корзина
        </h1>
        
        {isEmpty ? (
          <EmptyCartMessage />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="border-primary/20 bg-black/60 backdrop-blur-sm mb-6">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {items.map(item => (
                      <CartItemCard
                        key={item.id}
                        item={item}
                        onUpdateQuantity={updateQuantity}
                        onRemove={removeItem}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <OrderSummary 
                total={getCartTotal()} 
                onSubmit={placeOrder}
                contactInfo={contactInfo}
                onContactInfoChange={handleChange}
              />
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

/**
 * Empty cart message component
 */
const EmptyCartMessage = () => (
  <Card className="border-primary/20 bg-black/60 backdrop-blur-sm text-center py-12">
    <CardContent className="flex flex-col items-center">
      <ShoppingCart className="h-16 w-16 text-gray-500 mb-4" />
      <h2 className="text-2xl font-medium text-white mb-2">Ваша корзина пуста</h2>
      <p className="text-gray-400 mb-6">
        Добавьте товары из нашего каталога, чтобы продолжить покупки
      </p>
      <Button 
        onClick={() => window.location.href = "/shop"}
        className="mt-2"
      >
        Перейти в магазин
      </Button>
    </CardContent>
  </Card>
);

interface CartItemCardProps {
  item: {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
  };
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

/**
 * Shopping cart item card component
 */
const CartItemCard = ({ item, onUpdateQuantity, onRemove }: CartItemCardProps) => (
  <div className="flex items-center space-x-4 p-4 border border-primary/20 rounded-lg">
    <div className="flex-shrink-0 w-20 h-20 rounded-md overflow-hidden">
      <img
        src={item.image || "https://images.unsplash.com/photo-1558979158-65a1eaa08691?q=80&w=300"}
        alt={item.name}
        className="w-full h-full object-cover"
      />
    </div>
    
    <div className="flex-grow">
      <h3 className="text-lg font-medium text-white">{item.name}</h3>
      <p className="text-lg font-bold text-white">{item.price.toLocaleString()} ₽</p>
    </div>
    
    <div className="flex items-center space-x-2">
      <button
        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
        className="p-1 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300"
      >
        <Minus className="h-4 w-4" />
      </button>
      
      <span className="w-8 text-center text-white">{item.quantity}</span>
      
      <button
        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
        className="p-1 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
    
    <div className="text-right w-24 font-medium text-white">
      {(item.price * item.quantity).toLocaleString()} ₽
    </div>
    
    <button
      onClick={() => onRemove(item.id)}
      className="p-1 rounded-full hover:bg-red-900/30 text-red-400 hover:text-red-300"
    >
      <Trash className="h-5 w-5" />
    </button>
  </div>
);

interface OrderSummaryProps {
  total: number;
  onSubmit: (e: React.FormEvent) => void;
  contactInfo: {
    name: string;
    phone: string;
    email: string;
    address: string;
    comment: string;
  };
  onContactInfoChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

/**
 * Order summary component
 */
const OrderSummary = ({ total, onSubmit, contactInfo, onContactInfoChange }: OrderSummaryProps) => (
  <Card className="border-primary/20 bg-black/60 backdrop-blur-sm sticky top-20">
    <CardHeader>
      <CardTitle className="text-xl text-white">Оформление заказа</CardTitle>
    </CardHeader>
    
    <CardContent>
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Ваше имя</Label>
          <Input
            id="name"
            name="name"
            value={contactInfo.name}
            onChange={onContactInfoChange}
            placeholder="Иван Иванов"
            className="bg-transparent border-cyan-500/30"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Телефон</Label>
          <Input
            id="phone"
            name="phone"
            value={contactInfo.phone}
            onChange={onContactInfoChange}
            placeholder="+7 (___) ___-__-__"
            className="bg-transparent border-cyan-500/30"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={contactInfo.email}
            onChange={onContactInfoChange}
            placeholder="example@email.com"
            className="bg-transparent border-cyan-500/30"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="address">Адрес доставки</Label>
          <Input
            id="address"
            name="address"
            value={contactInfo.address}
            onChange={onContactInfoChange}
            placeholder="г. Тюмень, ул. Ленина, д. 1, кв. 1"
            className="bg-transparent border-cyan-500/30"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="comment">Комментарий к заказу</Label>
          <Textarea
            id="comment"
            name="comment"
            value={contactInfo.comment}
            onChange={onContactInfoChange}
            placeholder="Дополнительная информация по заказу"
            className="bg-transparent border-cyan-500/30 min-h-24"
          />
        </div>
        
        <div className="pt-4 border-t border-primary/20">
          <div className="flex justify-between text-lg font-medium mb-1">
            <span className="text-gray-300">Итого:</span>
            <span className="text-white">{total.toLocaleString()} ₽</span>
          </div>
          <div className="text-xs text-gray-500 mb-4">
            Без учета доставки
          </div>
          
          <Button type="submit" className="w-full">
            Оформить заказ
          </Button>
        </div>
      </form>
    </CardContent>
    
    <CardFooter className="pt-0">
      <div className="text-sm text-gray-500 flex items-start gap-2">
        <Warning className="h-4 w-4 flex-shrink-0 mt-0.5 text-yellow-500" />
        <p>
          Нажимая кнопку "Оформить заказ", вы соглашаетесь с условиями покупки и политикой конфиденциальности
        </p>
      </div>
    </CardFooter>
  </Card>
);

export default Cart;
