
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/MainLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Package, Users } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { useAdminOrders } from "@/hooks/useAdminOrders";
import { useAdminProducts } from "@/hooks/useAdminProducts";
import { useAdminManager } from "@/hooks/useAdminManager";

import { AdminHeader } from "@/components/admin/AdminHeader";
import { OrdersList } from "@/components/admin/orders/OrdersList";
import { ProductsGrid } from "@/components/admin/products/ProductsGrid";
import { ProductDialog } from "@/components/admin/products/ProductDialog";
import { AdminsManager } from "@/components/admin/admins/AdminsManager";

/**
 * Admin panel page component
 */
const Admin = () => {
  const navigate = useNavigate();
  const { user, isAdmin, isLoading } = useAuth();
  
  // Custom hooks for different parts of admin functionality
  const { 
    orders, 
    newNotificationsCount, 
    handleUpdateOrderStatus 
  } = useAdminOrders();
  
  const { 
    products, 
    isProductDialogOpen, 
    currentProduct, 
    setIsProductDialogOpen, 
    handleAddProduct, 
    handleEditProduct, 
    handleDeleteProduct, 
    handleProductChange, 
    handleSaveProduct 
  } = useAdminProducts();
  
  const { 
    adminUsername, 
    adminsList, 
    setAdminUsername, 
    handleAddAdmin, 
    handleRemoveAdmin 
  } = useAdminManager();
  
  // Redirect if not admin
  useEffect(() => {
    if (!isLoading && (!user || !isAdmin)) {
      navigate('/login');
    }
  }, [user, isAdmin, isLoading, navigate]);
  
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
        <AdminHeader 
          user={user} 
          notificationsCount={newNotificationsCount} 
        />
        
        <Tabs defaultValue="orders" className="w-full">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="orders" className="data-[state=active]:bg-primary/20">
              <ShoppingBag className="h-4 w-4 mr-2" />
              Заказы
              {newNotificationsCount > 0 && (
                <Badge className="ml-2 bg-red-500">
                  {newNotificationsCount}
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
            <OrdersList 
              orders={orders} 
              onUpdateStatus={handleUpdateOrderStatus} 
            />
          </TabsContent>
          
          <TabsContent value="products" className="space-y-6">
            <ProductsGrid 
              products={products}
              onAddProduct={handleAddProduct}
              onEditProduct={handleEditProduct}
              onDeleteProduct={handleDeleteProduct}
            />
          </TabsContent>
          
          <TabsContent value="admins">
            <AdminsManager 
              adminUsername={adminUsername}
              adminsList={adminsList}
              onAdminUsernameChange={setAdminUsername}
              onAddAdmin={handleAddAdmin}
              onRemoveAdmin={handleRemoveAdmin}
            />
          </TabsContent>
        </Tabs>
      </div>
      
      <ProductDialog 
        open={isProductDialogOpen}
        onOpenChange={setIsProductDialogOpen}
        product={currentProduct}
        onSave={handleSaveProduct}
        onProductChange={handleProductChange}
      />
    </MainLayout>
  );
};

export default Admin;
