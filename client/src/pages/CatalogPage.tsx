import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import FilterSidebar from "@/components/FilterSidebar";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SlidersHorizontal } from "lucide-react";

import product1 from "@assets/stock_images/brass_home_decor_art_e5322683.jpg";
import product2 from "@assets/stock_images/brass_home_decor_art_afcd04f0.jpg";
import product3 from "@assets/stock_images/brass_home_decor_art_b9962a99.jpg";
import product4 from "@assets/stock_images/brass_home_decor_art_e140323c.jpg";
import product5 from "@assets/stock_images/brass_home_decor_art_a92895e9.jpg";
import product6 from "@assets/stock_images/brass_home_decor_art_ea6d434b.jpg";
import product7 from "@assets/stock_images/bronze_sculpture_hom_83c0c990.jpg";
import product8 from "@assets/stock_images/bronze_sculpture_hom_9c0f1d31.jpg";
import product9 from "@assets/stock_images/bronze_sculpture_hom_98cf7967.jpg";
import product10 from "@assets/stock_images/wooden_home_decor_ha_0877cd2f.jpg";
import product11 from "@assets/stock_images/wooden_home_decor_ha_f500eff1.jpg";
import product12 from "@assets/stock_images/wooden_home_decor_ha_d6b0798c.jpg";

export default function CatalogPage() {
  const [sortBy, setSortBy] = useState("featured");

  const products = [
    { id: "1", name: "Traditional Brass Diya Set", price: 2499, image: product1, materials: ["Brass", "Handcrafted"], category: "Lighting" },
    { id: "2", name: "Ornate Brass Wall Hanging", price: 3899, image: product2, materials: ["Brass"], category: "Wall Art" },
    { id: "3", name: "Sacred Brass Bell", price: 1799, image: product3, materials: ["Brass"], category: "Décor" },
    { id: "4", name: "Brass Temple Lamp", price: 4299, image: product4, materials: ["Brass"], category: "Lighting" },
    { id: "5", name: "Intricate Brass Plate", price: 2199, image: product5, materials: ["Brass"], category: "Décor" },
    { id: "6", name: "Brass Candle Holder Set", price: 3499, image: product6, materials: ["Brass"], category: "Lighting" },
    { id: "7", name: "Bronze Ganesha Sculpture", price: 5499, image: product7, materials: ["Bronze"], category: "Idols" },
    { id: "8", name: "Antique Bronze Vase", price: 6899, image: product8, materials: ["Bronze"], category: "Décor" },
    { id: "9", name: "Bronze Dancing Shiva", price: 8999, image: product9, materials: ["Bronze"], category: "Idols" },
    { id: "10", name: "Carved Wooden Panel", price: 4599, image: product10, materials: ["Wood"], category: "Wall Art" },
    { id: "11", name: "Wooden Jewelry Box", price: 2899, image: product11, materials: ["Wood"], category: "Décor" },
    { id: "12", name: "Handcrafted Wooden Bowl", price: 1999, image: product12, materials: ["Wood"], category: "Décor" },
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-card border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="font-serif text-4xl font-bold mb-2">All Collections</h1>
          <p className="text-muted-foreground">Explore our complete range of handcrafted artifacts</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <FilterSidebar onFilterChange={(filters) => console.log('Filters:', filters)} />
            </div>
          </aside>

          <div className="flex-1">
            <div className="flex items-center justify-between mb-6 gap-4">
              <div className="flex items-center gap-4">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="lg:hidden" data-testid="button-filters-mobile">
                      <SlidersHorizontal className="h-4 w-4 mr-2" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-80 overflow-y-auto">
                    <FilterSidebar onFilterChange={(filters) => console.log('Filters:', filters)} />
                  </SheetContent>
                </Sheet>
                <p className="text-sm text-muted-foreground" data-testid="text-product-count">
                  {products.length} products
                </p>
              </div>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48" data-testid="select-sort">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="name-az">Name: A-Z</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
