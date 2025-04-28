import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCart } from "@/components/ui/cart-context";
import { useAuth } from "@/hooks/use-auth";
import { ordersService } from "@/lib/db-service";
import { ArrowLeft, CheckCircle } from "lucide-react";

// Import refactored components
import EmptyCart from "@/components/cart/EmptyCart";
import CartSummary from "@/components/cart/CartSummary";
import CheckoutForm from "@/components/cart/CheckoutForm";

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
          <EmptyCart />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <CartSummary 
                items={items}
                onUpdateQuantity={updateQuantity}
                onRemove={removeItem}
              />
            </div>
            
            <div>
              <CheckoutForm 
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

export default Cart;
