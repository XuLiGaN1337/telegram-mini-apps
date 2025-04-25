
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Pencil, Trash2 } from "lucide-react";
import { Product } from "@/types/admin";

interface ProductCardProps {
  product: Product;
  onEdit: (product: Product) => void;
  onDelete: (productId: string) => void;
}

/**
 * Card component for displaying a product
 */
export const ProductCard = ({ product, onEdit, onDelete }: ProductCardProps) => {
  return (
    <Card className="border-primary/20 bg-black/60 backdrop-blur-sm">
      <div className="h-40 w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg text-white">{product.name}</CardTitle>
          <Badge>{product.category}</Badge>
        </div>
        <CardDescription>
          Цена: {product.price.toLocaleString()} ₽ | В наличии: {product.stock} шт.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300 text-sm line-clamp-2">{product.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onEdit(product)}
          className="border-cyan-500/30"
        >
          <Pencil className="h-4 w-4 mr-2" />
          Изменить
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onDelete(product.id)}
          className="border-red-500/30 text-red-400"
        >
          <Trash2 className="h-4 w-4 mr-2" />
          Удалить
        </Button>
      </CardFooter>
    </Card>
  );
};
