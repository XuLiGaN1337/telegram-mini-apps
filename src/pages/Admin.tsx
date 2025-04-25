
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/MainLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { 
  ShoppingBag, 
  Users, 
  Plus,
  Pencil,
  Trash2,
  Bell,
  Package,
  UserPlus,
  UserMinus
} from "lucide-react";
import { useAuth } from "@/hooks/use-auth";

interface Order {
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

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  stock: number;
}

// Mock data for orders
const mockOrders: Order[] = [
  {
    id: '1',
    customer: {
      name: 'Иван Петров',
      phone: '+7 (999) 123-45-67',
      telegram: '@ivan_petrov'
    },
    items: [
      { id: 'helmet-1', name: 'Мотошлем Shoei GT-Air II', price: 32500, quantity: 1 }
    ],
    total: 32500,
    date: '2025-04-24T14:30:00Z',
    status: 'new'
  },
  {
    id: '2',
    customer: {
      name: 'Анна Сидорова',
      phone: '+7 (987) 654-32-10',
      telegram: '@anna_s'
    },
    items: [
      { id: 'jacket-1', name: 'Мотокуртка REBELHORN Rebel', price: 18700, quantity: 1 },
      { id: 'gloves-1', name: 'Мотоперчатки Alpinestars SP-8 v3', price: 5900, quantity: 1 }
    ],
    total: 24600,
    date: '2025-04-23T10:15:00Z',
    status: 'processing'
  }
];

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

