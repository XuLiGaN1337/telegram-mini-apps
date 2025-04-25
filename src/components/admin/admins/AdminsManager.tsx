import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserPlus, UserMinus } from "lucide-react";

interface AdminsManagerProps {
  adminUsername: string;
  adminsList: string[];
  onAdminUsernameChange: (value: string) => void;
  onAddAdmin: () => void;
  onRemoveAdmin: (username: string) => void;
}

/**
 * Component for managing administrators
 */
export const AdminsManager = ({ 
  adminUsername, 
  adminsList, 
  onAdminUsernameChange,
  onAddAdmin, 
  onRemoveAdmin 
}: AdminsManagerProps) => {
  return (
    <Card className="border-primary/20 bg-black/60 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-xl text-white">Управление администраторами</CardTitle>
        <CardDescription>
          Добавляйте или удаляйте администраторов магазина
        </CardDescription>
      </CardHeader>
      <CardContent>
        <AddAdminForm 
          adminUsername={adminUsername}
          onAdminUsernameChange={onAdminUsernameChange}
          onAddAdmin={onAddAdmin}
        />
        
        <div className="space-y-4 mt-6">
          <h3 className="font-medium text-white">Текущие администраторы:</h3>
          <AdminsList 
            adminsList={adminsList} 
            onRemoveAdmin={onRemoveAdmin} 
          />
        </div>
      </CardContent>
    </Card>
  );
};

interface AddAdminFormProps {
  adminUsername: string;
  onAdminUsernameChange: (value: string) => void;
  onAddAdmin: () => void;
}

/**
 * Form for adding a new admin
 */
const AddAdminForm = ({ adminUsername, onAdminUsernameChange, onAddAdmin }: AddAdminFormProps) => {
  const handleChange = (value: string) => {
    // Remove @ symbol if user types it, we'll add it during display
    onAdminUsernameChange(value.replace('@', ''));
  };
  
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <div className="flex-grow">
        <Label htmlFor="adminUsername">Имя пользователя в Telegram</Label>
        <Input
          id="adminUsername"
          value={adminUsername}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Например: username (без @)"
          className="bg-transparent border-cyan-500/30"
        />
      </div>
      <div className="flex items-end">
        <Button onClick={onAddAdmin} disabled={!adminUsername.trim()}>
          <UserPlus className="h-4 w-4 mr-2" />
          Добавить
        </Button>
      </div>
    </div>
  );
};

interface AdminsListProps {
  adminsList: string[];
  onRemoveAdmin: (username: string) => void;
}

/**
 * List of current administrators
 */
const AdminsList = ({ adminsList, onRemoveAdmin }: AdminsListProps) => (
  <div className="space-y-3">
    {adminsList.map(admin => (
      <AdminItem 
        key={admin} 
        username={admin} 
        onRemove={onRemoveAdmin} 
      />
    ))}
  </div>
);

interface AdminItemProps {
  username: string;
  onRemove: (username: string) => void;
}

/**
 * Individual admin list item
 */
const AdminItem = ({ username, onRemove }: AdminItemProps) => (
  <div 
    className="flex justify-between items-center p-3 border border-primary/20 rounded-md"
  >
    <span className="text-gray-300">@{username}</span>
    <Button
      variant="ghost"
      size="sm"
      onClick={() => onRemove(username)}
      disabled={username === 'anthony_genevezy74'} // Disable for main admin
      className="text-red-400 hover:text-red-300 hover:bg-red-950/30"
    >
      <UserMinus className="h-4 w-4 mr-2" />
      Удалить
    </Button>
  </div>
);
