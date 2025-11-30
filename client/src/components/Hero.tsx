import { useRef, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import heroImage from "@assets/stock_images/luxury_brass_diya_oi_e6113a13.jpg";

// Hindu-inspired decorative SVG elements
function MandalaPattern({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.3" opacity="0.2" />
      <circle cx="100" cy="100" r="65" stroke="currentColor" strokeWidth="0.3" opacity="0.15" />
      <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
      {/* Lotus petals */}
      {[...Array(8)].map((_, i) => (
        <path
          key={i}
          d={`M100,100 Q${100 + 40 * Math.cos((i * Math.PI) / 4)},${100 + 40 * Math.sin((i * Math.PI) / 4)} ${100 + 60 * Math.cos((i * Math.PI) / 4 + 0.2)},${100 + 60 * Math.sin((i * Math.PI) / 4 + 0.2)}`}
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.25"
          fill="none"
        />
      ))}
    </svg>
  );
}

function DiamondPattern({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <rect x="25" y="25" width="50" height="50" stroke="currentColor" strokeWidth="0.5" transform="rotate(45 50 50)" opacity="0.3" />
      <rect x="35" y="35" width="30" height="30" stroke="currentColor" strokeWidth="0.3" transform="rotate(45 50 50)" opacity="0.2" />
    </svg>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // Initial states
    gsap.set(imageRef.current, { scale: 1.2, opacity: 0 });
    gsap.set(titleRef.current, { opacity: 0, y: 80, clipPath: "inset(100% 0% 0% 0%)" });
    gsap.set(subtitleRef.current, { opacity: 0, y: 40 });
    gsap.set(buttonsRef.current?.children || [], { opacity: 0, y: 30, scale: 0.9 });
    gsap.set(decorRef.current?.children || [], { opacity: 0, scale: 0.5, rotation: -45 });

    // Cinematic reveal animation
    tl.to(imageRef.current, {
      scale: 1,
      opacity: 1,
      duration: 2,
      ease: "power2.out",
    })
    .to(titleRef.current, {
      opacity: 1,
      y: 0,
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 1.2,
    }, "-=1.4")
    .to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
    }, "-=0.8")
    .to(buttonsRef.current?.children || [], {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      stagger: 0.15,
    }, "-=0.6")
    .to(decorRef.current?.children || [], {
      opacity: 1,
      scale: 1,
      rotation: 0,
      duration: 1.5,
      stagger: 0.2,
      ease: "elastic.out(1, 0.5)",
    }, "-=1");

    // Floating animation for decorative elements
    const mandala1 = decorRef.current?.querySelector(".mandala-1");
    const mandala2 = decorRef.current?.querySelector(".mandala-2");
    const diamond1 = decorRef.current?.querySelector(".diamond-1");

    if (mandala1) {
      gsap.to(mandala1, {
        y: -20,
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
      });
    }

    if (mandala2) {
      gsap.to(mandala2, {
        y: 15,
        rotation: -360,
        duration: 25,
        repeat: -1,
        ease: "none",
      });
    }

    if (diamond1) {
      gsap.to(diamond1, {
        y: -10,
        x: 10,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    // Subtle parallax on scroll
    gsap.to(imageRef.current, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative h-[90vh] min-h-[700px] w-full overflow-hidden">
      {/* Decorative Elements */}
      <div ref={decorRef} className="absolute inset-0 pointer-events-none z-10">
        <MandalaPattern className="mandala-1 absolute top-10 right-10 w-32 h-32 text-amber-400/30 dark:text-amber-300/20" />
        <MandalaPattern className="mandala-2 absolute bottom-20 left-10 w-24 h-24 text-amber-500/25 dark:text-amber-400/15" />
        <DiamondPattern className="diamond-1 absolute top-1/3 right-1/4 w-16 h-16 text-amber-300/20" />
      </div>

      {/* Background Image with Parallax */}
      <div
        ref={imageRef}
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Premium gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        {/* Warm brass/gold tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-transparent to-amber-800/10" />
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center h-full max-w-3xl">
          {/* Tagline */}
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 text-sm font-medium tracking-widest uppercase">
              Handcrafted Artistry
            </span>
          </div>

          <h1
            ref={titleRef}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-[1.1] tracking-tight"
          >
            <span className="block">Where Tradition</span>
            <span className="block bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Meets Elegance
            </span>
          </h1>

          <p
            ref={subtitleRef}
            className="text-lg sm:text-xl lg:text-2xl text-white/85 mb-10 max-w-2xl leading-relaxed font-light"
          >
            Discover exquisite handcrafted artifacts in brass, bronze, and wood. Each piece celebrates Hindu spirituality and timeless artisan craftsmanship.
          </p>

          <div ref={buttonsRef} className="flex flex-wrap gap-4">
            <Link href="/catalog" data-testid="link-hero-shop">
              <Button
                size="lg"
                className="text-base px-8 py-6 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white border-0 shadow-lg shadow-amber-900/30 group"
              >
                Explore Collections
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/about" data-testid="link-hero-about">
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 py-6 bg-white/5 backdrop-blur-md text-white border-white/20 hover:bg-white/15 hover:border-white/40 transition-all duration-300"
              >
                Our Story
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex items-center gap-8 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-amber-500" />
              <span>100% Handcrafted</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-amber-500" />
              <span>Premium Materials</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-amber-500" />
              <span>Artisan Made</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
}
