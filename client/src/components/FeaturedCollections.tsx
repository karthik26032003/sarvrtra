import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import brass1 from "@assets/stock_images/brass_home_decor_art_e5322683.jpg";
import bronze1 from "@assets/stock_images/bronze_sculpture_hom_83c0c990.jpg";
import wood1 from "@assets/stock_images/wooden_home_decor_ha_0877cd2f.jpg";

export default function FeaturedCollections() {
  const collections = [
    {
      id: "brass",
      name: "Brass Collection",
      description: "Timeless brass artifacts with intricate craftsmanship",
      image: brass1,
      link: "/catalog?material=brass",
    },
    {
      id: "bronze",
      name: "Bronze Collection",
      description: "Elegant bronze sculptures and décor pieces",
      image: bronze1,
      link: "/catalog?material=bronze",
    },
    {
      id: "wood",
      name: "Wood Collection",
      description: "Natural wooden artifacts with refined details",
      image: wood1,
      link: "/catalog?material=wood",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold mb-4">Shop by Material</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collections of brass, bronze, and wood artifacts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Card
              key={collection.id}
              className="group overflow-hidden hover-elevate transition-all duration-300"
              data-testid={`card-collection-${collection.id}`}
            >
              <Link href={collection.link}>
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-serif text-2xl font-semibold mb-2">
                      {collection.name}
                    </h3>
                    <p className="text-sm text-white/90 mb-4">{collection.description}</p>
                    <Button
                      variant="outline"
                      className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
                      data-testid={`button-explore-${collection.id}`}
                    >
                      Explore Collection
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
