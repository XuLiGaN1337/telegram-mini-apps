
import { useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "@/components/MainLayout";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/components/ui/cart-context";
import { ShoppingCart, PlusCircle, Package } from "lucide-react";

// Sample products data
const products = [
  {
    id: "helmet-1",
    name: "Мотошлем Shoei GT-Air II",
    price: 32500,
    image: "https://images.unsplash.com/photo-1591536250677-b990b6356b10?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Шлемы",
    description: "Премиальный шлем с отличной вентиляцией и встроенным солнцезащитным визором"
  },
  {
    id: "jacket-1",
    name: "Мотокуртка REBELHORN Rebel",
    price: 18700,
    image: "https://images.unsplash.com/photo-1588694470925-04fa6a7c2254?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Экипировка",
    description: "Текстильная мотокуртка с защитными вставками и вентиляцией"
  },
  {
    id: "gloves-1",
    name: "Мотоперчатки Alpinestars SP-8 v3",
    price: 5900,
    image: "https://images.unsplash.com/photo-1603123853880-a92fafb7809f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Экипировка",
    description: "Кожаные перчатки с защитой пальцев и ладони"
  },
  {
    id: "boots-1",
    name: "Мотоботы TCX S-R1",
    price: 14200,
    image: "https://images.unsplash.com/photo-1641806120672-643a30aeda7e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Обувь",
    description: "Спортивные мотоботы с защитой голеностопа и сертификацией CE"
  },
  {
    id: "oil-1",
    name: "Моторное масло Motul 7100 4T",
    price: 1850,
    image: "https://images.unsplash.com/photo-1635274605638-d44babc08a4c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Масла",
    description: "Синтетическое масло для 4-тактных двигателей, 10W-40, 1 литр"
  },
  {
    id: "chain-1",
    name: "Цепь DID 525VX",
    price: 6300,
    image: "https://images.unsplash.com/photo-1626686220112-b54a721135bb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Запчасти",
    description: "Усиленная приводная цепь с X-кольцами, 525 размер, 120 звеньев"
  }
];

const Shop = () => {
  const { addItem, getItemCount } = useCart();
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Get unique categories from products
  useState(() => {
    const uniqueCategories = Array.from(new Set(products.map(product => product.category)));
    setCategories(uniqueCategories);
  });
  
  const filteredProducts = selectedCategory 
    ? products.filter(product => product.category === selectedCategory)
    : products;
  
  const handleAddToCart = (product: typeof products[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  };
  
  return (
    <MainLayout>
      <div className="container mx-auto py-8 px-4 relative z-10">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Магазин</h1>
          
          <Link to="/cart">
            <Button className="relative bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Корзина
              {getItemCount() > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-destructive">
                  {getItemCount()}
                </Badge>
              )}
            </Button>
          </Link>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <Button 
            variant={selectedCategory === null ? "default" : "outline"}
            className="bg-gradient-to-r from-primary/80 to-secondary/80 border-primary"
            onClick={() => setSelectedCategory(null)}
          >
            <Package className="h-4 w-4 mr-2" />
            Все товары
          </Button>
          
          {categories.map(category => (
            <Button 
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category 
                ? "bg-gradient-to-r from-primary/80 to-secondary/80" 
                : "border-primary/50"}
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <Card key={product.id} className="overflow-hidden border-primary/20 bg-black/60 backdrop-blur-sm shadow-neon-sm hover:shadow-neon transition-all duration-300">
              <div className="h-56 w-full overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl text-white">{product.name}</CardTitle>
                  <Badge className="bg-gradient-to-r from-primary to-secondary">
                    {product.category}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-300 mb-4">{product.description}</p>
                <p className="text-2xl font-bold text-white">{product.price.toLocaleString()} ₽</p>
              </CardContent>
              
              <CardFooter>
                <Button 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80"
                  onClick={() => handleAddToCart(product)}
                >
                  <PlusCircle className="h-5 w-5 mr-2" />
                  В корзину
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Shop;
