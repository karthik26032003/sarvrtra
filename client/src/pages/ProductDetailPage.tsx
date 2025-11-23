import { useState } from "react";
import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Heart, Share2, ChevronLeft, Star } from "lucide-react";
import ProductCard from "@/components/ProductCard";

import product1 from "@assets/stock_images/brass_home_decor_art_e5322683.jpg";
import product2 from "@assets/stock_images/brass_home_decor_art_afcd04f0.jpg";
import product3 from "@assets/stock_images/brass_home_decor_art_b9962a99.jpg";
import artisan from "@assets/stock_images/artisan_craftsman_wo_c474fee8.jpg";

export default function ProductDetailPage() {
  const params = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [product1, product2, product3];

  const product = {
    id: params.id || "1",
    name: "Traditional Brass Diya Set",
    price: 2499,
    description: "Exquisite handcrafted brass diya set featuring intricate traditional designs. Perfect for daily worship or special occasions. Each diya is meticulously crafted by skilled artisans using age-old techniques passed down through generations.",
    materials: ["Brass", "Handcrafted"],
    category: "Lighting",
    dimensions: "Set of 5 | Each: 3\" diameter × 2\" height",
    weight: "850g",
    finish: "Polished Brass",
    inStock: true,
    rating: 4.8,
    reviews: 124,
  };

  const relatedProducts = [
    { id: "2", name: "Ornate Brass Wall Hanging", price: 3899, image: product2, materials: ["Brass"], category: "Wall Art" },
    { id: "3", name: "Sacred Brass Bell", price: 1799, image: product3, materials: ["Brass"], category: "Décor" },
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/catalog" data-testid="link-back-catalog">
          <Button variant="ghost" className="mb-6">
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to Collections
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="aspect-square mb-4 rounded-md overflow-hidden bg-muted">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="h-full w-full object-cover"
                data-testid="img-product-main"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-md overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? "border-primary" : "border-transparent"
                  }`}
                  data-testid={`button-thumbnail-${index}`}
                >
                  <img src={image} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex gap-2 mb-4">
              {product.materials.map((material) => (
                <Badge key={material} variant="secondary" data-testid={`badge-material-${material.toLowerCase()}`}>
                  {material}
                </Badge>
              ))}
            </div>

            <h1 className="font-serif text-4xl font-bold mb-4" data-testid="text-product-name">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground" data-testid="text-reviews">
                {product.reviews} reviews
              </span>
            </div>

            <p className="text-3xl font-bold mb-6" data-testid="text-price">
              ₹{product.price.toLocaleString()}
            </p>

            <p className="text-muted-foreground mb-6" data-testid="text-description">
              {product.description}
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Availability:</span>
                <Badge variant={product.inStock ? "default" : "secondary"} data-testid="badge-stock">
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </Badge>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="flex gap-4 mb-6">
              <div className="flex items-center border rounded-md">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  data-testid="button-quantity-decrease"
                >
                  -
                </Button>
                <span className="px-4 font-medium" data-testid="text-quantity">{quantity}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(quantity + 1)}
                  data-testid="button-quantity-increase"
                >
                  +
                </Button>
              </div>
              <Button
                className="flex-1"
                size="lg"
                onClick={() => console.log(`Added ${quantity} to cart`)}
                data-testid="button-add-cart"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline" size="icon" className="h-11 w-11" data-testid="button-wishlist">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="h-11 w-11" data-testid="button-share">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            <Tabs defaultValue="details" className="mt-8">
              <TabsList className="w-full">
                <TabsTrigger value="details" className="flex-1" data-testid="tab-details">Details</TabsTrigger>
                <TabsTrigger value="craft" className="flex-1" data-testid="tab-craft">Craftsmanship</TabsTrigger>
                <TabsTrigger value="care" className="flex-1" data-testid="tab-care">Care</TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Dimensions:</span>
                    <p className="font-medium">{product.dimensions}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Weight:</span>
                    <p className="font-medium">{product.weight}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Finish:</span>
                    <p className="font-medium">{product.finish}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Category:</span>
                    <p className="font-medium">{product.category}</p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="craft">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex gap-4 mb-4">
                      <img src={artisan} alt="Artisan" className="w-24 h-24 rounded-md object-cover" />
                      <div>
                        <h4 className="font-serif font-semibold mb-2">Handcrafted Excellence</h4>
                        <p className="text-sm text-muted-foreground">
                          Each piece is meticulously crafted by master artisans using traditional techniques passed down through generations. The brass is carefully shaped, polished, and finished to achieve the perfect luster.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="care">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Clean with a soft, dry cloth to maintain shine</li>
                  <li>• Avoid harsh chemicals or abrasive materials</li>
                  <li>• Polish occasionally with brass cleaner for renewed luster</li>
                  <li>• Store in a dry place to prevent tarnishing</li>
                  <li>• Handle with care to preserve intricate details</li>
                </ul>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="font-serif text-3xl font-bold mb-8">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
