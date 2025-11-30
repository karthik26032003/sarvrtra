import { useState } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Eye, Sparkles } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  materials: string[];
  category?: string;
}

// Decorative lotus SVG
function LotusDecor({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} fill="none">
      <circle cx="30" cy="30" r="25" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <path
        d="M30 10 Q35 20 30 30 Q25 20 30 10"
        stroke="currentColor"
        strokeWidth="0.5"
        fill="currentColor"
        opacity="0.2"
      />
      <path
        d="M30 50 Q35 40 30 30 Q25 40 30 50"
        stroke="currentColor"
        strokeWidth="0.5"
        fill="currentColor"
        opacity="0.2"
      />
      <path
        d="M10 30 Q20 35 30 30 Q20 25 10 30"
        stroke="currentColor"
        strokeWidth="0.5"
        fill="currentColor"
        opacity="0.2"
      />
      <path
        d="M50 30 Q40 35 30 30 Q40 25 50 30"
        stroke="currentColor"
        strokeWidth="0.5"
        fill="currentColor"
        opacity="0.2"
      />
    </svg>
  );
}

export default function ProductCard({ id, name, price, image, materials, category }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="group relative overflow-hidden border-0 shadow-md hover:shadow-2xl transition-all duration-500 bg-card"
      data-testid={`card-product-${id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/product/${id}`}>
        <div className="relative aspect-[3/4] overflow-hidden bg-muted">
          {/* Decorative elements */}
          <div className="absolute inset-0 pointer-events-none z-10">
            <LotusDecor className="absolute top-4 right-4 w-12 h-12 text-amber-500/30 transition-all duration-700 group-hover:rotate-45 group-hover:scale-110" />
            <LotusDecor className="absolute bottom-4 left-4 w-10 h-10 text-amber-400/20 transition-all duration-700 group-hover:-rotate-45 group-hover:scale-110" />
          </div>

          {/* Product image */}
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
            data-testid={`img-product-${id}`}
          />

          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Shine effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

          {/* Action buttons */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 z-20">
            <Button
              variant="ghost"
              size="icon"
              className={`h-9 w-9 rounded-full backdrop-blur-md transition-all duration-300 ${
                isWishlisted
                  ? "bg-red-500/90 text-white hover:bg-red-600"
                  : "bg-white/90 dark:bg-black/50 hover:bg-white dark:hover:bg-black/70"
              } shadow-lg`}
              onClick={(e) => {
                e.preventDefault();
                setIsWishlisted(!isWishlisted);
              }}
              data-testid={`button-wishlist-${id}`}
            >
              <Heart className={`h-4 w-4 ${isWishlisted ? "fill-current" : ""}`} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 rounded-full bg-white/90 dark:bg-black/50 backdrop-blur-md hover:bg-white dark:hover:bg-black/70 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
              onClick={(e) => {
                e.preventDefault();
                // Quick view functionality
              }}
              data-testid={`button-quickview-${id}`}
            >
              <Eye className="h-4 w-4" />
            </Button>
          </div>

          {/* Category badge */}
          {category && (
            <Badge
              className="absolute top-3 left-3 bg-amber-500/90 text-white border-0 backdrop-blur-sm shadow-md"
              data-testid={`badge-category-${id}`}
            >
              <Sparkles className="w-3 h-3 mr-1" />
              {category}
            </Badge>
          )}

          {/* Quick add to cart - appears on hover */}
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20">
            <Button
              className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white shadow-lg"
              onClick={(e) => {
                e.preventDefault();
                console.log(`Added ${name} to cart`);
              }}
              data-testid={`button-quick-add-${id}`}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Quick Add
            </Button>
          </div>
        </div>
      </Link>

      <CardContent className="p-4">
        <Link href={`/product/${id}`}>
          <h3
            className="font-serif text-lg font-semibold mb-2 line-clamp-2 hover:text-primary transition-colors leading-tight"
            data-testid={`text-name-${id}`}
          >
            {name}
          </h3>
        </Link>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {materials.map((material) => (
            <Badge
              key={material}
              variant="secondary"
              className="text-xs bg-amber-100/80 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 border-amber-200/50 dark:border-amber-700/30"
              data-testid={`badge-material-${material.toLowerCase()}-${id}`}
            >
              {material}
            </Badge>
          ))}
        </div>
        <div className="flex items-baseline gap-2">
          <p className="text-xl font-bold text-foreground" data-testid={`text-price-${id}`}>
            ₹{price.toLocaleString()}
          </p>
          <span className="text-sm text-muted-foreground line-through">
            ₹{Math.round(price * 1.2).toLocaleString()}
          </span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          onClick={() => console.log(`Added ${name} to cart`)}
          data-testid={`button-add-cart-${id}`}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
