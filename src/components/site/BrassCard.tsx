import { type ReactNode } from "react";
import { FloralCorner } from "../ornaments";

export function BrassCard({
  children,
  className,
  ornate = true,
}: {
  children: ReactNode;
  className?: string;
  ornate?: boolean;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-[color:var(--gold)]/25 bg-[color:var(--royal-soft)]/40 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[color:var(--saffron)]/60 hover:glow-warm ${className ?? ""}`}
      style={{
        backgroundImage:
          "radial-gradient(120% 80% at 100% 0%, color-mix(in oklab, var(--saffron) 14%, transparent), transparent 60%)",
      }}
    >
      {ornate && (
        <>
          <FloralCorner className="pointer-events-none absolute -left-1 -top-1 h-9 w-9 text-[color:var(--gold)]/45" />
          <FloralCorner
            className="pointer-events-none absolute -right-1 -top-1 h-9 w-9 text-[color:var(--gold)]/45"
            flip="x"
          />
        </>
      )}
      {children}
    </div>
  );
}