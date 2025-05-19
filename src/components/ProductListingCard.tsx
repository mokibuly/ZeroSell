import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";

interface ProductListingCardProps {
  id?: string;
  title?: string;
  price?: number;
  location?: string;
  postedDate?: string;
  imageUrl?: string;
  isFeatured?: boolean;
  onFavorite?: (id: string) => void;
  onClick?: () => void;
}

const ProductListingCard = ({
  id = "1",
  title = "iPhone 13 Pro Max 256GB Sierra Blue",
  price = 65000,
  location = "Mumbai, Maharashtra",
  postedDate = "Today",
  imageUrl = "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=400&q=80",
  isFeatured = false,
  onFavorite = () => {},
  onClick = () => {},
}: ProductListingCardProps) => {
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (id) onFavorite(id);
  };

  return (
    <Card
      className="overflow-hidden transition-shadow hover:shadow-md cursor-pointer bg-white"
      onClick={onClick}
    >
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        {isFeatured && (
          <Badge
            variant="secondary"
            className="absolute top-2 left-2 bg-yellow-100 text-yellow-800"
          >
            Featured
          </Badge>
        )}
        <button
          className="absolute top-2 right-2 p-1.5 bg-white/80 rounded-full hover:bg-white"
          onClick={handleFavoriteClick}
          aria-label="Add to favorites"
        >
          <Heart className="h-5 w-5 text-gray-500 hover:text-red-500" />
        </button>
      </div>

      <CardContent className="p-4">
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold text-lg line-clamp-2">{title}</h3>
          <p className="text-xl font-bold text-primary">
            ₹{price.toLocaleString()}
          </p>
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <span>{location}</span>
            <span>{postedDate}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductListingCard;
