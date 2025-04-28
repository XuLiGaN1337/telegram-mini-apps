import CartItem from "./CartItem";
import { Card, CardContent } from "@/components/ui/card";

interface CartSummaryProps {
  items: Array<{
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
  }>;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

/**
 * Cart summary component showing all cart items
 */
const CartSummary = ({ items, onUpdateQuantity, onRemove }: CartSummaryProps) => (
  <Card className="border-primary/20 bg-black/60 backdrop-blur-sm mb-6">
    <CardContent className="p-6">
      <div className="space-y-4">
        {items.map(item => (
          <CartItem
            key={item.id}
            item={item}
            onUpdateQuantity={onUpdateQuantity}
            onRemove={onRemove}
          />
        ))}
      </div>
    </CardContent>
  </Card>
);

export default CartSummary;
