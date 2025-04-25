
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Order } from "@/types/admin";

interface OrderItemProps {
  order: Order;
  onUpdateStatus: (orderId: string, status: Order['status']) => void;
}

/**
 * Component for displaying a single order with details and controls
 */
export const OrderItem = ({ order, onUpdateStatus }: OrderItemProps) => {
  return (
    <Card 
      className={`border-primary/20 bg-black/60 backdrop-blur-sm ${
        order.status === 'new' ? 'border-l-4 border-l-red-500' : ''
      }`}
    >
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl text-white">
              Заказ #{order.id}
            </CardTitle>
            <CardDescription>
              {new Date(order.date).toLocaleString('ru-RU')}
            </CardDescription>
          </div>
          <OrderStatusBadge status={order.status} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CustomerInfo customer={order.customer} />
          <OrderItems items={order.items} total={order.total} />
        </div>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2">
        <StatusButton 
          status="processing" 
          currentStatus={order.status}
          onClick={() => onUpdateStatus(order.id, 'processing')}
          label="В обработку"
          className="border-cyan-500/30"
        />
        <StatusButton 
          status="completed" 
          currentStatus={order.status}
          onClick={() => onUpdateStatus(order.id, 'completed')}
          label="Выполнен"
          className="border-green-500/30 text-green-400"
        />
        <StatusButton 
          status="cancelled" 
          currentStatus={order.status}
          onClick={() => onUpdateStatus(order.id, 'cancelled')}
          label="Отменить"
          className="border-red-500/30 text-red-400"
        />
      </CardFooter>
    </Card>
  );
};

interface CustomerInfoProps {
  customer: {
    name: string;
    phone: string;
    telegram: string;
  };
}

/**
 * Customer information section
 */
const CustomerInfo = ({ customer }: CustomerInfoProps) => (
  <div>
    <h3 className="font-medium text-white mb-2">Данные клиента:</h3>
    <p className="text-gray-300">Имя: {customer.name}</p>
    <p className="text-gray-300">Телефон: {customer.phone}</p>
    <p className="text-gray-300">Telegram: {customer.telegram}</p>
  </div>
);

interface OrderItemsProps {
  items: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
  }>;
  total: number;
}

/**
 * Order items list and total
 */
const OrderItems = ({ items, total }: OrderItemsProps) => (
  <div>
    <h3 className="font-medium text-white mb-2">Товары:</h3>
    <div className="space-y-2">
      {items.map(item => (
        <div key={item.id} className="flex justify-between">
          <span className="text-gray-300">
            {item.name} x {item.quantity}
          </span>
          <span className="text-white">
            {(item.price * item.quantity).toLocaleString()} ₽
          </span>
        </div>
      ))}
      <div className="pt-2 border-t border-primary/20 flex justify-between font-medium">
        <span className="text-white">Итого:</span>
        <span className="text-white">{total.toLocaleString()} ₽</span>
      </div>
    </div>
  </div>
);

interface StatusButtonProps {
  status: Order['status'];
  currentStatus: Order['status'];
  onClick: () => void;
  label: string;
  className?: string;
}

/**
 * Button for changing order status
 */
const StatusButton = ({ status, currentStatus, onClick, label, className }: StatusButtonProps) => (
  <Button 
    variant="outline" 
    size="sm"
    disabled={currentStatus === status}
    onClick={onClick}
    className={className}
  >
    {label}
  </Button>
);

interface OrderStatusBadgeProps {
  status: Order['status'];
}

/**
 * Badge showing the current order status
 */
const OrderStatusBadge = ({ status }: OrderStatusBadgeProps) => {
  const getStatusConfig = () => {
    switch (status) {
      case 'new':
        return { className: 'bg-red-500', label: 'Новый' };
      case 'processing':
        return { className: 'bg-blue-500', label: 'В обработке' };
      case 'completed':
        return { className: 'bg-green-500', label: 'Выполнен' };
      case 'cancelled':
        return { className: 'bg-gray-500', label: 'Отменен' };
    }
  };
  
  const config = getStatusConfig();
  
  return (
    <Badge className={config.className}>
      {config.label}
    </Badge>
  );
};
