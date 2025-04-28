import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { CirclePlus, CircleMinus, CircleX } from "lucide-react";
import { useState } from "react";

interface CategoryManagerProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  onAddCategory: (category: string) => void;
  onRemoveCategory: (category: string) => void;
}

/**
 * Category management component with selection, add and remove functionality
 */
const CategoryManager = ({
  categories,
  selectedCategory,
  onCategoryChange,
  onAddCategory,
  onRemoveCategory
}: CategoryManagerProps) => {
  const [newCategory, setNewCategory] = useState('');
  const [isAddingCategory, setIsAddingCategory] = useState(false);

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      onAddCategory(newCategory.trim());
      setNewCategory('');
      setIsAddingCategory(false);
    }
  };

  return (
    <div className="space-y-2">
      <Label htmlFor="category">Категория</Label>
      
      {isAddingCategory ? (
        <div className="flex space-x-2">
          <Input
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="bg-transparent border-cyan-500/30"
            placeholder="Новая категория"
          />
          <Button 
            type="button" 
            size="icon" 
            variant="outline" 
            onClick={handleAddCategory}
            className="flex-shrink-0"
          >
            <CirclePlus className="h-4 w-4" />
          </Button>
          <Button 
            type="button" 
            size="icon" 
            variant="outline" 
            onClick={() => setIsAddingCategory(false)}
            className="flex-shrink-0"
          >
            <CircleX className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <div className="flex space-x-2">
          <Select 
            value={selectedCategory} 
            onValueChange={onCategoryChange}
          >
            <SelectTrigger className="bg-transparent border-cyan-500/30">
              <SelectValue placeholder="Выберите категорию" />
            </SelectTrigger>
            <SelectContent className="bg-black/95 border-cyan-500/30">
              {categories.map(category => (
                <SelectItem 
                  key={category} 
                  value={category}
                  className="flex justify-between items-center group"
                >
                  <span>{category}</span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button 
            type="button" 
            size="icon" 
            variant="outline" 
            onClick={() => setIsAddingCategory(true)}
            className="flex-shrink-0"
          >
            <CirclePlus className="h-4 w-4" />
          </Button>
        </div>
      )}

      {/* Управление категориями */}
      <div className="mt-2 flex flex-wrap gap-2">
        {categories.map(category => (
          <div 
            key={category}
            className="flex items-center bg-cyan-950/40 text-xs px-2 py-1 rounded"
          >
            {category}
            <button
              type="button"
              onClick={() => onRemoveCategory(category)}
              className="ml-2 text-red-400 hover:text-red-300"
            >
              <CircleMinus className="h-3 w-3" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryManager;
