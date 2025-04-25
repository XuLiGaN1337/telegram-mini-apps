
import { Button } from "@/components/ui/button";
import { MinusCircle, PlusCircle, Trash2 } from "lucide-react";
import { CartItem as CartItemType } from "@/components/ui/cart-context";

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
}

/**
 * Individual cart item component showing product details and quantity controls
 */
export const CartItem = ({ item, onUpdateQuantity, onRemoveItem }: CartItemProps) => {
  return (
    <div className="flex items-center mb-6 pb-6 border-b border-primary/20">
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
        <QuantityButton 
          icon={<MinusCircle className="h-4 w-4 text-primary" />}
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
        />
        
        <span className="w-8 text-center text-white">{item.quantity}</span>
        
        <QuantityButton 
          icon={<PlusCircle className="h-4 w-4 text-primary" />}
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
        />
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="ml-4 text-red-400 hover:text-red-300 hover:bg-red-950/30"
          onClick={() => onRemoveItem(item.id)}
        >
          <Trash2 className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

interface QuantityButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
}

/**
 * Button for incrementing or decrementing item quantity
 */
const QuantityButton = ({ icon, onClick }: QuantityButtonProps) => (
  <Button 
    variant="outline" 
    size="icon" 
    className="w-8 h-8 border-cyan-500/30 rounded-full"
    onClick={onClick}
  >
    {icon}
  </Button>
);
