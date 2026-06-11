export function BrandLogo({ className = "h-7 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Bowl + chopsticks mark in primary red */}
      <svg viewBox="0 0 40 40" className="h-7 w-7" aria-hidden>
        <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <path d="M5 22 Q5 33 20 34 Q35 33 35 22 Z" fill="currentColor" />
          <path d="M9 22 Q9 30 20 31 Q31 30 31 22" stroke="white" />
          <path d="M12 6 L30 22" />
          <path d="M16 4 L34 20" />
        </g>
      </svg>
      <span className="text-xl font-extrabold tracking-tight text-ink">
        Comidas<span className="text-primary">Japonesas</span>
      </span>
    </div>
  );
}
