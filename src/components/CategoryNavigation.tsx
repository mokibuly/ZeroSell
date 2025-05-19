import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

interface CategoryProps {
  icon: React.ReactNode;
  name: string;
  isActive?: boolean;
  onClick?: () => void;
}

const CategoryItem = ({
  icon,
  name,
  isActive = false,
  onClick = () => {},
}: CategoryProps) => {
  return (
    <Button
      variant="ghost"
      className={`flex flex-col items-center justify-center p-2 min-w-[80px] h-auto gap-2 rounded-lg transition-colors ${isActive ? "bg-primary/10 text-primary" : "hover:bg-accent"}`}
      onClick={onClick}
    >
      <div className="text-2xl">{icon}</div>
      <span className="text-xs font-medium truncate w-full text-center">
        {name}
      </span>
    </Button>
  );
};

interface CategoryNavigationProps {
  activeCategory?: string;
  onCategorySelect?: (category: string) => void;
}

const CategoryNavigation = ({
  activeCategory = "",
  onCategorySelect = () => {},
}: CategoryNavigationProps) => {
  // Mock categories with Lucide icons
  const categories = [
    { id: "cars", name: "Cars", icon: "🚗" },
    { id: "property", name: "Property", icon: "🏠" },
    { id: "mobiles", name: "Mobiles", icon: "📱" },
    { id: "jobs", name: "Jobs", icon: "💼" },
    { id: "bikes", name: "Bikes", icon: "🏍️" },
    { id: "electronics", name: "Electronics", icon: "💻" },
    { id: "furniture", name: "Furniture", icon: "🛋️" },
    { id: "fashion", name: "Fashion", icon: "👕" },
    { id: "books", name: "Books", icon: "📚" },
    { id: "sports", name: "Sports", icon: "⚽" },
    { id: "pets", name: "Pets", icon: "🐶" },
    { id: "services", name: "Services", icon: "🔧" },
  ];

  return (
    <div className="w-full bg-background border-b">
      <div className="container mx-auto px-4 py-3">
        <ScrollArea className="w-full">
          <div className="flex space-x-2 pb-2">
            {categories.map((category) => (
              <CategoryItem
                key={category.id}
                icon={category.icon}
                name={category.name}
                isActive={activeCategory === category.id}
                onClick={() => onCategorySelect(category.id)}
              />
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default CategoryNavigation;
