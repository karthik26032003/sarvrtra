import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import FloatingDecor from "./FloatingDecor";
import heroImage from "@assets/stock_images/luxury_brass_diya_oi_e6113a13.jpg";

export default function Hero() {
  return (
    <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
      <FloatingDecor />
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform ease-out hover:scale-105"
        style={{ backgroundImage: `url(${heroImage})`, transitionDuration: '3000ms' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center h-full max-w-2xl">
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            Where Tradition Meets Elegance
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-xl animate-fade-in-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
            Discover exquisite handcrafted artifacts in brass, bronze, and wood. Each piece celebrates Hindu spirituality and timeless artisan craftsmanship.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
            <Link href="/catalog" data-testid="link-hero-shop">
              <Button size="lg" variant="default" className="text-base">
                Shop Collections
              </Button>
            </Link>
            <Link href="/about" data-testid="link-hero-about">
              <Button
                size="lg"
                variant="outline"
                className="text-base bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
              >
                Our Story
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
