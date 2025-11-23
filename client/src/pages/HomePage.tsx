import Hero from "@/components/Hero";
import FeaturedCollections from "@/components/FeaturedCollections";
import BrandStory from "@/components/BrandStory";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

import product1 from "@assets/stock_images/brass_home_decor_art_e5322683.jpg";
import product2 from "@assets/stock_images/brass_home_decor_art_afcd04f0.jpg";
import product3 from "@assets/stock_images/brass_home_decor_art_b9962a99.jpg";
import product4 from "@assets/stock_images/bronze_sculpture_hom_9c0f1d31.jpg";

export default function HomePage() {
  const { ref: productsRef, isVisible: productsVisible } = useScrollAnimation();
  const { ref: newsletterRef, isVisible: newsletterVisible } = useScrollAnimation();

  const featuredProducts = [
    {
      id: "1",
      name: "Traditional Brass Diya Set",
      price: 2499,
      image: product1,
      materials: ["Brass", "Handcrafted"],
      category: "Lighting",
    },
    {
      id: "2",
      name: "Ornate Brass Wall Hanging",
      price: 3899,
      image: product2,
      materials: ["Brass"],
      category: "Wall Art",
    },
    {
      id: "3",
      name: "Sacred Brass Bell",
      price: 1799,
      image: product3,
      materials: ["Brass"],
      category: "Décor",
    },
    {
      id: "4",
      name: "Bronze Ganesha Sculpture",
      price: 5499,
      image: product4,
      materials: ["Bronze"],
      category: "Idols",
    },
  ];

  return (
    <div>
      <Hero />
      <FeaturedCollections />
      
      <section ref={productsRef as any} className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between mb-8 transition-all duration-700 ${productsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div>
              <h2 className="font-serif text-3xl font-bold mb-2">New Arrivals</h2>
              <p className="text-muted-foreground">Discover our latest handcrafted pieces</p>
            </div>
            <Link href="/catalog" data-testid="link-view-all">
              <Button variant="outline">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`transition-all duration-700 ${
                  productsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <BrandStory />

      <section ref={newsletterRef as any} className="py-16 bg-primary text-primary-foreground">
        <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${newsletterVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-serif text-3xl font-bold mb-4">
            Experience Sacred Artistry
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Subscribe to our newsletter and receive exclusive offers, new collection previews, and artisan stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md text-foreground"
              data-testid="input-newsletter-email"
            />
            <Button variant="secondary" size="lg" data-testid="button-newsletter-submit">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
