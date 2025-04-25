
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Product } from "@/types/admin";

interface ProductDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: Product | null;
  onSave: (e: React.FormEvent) => void;
  onProductChange: (field: keyof Product, value: string | number) => void;
}

/**
 * Dialog for adding or editing a product
 */
export const ProductDialog = ({ 
  open, 
  onOpenChange, 
  product, 
  onSave, 
  onProductChange 
}: ProductDialogProps) => {
  if (!product) return null;
  
  const isNewProduct = !product.id;
  const title = isNewProduct ? 'Добавить товар' : 'Изменить товар';
  
  const handleChange = (field: keyof Product, value: string | number) => {
    onProductChange(field, value);
  };
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-black/90 border-primary/30 text-white">
        <DialogHeader>
          <DialogTitle className="text-xl text-white">{title}</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={onSave}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <FormField 
                id="name"
                label="Название"
                value={product.name}
                onChange={(e) => handleChange('name', e.target.value)}
                required
              />
              
              <FormField 
                id="category"
                label="Категория"
                value={product.category}
                onChange={(e) => handleChange('category', e.target.value)}
                required
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <FormField 
                id="price"
                label="Цена (₽)"
                type="number"
                value={product.price}
                onChange={(e) => handleChange('price', Number(e.target.value))}
                min="0"
                required
              />
              
              <FormField 
                id="stock"
                label="В наличии (шт.)"
                type="number"
                value={product.stock}
                onChange={(e) => handleChange('stock', Number(e.target.value))}
                min="0"
                required
              />
            </div>
            
            <FormField 
              id="image"
              label="URL изображения"
              value={product.image}
              onChange={(e) => handleChange('image', e.target.value)}
              placeholder="https://example.com/image.jpg"
              required
            />
            
            <FormField 
              id="description"
              label="Описание"
              value={product.description}
              onChange={(e) => handleChange('description', e.target.value)}
            />
          </div>
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Отмена
            </Button>
            <Button type="submit">Сохранить</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

interface FormFieldProps {
  id: string;
  label: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  min?: string;
  required?: boolean;
}

/**
 * Reusable form field component
 */
const FormField = ({ 
  id, 
  label, 
  value, 
  onChange, 
  type = "text", 
  placeholder, 
  min, 
  required 
}: FormFieldProps) => (
  <div className="space-y-2">
    <Label htmlFor={id}>{label}</Label>
    <Input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      className="bg-transparent border-cyan-500/30"
      placeholder={placeholder}
      min={min}
      required={required}
    />
  </div>
);
