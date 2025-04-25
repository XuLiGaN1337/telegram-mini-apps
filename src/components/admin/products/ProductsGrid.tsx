
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { ProductCard } from "@/components/admin/products/ProductCard";
import { Product } from "@/types/admin";

interface ProductsGridProps {
  products: Product[];
  onAddProduct: () => void;
  onEditProduct: (product: Product) => void;
  onDeleteProduct: (productId: string) => void;
}

/**
 * Component that displays a grid of products with actions
 */
export const ProductsGrid = ({ 
  products, 
  onAddProduct, 
  onEditProduct, 
  onDeleteProduct 
}: ProductsGridProps) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-end mb-4">
        <Button onClick={onAddProduct}>
          <Plus className="h-4 w-4 mr-2" />
          Добавить товар
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onEdit={onEditProduct}
            onDelete={onDeleteProduct}
          />
        ))}
      </div>
    </div>
  );
};
