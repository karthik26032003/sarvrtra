interface LogoProps {
  className?: string;
  showText?: boolean;
}

// Custom Om-inspired SVG for SARVARTRA
function SarvartraIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer decorative ring */}
      <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="0.3" opacity="0.2" />

      {/* Lotus base */}
      <path
        d="M24 38 C20 34 16 32 14 30 C16 30 19 31 24 34 C29 31 32 30 34 30 C32 32 28 34 24 38Z"
        fill="currentColor"
        opacity="0.6"
      />

      {/* Central flame/diya */}
      <path
        d="M24 12 C22 16 20 20 20 24 C20 28 22 30 24 30 C26 30 28 28 28 24 C28 20 26 16 24 12Z"
        fill="currentColor"
        opacity="0.9"
      />

      {/* Inner glow */}
      <ellipse cx="24" cy="22" rx="2" ry="4" fill="currentColor" opacity="0.4" />

      {/* Decorative dots */}
      <circle cx="16" cy="24" r="1.5" fill="currentColor" opacity="0.5" />
      <circle cx="32" cy="24" r="1.5" fill="currentColor" opacity="0.5" />
      <circle cx="24" cy="16" r="1" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

export default function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative">
        <SarvartraIcon className="h-10 w-10 text-primary" />
        {/* Subtle glow effect */}
        <div className="absolute inset-0 h-10 w-10 bg-primary/20 blur-xl rounded-full -z-10" />
      </div>
      {showText && (
        <div className="flex flex-col leading-none">
          <span className="font-serif text-2xl font-bold tracking-wider text-foreground bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-800 dark:from-amber-400 dark:via-yellow-300 dark:to-amber-500 bg-clip-text text-transparent">
            SARVRTRA
          </span>
          <span className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase mt-0.5">
            Brass & Wood Artistry
          </span>
        </div>
      )}
    </div>
  );
}
