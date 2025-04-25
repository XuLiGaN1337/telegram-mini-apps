import { useState, useEffect } from 'react';
import { Product } from '@/types/admin';
import { productsService } from '@/lib/db-service';

export const useAdminProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Загрузить товары при инициализации
  useEffect(() => {
    loadProducts();
  }, []);

  // Загрузить товары из сервиса
  const loadProducts = () => {
    setIsLoading(true);
    try {
      const loadedProducts = productsService.getAll();
      setProducts(loadedProducts);
    } catch (error) {
      console.error('Failed to load products:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Открыть диалог для создания нового товара
  const handleAddProduct = () => {
    setCurrentProduct({
      id: '',
      name: '',
      category: '',
      description: '',
      price: 0,
      stock: 0,
      image: '',
    });
    setIsDialogOpen(true);
  };

  // Открыть диалог для редактирования существующего товара
  const handleEditProduct = (product: Product) => {
    setCurrentProduct({ ...product });
    setIsDialogOpen(true);
  };

  // Удалить товар
  const handleDeleteProduct = (id: string) => {
    if (window.confirm('Вы уверены, что хотите удалить этот товар?')) {
      try {
        productsService.remove(id);
        setProducts(products.filter(product => product.id !== id));
      } catch (error) {
        console.error('Failed to delete product:', error);
      }
    }
  };

  // Обновить поле текущего товара
  const handleProductChange = (field: keyof Product, value: string | number) => {
    if (currentProduct) {
      setCurrentProduct({
        ...currentProduct,
        [field]: value,
      });
    }
  };

  // Сохранить товар
  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentProduct) return;

    try {
      if (currentProduct.id) {
        // Обновить существующий товар
        productsService.update(currentProduct);
        setProducts(
          products.map(p => (p.id === currentProduct.id ? currentProduct : p))
        );
      } else {
        // Добавить новый товар
        const newProduct = productsService.add(currentProduct);
        setProducts([...products, newProduct]);
      }
      setIsDialogOpen(false);
    } catch (error) {
      console.error('Failed to save product:', error);
    }
  };

  return {
    products,
    isLoading,
    currentProduct,
    isDialogOpen,
    setIsDialogOpen,
    handleAddProduct,
    handleEditProduct,
    handleDeleteProduct,
    handleProductChange,
    handleSaveProduct,
  };
};
