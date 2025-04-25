import { useState, useEffect } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useCart } from "@/components/ui/cart-context";
import { productsService, categoriesService } from "@/lib/db-service";
import { Product } from "@/types/admin";
import { Search, ShoppingCart, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

/**
 * Shop page component
 */
const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const { addItem, getItemCount } = useCart();
  const navigate = useNavigate();
  
  // Load products and categories on mount
  useEffect(() => {
    const loadedProducts = productsService.getAll();
    setProducts(loadedProducts);
    setFilteredProducts(loadedProducts);
    
    const loadedCategories = categoriesService.getAll();
    setCategories(loadedCategories);
  }, []);
  
  // Filter products when search term or category changes
  useEffect(() => {
    let result = products;
    
    if (selectedCategory) {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(term) || 
        product.description.toLowerCase().includes(term)
      );
    }
    
    setFilteredProducts(result);
  }, [searchTerm, selectedCategory, products]);
  
  // Add product to cart
  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  };
  
  // Navigate to cart
  const goToCart = () => {
    navigate("/cart");
  };
  
  return (
    <MainLayout>
      <div className="container mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            Магазин мото-экипировки
          </h1>
          
          <Button 
            variant="outline" 
            onClick={goToCart}
            className="relative"
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            Корзина
            {getItemCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {getItemCount()}
              </span>
            )}
          </Button>
        </div>
        
        <Card className="mb-8 border-primary/20 bg-black/60 backdrop-blur-sm">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="search">Поиск</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <Input
                    id="search"
                    placeholder="Название или описание..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-transparent border-cyan-500/30"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="category">Категория</Label>
                <Select 
                  value={selectedCategory} 
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger id="category" className="bg-transparent border-cyan-500/30">
                    <SelectValue placeholder="Все категории" />
                  </SelectTrigger>
                  <SelectContent className="bg-black/95 border-cyan-500/30">
                    <SelectItem value="">Все категории</SelectItem>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-end">
                <Button 
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("");
                  }}
                  className="w-full"
                >
                  Сбросить фильтры
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-400">
              {products.length === 0 
                ? "В магазине пока нет товаров" 
                : "Товары не найдены. Попробуйте изменить параметры поиска."}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={handleAddToCart} 
              />
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
};

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

/**
 * Product card component
 */
const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card 
      className="overflow-hidden border-primary/20 bg-black/70 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(56,182,255,0.3)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={product.image || "https://images.unsplash.com/photo-1558979158-65a1eaa08691?q=80&w=600"}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 text-sm rounded">
          {product.category}
        </div>
      </div>
      
      <CardContent className="p-5">
        <h3 className="text-xl font-medium text-white mb-2">{product.name}</h3>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {product.description || "Подробное описание товара отсутствует."}
        </p>
        
        <div className="flex justify-between items-center">
          <div>
            <p className="text-2xl font-bold text-white">{product.price.toLocaleString()} ₽</p>
            <p className="text-xs text-gray-500">
              {product.stock > 0 
                ? `В наличии: ${product.stock} шт.` 
                : "Нет в наличии"}
            </p>
          </div>
          
          <Button
            onClick={() => onAddToCart(product)}
            disabled={product.stock <= 0}
            className="group"
          >
            <ShoppingCart className="h-4 w-4 mr-2 group-hover:animate-bounce" />
            В корзину
          </Button>
        </div>
        
        <Button 
          variant="link" 
          className="mt-2 p-0 text-blue-400 hover:text-blue-300 transition-colors w-full justify-end"
        >
          Подробнее 
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default Shop;
