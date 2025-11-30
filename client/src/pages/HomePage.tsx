import { useRef } from "react";
import Hero from "@/components/Hero";
import FeaturedCollections from "@/components/FeaturedCollections";
import BrandStory from "@/components/BrandStory";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Sparkles, Mail } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { getNewArrivals, getBestSellers } from "@/data/products";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const productsRef = useRef<HTMLElement>(null);
  const productsHeaderRef = useRef<HTMLDivElement>(null);
  const productsGridRef = useRef<HTMLDivElement>(null);
  const bestSellersRef = useRef<HTMLElement>(null);
  const bestSellersGridRef = useRef<HTMLDivElement>(null);
  const newsletterRef = useRef<HTMLElement>(null);

  // Get real products from our data
  const newArrivals = getNewArrivals().slice(0, 4);
  const bestSellers = getBestSellers().slice(0, 4);

  useGSAP(() => {
    // Products section animation
    if (productsHeaderRef.current) {
      gsap.fromTo(
        productsHeaderRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: productsHeaderRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Products grid animation
    if (productsGridRef.current) {
      const cards = productsGridRef.current.children;
      gsap.fromTo(
        cards,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: productsGridRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Newsletter section animation
    if (newsletterRef.current) {
      const children = newsletterRef.current.querySelectorAll(".newsletter-animate");
      gsap.fromTo(
        children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: newsletterRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, { scope: productsRef });

  return (
    <div>
      <Hero />
      <FeaturedCollections />

      <section ref={productsRef} className="py-24 bg-background relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="products-pattern" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.3" fill="currentColor" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#products-pattern)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={productsHeaderRef} className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 mb-3 px-3 py-1.5 bg-primary/10 rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-medium text-primary tracking-wide">Just Arrived</span>
              </div>
              <h2 className="font-serif text-4xl font-bold mb-2">
                New{" "}
                <span className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                  Arrivals
                </span>
              </h2>
              <p className="text-muted-foreground text-lg">Discover our latest handcrafted pieces</p>
            </div>
            <Link href="/catalog" data-testid="link-view-all">
              <Button variant="outline" className="group border-primary/30 hover:border-primary hover:bg-primary/5">
                View All Collections
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div ref={productsGridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section ref={bestSellersRef} className="py-24 bg-card relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="bestsellers-pattern" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.4" fill="currentColor" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#bestsellers-pattern)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 mb-3 px-3 py-1.5 bg-amber-500/10 rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span className="text-xs font-medium text-amber-600 tracking-wide">Customer Favorites</span>
              </div>
              <h2 className="font-serif text-4xl font-bold mb-2">
                Best{" "}
                <span className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                  Sellers
                </span>
              </h2>
              <p className="text-muted-foreground text-lg">Our most loved pieces by customers</p>
            </div>
            <Link href="/catalog?filter=bestseller" data-testid="link-view-bestsellers">
              <Button variant="outline" className="group border-primary/30 hover:border-primary hover:bg-primary/5">
                View All Best Sellers
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div ref={bestSellersGridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      <BrandStory />

      <section
        ref={newsletterRef}
        className="py-24 bg-gradient-to-br from-amber-700 via-amber-600 to-yellow-600 text-white relative overflow-hidden"
      >
        {/* Decorative patterns */}
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute top-0 right-0 w-96 h-96 text-white" viewBox="0 0 200 200" fill="none">
            <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="75" stroke="currentColor" strokeWidth="0.3" />
            <circle cx="100" cy="100" r="55" stroke="currentColor" strokeWidth="0.3" />
          </svg>
          <svg className="absolute bottom-0 left-0 w-64 h-64 text-white" viewBox="0 0 200 200" fill="none">
            <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="75" stroke="currentColor" strokeWidth="0.3" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="newsletter-animate inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
            <Mail className="w-4 h-4" />
            <span className="text-sm font-medium tracking-wide">Join Our Community</span>
          </div>

          <h2 className="newsletter-animate font-serif text-4xl sm:text-5xl font-bold mb-6">
            Experience Sacred Artistry
          </h2>

          <p className="newsletter-animate text-lg mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Subscribe to our newsletter and receive exclusive offers, new collection previews, and artisan stories from the heart of India.
          </p>

          <div className="newsletter-animate flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-5 py-4 rounded-lg text-foreground bg-white/95 backdrop-blur-sm border-0 shadow-lg placeholder:text-muted-foreground focus:ring-2 focus:ring-white/50 focus:outline-none transition-all"
              data-testid="input-newsletter-email"
            />
            <Button
              size="lg"
              className="px-8 py-4 bg-white text-amber-700 hover:bg-amber-50 shadow-lg font-semibold"
              data-testid="button-newsletter-submit"
            >
              Subscribe
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <p className="newsletter-animate text-sm mt-6 opacity-70">
            Join 10,000+ art lovers. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
}
