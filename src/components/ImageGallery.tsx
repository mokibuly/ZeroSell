import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface ImageGalleryProps {
  images?: string[];
  alt?: string;
}

const ImageGallery = ({
  images = [
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&q=80",
    "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=800&q=80",
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
    "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800&q=80",
  ],
  alt = "Product image",
}: ImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomOpen, setZoomOpen] = useState(false);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col w-full max-w-3xl mx-auto bg-white">
      {/* Main image container */}
      <div className="relative aspect-square w-full overflow-hidden rounded-lg border border-gray-200 mb-4">
        <img
          src={images[currentIndex]}
          alt={`${alt} ${currentIndex + 1}`}
          className="h-full w-full object-cover object-center"
        />

        {/* Navigation arrows */}
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
            onClick={handlePrevious}
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Previous image</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
            onClick={handleNext}
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Next image</span>
          </Button>
        </div>

        {/* Zoom button */}
        <Dialog open={zoomOpen} onOpenChange={setZoomOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="absolute bottom-4 right-4 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
            >
              <ZoomIn className="h-5 w-5" />
              <span className="sr-only">Zoom image</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-5xl w-full p-0 bg-transparent border-none">
            <div className="bg-white p-2 rounded-lg">
              <img
                src={images[currentIndex]}
                alt={`${alt} ${currentIndex + 1} (zoomed)`}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Thumbnails */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={cn(
              "relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border",
              currentIndex === index
                ? "border-primary ring-2 ring-primary"
                : "border-gray-200",
            )}
          >
            <img
              src={image}
              alt={`${alt} thumbnail ${index + 1}`}
              className="h-full w-full object-cover object-center"
            />
          </button>
        ))}
      </div>

      {/* Image counter */}
      <div className="mt-2 text-center text-sm text-muted-foreground">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default ImageGallery;
