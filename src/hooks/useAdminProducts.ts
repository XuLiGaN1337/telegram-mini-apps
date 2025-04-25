
import { useState, useEffect } from 'react';
import { Product } from '@/types/admin';

// Initial products data
const initialProducts: Product[] = [
  {
    id: "helmet-1",
    name: "Мотошлем Shoei GT-Air II",
    price: 32500,
    image: "https://images.unsplash.com/photo-1591536250677-b990b6356b10?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Шлемы",
    description: "Премиальный шлем с отличной вентиляцией и встроенным солнцезащитным визором",
    stock: 5
  },
  {
    id: "jacket-1",
    name: "Мотокуртка REBELHORN Rebel",
    price: 18700,
    image: "https://images.unsplash.com/photo-1588694470925-04fa6a7c2254?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Экипировка",
    description: "Текстильная мотокуртка с защитными вставками и вентиляцией",
    stock: 8
  },
  {
    id: "gloves-1",
    name: "Мотоперчатки Alpinestars SP-8 v3",
    price: 5900,
    image: "https://images.unsplash.com/photo-1603123853880-a92fafb7809f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Экипировка",
    description: "Кожаные перчатки с защитой пальцев и ладони",
    stock: 12
  }
];

/**
 * Hook for managing products in the admin panel
 */
export const useAdminProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isProductDialogOpen, setIsProductDialogOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  
  // Load products on mount
  useEffect(() => {
    const storedProducts = localStorage.getItem('motoProducts');
    if (storedProducts) {
      try {
        setProducts(JSON.parse(storedProducts));
      } catch (e) {
        console.error('Failed to parse products:', e);
      }
    } else {
      // Initialize with initial data
      setProducts(initialProducts);
      localStorage.setItem('motoProducts', JSON.stringify(initialProducts));
    }
  }, []);
  
  const handleAddProduct = () => {
    setCurrentProduct({
      id: '',
      name: '',
      price: 0,
      image: '',
      category: '',
      description: '',
      stock: 0
    });
    setIsProductDialogOpen(true);
  };
  
  const handleEditProduct = (product: Product) => {
    setCurrentProduct(product);
    setIsProductDialogOpen(true);
  };
  
  const handleDeleteProduct = (productId: string) => {
    if (window.confirm('Вы уверены, что хотите удалить этот товар?')) {
      const updatedProducts = products.filter(product => product.id !== productId);
      setProducts(updatedProducts);
      localStorage.setItem('motoProducts', JSON.stringify(updatedProducts));
    }
  };
  
  const handleProductChange = (field: keyof Product, value: string | number) => {
    if (!currentProduct) return;
    
    setCurrentProduct(prev => {
      if (!prev) return null;
      return { ...prev, [field]: value };
    });
  };
  
  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!currentProduct) return;
    
    // Generate ID for new product
    const isNewProduct = !currentProduct.id;
    const productToSave = {
      ...currentProduct,
      id: isNewProduct ? `product-${Date.now()}` : currentProduct.id
    };
    
    let updatedProducts;
    if (isNewProduct) {
      updatedProducts = [...products, productToSave];
    } else {
      updatedProducts = products.map(p => 
        p.id === productToSave.id ? productToSave : p
      );
    }
    
    setProducts(updatedProducts);
    localStorage.setItem('motoProducts', JSON.stringify(updatedProducts));
    setIsProductDialogOpen(false);
  };
  
  return {
    products,
    isProductDialogOpen,
    currentProduct,
    setIsProductDialogOpen,
    handleAddProduct,
    handleEditProduct,
    handleDeleteProduct,
    handleProductChange,
    handleSaveProduct
  };
};
