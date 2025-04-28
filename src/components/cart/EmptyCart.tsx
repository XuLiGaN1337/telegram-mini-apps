import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/**
 * Empty cart message component
 */
const EmptyCart = () => (
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

export default EmptyCart;
