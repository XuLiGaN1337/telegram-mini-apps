import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Product } from "@/types/admin";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { categoriesService } from "@/lib/db-service";
import { useState, useEffect } from "react";
import { CirclePlus, CircleMinus, CircleX } from "lucide-react";

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
  
  const [categories, setCategories] = useState<string[]>([]);
  const [newCategory, setNewCategory] = useState('');
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  
  useEffect(() => {
    setCategories(categoriesService.getAll());
  }, [open]);
  
  const handleChange = (field: keyof Product, value: string | number) => {
    onProductChange(field, value);
  };
  
  const handleAddCategory = () => {
    if (newCategory.trim()) {
      categoriesService.add(newCategory.trim());
      setCategories(categoriesService.getAll());
      handleChange('category', newCategory.trim());
      setNewCategory('');
      setIsAddingCategory(false);
    }
  };
  
  const handleRemoveCategory = (category: string) => {
    if (window.confirm(`Удалить категорию "${category}"?`)) {
      categoriesService.remove(category);
      setCategories(categoriesService.getAll());
      
      // Если текущая категория продукта была удалена, сбрасываем её
      if (product.category === category) {
        handleChange('category', '');
      }
    }
  };
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-black/90 border-primary/30 text-white md:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl text-white">{title}</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={onSave}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField 
                id="name"
                label="Название"
                value={product.name}
                onChange={(e) => handleChange('name', e.target.value)}
                required
              />
              
              {/* Категория с выпадающим списком */}
              <div className="space-y-2">
                <Label htmlFor="category">Категория</Label>
                
                {isAddingCategory ? (
                  <div className="flex space-x-2">
                    <Input
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value)}
                      className="bg-transparent border-cyan-500/30"
                      placeholder="Новая категория"
                    />
                    <Button 
                      type="button" 
                      size="icon" 
                      variant="outline" 
                      onClick={handleAddCategory}
                      className="flex-shrink-0"
                    >
                      <CirclePlus className="h-4 w-4" />
                    </Button>
                    <Button 
                      type="button" 
                      size="icon" 
                      variant="outline" 
                      onClick={() => setIsAddingCategory(false)}
                      className="flex-shrink-0"
                    >
                      <CircleX className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <div className="flex space-x-2">
                    <Select 
                      value={product.category} 
                      onValueChange={(value) => handleChange('category', value)}
                    >
                      <SelectTrigger className="bg-transparent border-cyan-500/30">
                        <SelectValue placeholder="Выберите категорию" />
                      </SelectTrigger>
                      <SelectContent className="bg-black/95 border-cyan-500/30">
                        {categories.map(category => (
                          <SelectItem 
                            key={category} 
                            value={category}
                            className="flex justify-between items-center group"
                          >
                            <span>{category}</span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Button 
                      type="button" 
                      size="icon" 
                      variant="outline" 
                      onClick={() => setIsAddingCategory(true)}
                      className="flex-shrink-0"
                    >
                      <CirclePlus className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
            
            {/* Управление категориями */}
            <div className="mt-2 flex flex-wrap gap-2">
              {categories.map(category => (
                <div 
                  key={category}
                  className="flex items-center bg-cyan-950/40 text-xs px-2 py-1 rounded"
                >
                  {category}
                  <button
                    type="button"
                    onClick={() => handleRemoveCategory(category)}
                    className="ml-2 text-red-400 hover:text-red-300"
                  >
                    <CircleMinus className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
