import { Link } from "wouter";
import { Flower2, Facebook, Instagram, Mail } from "lucide-react";
import { SiPinterest } from "react-icons/si";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Flower2 className="h-6 w-6 text-primary" strokeWidth={1.5} />
              <span className="font-serif text-lg font-semibold">Dharma Décor</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Where tradition meets elegance. Handcrafted artifacts in brass, bronze, and wood, blending Hindu spirituality with timeless design.
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" data-testid="button-facebook">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="button-instagram">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="button-pinterest">
                <SiPinterest className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-serif font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/catalog?material=brass" data-testid="link-footer-brass">
                  <span className="text-muted-foreground hover:text-foreground cursor-pointer">Brass Collection</span>
                </Link>
              </li>
              <li>
                <Link href="/catalog?material=bronze" data-testid="link-footer-bronze">
                  <span className="text-muted-foreground hover:text-foreground cursor-pointer">Bronze Collection</span>
                </Link>
              </li>
              <li>
                <Link href="/catalog?material=wood" data-testid="link-footer-wood">
                  <span className="text-muted-foreground hover:text-foreground cursor-pointer">Wood Collection</span>
                </Link>
              </li>
              <li>
                <Link href="/catalog" data-testid="link-footer-all">
                  <span className="text-muted-foreground hover:text-foreground cursor-pointer">All Collections</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" data-testid="link-footer-about">
                  <span className="text-muted-foreground hover:text-foreground cursor-pointer">Our Story</span>
                </Link>
              </li>
              <li>
                <Link href="/about#craftsmanship" data-testid="link-footer-craftsmanship">
                  <span className="text-muted-foreground hover:text-foreground cursor-pointer">Craftsmanship</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" data-testid="link-footer-contact">
                  <span className="text-muted-foreground hover:text-foreground cursor-pointer">Contact Us</span>
                </Link>
              </li>
              <li>
                <span className="text-muted-foreground hover:text-foreground cursor-pointer">Shipping & Returns</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe for new collections and exclusive offers.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                data-testid="input-newsletter"
              />
              <Button data-testid="button-subscribe">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 Dharma Décor. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-foreground cursor-pointer">Privacy Policy</span>
            <span className="hover:text-foreground cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
