export default function FloatingDecor() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      <svg className="absolute top-10 left-10 w-64 h-64 text-primary/20 animate-float" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>

      <svg className="absolute top-1/4 right-20 w-48 h-48 text-accent/25 animate-float-slow" viewBox="0 0 200 200">
        <path d="M100,20 L120,80 L180,80 L130,120 L150,180 L100,140 L50,180 L70,120 L20,80 L80,80 Z" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>

      <svg className="absolute bottom-1/4 left-1/4 w-56 h-56 text-primary/15 animate-float-reverse" viewBox="0 0 200 200">
        <rect x="40" y="40" width="120" height="120" fill="none" stroke="currentColor" strokeWidth="2" rx="8" transform="rotate(45 100 100)" />
        <rect x="60" y="60" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="1" rx="4" transform="rotate(45 100 100)" />
      </svg>

      <svg className="absolute top-1/2 left-1/3 w-40 h-40 text-accent/20 animate-float" style={{ animationDelay: '1s' }} viewBox="0 0 200 200">
        <polygon points="100,20 180,180 20,180" fill="none" stroke="currentColor" strokeWidth="2" />
        <polygon points="100,50 150,150 50,150" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>

      <svg className="absolute bottom-20 right-1/4 w-52 h-52 text-primary/20 animate-float-slow" style={{ animationDelay: '2s' }} viewBox="0 0 200 200">
        <path d="M100,30 Q130,50 140,80 T150,130 Q140,160 100,170 Q60,160 50,130 T60,80 Q70,50 100,30 Z" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>

      <svg className="absolute top-3/4 right-1/3 w-44 h-44 text-accent/15 animate-float-reverse" style={{ animationDelay: '1.5s' }} viewBox="0 0 200 200">
        <line x1="40" y1="100" x2="160" y2="100" stroke="currentColor" strokeWidth="2" />
        <line x1="100" y1="40" x2="100" y2="160" stroke="currentColor" strokeWidth="2" />
        <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>

      <div className="absolute top-1/3 left-1/2 w-72 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-float-slow" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-1 bg-gradient-to-r from-transparent via-accent/20 to-transparent animate-float-reverse" style={{ animationDelay: '3s' }} />
      <div className="absolute top-2/3 left-1/4 w-56 h-1 bg-gradient-to-r from-transparent via-primary/15 to-transparent animate-float" style={{ animationDelay: '2.5s' }} />
    </div>
  );
}
