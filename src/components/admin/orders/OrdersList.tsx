
import { Card, CardContent } from "@/components/ui/card";
import { OrderItem } from "@/components/admin/orders/OrderItem";
import { Order } from "@/types/admin";

interface OrdersListProps {
  orders: Order[];
  onUpdateStatus: (orderId: string, status: Order['status']) => void;
}

/**
 * Component that displays a list of orders
 */
export const OrdersList = ({ orders, onUpdateStatus }: OrdersListProps) => {
  if (orders.length === 0) {
    return (
      <Card className="border-primary/20 bg-black/60 backdrop-blur-sm">
        <CardContent className="pt-6 text-center">
          <p className="text-gray-300">Нет заказов</p>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <div className="space-y-6">
      {orders.map(order => (
        <OrderItem 
          key={order.id} 
          order={order} 
          onUpdateStatus={onUpdateStatus} 
        />
      ))}
    </div>
  );
};
