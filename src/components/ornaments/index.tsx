import type { SVGProps } from "react";

/** Radiating sunburst rays — matches Instagram post backgrounds */
export function Sunburst({ className, ...props }: SVGProps<SVGSVGElement>) {
  const rays = Array.from({ length: 36 });
  return (
    <svg
      viewBox="-100 -100 200 200"
      className={className}
      aria-hidden
      {...props}
    >
      {rays.map((_, i) => {
        const angle = (i * 360) / rays.length;
        return (
          <polygon
            key={i}
            points="-2,0 2,0 0,-110"
            transform={`rotate(${angle})`}
            fill="currentColor"
            opacity={i % 2 ? 0.18 : 0.32}
          />
        );
      })}
    </svg>
  );
}

/** Dotted rectangular frame — matches IG post borders */
export function DottedFrame({
  className,
  radius = 18,
  ...props
}: SVGProps<SVGSVGElement> & { radius?: number }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden
      {...props}
    >
      <rect
        x="2"
        y="2"
        width="96"
        height="96"
        rx={radius / 5}
        fill="none"
        stroke="currentColor"
        strokeWidth="0.4"
        strokeDasharray="0.6 1.4"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/** Floral corner motif — Punjabi-inspired scrollwork */
export function FloralCorner({
  className,
  flip,
  ...props
}: SVGProps<SVGSVGElement> & { flip?: "x" | "y" | "xy" }) {
  const t =
    flip === "x"
      ? "scale(-1,1) translate(-100,0)"
      : flip === "y"
        ? "scale(1,-1) translate(0,-100)"
        : flip === "xy"
          ? "scale(-1,-1) translate(-100,-100)"
          : undefined;
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden {...props}>
      <g
        transform={t}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      >
        <path d="M2 2 L36 2" />
        <path d="M2 2 L2 36" />
        <path d="M8 8 C 22 10, 30 18, 32 32" />
        <path d="M14 6 C 22 6, 28 12, 28 20" />
        <path d="M6 14 C 6 22, 12 28, 20 28" />
        <circle cx="32" cy="32" r="2" fill="currentColor" />
        <circle cx="28" cy="20" r="1.4" fill="currentColor" />
        <circle cx="20" cy="28" r="1.4" fill="currentColor" />
        <path d="M36 16 q 6 -2 10 4 q -6 2 -10 -4 Z" fill="currentColor" opacity="0.9" />
        <path d="M16 36 q -2 6 4 10 q 2 -6 -4 -10 Z" fill="currentColor" opacity="0.9" />
      </g>
    </svg>
  );
}

/** Decorative jharokha-style divider with star and dotted lines */
export function JharokhaDivider({
  className,
  label,
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className ?? ""}`}>
      <span className="dotted-rule max-w-32" aria-hidden />
      <RoyalStar className="h-5 w-5 text-[color:var(--saffron)]" />
      {label && (
        <span className="font-slab text-xs uppercase tracking-[0.35em] text-[color:var(--gold)]">
          {label}
        </span>
      )}
      <RoyalStar className="h-5 w-5 text-[color:var(--saffron)]" />
      <span className="dotted-rule max-w-32" aria-hidden />
    </div>
  );
}

/** Small 8-point royal star — used as accents */
export function RoyalStar({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...props}>
      <path
        d="M12 2 L14 9 L21 11 L14 13 L12 21 L10 13 L3 11 L10 9 Z"
        fill="currentColor"
      />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

/** Subtle repeating mandala texture overlay */
export function MandalaTexture({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      aria-hidden
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern
          id="mandala-pat"
          x="0"
          y="0"
          width="120"
          height="120"
          patternUnits="userSpaceOnUse"
        >
          <g fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.45">
            <circle cx="60" cy="60" r="22" />
            <circle cx="60" cy="60" r="10" />
            {Array.from({ length: 8 }).map((_, i) => (
              <line
                key={i}
                x1="60"
                y1="60"
                x2="60"
                y2="36"
                transform={`rotate(${i * 45} 60 60)`}
              />
            ))}
            <circle cx="60" cy="60" r="1.8" fill="currentColor" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#mandala-pat)" />
    </svg>
  );
}

/** Royal badge — used for "Chef Recommended", "Popular" etc */
export function RoyalBadge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full bg-saffron-grad px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[color:var(--royal-deep)] glow-saffron ${className ?? ""}`}
    >
      <RoyalStar className="h-3 w-3" />
      {children}
    </span>
  );
}

/** Corner-decorated frame wrapper */
export function OrnateFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative ${className ?? ""}`}>
      <FloralCorner className="absolute left-3 top-3 h-10 w-10 text-[color:var(--gold)]" />
      <FloralCorner
        className="absolute right-3 top-3 h-10 w-10 text-[color:var(--gold)]"
        flip="x"
      />
      <FloralCorner
        className="absolute bottom-3 left-3 h-10 w-10 text-[color:var(--gold)]"
        flip="y"
      />
      <FloralCorner
        className="absolute bottom-3 right-3 h-10 w-10 text-[color:var(--gold)]"
        flip="xy"
      />
      {children}
    </div>
  );
}