
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Bell } from "lucide-react";
import { User } from "@/hooks/use-auth";

interface AdminHeaderProps {
  user: User;
  notificationsCount: number;
}

/**
 * Header component for the admin dashboard
 */
export const AdminHeader = ({ user, notificationsCount }: AdminHeaderProps) => {
  const navigate = useNavigate();
  
  return (
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
          {notificationsCount > 0 && (
            <Badge className="absolute -top-2 -right-2 bg-red-500">
              {notificationsCount}
            </Badge>
          )}
        </Button>
      </div>
    </div>
  );
};
