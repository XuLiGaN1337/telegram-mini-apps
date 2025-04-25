
import { useState, useEffect } from 'react';
import { Order } from '@/types/admin';

// Mock data for orders
const mockOrders: Order[] = [
  {
    id: '1',
    customer: {
      name: 'Иван Петров',
      phone: '+7 (999) 123-45-67',
      telegram: '@ivan_petrov'
    },
    items: [
      { id: 'helmet-1', name: 'Мотошлем Shoei GT-Air II', price: 32500, quantity: 1 }
    ],
    total: 32500,
    date: '2025-04-24T14:30:00Z',
    status: 'new'
  },
  {
    id: '2',
    customer: {
      name: 'Анна Сидорова',
      phone: '+7 (987) 654-32-10',
      telegram: '@anna_s'
    },
    items: [
      { id: 'jacket-1', name: 'Мотокуртка REBELHORN Rebel', price: 18700, quantity: 1 },
      { id: 'gloves-1', name: 'Мотоперчатки Alpinestars SP-8 v3', price: 5900, quantity: 1 }
    ],
    total: 24600,
    date: '2025-04-23T10:15:00Z',
    status: 'processing'
  }
];

/**
 * Hook for managing orders in the admin panel
 */
export const useAdminOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [newNotificationsCount, setNewNotificationsCount] = useState<number>(0);
  
  // Load orders on mount
  useEffect(() => {
    const storedOrders = localStorage.getItem('motoOrders');
    if (storedOrders) {
      try {
        setOrders(JSON.parse(storedOrders));
      } catch (e) {
        console.error('Failed to parse orders:', e);
      }
    } else {
      // Initialize with mock data
      setOrders(mockOrders);
      localStorage.setItem('motoOrders', JSON.stringify(mockOrders));
    }
  }, []);
  
  // Update notifications count whenever orders change
  useEffect(() => {
    const newCount = orders.filter(order => order.status === 'new').length;
    setNewNotificationsCount(newCount);
  }, [orders]);
  
  const handleUpdateOrderStatus = (orderId: string, status: Order['status']) => {
    const updatedOrders = orders.map(order => 
      order.id === orderId ? { ...order, status } : order
    );
    
    setOrders(updatedOrders);
    localStorage.setItem('motoOrders', JSON.stringify(updatedOrders));
  };
  
  return {
    orders,
    newNotificationsCount,
    handleUpdateOrderStatus
  };
};
