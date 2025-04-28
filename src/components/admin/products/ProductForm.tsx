import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { Product } from "@/types/admin";
import FormField from "./FormField";
import CategoryManager from "./CategoryManager";

interface ProductFormProps {
  product: Product;
  categories: string[];
  onSave: (e: React.FormEvent) => void;
  onProductChange: (field: keyof Product, value: string | number) => void;
  onOpenChange: (open: boolean) => void;
  onAddCategory: (category: string) => void;
  onRemoveCategory: (category: string) => void;
}

/**
 * Form component for adding or editing a product
 */
const ProductForm = ({
  product,
  categories,
  onSave,
  onProductChange,
  onOpenChange,
  onAddCategory,
  onRemoveCategory
}: ProductFormProps) => {
  const handleChange = (field: keyof Product, value: string | number) => {
    onProductChange(field, value);
  };

  const handleCategoryChange = (category: string) => {
    handleChange('category', category);
  };

  return (
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
          
          <CategoryManager 
            categories={categories}
            selectedCategory={product.category}
            onCategoryChange={handleCategoryChange}
            onAddCategory={onAddCategory}
            onRemoveCategory={onRemoveCategory}
          />
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
  );
};

export default ProductForm;
