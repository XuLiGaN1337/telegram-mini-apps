
import MainLayout from "@/components/MainLayout";
import { useCart } from "@/components/ui/cart-context";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { EmptyCart } from "@/components/cart/EmptyCart";
import { CartItem } from "@/components/cart/CartItem";
import { CartSummary } from "@/components/cart/CartSummary";
import { CheckoutForm, OrderSuccess } from "@/components/cart/CheckoutForm";
import { useCartCheckout } from "@/hooks/useCartCheckout";

/**
 * Cart page component that displays the user's shopping cart
 * and provides checkout functionality
 */
const Cart = () => {
  const { items, removeItem, updateQuantity, getCartTotal } = useCart();
  const { 
    formData, 
    isDialogOpen, 
    orderSuccess, 
    handleInputChange, 
    handleSubmitOrder, 
    setIsDialogOpen 
  } = useCartCheckout();
  
  // Show empty cart message if cart is empty
  if (items.length === 0) {
    return (
      <MainLayout>
        <EmptyCart />
      </MainLayout>
    );
  }
  
  return (
    <MainLayout>
      <div className="container mx-auto py-8 px-4 relative z-10">
        <h1 className="text-3xl font-bold text-white mb-8">Корзина</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border-primary/20 bg-black/60 backdrop-blur-sm mb-6">
              <CardHeader>
                <CardTitle className="text-xl text-white">Ваши товары</CardTitle>
              </CardHeader>
              <CardContent>
                {items.map(item => (
                  <CartItem 
                    key={item.id}
                    item={item}
                    onUpdateQuantity={updateQuantity}
                    onRemoveItem={removeItem}
                  />
                ))}
              </CardContent>
            </Card>
          </div>
          
          <div>
            <CartSummary 
              items={items}
              total={getCartTotal()}
              onCheckout={() => setIsDialogOpen(true)}
            />
          </div>
        </div>
        
        <CheckoutDialog 
          isOpen={isDialogOpen}
          onOpenChange={setIsDialogOpen}
          orderSuccess={orderSuccess}
          formData={formData}
          onInputChange={handleInputChange}
          onSubmit={handleSubmitOrder}
        />
      </div>
    </MainLayout>
  );
};

interface CheckoutDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  orderSuccess: boolean;
  formData: {
    name: string;
    phone: string;
    telegram: string;
  };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

/**
 * Dialog component for checkout process
 */
const CheckoutDialog = ({ 
  isOpen, 
  onOpenChange, 
  orderSuccess, 
  formData, 
  onInputChange, 
  onSubmit 
}: CheckoutDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-black/90 border-primary/30 text-white">
        <DialogHeader>
          <DialogTitle className="text-xl text-white">Оформление заказа</DialogTitle>
          <DialogDescription className="text-gray-300">
            Заполните данные для оформления заказа
          </DialogDescription>
        </DialogHeader>
        
        {orderSuccess ? (
          <OrderSuccess message="Менеджер свяжется с вами для подтверждения заказа" />
        ) : (
          <CheckoutForm 
            formData={formData}
            onChange={onInputChange}
            onSubmit={onSubmit}
            onCancel={() => onOpenChange(false)}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default Cart;
