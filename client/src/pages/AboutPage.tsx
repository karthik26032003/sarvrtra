import { Card } from "@/components/ui/card";
import { Flower2, Heart, Sparkles, Users, Award, Globe } from "lucide-react";
import artisan1 from "@assets/stock_images/artisan_craftsman_wo_c30faf73.jpg";
import artisan2 from "@assets/stock_images/artisan_craftsman_wo_c474fee8.jpg";
import artisan3 from "@assets/stock_images/artisan_craftsman_wo_94615177.jpg";

export default function AboutPage() {
  const pillars = [
    {
      icon: Flower2,
      title: "Hindu Ideology",
      description: "Every piece is rooted in sacred Hindu traditions and spiritual symbolism, honoring divine craftsmanship and ancient wisdom.",
    },
    {
      icon: Sparkles,
      title: "English Elegance",
      description: "We blend refined English aesthetics and timeless design principles with traditional artisan methods for contemporary appeal.",
    },
    {
      icon: Heart,
      title: "Artisan Craft",
      description: "Our skilled artisans pour their heart and generations of expertise into every intricate detail of each handcrafted piece.",
    },
  ];

  const values = [
    {
      icon: Users,
      title: "Community First",
      description: "Supporting local artisan communities and preserving traditional craftsmanship",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Uncompromising standards in materials, craftsmanship, and finish",
    },
    {
      icon: Globe,
      title: "Sustainable Practices",
      description: "Eco-conscious sourcing and production methods that honor the earth",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-card border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="font-serif text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Where sacred tradition meets timeless elegance in every handcrafted piece
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-6">
                Sacred Craftsmanship, Timeless Design
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Dharma Décor was born from a deep reverence for Hindu spiritual artistry and a passion to preserve ancient metalworking and woodcraft traditions. Our journey began in the workshops of master artisans who have dedicated their lives to perfecting their craft.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We believe that every home artifact should tell a story—one of devotion, creativity, and masterful artistry. By blending traditional techniques with contemporary design sensibilities, we create pieces that enhance your living spaces with both beauty and spiritual significance.
              </p>
              <p className="text-lg text-muted-foreground">
                Each artifact in our collection is more than décor; it's a celebration of cultural heritage, a testament to human creativity, and a bridge between the sacred and the everyday.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={artisan1} alt="Artisan workshop" className="rounded-md aspect-[3/4] object-cover" />
              <img src={artisan2} alt="Craftsman at work" className="rounded-md aspect-[3/4] object-cover mt-8" />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-center mb-12">Our Three Pillars</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pillars.map((pillar) => (
                <Card key={pillar.title} className="p-8 text-center hover-elevate" data-testid={`card-pillar-${pillar.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="inline-flex h-16 w-16 rounded-full bg-primary/10 items-center justify-center mb-6">
                    <pillar.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold mb-4">{pillar.title}</h3>
                  <p className="text-muted-foreground">{pillar.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value) => (
                <Card key={value.title} className="p-6 hover-elevate" data-testid={`card-value-${value.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <section className="bg-card p-12 rounded-md" id="craftsmanship">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <img src={artisan3} alt="Master artisan" className="rounded-md aspect-video object-cover" />
              <div>
                <h2 className="font-serif text-3xl font-bold mb-6">The Art of Creation</h2>
                <p className="text-muted-foreground mb-4">
                  Our artisans are the heart of Dharma Décor. Each piece begins with careful material selection—premium brass, bronze, and sustainably sourced wood—chosen for both quality and spiritual significance.
                </p>
                <p className="text-muted-foreground mb-4">
                  The creation process honors age-old techniques: metal is heated, shaped, and engraved by hand; wood is carved with precision tools that have been passed down through families; finishes are applied with patience and expertise.
                </p>
                <p className="text-muted-foreground">
                  From concept to completion, every artifact undergoes meticulous quality checks, ensuring that when it reaches your home, it carries the essence of devotion and the beauty of masterful craftsmanship.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
