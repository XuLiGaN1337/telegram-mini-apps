
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/components/ui/cart-context';
import { OrderFormData } from '@/components/cart/CheckoutForm';

/**
 * Custom hook for handling the cart checkout process
 */
export const useCartCheckout = () => {
  const navigate = useNavigate();
  const { items, clearCart, getCartTotal } = useCart();
  const [formData, setFormData] = useState<OrderFormData>({
    name: "",
    phone: "",
    telegram: ""
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmitOrder = async () => {
    // Basic validation
    if (!formData.name || !formData.phone || !formData.telegram) {
      alert("Пожалуйста, заполните все поля");
      return;
    }
    
    // Prepare order data
    const orderData = {
      customer: formData,
      items: items,
      total: getCartTotal(),
      date: new Date().toISOString()
    };
    
    // Here you would typically send this data to your backend
    console.log("Order submitted:", orderData);
    
    // Save order to local storage for admin panel
    const storedOrders = localStorage.getItem('motoOrders');
    let orders = [];
    
    if (storedOrders) {
      try {
        orders = JSON.parse(storedOrders);
      } catch (e) {
        console.error('Failed to parse orders:', e);
      }
    }
    
    // Add new order with generated ID and 'new' status
    const newOrder = {
      id: `order-${Date.now()}`,
      customer: formData,
      items: items,
      total: getCartTotal(),
      date: new Date().toISOString(),
      status: 'new'
    };
    
    orders.push(newOrder);
    localStorage.setItem('motoOrders', JSON.stringify(orders));
    
    // Simulate success response
    setOrderSuccess(true);
    
    // Clear cart and navigate after timeout
    setTimeout(() => {
      clearCart();
      setIsDialogOpen(false);
      setOrderSuccess(false);
      navigate("/");
    }, 3000);
  };
  
  return {
    formData,
    isDialogOpen,
    orderSuccess,
    handleInputChange,
    handleSubmitOrder,
    setIsDialogOpen
  };
};
