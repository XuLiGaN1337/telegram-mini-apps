import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface CheckoutFormProps {
  total: number;
  onSubmit: (e: React.FormEvent) => void;
  contactInfo: {
    name: string;
    phone: string;
    email: string;
    address: string;
    comment: string;
  };
  onContactInfoChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

/**
 * Checkout form component for cart
 */
const CheckoutForm = ({ total, onSubmit, contactInfo, onContactInfoChange }: CheckoutFormProps) => (
  <Card className="border-primary/20 bg-black/60 backdrop-blur-sm sticky top-20">
    <CardHeader>
      <CardTitle className="text-xl text-white">Оформление заказа</CardTitle>
    </CardHeader>
    
    <CardContent>
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Ваше имя</Label>
          <Input
            id="name"
            name="name"
            value={contactInfo.name}
            onChange={onContactInfoChange}
            placeholder="Иван Иванов"
            className="bg-transparent border-cyan-500/30"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Телефон</Label>
          <Input
            id="phone"
            name="phone"
            value={contactInfo.phone}
            onChange={onContactInfoChange}
            placeholder="+7 (___) ___-__-__"
            className="bg-transparent border-cyan-500/30"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={contactInfo.email}
            onChange={onContactInfoChange}
            placeholder="example@email.com"
            className="bg-transparent border-cyan-500/30"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="address">Адрес доставки</Label>
          <Input
            id="address"
            name="address"
            value={contactInfo.address}
            onChange={onContactInfoChange}
            placeholder="г. Тюмень, ул. Ленина, д. 1, кв. 1"
            className="bg-transparent border-cyan-500/30"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="comment">Комментарий к заказу</Label>
          <Textarea
            id="comment"
            name="comment"
            value={contactInfo.comment}
            onChange={onContactInfoChange}
            placeholder="Дополнительная информация по заказу"
            className="bg-transparent border-cyan-500/30 min-h-24"
          />
        </div>
        
        <div className="pt-4 border-t border-primary/20">
          <div className="flex justify-between text-lg font-medium mb-1">
            <span className="text-gray-300">Итого:</span>
            <span className="text-white">{total.toLocaleString()} ₽</span>
          </div>
          <div className="text-xs text-gray-500 mb-4">
            Без учета доставки
          </div>
          
          <Button type="submit" className="w-full">
            Оформить заказ
          </Button>
        </div>
      </form>
    </CardContent>
    
    <CardFooter className="pt-0">
      <div className="text-sm text-gray-500 flex items-start gap-2">
        <AlertTriangle className="h-4 w-4 flex-shrink-0 mt-0.5 text-yellow-500" />
        <p>
          Нажимая кнопку "Оформить заказ", вы соглашаетесь с условиями покупки и политикой конфиденциальности
        </p>
      </div>
    </CardFooter>
  </Card>
);

export default CheckoutForm;
