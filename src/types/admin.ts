
/**
 * Order type definition
 */
export interface Order {
  id: string;
  customer: {
    name: string;
    phone: string;
    telegram: string;
  };
  items: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
  }>;
  total: number;
  date: string;
  status: 'new' | 'processing' | 'completed' | 'cancelled';
}

/**
 * Product type definition
 */
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  stock: number;
}
