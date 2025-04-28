import { Minus, Plus, Trash } from "lucide-react";

interface CartItemProps {
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
const CartItem = ({ item, onUpdateQuantity, onRemove }: CartItemProps) => (
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

export default CartItem;
