import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Sparkles, Heart, Gem, Crown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import artisan from "@assets/stock_images/artisan_craftsman_wo_c30faf73.jpg";

gsap.registerPlugin(ScrollTrigger);

// Om symbol SVG
function OmSymbol({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="0.3" opacity="0.2" />
      <text
        x="50"
        y="60"
        textAnchor="middle"
        fill="currentColor"
        fontSize="40"
        fontFamily="serif"
        opacity="0.15"
      >
        ॐ
      </text>
    </svg>
  );
}

export default function BrandStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);

  const pillars = [
    {
      icon: Crown,
      title: "Hindu Heritage",
      description: "Rooted in sacred traditions and spiritual symbolism, each piece honors divine craftsmanship passed down through generations.",
    },
    {
      icon: Gem,
      title: "Premium Quality",
      description: "Refined aesthetics and timeless design principles meet traditional artisan methods using only the finest materials.",
    },
    {
      icon: Heart,
      title: "Artisan Made",
      description: "Handcrafted by skilled artisans who pour their heart into every intricate detail, ensuring uniqueness in every piece.",
    },
  ];

  useGSAP(() => {
    if (!sectionRef.current) return;

    // Content animation (left side)
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, x: -60 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      }
    );

    // Image animation (right side)
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: 60, scale: 0.95 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      }
    );

    // Pillars staggered animation
    if (pillarsRef.current) {
      const cards = pillarsRef.current.children;
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: pillarsRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative py-24 bg-card overflow-hidden">
      {/* Decorative Om symbols */}
      <OmSymbol className="absolute top-10 right-10 w-32 h-32 text-primary/10" />
      <OmSymbol className="absolute bottom-10 left-10 w-24 h-24 text-primary/10" />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.025]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="story-pattern" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.4" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#story-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div ref={contentRef}>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 rounded-full">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary tracking-wide">Our Story</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Sacred Craftsmanship,{" "}
              <span className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                Timeless Design
              </span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              SARVRTRA was born from a passion to preserve ancient Hindu craftsmanship while embracing contemporary elegance. Every artifact tells a story of devotion, creativity, and masterful artistry.
            </p>

            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Our artisans blend traditional metalworking techniques with refined woodcraft, creating pieces that enhance your home with both beauty and spiritual significance.
            </p>

            <div ref={pillarsRef} className="grid grid-cols-1 gap-5">
              {pillars.map((pillar, index) => (
                <Card
                  key={pillar.title}
                  className="p-5 border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-background group"
                  data-testid={`card-pillar-${pillar.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/20 flex items-center justify-center group-hover:from-amber-500/30 group-hover:to-amber-600/30 transition-all duration-300">
                        <pillar.icon className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold mb-1.5 group-hover:text-primary transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{pillar.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div ref={imageRef} className="relative">
            {/* Image frame decoration */}
            <div className="absolute -inset-4 border border-primary/20 rounded-2xl -z-10" />
            <div className="absolute -inset-8 border border-primary/10 rounded-3xl -z-20" />

            <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-2xl">
              <img
                src={artisan}
                alt="Artisan at work"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Stats badge */}
            <div className="absolute -bottom-6 -left-6 bg-background shadow-xl rounded-xl p-4 border">
              <div className="text-3xl font-bold text-primary">25+</div>
              <div className="text-sm text-muted-foreground">Years of Craft</div>
            </div>

            {/* Artisan badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-xl rounded-xl p-4">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-xs opacity-90">Handcrafted</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
