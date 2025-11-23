import { Flower2 } from "lucide-react";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <Flower2 className="h-8 w-8 text-primary" strokeWidth={1.5} />
      </div>
      {showText && (
        <div className="flex flex-col leading-none">
          <span className="font-serif text-xl font-semibold tracking-tight text-foreground">
            Dharma Décor
          </span>
          <span className="text-xs text-muted-foreground">Sacred Craftsmanship</span>
        </div>
      )}
    </div>
  );
}
