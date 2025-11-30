import { useRef } from "react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import brass1 from "@assets/stock_images/brass_home_decor_art_e5322683.jpg";
import bronze1 from "@assets/stock_images/bronze_sculpture_hom_83c0c990.jpg";
import wood1 from "@assets/stock_images/wooden_home_decor_ha_0877cd2f.jpg";

gsap.registerPlugin(ScrollTrigger);

// Decorative corner element
function CornerDecor({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 50" className={className} fill="none">
      <path d="M0,50 L0,20 Q0,0 20,0 L50,0" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="10" cy="10" r="2" fill="currentColor" />
    </svg>
  );
}

export default function FeaturedCollections() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const collections = [
    {
      id: "brass",
      name: "Brass Collection",
      description: "Timeless brass artifacts with intricate craftsmanship",
      tagline: "Golden Heritage",
      image: brass1,
      link: "/catalog?material=brass",
    },
    {
      id: "bronze",
      name: "Bronze Collection",
      description: "Elegant bronze sculptures and décor pieces",
      tagline: "Antique Elegance",
      image: bronze1,
      link: "/catalog?material=bronze",
    },
    {
      id: "wood",
      name: "Wood Collection",
      description: "Natural wooden artifacts with refined details",
      tagline: "Natural Warmth",
      image: wood1,
      link: "/catalog?material=wood",
    },
  ];

  useGSAP(() => {
    if (!sectionRef.current) return;

    // Header animation
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Cards staggered animation
    const cards = cardsRef.current?.children;
    if (cards) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 80, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative py-24 bg-background overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="collections-pattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.5" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#collections-pattern)" />
        </svg>
      </div>

      {/* Corner decorations */}
      <CornerDecor className="absolute top-8 left-8 w-12 h-12 text-primary/20" />
      <CornerDecor className="absolute top-8 right-8 w-12 h-12 text-primary/20 rotate-90" />
      <CornerDecor className="absolute bottom-8 left-8 w-12 h-12 text-primary/20 -rotate-90" />
      <CornerDecor className="absolute bottom-8 right-8 w-12 h-12 text-primary/20 rotate-180" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary tracking-wide">Curated Collections</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
            Shop by{" "}
            <span className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
              Material
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore our curated collections of brass, bronze, and wood artifacts, each piece telling a story of tradition and mastery
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Card
              key={collection.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-card"
              data-testid={`card-collection-${collection.id}`}
            >
              <Link href={collection.link}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  {/* Premium gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <span className="text-amber-400 text-xs font-medium tracking-widest uppercase mb-2 block">
                      {collection.tagline}
                    </span>
                    <h3 className="font-serif text-2xl font-bold mb-2 group-hover:text-amber-100 transition-colors">
                      {collection.name}
                    </h3>
                    <p className="text-sm text-white/80 mb-4 leading-relaxed">{collection.description}</p>
                    <Button
                      variant="outline"
                      className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-amber-500/80 hover:border-amber-500/80 hover:text-white transition-all duration-300 group/btn"
                      data-testid={`button-explore-${collection.id}`}
                    >
                      Explore Collection
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>

                  {/* Hover shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
