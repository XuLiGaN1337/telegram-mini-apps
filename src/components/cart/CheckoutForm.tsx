
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";

export interface OrderFormData {
  name: string;
  phone: string;
  telegram: string;
}

interface CheckoutFormProps {
  formData: OrderFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  onCancel: () => void;
}

/**
 * Form for collecting customer details during checkout
 */
export const CheckoutForm = ({ formData, onChange, onSubmit, onCancel }: CheckoutFormProps) => {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="name">Ваше имя</Label>
        <Input 
          id="name"
          name="name"
          value={formData.name}
          onChange={onChange}
          className="bg-transparent border-cyan-500/30"
        />
      </div>
      
      <div>
        <Label htmlFor="phone">Номер телефона</Label>
        <Input 
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={onChange}
          className="bg-transparent border-cyan-500/30"
          placeholder="+7 (___) ___-__-__"
        />
      </div>
      
      <div>
        <Label htmlFor="telegram">Имя пользователя в Telegram</Label>
        <Input 
          id="telegram"
          name="telegram"
          value={formData.telegram}
          onChange={onChange}
          className="bg-transparent border-cyan-500/30"
          placeholder="@username"
        />
      </div>
      
      <div className="flex justify-end gap-3 mt-4">
        <Button 
          variant="outline" 
          onClick={onCancel}
          className="border-cyan-500/30"
        >
          Отмена
        </Button>
        <Button 
          onClick={onSubmit}
          className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80"
        >
          Отправить заказ
        </Button>
      </div>
    </div>
  );
};

interface OrderSuccessProps {
  message: string;
}

/**
 * Success message shown after order is placed
 */
export const OrderSuccess = ({ message }: OrderSuccessProps) => {
  return (
    <div className="py-8 text-center">
      <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
        <Send className="h-8 w-8 text-green-400" />
      </div>
      <h3 className="text-xl font-medium text-white mb-2">Заказ успешно оформлен!</h3>
      <p className="text-gray-300 mb-4">{message}</p>
    </div>
  );
};
