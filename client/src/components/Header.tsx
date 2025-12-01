import { useState } from "react";
import { Link } from "wouter";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = {
    material: ["Brass", "Bronze", "Wood", "Mixed Materials"],
    room: ["Living Room", "Bedroom", "Pooja Room", "Dining", "Kitchen"],
    type: ["Wall Art", "Sculptures", "Furniture", "Lighting", "Idols", "Décor"],
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" data-testid="link-home">
            <Logo />
          </Link>

          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search artifacts..."
                className="pl-10"
                data-testid="input-search"
              />
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger data-testid="button-shop-menu">Shop by Material</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-48 gap-2 p-4">
                      {categories.material.map((item) => (
                        <li key={item}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={`/catalog?material=${item.toLowerCase()}`}
                              className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover-elevate"
                              data-testid={`link-material-${item.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              {item}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger data-testid="button-room-menu">Shop by Room</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-48 gap-2 p-4">
                      {categories.room.map((item) => (
                        <li key={item}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={`/catalog?room=${item.toLowerCase()}`}
                              className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover-elevate"
                              data-testid={`link-room-${item.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              {item}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/catalog" data-testid="link-catalog">
                    <Button variant="ghost" size="sm">All Collections</Button>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/about" data-testid="link-about">
                    <Button variant="ghost" size="sm">About</Button>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/contact" data-testid="link-contact">
                    <Button variant="ghost" size="sm">Contact</Button>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setSearchOpen(!searchOpen)}
              data-testid="button-search-mobile"
            >
              <Search className="h-5 w-5" />
            </Button>

            <ThemeToggle />

            <Button variant="ghost" size="icon" data-testid="button-account">
              <User className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon" className="relative" data-testid="button-cart">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                0
              </span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {searchOpen && (
          <div className="md:hidden py-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search artifacts..."
                className="pl-10"
                autoFocus
                data-testid="input-search-mobile"
              />
            </div>
          </div>
        )}

        {mobileMenuOpen && (
          <div className="lg:hidden border-t py-4 max-h-[70vh] overflow-y-auto">
            <nav className="flex flex-col gap-1">
              {/* Shop by Material */}
              <div className="px-3 py-2">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Shop by Material</span>
              </div>
              <div className="grid grid-cols-2 gap-1 px-2 mb-2">
                {categories.material.map((item) => (
                  <Link
                    key={item}
                    href={`/catalog?material=${item.toLowerCase()}`}
                    data-testid={`link-material-mobile-${item.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Button variant="ghost" size="sm" className="w-full justify-start text-sm h-10 touch-manipulation">
                      {item}
                    </Button>
                  </Link>
                ))}
              </div>

              {/* Shop by Room */}
              <div className="px-3 py-2">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Shop by Room</span>
              </div>
              <div className="grid grid-cols-2 gap-1 px-2 mb-2">
                {categories.room.map((item) => (
                  <Link
                    key={item}
                    href={`/catalog?room=${item.toLowerCase()}`}
                    data-testid={`link-room-mobile-${item.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Button variant="ghost" size="sm" className="w-full justify-start text-sm h-10 touch-manipulation">
                      {item}
                    </Button>
                  </Link>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t my-2" />

              {/* Main Links */}
              <Link href="/catalog" data-testid="link-catalog-mobile" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start h-12 touch-manipulation">All Collections</Button>
              </Link>
              <Link href="/about" data-testid="link-about-mobile" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start h-12 touch-manipulation">About</Button>
              </Link>
              <Link href="/contact" data-testid="link-contact-mobile" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start h-12 touch-manipulation">Contact</Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
