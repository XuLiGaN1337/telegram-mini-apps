
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

/**
 * Component shown when the cart is empty
 */
export const EmptyCart = () => {
  const navigate = useNavigate();
  
  return (
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
  );
};
