
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { CartItem } from "@/components/ui/cart-context";

interface CartSummaryProps {
  items: CartItem[];
  total: number;
  onCheckout: () => void;
}

/**
 * Cart summary showing the list of items and total price
 */
export const CartSummary = ({ items, total, onCheckout }: CartSummaryProps) => {
  return (
    <Card className="border-primary/20 bg-black/60 backdrop-blur-sm sticky top-24">
      <CardHeader>
        <CardTitle className="text-xl text-white">Ваш заказ</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {items.map(item => (
            <SummaryItem 
              key={item.id} 
              name={item.name}
              quantity={item.quantity}
              price={item.price * item.quantity}
            />
          ))}
          
          <div className="pt-4 border-t border-primary/20 flex justify-between">
            <span className="font-bold text-white">Итого:</span>
            <span className="font-bold text-white">{total.toLocaleString()} ₽</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80"
          onClick={onCheckout}
        >
          Оформить заказ
        </Button>
      </CardFooter>
    </Card>
  );
};

interface SummaryItemProps {
  name: string;
  quantity: number;
  price: number;
}

/**
 * Individual item in the summary
 */
const SummaryItem = ({ name, quantity, price }: SummaryItemProps) => (
  <div className="flex justify-between text-gray-300">
    <span>{name} x {quantity}</span>
    <span>{price.toLocaleString()} ₽</span>
  </div>
);
