import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Product } from "@/types/admin";
import { categoriesService } from "@/lib/db-service";
import { useState, useEffect } from "react";
import ProductForm from "./ProductForm";

interface ProductDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: Product | null;
  onSave: (e: React.FormEvent) => void;
  onProductChange: (field: keyof Product, value: string | number) => void;
}

/**
 * Dialog component for adding or editing a product
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
  
  useEffect(() => {
    // Загружаем категории при открытии диалога
    if (open) {
      setCategories(categoriesService.getAll());
    }
  }, [open]);
  
  const handleAddCategory = (category: string) => {
    categoriesService.add(category);
    setCategories(categoriesService.getAll());
    onProductChange('category', category);
  };
  
  const handleRemoveCategory = (category: string) => {
    if (window.confirm(`Удалить категорию "${category}"?`)) {
      categoriesService.remove(category);
      setCategories(categoriesService.getAll());
      
      // Если текущая категория продукта была удалена, сбрасываем её
      if (product.category === category) {
        onProductChange('category', '');
      }
    }
  };
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-black/90 border-primary/30 text-white md:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl text-white">{title}</DialogTitle>
        </DialogHeader>
        
        <ProductForm 
          product={product}
          categories={categories}
          onSave={onSave}
          onProductChange={onProductChange}
          onOpenChange={onOpenChange}
          onAddCategory={handleAddCategory}
          onRemoveCategory={handleRemoveCategory}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ProductDialog;