const Admin = () => {
  const navigate = useNavigate();
  const { user, isAdmin, isLoading, addAdmin, removeAdmin, getAdminsList } = useAuth();
  
  const [orders, setOrders] = useState<Order[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [newNotifications, setNewNotifications] = useState<number>(0);
  
  const [isProductDialogOpen, setIsProductDialogOpen] = useState(false);
  const [isAdminDialogOpen, setIsAdminDialogOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const [adminUsername, setAdminUsername] = useState('');
  const [adminsList, setAdminsList] = useState<string[]>([]);
  
  // Redirect if not admin
  useEffect(() => {
    if (!isLoading && (!user || !isAdmin)) {
      navigate('/login');
    }
  }, [user, isAdmin, isLoading, navigate]);
  
  // Load data on mount
  useEffect(() => {
    // Load orders
    const storedOrders = localStorage.getItem('motoOrders');
    if (storedOrders) {
      try {
        setOrders(JSON.parse(storedOrders));
      } catch (e) {
        console.error('Failed to parse orders:', e);
      }
    } else {
      // Initialize with mock data
      setOrders(mockOrders);
      localStorage.setItem('motoOrders', JSON.stringify(mockOrders));
    }
    
    // Load products
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
    
    // Set notifications count based on new orders
    setNewNotifications(mockOrders.filter(order => order.status === 'new').length);
    
    // Load admins list
    setAdminsList(getAdminsList());
  }, [getAdminsList]);
  
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
  
  const handleAddAdmin = () => {
    if (adminUsername.trim()) {
      addAdmin(adminUsername.trim());
      setAdminUsername('');
      setAdminsList(getAdminsList());
    }
  };
  
  const handleRemoveAdmin = (username: string) => {
    removeAdmin(username);
    setAdminsList(getAdminsList());
  };
  
  const handleUpdateOrderStatus = (orderId: string, status: Order['status']) => {
    const updatedOrders = orders.map(order => 
      order.id === orderId ? { ...order, status } : order
    );
    
    setOrders(updatedOrders);
    localStorage.setItem('motoOrders', JSON.stringify(updatedOrders));
    
    // Update notifications count
    setNewNotifications(updatedOrders.filter(order => order.status === 'new').length);
  };
  
  if (isLoading || !user) {
    return (
      <MainLayout>
        <div className="container mx-auto py-12 px-4 text-center">
          <p>Загрузка...</p>
        </div>
      </MainLayout>
    );
  }
  
  return (
    <MainLayout>
      <div className="container mx-auto py-8 px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white">Панель администратора</h1>
            <p className="text-gray-300">Добро пожаловать, {user.name}</p>
          </div>
          
          <div className="flex items-center gap-4">
            <Button 
              variant="outline"
              className="relative border-primary/30"
              onClick={() => navigate('/shop')}
            >
              <ShoppingBag className="h-5 w-5 mr-2" />
              Магазин
            </Button>
            
            <Button 
              variant="outline"
              className="relative border-primary/30"
            >
              <Bell className="h-5 w-5 mr-2" />
              Уведомления
              {newNotifications > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-red-500">
                  {newNotifications}
                </Badge>
              )}
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="orders" className="w-full">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="orders" className="data-[state=active]:bg-primary/20">
              <ShoppingBag className="h-4 w-4 mr-2" />
              Заказы
              {newNotifications > 0 && (
                <Badge className="ml-2 bg-red-500">
                  {newNotifications}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="products" className="data-[state=active]:bg-primary/20">
              <Package className="h-4 w-4 mr-2" />
              Товары
            </TabsTrigger>
            <TabsTrigger value="admins" className="data-[state=active]:bg-primary/20">
              <Users className="h-4 w-4 mr-2" />
              Администраторы
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="orders" className="space-y-6">
            {orders.length === 0 ? (
              <Card className="border-primary/20 bg-black/60 backdrop-blur-sm">
                <CardContent className="pt-6 text-center">
                  <p className="text-gray-300">Нет заказов</p>
                </CardContent>
              </Card>
            ) : (
              orders.map(order => (
                <Card 
                  key={order.id} 
                  className={`border-primary/20 bg-black/60 backdrop-blur-sm ${
                    order.status === 'new' ? 'border-l-4 border-l-red-500' : ''
                  }`}
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl text-white">
                          Заказ #{order.id}
                        </CardTitle>
                        <CardDescription>
                          {new Date(order.date).toLocaleString('ru-RU')}
                        </CardDescription>
                      </div>
                      <Badge className={
                        order.status === 'new' ? 'bg-red-500' :
                        order.status === 'processing' ? 'bg-blue-500' :
                        order.status === 'completed' ? 'bg-green-500' :
                        'bg-gray-500'
                      }>
                        {
                          order.status === 'new' ? 'Новый' :
                          order.status === 'processing' ? 'В обработке' :
                          order.status === 'completed' ? 'Выполнен' :
                          'Отменен'
                        }
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-medium text-white mb-2">Данные клиента:</h3>
                        <p className="text-gray-300">Имя: {order.customer.name}</p>
                        <p className="text-gray-300">Телефон: {order.customer.phone}</p>
                        <p className="text-gray-300">Telegram: {order.customer.telegram}</p>
                      </div>
                      
                      <div>
                        <h3 className="font-medium text-white mb-2">Товары:</h3>
                        <div className="space-y-2">
                          {order.items.map(item => (
                            <div key={item.id} className="flex justify-between">
                              <span className="text-gray-300">
                                {item.name} x {item.quantity}
                              </span>
                              <span className="text-white">
                                {(item.price * item.quantity).toLocaleString()} ₽
                              </span>
                            </div>
                          ))}
                          <div className="pt-2 border-t border-primary/20 flex justify-between font-medium">
                            <span className="text-white">Итого:</span>
                            <span className="text-white">{order.total.toLocaleString()} ₽</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-wrap gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      disabled={order.status === 'processing'}
                      onClick={() => handleUpdateOrderStatus(order.id, 'processing')}
                      className="border-cyan-500/30"
                    >
                      В обработку
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      disabled={order.status === 'completed'}
                      onClick={() => handleUpdateOrderStatus(order.id, 'completed')}
                      className="border-green-500/30 text-green-400"
                    >
                      Выполнен
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      disabled={order.status === 'cancelled'}
                      onClick={() => handleUpdateOrderStatus(order.id, 'cancelled')}
                      className="border-red-500/30 text-red-400"
                    >
                      Отменить
                    </Button>
                  </CardFooter>
                </Card>
              ))
            )}
          </TabsContent>
          
          <TabsContent value="products" className="space-y-6">
            <div className="flex justify-end mb-4">
              <Button onClick={handleAddProduct}>
                <Plus className="h-4 w-4 mr-2" />
                Добавить товар
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map(product => (
                <Card key={product.id} className="border-primary/20 bg-black/60 backdrop-blur-sm">
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
                      onClick={() => handleEditProduct(product)}
                      className="border-cyan-500/30"
                    >
                      <Pencil className="h-4 w-4 mr-2" />
                      Изменить
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDeleteProduct(product.id)}
                      className="border-red-500/30 text-red-400"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Удалить
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="admins">
            <Card className="border-primary/20 bg-black/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-white">Управление администраторами</CardTitle>
                <CardDescription>
                  Добавляйте или удаляйте администраторов магазина
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="flex-grow">
                    <Label htmlFor="adminUsername">Имя пользователя в Telegram</Label>
                    <Input
                      id="adminUsername"
                      value={adminUsername}
                      onChange={(e) => setAdminUsername(e.target.value)}
                      placeholder="Например: username"
                      className="bg-transparent border-cyan-500/30"
                    />
                  </div>
                  <div className="flex items-end">
                    <Button onClick={handleAddAdmin} disabled={!adminUsername.trim()}>
                      <UserPlus className="h-4 w-4 mr-2" />
                      Добавить
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-medium text-white">Текущие администраторы:</h3>
                  {adminsList.map(admin => (
                    <div 
                      key={admin} 
                      className="flex justify-between items-center p-3 border border-primary/20 rounded-md"
                    >
                      <span className="text-gray-300">@{admin}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRemoveAdmin(admin)}
                        disabled={admin === 'anthony_genevezy74'} // Disable for main admin
                        className="text-red-400 hover:text-red-300 hover:bg-red-950/30"
                      >
                        <UserMinus className="h-4 w-4 mr-2" />
                        Удалить
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Product Edit/Add Dialog */}
      <Dialog open={isProductDialogOpen} onOpenChange={setIsProductDialogOpen}>
        <DialogContent className="bg-black/90 border-primary/30 text-white">
          <DialogHeader>
            <DialogTitle className="text-xl text-white">
              {currentProduct?.id ? 'Изменить товар' : 'Добавить товар'}
            </DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleSaveProduct}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Название</Label>
                  <Input
                    id="name"
                    value={currentProduct?.name || ''}
                    onChange={(e) => setCurrentProduct(prev => prev ? {...prev, name: e.target.value} : null)}
                    className="bg-transparent border-cyan-500/30"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="category">Категория</Label>
                  <Input
                    id="category"
                    value={currentProduct?.category || ''}
                    onChange={(e) => setCurrentProduct(prev => prev ? {...prev, category: e.target.value} : null)}
                    className="bg-transparent border-cyan-500/30"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price">Цена (₽)</Label>
                  <Input
                    id="price"
                    type="number"
                    value={currentProduct?.price || 0}
                    onChange={(e) => setCurrentProduct(prev => prev ? {...prev, price: Number(e.target.value)} : null)}
                    className="bg-transparent border-cyan-500/30"
                    min="0"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="stock">В наличии (шт.)</Label>
                  <Input
                    id="stock"
                    type="number"
                    value={currentProduct?.stock || 0}
                    onChange={(e) => setCurrentProduct(prev => prev ? {...prev, stock: Number(e.target.value)} : null)}
                    className="bg-transparent border-cyan-500/30"
                    min="0"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="image">URL изображения</Label>
                <Input
                  id="image"
                  value={currentProduct?.image || ''}
                  onChange={(e) => setCurrentProduct(prev => prev ? {...prev, image: e.target.value} : null)}
                  className="bg-transparent border-cyan-500/30"
                  placeholder="https://example.com/image.jpg"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Описание</Label>
                <Input
                  id="description"
                  value={currentProduct?.description || ''}
                  onChange={(e) => setCurrentProduct(prev => prev ? {...prev, description: e.target.value} : null)}
                  className="bg-transparent border-cyan-500/30"
                />
              </div>
            </div>
            
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setIsProductDialogOpen(false)}>
                Отмена
              </Button>
              <Button type="submit">Сохранить</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </MainLayout>
  );
};

export default Admin;
