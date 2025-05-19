import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ArrowLeft, Heart, Share2, Flag, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import ImageGallery from "@/components/ImageGallery";

interface ProductDetails {
  id: string;
  title: string;
  price: number;
  description: string;
  location: string;
  postedDate: string;
  seller: {
    name: string;
    memberSince: string;
    avatar: string;
  };
  images: string[];
  features: Record<string, string>;
  category: string;
}

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [isFavorite, setIsFavorite] = useState(false);

  // Mock product data - in a real app, this would be fetched from an API
  const product: ProductDetails = {
    id: id || "1",
    title: "iPhone 13 Pro Max - 256GB - Pacific Blue - Excellent Condition",
    price: 65000,
    description:
      "Selling my iPhone 13 Pro Max in excellent condition. Used for 8 months, no scratches or dents. Comes with original box, charger, and unused earphones. Battery health at 96%. Reason for selling: upgrading to newer model.",
    location: "Koramangala, Bangalore",
    postedDate: "2 days ago",
    seller: {
      name: "Rahul Sharma",
      memberSince: "March 2020",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul",
    },
    images: [
      "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=800&q=80",
      "https://images.unsplash.com/photo-1592286927505-1def25115d37?w=800&q=80",
      "https://images.unsplash.com/photo-1603891128711-11b4b03bb138?w=800&q=80",
      "https://images.unsplash.com/photo-1596558450268-9c27524ba856?w=800&q=80",
    ],
    features: {
      Brand: "Apple",
      Model: "iPhone 13 Pro Max",
      Storage: "256GB",
      Color: "Pacific Blue",
      Condition: "Used - Like New",
    },
    category: "Electronics & Appliances",
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with back button */}
      <div className="sticky top-0 z-10 bg-white shadow-sm p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Button variant="ghost" size="icon" className="rounded-full">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={toggleFavorite}
            >
              <Heart
                className={`h-5 w-5 ${isFavorite ? "fill-red-500 text-red-500" : ""}`}
              />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Share2 className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Flag className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column - Image gallery */}
          <div className="lg:col-span-2">
            <ImageGallery images={product.images} />
          </div>

          {/* Right column - Product info and seller details */}
          <div className="space-y-6">
            {/* Price and title */}
            <Card>
              <CardContent className="p-6">
                <h1 className="text-3xl font-bold mb-2">
                  ₹{product.price.toLocaleString()}
                </h1>
                <h2 className="text-xl font-medium mb-4">{product.title}</h2>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{product.location}</span>
                  <span>{product.postedDate}</span>
                </div>
              </CardContent>
            </Card>

            {/* Seller info */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4">Seller Details</h3>
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden">
                    <img
                      src={product.seller.avatar}
                      alt={product.seller.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{product.seller.name}</p>
                    <p className="text-sm text-gray-500">
                      Member since {product.seller.memberSince}
                    </p>
                  </div>
                </div>
                <Button className="w-full mt-4">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Chat with Seller
                </Button>
              </CardContent>
            </Card>

            {/* Posted in */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-2">Posted in</h3>
                <p>{product.location}</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Description and details section */}
        <div className="mt-8">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                {/* Description */}
                <div>
                  <h3 className="text-xl font-medium mb-4">Description</h3>
                  <p className="whitespace-pre-line">{product.description}</p>
                </div>

                <Separator />

                {/* Features/Specifications */}
                <div>
                  <h3 className="text-xl font-medium mb-4">Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(product.features).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-gray-500">{key}</span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Category */}
                <div>
                  <h3 className="text-lg font-medium mb-2">Category</h3>
                  <Badge variant="outline" className="text-sm">
                    {product.category}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Similar ads section */}
        <div className="mt-8">
          <h3 className="text-xl font-medium mb-4">Similar Ads</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* This would be populated with ProductListingCard components */}
            <div className="h-64 bg-gray-200 rounded-lg"></div>
            <div className="h-64 bg-gray-200 rounded-lg"></div>
            <div className="h-64 bg-gray-200 rounded-lg"></div>
            <div className="h-64 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
