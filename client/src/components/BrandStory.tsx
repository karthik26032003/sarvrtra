import { Card } from "@/components/ui/card";
import { Flower2, Heart, Sparkles } from "lucide-react";
import artisan from "@assets/stock_images/artisan_craftsman_wo_c30faf73.jpg";

export default function BrandStory() {
  const pillars = [
    {
      icon: Flower2,
      title: "Hindu Ideology",
      description: "Rooted in sacred traditions and spiritual symbolism, each piece honors divine craftsmanship.",
    },
    {
      icon: Sparkles,
      title: "English Elegance",
      description: "Refined aesthetics and timeless design principles meet traditional artisan methods.",
    },
    {
      icon: Heart,
      title: "Artisan Craft",
      description: "Handcrafted by skilled artisans who pour their heart into every intricate detail.",
    },
  ];

  return (
    <section className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl font-bold mb-6">
              Sacred Craftsmanship, Timeless Design
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Dharma Décor was born from a passion to preserve ancient Hindu craftsmanship while embracing contemporary elegance. Every artifact tells a story of devotion, creativity, and masterful artistry.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our artisans blend traditional metalworking techniques with refined woodcraft, creating pieces that enhance your home with both beauty and spiritual significance.
            </p>

            <div className="grid grid-cols-1 gap-6">
              {pillars.map((pillar) => (
                <Card key={pillar.title} className="p-6 hover-elevate" data-testid={`card-pillar-${pillar.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">
                        <pillar.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold mb-2">{pillar.title}</h3>
                      <p className="text-muted-foreground">{pillar.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[3/4] rounded-md overflow-hidden">
              <img
                src={artisan}
                alt="Artisan at work"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
