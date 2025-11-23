import { Link } from "wouter";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  materials: string[];
  category?: string;
}

export default function ProductCard({ id, name, price, image, materials, category }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden hover-elevate transition-transform duration-300" data-testid={`card-product-${id}`}>
      <Link href={`/product/${id}`}>
        <div className="relative aspect-[3/4] overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            data-testid={`img-product-${id}`}
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm"
            onClick={(e) => {
              e.preventDefault();
              console.log(`Added ${name} to wishlist`);
            }}
            data-testid={`button-wishlist-${id}`}
          >
            <Heart className="h-4 w-4" />
          </Button>
          {category && (
            <Badge className="absolute top-2 left-2 bg-background/90 backdrop-blur-sm" data-testid={`badge-category-${id}`}>
              {category}
            </Badge>
          )}
        </div>
      </Link>
      <CardContent className="p-4">
        <Link href={`/product/${id}`}>
          <h3 className="font-serif text-lg font-semibold mb-2 line-clamp-2 hover:text-primary transition-colors" data-testid={`text-name-${id}`}>
            {name}
          </h3>
        </Link>
        <div className="flex flex-wrap gap-1 mb-2">
          {materials.map((material) => (
            <Badge key={material} variant="secondary" className="text-xs" data-testid={`badge-material-${material.toLowerCase()}-${id}`}>
              {material}
            </Badge>
          ))}
        </div>
        <p className="text-xl font-semibold text-foreground" data-testid={`text-price-${id}`}>
          ₹{price.toLocaleString()}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full"
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
