/**
 * Decorative hand-drawn Japanese food sketches used as the page-banner background.
 * All strokes use currentColor so the parent controls the tint (we use --sketch).
 */
export function SketchSushi({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden>
      <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        {/* nigiri base (rice) */}
        <path d="M40 130 Q100 100 160 130 Q160 150 100 155 Q40 150 40 130 Z" />
        {/* fish slice on top */}
        <path d="M48 122 Q100 92 152 122 Q150 132 100 134 Q50 132 48 122 Z" />
        <path d="M70 118 Q100 110 130 118" />
        <path d="M85 115 Q100 109 115 115" />
        {/* small rice grains */}
        <ellipse cx="70" cy="145" rx="3" ry="2" />
        <ellipse cx="100" cy="148" rx="3" ry="2" />
        <ellipse cx="130" cy="145" rx="3" ry="2" />
        {/* maki roll on the side */}
        <circle cx="40" cy="60" r="22" />
        <circle cx="40" cy="60" r="14" />
        <circle cx="40" cy="60" r="6" />
        {/* chopstick lines */}
        <path d="M150 30 L180 60" />
        <path d="M158 28 L188 58" />
      </g>
    </svg>
  );
}

export function SketchBowl({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 200" fill="none" className={className} aria-hidden>
      <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        {/* steam */}
        <path d="M70 30 Q60 50 72 70 Q84 90 72 110" />
        <path d="M110 25 Q100 50 112 75 Q124 95 112 115" />
        <path d="M150 30 Q140 55 152 80 Q164 100 152 120" />
        {/* bowl */}
        <path d="M30 120 Q30 175 110 178 Q190 175 190 120 Z" />
        <path d="M40 130 Q40 160 110 162 Q180 160 180 130" />
        {/* noodles inside */}
        <path d="M60 122 Q90 115 120 124 Q150 130 175 120" />
        <path d="M55 128 Q95 124 135 132 Q160 134 178 126" />
        {/* chopsticks crossing */}
        <path d="M30 90 L200 50" />
        <path d="M32 96 L202 56" />
      </g>
    </svg>
  );
}

export function SketchFish({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 140" fill="none" className={className} aria-hidden>
      <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 70 Q60 20 130 30 Q175 35 200 70 Q175 105 130 110 Q60 120 20 70 Z" />
        <path d="M200 70 L220 50 L215 75 L220 95 Z" />
        <circle cx="55" cy="62" r="3" />
        <path d="M75 80 Q110 60 150 78" />
        <path d="M85 92 Q120 78 160 90" />
        {/* gill */}
        <path d="M65 50 Q70 70 65 90" />
      </g>
    </svg>
  );
}

export function SketchSakura({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden>
      <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        {/* branch */}
        <path d="M10 180 Q60 130 100 110 Q150 90 195 50" />
        <path d="M70 130 Q75 110 90 100" />
        <path d="M130 90 Q140 75 155 70" />
        {/* sakura flowers (5 petals each) */}
        {[
          [60, 150],
          [100, 110],
          [140, 85],
          [175, 55],
          [40, 170],
        ].map(([cx, cy], i) => (
          <g key={i} transform={`translate(${cx} ${cy})`}>
            {Array.from({ length: 5 }).map((_, k) => {
              const a = (k * 72 * Math.PI) / 180;
              const x = Math.cos(a) * 8;
              const y = Math.sin(a) * 8;
              return (
                <path
                  key={k}
                  d={`M0 0 Q${x * 0.6} ${y * 0.6 - 4} ${x} ${y} Q${x * 0.6 + 3} ${y * 0.6 + 3} 0 0`}
                />
              );
            })}
            <circle r="1.5" />
          </g>
        ))}
      </g>
    </svg>
  );
}

export function SketchChopsticks({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden>
      <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 180 L180 30" />
        <path d="M28 184 L188 34" />
        {/* rice cloud at the tip */}
        <path d="M165 35 Q180 30 188 38 Q195 50 185 60 Q175 70 162 60 Q155 50 165 35 Z" />
        <ellipse cx="175" cy="48" rx="2" ry="1.5" />
        <ellipse cx="170" cy="55" rx="2" ry="1.5" />
      </g>
    </svg>
  );
}

/**
 * Composed banner background — drop into the cream hero on every page.
 * absolutely positioned, decorative only.
 */
export function PageBannerSketches() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden text-sketch/70"
    >
      <SketchSushi className="absolute -left-6 top-8 h-40 w-40 opacity-70" />
      <SketchFish className="absolute right-6 top-4 h-32 w-48 opacity-60" />
      <SketchSakura className="absolute -right-10 bottom-0 h-56 w-56 opacity-75" />
      <SketchBowl className="absolute left-1/3 -bottom-6 h-44 w-44 opacity-50" />
      <SketchChopsticks className="absolute left-2/3 top-2 h-28 w-28 opacity-50" />
    </div>
  );
}
