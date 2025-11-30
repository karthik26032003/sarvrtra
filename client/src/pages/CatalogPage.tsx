import { useState, useMemo } from "react";
import ProductCard from "@/components/ProductCard";
import FilterSidebar from "@/components/FilterSidebar";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SlidersHorizontal, Sparkles } from "lucide-react";
import { products as allProducts, categories, materials } from "@/data/products";

export default function CatalogPage() {
  const [sortBy, setSortBy] = useState("featured");
  const [filters, setFilters] = useState<{
    materials?: string[];
    categories?: string[];
    priceRange?: [number, number];
  }>({});

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...allProducts];

    // Apply material filter
    if (filters.materials && filters.materials.length > 0) {
      result = result.filter(p =>
        p.materials.some(m =>
          filters.materials!.some(fm => m.toLowerCase().includes(fm.toLowerCase()))
        )
      );
    }

    // Apply category filter
    if (filters.categories && filters.categories.length > 0) {
      result = result.filter(p =>
        filters.categories!.some(fc => p.category.toLowerCase() === fc.toLowerCase())
      );
    }

    // Apply price range filter
    if (filters.priceRange) {
      result = result.filter(p =>
        p.price >= filters.priceRange![0] && p.price <= filters.priceRange![1]
      );
    }

    // Sort products
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        result.sort((a, b) => (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0));
        break;
      case "name-az":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "featured":
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return result;
  }, [filters, sortBy]);

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-amber-800 via-amber-700 to-yellow-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-amber-300" />
            <span className="text-amber-200 text-sm tracking-wide">Handcrafted Excellence</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-3">All Collections</h1>
          <p className="text-amber-100 text-lg max-w-2xl">
            Explore our complete range of {allProducts.length} handcrafted brass, bronze, and wood artifacts
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <FilterSidebar onFilterChange={(newFilters) => setFilters(newFilters)} />
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
                    <FilterSidebar onFilterChange={(newFilters) => setFilters(newFilters)} />
                  </SheetContent>
                </Sheet>
                <p className="text-sm text-muted-foreground" data-testid="text-product-count">
                  Showing {filteredProducts.length} of {allProducts.length} products
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

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">No products match your filters.</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => setFilters({})}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
