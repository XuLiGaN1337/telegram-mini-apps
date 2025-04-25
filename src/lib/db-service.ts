import { Product } from "@/types/admin";

// Функция для получения данных из localStorage с проверкой на ошибки
const getStoredData = <T>(key: string, defaultValue: T): T => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
  } catch (error) {
    console.error(`Error getting data from localStorage (${key}):`, error);
    return defaultValue;
  }
};

// Функция для сохранения данных в localStorage с обработкой ошибок
const setStoredData = <T>(key: string, data: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Error saving data to localStorage (${key}):`, error);
  }
};

// Управление категориями
export const categoriesService = {
  getAll: (): string[] => {
    return getStoredData<string[]>('motoCategories', [
      'Шлемы',
      'Куртки',
      'Перчатки',
      'Ботинки',
      'Аксессуары'
    ]);
  },
  
  add: (category: string): void => {
    const categories = categoriesService.getAll();
    if (!categories.includes(category)) {
      setStoredData('motoCategories', [...categories, category]);
    }
  },
  
  remove: (category: string): void => {
    const categories = categoriesService.getAll();
    setStoredData(
      'motoCategories', 
      categories.filter(cat => cat !== category)
    );
  }
};

// Управление товарами
export const productsService = {
  getAll: (): Product[] => {
    return getStoredData<Product[]>('motoProducts', []);
  },
  
  add: (product: Omit<Product, 'id'>): Product => {
    const products = productsService.getAll();
    const newProduct = {
      ...product,
      id: Date.now().toString()
    };
    
    setStoredData('motoProducts', [...products, newProduct]);
    
    // Добавляем категорию, если она новая
    if (product.category) {
      categoriesService.add(product.category);
    }
    
    return newProduct;
  },
  
  update: (product: Product): void => {
    const products = productsService.getAll();
    const updatedProducts = products.map(p => 
      p.id === product.id ? product : p
    );
    
    setStoredData('motoProducts', updatedProducts);
    
    // Добавляем категорию, если она новая
    if (product.category) {
      categoriesService.add(product.category);
    }
  },
  
  remove: (id: string): void => {
    const products = productsService.getAll();
    setStoredData(
      'motoProducts', 
      products.filter(p => p.id !== id)
    );
  }
};

// Управление заказами
export interface Order {
  id: string;
  userId: string;
  userName: string;
  items: {
    productId: string;
    name: string;
    quantity: number;
    price: number;
  }[];
  total: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  createdAt: string;
}

export const ordersService = {
  getAll: (): Order[] => {
    return getStoredData<Order[]>('motoOrders', []);
  },
  
  add: (order: Omit<Order, 'id' | 'createdAt'>): Order => {
    const orders = ordersService.getAll();
    const newOrder = {
      ...order,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };
    
    setStoredData('motoOrders', [...orders, newOrder]);
    return newOrder;
  },
  
  update: (order: Order): void => {
    const orders = ordersService.getAll();
    const updatedOrders = orders.map(o => 
      o.id === order.id ? order : o
    );
    
    setStoredData('motoOrders', updatedOrders);
  },
  
  remove: (id: string): void => {
    const orders = ordersService.getAll();
    setStoredData(
      'motoOrders', 
      orders.filter(o => o.id !== id)
    );
  }
};
